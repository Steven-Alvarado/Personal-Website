import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Steven Alvarado",
       description: "Passionate computer science student",
};

export default function RootLayout({
        children,
        }: Readonly<{
children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}
            bg-orange-50 text-orange-950 relative h-[5000px]`}>
                <div className="bg-[#fff1e1] absolute top-[-6rem] -z-10 right-[11rem]
                h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
                sm:w-[68.75rem]">
                </div>

                <div className="bg-[##ffb3ba] absolute top-[-1rem] -z-10 
                left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
                sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
                xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[fff1e1]">
                </div>
            <Header />
            {children}
            </body>
        </html>
           );
}
