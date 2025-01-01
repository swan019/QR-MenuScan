import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Navbar/page";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/app/ReduxProvider";
import Footer from "@/components/HomePages/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QR MenuScan",
  description: "Generated Swapnil Ingale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ReduxProvider>
          <nav className="w-full bg-slate-700">
            <Navbar />
          </nav>
          <main className="min-h-screen mx-auto px-1">
            {children}
            <Toaster />
          </main>
        
        {/* <footer className="bg-white rounded-lg shadow m-1 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen flex items-center justify-between p-4 md:flex md:items-center md:justify-between">
            <span className="flex flex-wrap items-center justify-between mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 px-2">
              Created By Swapnil
            </span>
            <ul className="flex flex-wrap items-center justify-between mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 px-2">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </footer> */}

        <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
