import React from 'react'
import { Link } from 'react-router-dom'
import { FaApple, FaGoogle } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";


const LoginRegistration = ({ formHeading, account, link }) => {
    const signUpMethods = [
        {
            signUpIcon: <FaGoogle />,
            signUpText: "Google",
            signUpMethod: () => alert("Not yet Implemented") // Use a function here
        },
        {
            signUpIcon: <FaApple />,
            signUpText: "Apple",
            signUpMethod: () => alert("Not yet Implemented")
        },
        {
            signUpIcon: <IoLogoMicrosoft />,
            signUpText: "Microsoft",
            signUpMethod: () => alert("Not yet Implemented")
        }
    ];
    return (
        <form action="" className="bg-white relative rounded-md p-6 md:p-9 shadow-md flex flex-col gap-3 items-left justify-center h-3/4 ">
                <section className="flex gap-2 items-center justify-start py-4">
                    <h1 className="font-semibold order-2 !text-4xl ">{formHeading}</h1>
                    <span className="!text-4xl  order-1 material-symbols-rounded p-1 rounded-lg text-white bg-gradient-to-br from-blue-400 to-blue-800">
                        person
                    </span>
                </section>
                <fieldset className="flex w-full border rounded-md items-center h-10 transition-transform hover:scale-105 active:scale-105">
                    <label htmlFor="user-name" className="cursor-pointer border-r px-3 h-full flex items-center">
                        <span className="material-symbols-rounded text-gray-400">
                            face
                        </span>
                    </label>
                    <input required type="text" id="user-name" placeholder="Test User" className="w-full h-full px-2"/>
                </fieldset>
                <fieldset className="flex w-full border rounded-md items-center h-10 transition-transform hover:scale-105 active:scale-105">
                    <label htmlFor="user-email" className="text-gray-400 cursor-pointer border-r px-3 h-full flex items-center">
                        <span className="material-symbols-rounded">
                            badge
                        </span>
                    </label>
                    <input required type="email" id="user-email" placeholder="test123@gmail.com" className="w-full h-full px-2"/>
                </fieldset>
                <fieldset className="flex w-full border rounded-md items-center h-10 transition-transform hover:scale-105 active:scale-105">
                    <label htmlFor="user-password" className="text-gray-400 cursor-pointer border-r px-3 h-full flex items-center">
                        <span className="material-symbols-rounded">
                            admin_panel_settings
                        </span>
                    </label>
                    <input required type="password" id="user-password" placeholder="Password...." className="w-full h-full px-2"/>
                </fieldset>
                <fieldset className="flex items-center gap-2 mt-3">
                    <label htmlFor="checkbox" className="order-2 text-sm md:text-base">I acknowledge and accept the <Link to="" className="text-blue-600 underline transition-transform transform hover:scale-105 font-semibold active:scale-95">Terms and Agreement</Link></label>
                    <input type="checkbox" className="order-1" id="checkbox" required/>
                </fieldset>

                <button type="submit" className="flex items-center transition-transform active:scale-95 text-blue text-left font-semibold text-blue-600 w-[15rem]">
                    Submit {formHeading}
                    <span class="material-symbols-rounded transform scale-75">
                        north_east
                    </span>
                </button>

                <fieldset >
                    <ul className="mt-5 flex gap-2 justify-start items-center">
                        {
                            signUpMethods.map((signUp, index) => (
                                <li key={index}>
                                    <button onClick={signUp.signUpMethod} type="button" className="w-full flex gap-2 justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-md px-3 py-4  text-white transition-transform hover:scale-105 active:scale-95">
                                        <span>{signUp.signUpIcon}</span>
                                        <span className="font-semibold">{signUp.signUpText}</span>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </fieldset>
                <Link to={link} className="text-sm active:scale-95 hover:underline mt-3 text-right text-blue-600 flex items-center justify-end">
                    {account}
                    <span className="material-symbols-rounded flex items-center transform scale-50">
                        arrow_forward_ios
                    </span>
                </Link>
            
            </form>
    )
}

export default LoginRegistration