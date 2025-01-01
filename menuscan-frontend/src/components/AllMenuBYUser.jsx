"use client";
import React, { useState, useEffect } from "react";
import { fetchStoreById } from "@/services/api";
import MenuTable from "./MenuTableCost";
import MenuTableDash from "./MenuTableDash";
import { useDispatch, useSelector } from 'react-redux';
import { setMenu, clearMenu } from "@/lib/features/menuSlice";
import MenuTableCost from "./MenuTableCost";

function AllMenuBYUser({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus);



  useEffect(() => {

    const getStoreData = async () => {
      try {
        setLoading(true); // Start loading
        const storeData = await fetchStoreById(id); // Fetch store data by ID'
        console.log(storeData.MenueData);
        
        dispatch(setMenu(storeData.MenueData));
        setData(storeData.storeData || []); // Assuming 'menus' is the field in the response
      } catch (error) {
        setError(error.message || "Failed to fetch store data.");
      } finally {
        setLoading(false); // Stop loading
      }
    };



    getStoreData();
  }, [id, dispatch]);

  useEffect(() => {
    setData(menus || []);
  }, [menus]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
        <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-6">
          <h2 className="w-full flex justify-center  items-center py-4 bg-slate-100">All Menu Items</h2>
          <MenuTableDash Data={data} setData={setData} />
        </div>
    </>
  );
}

export default AllMenuBYUser;