import React from "react";
import Image from "next/image";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed inset-0 flex p-3 bg-gradient-to-r from-[#001f3f] via-[#083358] to-[#0da574] justify-center items-center">
      <div className="w-[50%] p-6 flex justify-center items-center">
        {children}
      </div>
      <div className="w-[50%] h-screen m-0 relative">
        <Image
          className="object-cover"
          src="/banking.webp"
          fill
          alt="banking image"
        />
      </div>
    </div>
  );
}
