// Import necessary dependencies
import { useState } from "react";
import axios from "../myAxios/services";
import { useSnackbar } from "notistack";
import { AxiosResponse, CancelTokenSource, AxiosError } from "axios";
import errorHandler from "../helpers/errorHandler";

// Define the methods
export const GET = "get";
export const POST = "post";
export const PATCH = "patch";
export const DELETE = "delete";
export const PUT = "put";
export const ARRAY_METHODE = [POST, PATCH, DELETE, PUT];

// Define interface for the arguments of the call method
export interface CallArgs {
  source?: CancelTokenSource;
  params?: object;
  body?: object;
  moreOptions?: object;
}

// useFetch custom hook for making api requests
const useFetch = (
  method: string,
  path: string,
  { showErrors = true, showSuccess = false } = {}
) => {
  // Hook states
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<Error>();
  const [performing, setPerforming] = useState(false);
  // Snackbar instance
  const { enqueueSnackbar } = useSnackbar();

  // Method for making the api call
  const call = async ({ source, params, body, moreOptions }: CallArgs) => {
    try {
      setPerforming(true);
      const response = await _call(
        path,
        params,
        body,
        method,
        source,
        moreOptions
      );

      setResponse(response);

      // Success messages
      if (ARRAY_METHODE.includes(method) && showSuccess)
        enqueueSnackbar("success" as string, { variant: "success" });
      if (response?.status === 204 && showErrors) {
        enqueueSnackbar("No Result" as string, { variant: "error" });
      }

      return response;
    } catch (e) {
      // Error handling
      if (e instanceof AxiosError) {
        setError(e);
        showErrors && handleError(path, e);
        throw e;
      } else {
        const defaultError = new Error("Something Went Wrong" || "");
        setError(defaultError);
        showErrors &&
          enqueueSnackbar(defaultError.message, { variant: "error" });
        throw defaultError;
      }
    } finally {
      // Cleanup
      setPerforming(false);
    }
  };

  // Return data
  return {
    data: response?.data?.data,
    response,
    error,
    call,
    performing,
  };

  // Private method for making the request
  async function _call(
    path: string,
    params: object | undefined,
    body: object | undefined,
    method: string,
    source: CancelTokenSource | undefined,
    options: object | undefined
  ) {
    // Switch case to determine the type of request
    switch (true) {
      case [POST, PUT, PATCH].includes(method):
        return axios.request({
          method,
          url: path,
          cancelToken: source?.token,
          data: body,
          params,
          ...options,
        });
      case [GET, DELETE].includes(method):
        return axios.request({
          method,
          url: path,
          cancelToken: source?.token,
          params,
          ...options,
        });
      default:
        throw new Error(`Method ${method} is not supported`);
    }
  }

  // Function to handle the errors
  function handleError(path: string, e: AxiosError) {
    const code = e.response?.status || 0;
    const error = errorHandler[path][code] || "Something Went Wrong";
    enqueueSnackbar(error, { variant: "error" });
  }
};

export default useFetch;
