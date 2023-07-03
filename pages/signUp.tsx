import dynamic from "next/dynamic";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center capitalize">
      sign up page
    </div>
  );
};

export default dynamic(() => Promise.resolve(SignUpPage), { ssr: false });
