import ErrorImage from "../assets/images/error.svg?react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="max-w-md container flex flex-col space-y-3 justify-center items-center">
          <ErrorImage />
          <h1 className="text-gray-500 font-bold text-sm text-center">
            Oops! Something went wrong. Our team is on it and working to fix the
            issue. Thank you for your patience.
          </h1>
          <Button onClick={() => backToHome()}>Back to Home</Button>
        </div>
      </div>
    </>
  );
}
