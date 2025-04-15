"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased font-inter`}
      >
        <Provider store={store}>
          <ToastContainer />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Layout children={children} />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
