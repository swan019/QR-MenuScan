"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import AddMenuBox from "@/components/AddMenuBox";
import AllMenuBYUser from "@/components/AllMenuBYUser";
import SpecialMenu from "@/components/SpecialMenu";

export default function Page({ params }) {
  const [storageUser, setStorageUser] = useState(null);
  const [paramId, setParamId] = useState(null);

  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    // Unwrap the Promise to get params
    (async () => {
      const resolvedParams = await Promise.resolve(params);
      if (resolvedParams?.id) {
        setParamId(resolvedParams.id);
      }
    })();
  }, [params]);

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

  if (!user || !paramId) return null; // Add a fallback UI like "Loading..." if needed

  return storageUser.id === user.id ? (
    <div className="">
      <AllMenuBYUser id={paramId} />
      <AddMenuBox />
      <SpecialMenu />
      
    </div>
  ) : (
    <div>
      Login
    </div>
  );
}
