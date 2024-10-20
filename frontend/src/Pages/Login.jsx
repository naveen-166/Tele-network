import React, { useState } from 'react';
import rimg from "../assets/react.svg";  // Your company logo
import tickIcon from '../assets/tick-icon.svg';  // Your tick SVG (replace with actual path)

function Login() {
    // State to track input value
    const [email, setEmail] = useState('');

    return (
        <div className='h-screen flex'>
            {/* Left Section with the Image */}
            <div className='w-1/3 relative'>
                <img 
                    src="https://via.placeholder.com/600x800"  // Replace this with the actual image source
                    alt="Side Image" 
                    className='object-cover w-full h-full'
                />
            </div>

            {/* Right Section with the Login Form */}
            <div className='w-2/3 bg-white flex flex-col items-center justify-center p-8 text-black'>
                {/* Logo and Title */}
                <div className='flex items-center mb-10 mr-52'>
                    <img src={rimg} alt="Company Logo" className='h-12 mr-4' />
                    <div className='border-l border-gray-300 h-12 mx-4'></div> {/* Vertical Line */}
                    <h1 className='text-xl font-semibold'>Company name</h1>  {/* Update with the real name */}
                </div>

                {/* Login Form */}
                <div className='w-full max-w-md'>
                    <h2 className='text-xl font-prociono font-semibold mb-2'>Log in</h2>
                    <div className='border-t-2 border-blue-500 w-14 mb-7'></div>

                    {/* Email or Username Input */}
                    <div className='mb-6 relative'>
                        <label className='block text-sm font-serif mb-1'>Email or username</label>
                        <input
                            type="email"
                            placeholder="Email or username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}  
                            className="w-full p-2 border border-gray-300 font-arima text-sm rounded-md"
                        />
                        {email && (
                            <img 
                                src={tickIcon} 
                                alt="Valid"
                                className='absolute right-3 top-8 w-5 h-5'
                            />
                        )}
                    </div>

                    {/* Password Input */}
                    <div className='mb-6'>
                        <label className='block text-sm font-serif mb-1 '>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 font-arima text-sm border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Log In Button */}
                    <button className="w-full bg-gray-500 text-white py-2 rounded-md mb-4">Log In</button>

                    {/* Links */}
                    <div className='flex justify-between text-sm'>
                        <a href="#" className='text-black text-center hover:underline'>Forgot your password?</a>
                        <a href="register" className='text-black hover:underline'>Not User? Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
