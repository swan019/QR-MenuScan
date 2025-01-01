"use client";
import React from 'react'
import login from "../../public/Login.svg";
import Image from 'next/image';
import { useState } from 'react';

import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import Link from "next/link";

import Loding from "@/components/Loding";

import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '@/lib/features/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [loading, setLoading] = useState(false);

    const router = useRouter(); // Next.js router for redirection

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();



        const dataToSend = {
            email: formData.email,
            password: formData.password,
        };

        setLoading(true);
        console.log(dataToSend);

        try {
            // Use the axiosInstance for the API request
            const response = await axiosInstance.post("/store/login", dataToSend);
            console.log(response.data);
            if (response.status === 201) {

                console.log(response);
                console.log("response.data.store : ",response?.data?.store);
    
                dispatch(
                    setUser({
                        id: response.data.store._id,
                        name: response.data.store.name,
                        storeName: response.data.store.storeName,
                        email: response.data.store.email,
                        mobile: response.data.store.mobile,
                        active: response.data.store.active,
                        qrCode: response.data.store.qrCode,
                    })
                );
    
    
                router.push(`/dashbord/${response.data.store._id}`);
            } else {
                alert(response.data.message || "Something went wrong.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.", error.message);
        }

        setLoading(false);
    };

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='mt-5'>
            <div className='w-full mb-10  mx-auto flex items-center justify-center'>
                <Image src={login} height={320}
                    loading="lazy"
                    width={320} alt={""} />
            </div>

            {loading ? (
                <Loding />
            ) : (

                <form className="max-w-md mx-auto my-10 px-4">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="floatiemailng_email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="password"
                            value={formData.password}
                            onChange={handleChange}
                            id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            )}

        </div>
    )
}

export default Login