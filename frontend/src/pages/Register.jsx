import React from 'react';
import { useAuth } from '../context/AuthContext';
import LoginRegistration from '../Components/Loginregistration';


const Register = () => {
    const { registerUser, signInWithGoogle } = useAuth();

    const handleRegistration = async (formData) => {
        if (formData) {
          await registerUser(formData.userEmail, formData.userPassword);
          alert("Registration successful!");
        }
        else {
          alert("Registration Incomplete!");
        }
    };

    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
        alert("Sign In Sucessfull");
      } catch (error) {
        alert("Sign In Failed");
        console.log(error);
      }
    }

    return (
        <LoginRegistration
            formHeading="Registration"
            account="Already Have An Account"
            link="/Module-8-Assessment-1/login"
            onSubmit={handleRegistration}
            providerSignInGoogle={handleGoogleSignIn}
        />
    );
};

export default Register;
