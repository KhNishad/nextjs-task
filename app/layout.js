
import { Inter } from 'next/font/google';

import "react-loading-skeleton/dist/skeleton.css";
import './globals.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';
import Header from './components/Header';
import { StatusProvider } from './context/contextStatus';
import ShoppingCart from './components/ShoppingCart';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <StatusProvider>
          <Header />
          {children}
           <Footer />
          <ShoppingCart />
          <ToastContainer
            position="top-right"
            autoClose="1500"
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover
            draggable={true}
          />
        </StatusProvider>
      </body>
    </html>
  );
}
