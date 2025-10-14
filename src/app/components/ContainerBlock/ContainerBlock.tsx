'use client';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode;
}

export default function ContainerBlock({ children }: Props) {
  return (
    <main className="dark:bg-gray-800 w-full">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
