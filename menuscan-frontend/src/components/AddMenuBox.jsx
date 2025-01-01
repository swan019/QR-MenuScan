"use client"
import React from 'react'
import AddMenue from './AddMenue'
import UpadteMenu from './UpdateMenu'
import QRcode from './QRcode'
import { useSelector } from 'react-redux';

function AddMenuBox() {
  
  const user = useSelector((state) => state.user);
  console.log("IN NEW CODE )!( :) ", user.qrCode);
  
  return (
    <div className='mx-auto my-8 max-w-screen-md rounded-md flex  justify-around items-center px-5 py-3 bg-slate-200'>
      <AddMenue />
      <QRcode user={user} />
    </div>
  )
}

export default AddMenuBox