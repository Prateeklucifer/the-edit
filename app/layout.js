"use client";

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import AdminPannel from "./components/AdminPannel";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let pathname = usePathname();

  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {pathname.startsWith("/admin") ? <AdminPannel /> : <Navbar />}
        <div className="min-h-screen">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
