import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaGoogle } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";
import { useAuth } from '../context/AuthContext';

const LoginRegistration = ({ formHeading, account, link, onSubmit, providerSignInGoogle }) => {
    // state to set a message
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userPassword: '',
        acceptTerms: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            // onSubmit actually comes from the parameter
            await onSubmit(formData); // Call the specific action for registration or login
        } catch (error) {
            setMessage("An error occured");
            console.log(error)
        }
    };

    const signUpMethods = [
        {
            signUpIcon: <FaGoogle />,
            signUpText: "Google",
            signUpMethod: () => providerSignInGoogle(), // providerSignInGoogle is found in parameter
        },
    ];

    return (
        <form onSubmit={handleSubmit} className="bg-white relative rounded-md p-6 md:p-9 shadow-md flex flex-col gap-3 items-left justify-center  w-[95%] md:w-[75%] lg:w-[50%]">
            <section className="flex gap-2 items-center justify-start py-4">
                <h1 className="font-semibold order-2 !text-4xl ">{formHeading}</h1>
                <span className="!text-4xl  order-1 material-symbols-rounded p-1 rounded-lg text-white bg-gradient-to-br from-blue-400 to-blue-800">
                    person
                </span>
            </section>
            {
                formHeading === "Registration" && (
                    <fieldset className="py-2 flex w-full border rounded-md justify-center items-center h-10 transition-transform hover:scale-105 active:scale-105">
                        <label htmlFor="userName" className="cursor-pointer border-r px-3  h-full flex items-center">
                            <span className="material-symbols-rounded text-gray-400 leading-none">
                                face
                            </span>
                        </label>
                        <input
                            required
                            type="text"
                            id="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Test User"
                            className="w-full h-full px-2"
                        />
                    </fieldset>
                )
            }
            
            <fieldset className="py-2 flex w-full border rounded-md justify-center items-center h-10 transition-transform hover:scale-105 active:scale-105">
                <label htmlFor="userEmail" className="text-gray-400 cursor-pointer border-r px-3 h-full flex items-center">
                    <span className="material-symbols-rounded">
                        badge
                    </span>
                </label>
                <input
                    required
                    type="email"
                    id="userEmail"
                    value={formData.userEmail}
                    onChange={handleChange}
                    placeholder="test123@gmail.com"
                    className="w-full h-full px-2"
                />
            </fieldset>

            <fieldset className="py-2 flex w-full border rounded-md justify-center items-center h-10 transition-transform hover:scale-105 active:scale-105">
                <label htmlFor="userPassword" className="text-gray-400 cursor-pointer border-r px-3 h-full flex items-center">
                    <span className="material-symbols-rounded">
                        admin_panel_settings
                    </span>
                </label>
                <input
                    required
                    type="password"
                    id="userPassword"
                    value={formData.userPassword}
                    onChange={handleChange}
                    placeholder="Password...."
                    className="w-full h-full px-2"
                />
            </fieldset>
            {
                formHeading === "Registration" && (
                    <fieldset className="py-2 flex items-center gap-2 mt-3">
                        <label htmlFor="acceptTerms" className="order-2 text-sm md:text-base">
                            I acknowledge and accept the <Link to="" className="text-blue-600 underline transition-transform transform hover:scale-105 font-semibold active:scale-95">Terms and Agreement</Link>
                        </label>
                        <input
                            type="checkbox"
                            className="order-1"
                            id="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            required
                        />
                    </fieldset>
                )
            }

            <button type="submit" className="py-2 flex items-center transition-transform active:scale-95 text-blue text-left font-semibold text-blue-600 w-[15rem]">
                Submit {formHeading}
                <span className="material-symbols-rounded transform scale-75">
                    north_east
                </span>
            </button>

            <fieldset>
                <ul className="mt-5 flex gap-2 justify-start items-center">
                    {signUpMethods.map((signUp, index) => (
                        <li key={index}>
                            <button
                                onClick={signUp.signUpMethod}
                                type="button"
                                className="w-full flex gap-2 justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-md px-3 py-4  text-white transition-transform hover:scale-105 active:scale-95"
                            >
                                <span>{signUp.signUpIcon}</span>
                                <span className="font-semibold">Sign In Via {signUp.signUpText}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </fieldset>
            <Link
                to={link}
                className="font-semibold text-sm active:scale-95 hover:underline mt-3 text-right text-blue-600 flex items-center justify-end"
            >
                {account}
                <span className="material-symbols-rounded flex items-center transform scale-50">
                    arrow_forward_ios
                </span>
            </Link>
        </form>
    );
};

export default LoginRegistration;