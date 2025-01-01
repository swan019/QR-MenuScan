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

import React from 'react'
import { useSelector } from "react-redux";


function MenuTableCost({ Data, User}) {
    const NA = "None"
    return (
        <Table>
            <TableCaption>A list of Menus In {User.storeName}.</TableCaption>
            <TableHeader className="bg-slate-200" >
                <TableRow>
                    <TableHead className="w-[50px]    text-center">ID</TableHead>
                    <TableHead className="text-center">Category</TableHead>
                    <TableHead className="text-center">Menu</TableHead>
                    <TableHead className="text-center">Half Price</TableHead>
                    <TableHead className="text-center">Full Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {Data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell className="text-center">{item.category}</TableCell>
                        <TableCell className="text-center">{item.name}</TableCell>
                        <TableCell className="text-center">{item.halfPrice || NA}</TableCell>
                        <TableCell className="text-center">{item.fullPrice}</TableCell>
                    </TableRow>

                ))}
            </TableBody>
        </Table>
    )
}

export default MenuTableCost
