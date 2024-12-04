import ResetPasswordImage from "../../../assets/images/resetPasswordImage.png";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useSignIn } from "../../../hooks/auth/useSignIn";

const ResetPassword = () => {
    const { forgotPassword, password } = useSignIn();
    // validations

    const validation = Yup.object({
        email: Yup.string().email('Invalid email address')
            .required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validation,

        onSubmit: (values) => {
            if (values) {
                forgotPassword(values);
                sessionStorage.setItem("email", values.email);

                // Set a timeout to remove the email after 5 minutes (300000 milliseconds)
                setTimeout(() => {
                    sessionStorage.removeItem("email");
                    console.log("Email removed from sessionStorage after 5 minutes");
                }, 300000); // 5 minutes
            }
        },
    });

    return (
        <div className="w-full min-h-screen grid grid-cols-2">
            <div className="bg-[#E5E4E0] flex flex-col items-center px-4">
                <h1 className="font-bold text-3xl mt-[100px]">Reset Password</h1>
                <p className="w-[75%] my-[40px] text-[20px] text-center">
                    Enter your email to receive a 6-digit verification code. Check your inbox and enter the code below to proceed.
                </p>

                {/* Wrapping inputs in a form element for proper form submission */}
                <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
                    <div className="my-[40px] w-full flex flex-col">
                        <label htmlFor="email" className="text-[14px] text-gray-500 w-full mx-[18%]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            className="rounded-full h-[60px] bg-[#E1D4CB] placeholder-gray-800 px-4 w-[70%] mx-auto"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <button
                        type="submit" // Set type to "submit" for form submission
                        className="rounded-full bg-[#E5C1A9] px-8 py-3"
                    >
                        Send OTP
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center bg-[#E9EBF7]">
                <div className="h-[600px] flex justify-center items-center">
                    <img
                        src={ResetPasswordImage}
                        className="object-contain h-full w-full"
                        alt="Reset Password"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
