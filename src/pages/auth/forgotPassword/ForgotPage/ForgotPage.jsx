import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useForgotPassword from "../../../../api/auth/ForgotPassword/ForgotPassword";
import { RxCross2 } from "react-icons/rx";

const ForgotPage = ({ setId }) => {
  const navigate = useNavigate();
  const { data, handleResetPasswordEmail, handleOTPVerification } =
    useForgotPassword();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePassword = () => {
    setLoading(true);
    handleResetPasswordEmail(email, setError);
    setLoading(false);
  };

  useEffect(() => {
    if (data.userPresent === true) {
      setToggle((prev) => !prev);
    }
  }, [data]);

  const handleOtp = async () => {
    setLoading(true);
    try {
      const res = await handleOTPVerification(otp);
      if (res.message === "OTP varify successfully!!") {
        setToggle((prev) => !prev);
        setId(res.id);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Forget Password
        </h2>
        <p className="text-center mt-0 mb-[40px] text-gray-500 text-xl">
          Enter your registered email to receive a password reset link
        </p>
        <form
          className="space-y-2 flex flex-col items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[80%] px-4 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg outline-none"
            autoComplete="false"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />
          {error && (
            <p className="w-[80%] text-[#ff3333] justify-self-start">{error}</p>
          )}
          <div className="w-[80%] mt-0">
            <div className="mb-[40px] flex gap-1 justify-end text-right text-gray-600 text-lg">
              <p>Go back to</p>
              <p
                className="text-violet-700 font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div
              className="w-[65%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700 flex items-center justify-center"
              onClick={handlePassword}
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                <>
                  <p className="text-lg">Reset Password</p>
                  <AiOutlineArrowRight className="mx-3" />
                </>
              )}
            </div>
          </div>
        </form>

        <p className="my-4 text-center text-gray-600 text-lg">
          Don't have an account?
          <span
            className="text-violet-700 font-semibold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </>

      {toggle && (
        <div className="absolute inset-0 flex justify-center items-center bg-[#b4b4f632] backdrop-blur-sm z-10">
          <div className="relative bg-white w-fit h-fit px-20 py-10 flex flex-col justify-center items-center rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
              OTP Verification
            </h2>
            <p className="text-center text-gray-500 text-l">
              Enter your OTP to verify your email
            </p>

            <input
              type="text"
              placeholder="Enter your OTP"
              className="w-full text-center px-4 py-3 mt-4 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg outline-none"
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value);
                setError("");
              }}
            />
            {error && (
              <p className="w-full mt-2 text-[#ff3333] justify-self-start">
                {error}
              </p>
            )}

            <button
              className="py-2 px-10 w-fit bg-violet-700 text-white font-bold rounded-lg mt-6 hover:bg-violet-800"
              onClick={handleOtp}
            >
              {loading ? <span className="loader"></span> : <p>Verify</p>}
            </button>

            <RxCross2
              size={24}
              className="absolute top-4 right-4"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPage;
