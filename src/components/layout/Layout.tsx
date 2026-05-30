import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-poppins selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
