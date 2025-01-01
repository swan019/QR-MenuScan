"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import React, { useState } from 'react'
import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteItemById } from "@/services/api";
import { useDispatch, useSelector } from 'react-redux';
import { setMenu, clearMenu } from "@/lib/features/menuSlice";


import UpdateMenu from "./UpdateMenu";

function MenuTableDash({ Data, setData }) {
    const router = useRouter(); // Next.js router for redirection

    const dispatch = useDispatch();
    const handleDelete = async (item) => {
        const newData = await deleteItemById(item._id);
        dispatch(setMenu(newData));
        setData(newData);
    }

    const [updateBtn, setupdatebtn] = useState(false);
    const [Item, setItem] = useState(null);

    const user = useSelector((state) => state.user);
    const handleUpdate = (item) => {
        setItem(item);
        console.log("IN UPDATE CLICK : ", item);
        setupdatebtn((prevState) => !prevState);
        console.log(updateBtn);
    }

    const NA = "Not Available";

    return (

        !updateBtn ? (

            <Table className=" bg-slate-50 border-2">
                <TableCaption>A list of {user.storeName} Menus.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Menu</TableHead>
                        <TableHead className="text-center">Full Price</TableHead>
                        <TableHead className="text-center">Half Price</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {Data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium text-center">{index + 1}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-center">{item?.halfPrice || NA }</TableCell>
                            <TableCell className="text-center">{item.fullPrice}</TableCell>
                            <TableCell className="text-center">

                                <DropdownMenu>
                                    <DropdownMenuTrigger>Manage</DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>
                                            {item.name}
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => handleUpdate(item)}>Update</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleDelete(item)}>Delete</DropdownMenuItem>

                                    </DropdownMenuContent>
                                </DropdownMenu>


                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>

        ) : (

            <UpdateMenu Item = {Item} setupdatebtn={setupdatebtn}/>
        )

    )
}

export default MenuTableDash
