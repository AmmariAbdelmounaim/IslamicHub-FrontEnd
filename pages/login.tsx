import dynamic from "next/dynamic";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center capitalize ">
      log in page
    </div>
  );
};

export default dynamic(() => Promise.resolve(LoginPage), { ssr: false });
