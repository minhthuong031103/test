'use client';
import Script from 'next/script';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
