
'use client'
import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface Props{
    children: React.ReactNode;
}

export default function ContainerBlock({children}:Props){
    const pathname= usePathname();
   
    return(
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    )
}