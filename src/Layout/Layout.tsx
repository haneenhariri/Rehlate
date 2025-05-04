import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import { LayoutProps } from '../types/Layout';
import Footer from '../components/Footer/Footer';



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;