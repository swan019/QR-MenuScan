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

import axiosInstance from '@/utils/axios';


import { useDispatch, useSelector } from 'react-redux';
import { setMenu, clearMenu } from "@/lib/features/menuSlice";

// const { toast } = useToast();

function AddMenue() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        name: "",
        halfPrice: "",
        fullPrice: "",
        category: "",
        special: false
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };
    const validate = () => {
        if (formData.name === "") {
            alert("Menu Name is required");
            return false;
        }
        if (formData.fullPrice === "") {
            alert("At least Full Price of menu is required");
            return false;
        }
        if (formData.category === "") {
            alert("Category of Menu is required");
            return false;
        }
    
        return true;
    };
    
    const AddmenuHandler =async () => {
        try {
            console.log("IN API DATA : ");
            if(!validate()){
                return null;
            }
            const response = await axiosInstance.post("/menu/add", formData);
            console.log("response : ", response.data.menuItems);
            alert("Menu item added successfully!");
            dispatch(setMenu(response.data.menuItems));
    
          } catch (error) {
            alert("Problem in adding menu item ", error.response?.data || error.message);
          }

          setFormData({
            name: "",
            halfPrice: "",
            fullPrice: "",
            category: "",
            special: false,
          });

          

    }

    const handleCheckboxClick = () => {


        setFormData((prevData) => ({
            ...prevData,
            special: !prevData.special, // Toggle the special field
        }));

    };


    return (
        <div className=''>
            <div className='bg-slate-600 px-6 py-4 rounded-md text-white'>
                <Dialog>
                    <DialogTrigger>Menu Add</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add New Menu</DialogTitle>
                            <DialogDescription>
                                <input
                                    type="text" placeholder='Menu' name='name' value={formData.name} className='p-2 my-4 border rounded-sm mx-3'
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="text" placeholder='Half Price' name='halfPrice' value={formData.halfPrice} className='p-2 my-4 border rounded-sm mx-3'
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="text" placeholder='Full Price' name='fullPrice' value={formData.fullPrice} className='p-2 my-4 border rounded-sm mx-3'
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
                                        AddmenuHandler()
                                    }}>
                                    Add Menu
                                </button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>

        </div>
    )
}

export default AddMenue