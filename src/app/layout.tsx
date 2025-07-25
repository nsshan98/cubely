import type { Metadata } from "next";
import { Edu_AU_VIC_WA_NT_Hand, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"
import Providers from "./providers";
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from "next-auth/react"
import { Navbar } from "@/components/shared/Navbar";
import { Session } from "next-auth";
import { auth } from "@/auth";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const eduFont = Edu_AU_VIC_WA_NT_Hand({
  variable: "--font-edu-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Cubely | Cubely",
  description: "The Ultimate Cubely Experience",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eduFont.variable} antialiased`}
      >
        <Providers>
          <SessionProvider>
            <Navbar session={session as Session} />
            {children}
            <ToastContainer pauseOnFocusLoss={false} />
            <SpeedInsights />
            <Analytics />
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
