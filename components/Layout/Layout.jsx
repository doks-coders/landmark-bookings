import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {useEffect} from 'react' 

import AOS from "aos";
import "aos/dist/aos.css";



const Layout = ({children}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout