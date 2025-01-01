"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import Link from "next/link";


import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '@/lib/features/userSlice';
import { useRouter } from "next/navigation";

export default function OTPVerification() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [storageUser, setStorageUser] = useState(null);
      useEffect(() => {
        const persistedState = localStorage.getItem("persist:root");
        if (persistedState) {
          const parsedState = JSON.parse(persistedState);
          const userData = parsedState.user; // Assuming the user state is in the `user` key
          setStorageUser(JSON.parse(userData));
        }
      }, []);
    
      useEffect(() => {
        console.log("storageUser : ", storageUser);
        if (storageUser?.id === null || (storageUser?.id && storageUser.id !== user?.id)) {
          router.push("/login");
        }
    
      }, [user, storageUser, router]);

    const [otp, setOtp] = useState("");
    
    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !otp) {
            setErrorMessage("Invalid Credentials");
            return;
        }

        try {
            const response = await axiosInstance.post('/store/verify-otp', { email, otp });
            // Step 4: Handle successful response
            setSuccessMessage(response.data.message);

            console.log(response);
            console.log("response.data.store : ",response.data.store);
            
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
            setErrorMessage('');
        } catch (error) {
            // Step 5: Handle error response
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
            setSuccessMessage('');
        }
    };

    return (
        <div className="max-w-md mx-auto text-center bg-slate-700 px-4 sm:px-4 py-5 rounded-xl shadow">
            <header className="mb-8">
                <h1 className="text-2xl text-white font-bold mb-1">User Verification</h1>
                <p className="text-[15px] text-slate-400">
                    Enter the 4-digit verification code that was sent to your registerd email.
                </p>
            </header>
            <form id="otp-form " className="flex flex-col gap-5">
                <div className="flex items-center justify-center flex-col gap-3">

                    <input
                        type="text"
                        name="otp"
                        placeholder="OTP"
                        value={otp}
                        onChange={handleChange}
                        className=" text-slate-900 flex justify-center items-center bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        maxLength="6"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Handle email change
                        required
                        className=" text-slate-900 flex justify-center items-center bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"

                    />
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                    >
                        Verify Account
                    </button>
                </div>

                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
            <div className="text-sm text-slate-500 mt-4">
                Didn't receive code?{" "}
                <span className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                    Resend
                </span>
            </div>
        </div>
    );
}
