import React, { useState } from 'react'
import useForgotPassword from '../../../../api/auth/ForgotPassword/ForgotPassword';
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const PasswordChange = ({ id, setResetSuccess }) => {
    const [error, setError] = useState("");

    const { handleNewPassword } = useForgotPassword();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    // Password Toggle for type= "text or password"
    const [isToggle, setIsToggle] = useState({
        password: true,
        confirmPassword: true,
    });
    // Password Toggle Function
    const toggleNewPasswordVisibility = (field) => {
        setIsToggle((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    // Input Handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError("");
    };

    // Password Check and password change api call
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await handleNewPassword(formData, id);
            if (res === 201) {
                setResetSuccess(true);
            }
        } catch (error) {
            console.log(error);
            setError("Please Try Again")
        }
    };


    return (
        <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
                Reset Password
            </h2>
            <p className="text-center mt-0 mb-[75px] text-gray-500 text-xl">
                Set a new password to access your account
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* New Password Field */}
                <div className="w-full px-6 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg flex ">
                    <input
                        type={isToggle.password ? "text" : "password"}
                        placeholder="Enter your password"
                        name="password"
                        className="w-full outline-none bg-transparent"
                        value={formData.Password}
                        onChange={handleInputChange}
                    />
                    {isToggle.password ? (
                        <AiFillEye size={24} onClick={() => toggleNewPasswordVisibility("password")} className='cursor-pointer'/>
                    ) : (
                        <AiFillEyeInvisible size={24} onClick={() => toggleNewPasswordVisibility("password")} className='cursor-pointer'/>
                    )}

                </div>

                {/* Confirm New Password Field */}
                <div className="w-full px-6 py-3 border border-gray-400 bg-gray-100 text-md text-gray-500 rounded-lg flex ">
                    <input
                        type={isToggle.confirmPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        name="confirmPassword"
                        className="w-full outline-none bg-transparent"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    {isToggle.confirmPassword ? (
                        <AiFillEye size={24} onClick={() => toggleNewPasswordVisibility("confirmPassword")} />
                    ) : (
                        <AiFillEyeInvisible size={24} onClick={() => toggleNewPasswordVisibility("confirmPassword")} />
                    )}
                </div>

                {/* Error Message */}
                {error && (
                    <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-[65%] py-3 px-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-700 flex items-center justify-center"
                    >
                        <span className="text-lg">Reset Password</span>
                        <AiOutlineArrowRight className="mx-3" />
                    </button>
                </div>
            </form>

            <div className="mt-0">
                <div className="mt-[70px] text-center flex gap-1 text-gray-600 text-lg">
                    <p>Go back to</p>
                    <NavLink
                        to="/login"
                        className="text-violet-700 hover:underline font-semibold"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default PasswordChange
