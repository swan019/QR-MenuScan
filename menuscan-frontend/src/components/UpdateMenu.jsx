"use client";
import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Checkbox } from "@/components/ui/checkbox"


// import { useToast } from "@/hooks/use-toast"
import { addMenuItem } from '@/services/api';
import axiosInstance from '@/utils/axios';


import { useDispatch, useSelector } from 'react-redux';
import { setMenu, clearMenu } from "@/lib/features/menuSlice";

// const { toast } = useToast();

function UpdateMenu({Item , setupdatebtn}) {

    console.log("IN UPDATE",Item);
    

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        name: Item.name,
        price: Item.price,
        category: Item.category,
        special: false
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const UpdatemenuHandler =async () => {
        try {
            console.log("IN API DATA : ", formData);
            const response = await axiosInstance.put(`/menu/${Item._id}`, formData);
            console.log(response);
            
            console.log("response : ", response.data.Data);
            dispatch(setMenu(response.data.Data));
            setupdatebtn((prevState) => !prevState);
            alert("Menu Updated Succefully");
    
          } catch (error) {
            console.error("Error adding menu item:", error.response?.data || error.message);
          }

          setFormData({
            name: Item.name,
            price: Item.price,
            category: Item.category,
            special: false,
          });

        // toast({
        //     title: "Menu Added",
        //     description: `Menu : ${Menu} and Price : ${Price}`
        // })
    }

    const handleCheckboxClick = () => {


        setFormData((prevData) => ({
            ...prevData,
            special: !prevData.special, // Toggle the special field
        }));

    };


    return (
        <div className=' mx-auto my-8 max-w-screen-md rounded-md flex  justify-around items-center px-5 py-4 bg-slate-200'>
            <div className='bg-slate-600 px-6 py-4 rounded-md text-white'>
                <Dialog>
                    <DialogTrigger>Update <span className='text-red-200 font-medium'> { Item.name } </span>  Menu</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Update Menu</DialogTitle>
                            <DialogDescription>
                                <input
                                    type="text" placeholder='Menu' name='name' value={formData.name} className='p-2 my-4 border  rounded-sm mx-3'
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="text" placeholder='Price' name='price' value={formData.price} className='p-2 my-4 border rounded-sm mx-3'
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="text" placeholder='Veg / Nonveg' name='category' value={formData.category} className='p-2 my-4 border rounded-sm mx-3'
                                    onChange={(e) => handleChange(e)}
                                />
                                <span className='flex items-center my-4'>
                                    <Checkbox className="p-2  mx-3"
                                        checked={formData.special}
                                        onClick={handleCheckboxClick} /> <span className='text-black  font-mono '>Special</span>
                                </span>

                                <button className='px-3 py-2 m-3 border rounded-md bg-blue-600 text-white '
                                    onClick={() => {
                                        UpdatemenuHandler()
                                    }}>
                                    Update Menu Item
                                </button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

        </div>
    )
}

export default UpdateMenu