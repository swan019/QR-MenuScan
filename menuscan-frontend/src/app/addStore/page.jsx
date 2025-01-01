"use client";
import React, { useEffect, useState } from "react";
import login from "../../../public/Login.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import Link from "next/link";

import Loding from "@/components/Loding";

import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '@/lib/features/userSlice';



function page() {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Next.js router for redirection
    const user = useSelector((state) => state.user);

    useEffect(() => {
        console.log(user);
        
        if (user.active === true) {
            console.log("IN EFFECT LOGIN");
            
          router.push(`/dashbord/${user.id}`);
        }
      }, [user, router]);



    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
    });
    const [errors, setErrors] = useState({}); // To store form errors

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.includes("@")) newErrors.email = "Invalid email address.";
        if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match.";
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.company.trim()) newErrors.company = "Company is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const dataToSend = {
            email: formData.email,
            password: formData.password,
            name: `${formData.firstName} ${formData.lastName}`, // Combine first and last name
            mobile: formData.phone, // Map phone to mobile
            storeName: formData.company, // Map company to storeName
        };

        setLoading(true);

        try {
            // Use the axiosInstance for the API request
            const response = await axiosInstance.post("/store/register", dataToSend);
            console.log(response.data);
            if (response.status === 201) {


                dispatch(
                    setUser({
                        id: response.data.id,
                        name: response.data.name,
                        storeName: response.data.storeName,
                        email: response.data.email,
                        mobile: response.data.mobile,
                    })
                );


                router.push("/verifyUser");
            } else {
                alert(response.data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert(error.response?.data?.message || "An error occurred. Please try again.");
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


                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            id="confirmPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                        )}
                    </div>


                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text"
                                value={formData.phone}
                                onChange={handleChange}
                                name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (83XXXXXX)</label>
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="company"
                                value={formData.company}
                                onChange={handleChange}
                                id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                        </div>
                    </div>

                    <div className="flex item-center">
                        <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        <Link href="/login" className=" flex justify-center items-center">
                            <span
                                className=" mx-5  text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </span>
                        </Link>

                    </div>
                </form>
            )}


        </div>
    )
}

export default page