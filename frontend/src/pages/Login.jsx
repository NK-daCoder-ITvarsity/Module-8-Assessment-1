import React from 'react';
import { useAuth } from '../context/AuthContext';
import LoginRegistration from '../Components/Loginregistration';

const Login = () => {
    const { loginUser } = useAuth();

    const handleLogin = async (formData) => {
      if (formData) {
        await loginUser(formData.userEmail, formData.userPassword);
        alert("Login successful!");
      }
      else {
        alert("Login Unsucessfull!");
      } 
    };

    return (
        <LoginRegistration
            formHeading="Login"
            account="Don't Have An Account"
            link="/Module-8-Assessment-1/registration"
            onSubmit={handleLogin}
        />
    );
};

export default Login;
