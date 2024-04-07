import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Questionarea from "@/components/Questionarea";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qbiz",
  description: "QbizQbiz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
