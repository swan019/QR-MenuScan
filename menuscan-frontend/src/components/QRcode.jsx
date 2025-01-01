"use client";
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import QR from './QR';

function QRcode({user}) {
  const[Data, setData] = useState(user);
  const [qrbtn, setQrbtn] = useState(false);
  const toggleQrbtn = () => {
        console.log("IN QR CMOP : -> ", user);
        setQrbtn((prev) => !prev);
    }
    
    return !qrbtn ? (
        <div
          className="bg-slate-600 cursor-pointer px-6 py-4 rounded-md text-white"
          onClick={toggleQrbtn} // Toggle on click
        >
          <div>QR Card</div>
        </div>
      ) : (
        <QR toggleQrbtn={toggleQrbtn} user={user}/>
      )
    
}

export default QRcode