"use client";
import React, { useEffect, useState } from 'react';
import { fetchMenuByIdTOCost } from '@/services/api'; // Adjust the import path accordingly
import MenuTableCost from './MenuTableCost';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function WraperCost({ id }) {
  const [storeData, setStoreData] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [SpecialMenu, setSpecialMenu] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMenuByIdTOCost(id);
        console.log("data in get public : ", data);

        setStoreData(data.MenueData);
        setUser(data.storeData[0]);
        console.log(data);

        const specialItems = data.MenueData.filter((item) => item.special === true);
        setSpecialMenu(specialItems);

        setError(null);
      } catch (err) {
        setError(err);
        setStoreData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <MenuTableCost Data={storeData} User={user} />

      <div className='flex flex-wrap'>
        <div className='flex justify-center  rounded-md mx-auto py-6 items-center my-8'>
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border-[1.4px] border-slate-900 md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={30}>
              <div className="flex bg-slate-700 text-white h-[200px] items-center justify-center p-6">
                <span className="font-semibold text-xl">{user.storeName}</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center bg-slate-700 text-white justify-center p-6">
                    <span className="font-semibold">Our Special Menu's</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex flex-col flex-wrap gap-2 h-full items-center justify-center p-6">
                    {
                      SpecialMenu.map((item, index) => {
                        return (

                          <span key={index} className="font-semibold">
                            <span className='mr-2'>#</span>
                            {item.name}</span>
                        );
                      })
                    }
                  </div>

                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <div className='flex justify-center  rounded-md mx-auto py-6 items-center my-8'>
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border-[1.4px] border-slate-900 md:min-w-[450px]"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex bg-slate-700 text-xl text-white h-[200px] items-center justify-center p-6">
                <span className="font-semibold">{user.storeName}</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center bg-slate-700 text-white justify-center p-6">
                    <span className="font-semibold">Contact Us</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex flex-col flex-wrap gap-2 h-full items-center justify-center p-6">
                    <div className='flex flex-col  justify-between items-center'>

                      <span className='font-semibold text-lg my-6'>{user.mobile}</span>

                      <span className='font-semibold text-lg '>{user.email}</span>

                    </div>
                  </div>

                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}

export default WraperCost;
