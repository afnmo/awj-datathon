'use client';

import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation'; 
import "./globals.css";


export default function RootLayout({ children }) {
  const pathname = usePathname(); 

  const bgColor = pathname === "/" 
  ? "" 
  : "bg-gradient-to-r from-blue-100 to-white";


  return (
    <html >
      <body className={twMerge( "antialias", bgColor)}>
        {children}
      </body>
    </html>
  );
}
