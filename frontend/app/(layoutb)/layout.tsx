import React from "react";
import { Nav } from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="min-h-full w-screen flex flex-col bg-white">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
