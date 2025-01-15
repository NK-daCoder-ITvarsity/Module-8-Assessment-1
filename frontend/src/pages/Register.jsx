import React from 'react'
import { Link } from 'react-router-dom'
import LoginRegistration from '../Components/Loginregistration';

const Register = () => {
  return (
    <>
        <LoginRegistration formHeading="Registration" account="Already Have An Account" link="/Module-8-Assessment-1/login"/>
    </>
  )
}

export default Register;