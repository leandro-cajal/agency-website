'use client';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { strict } from 'assert';
import { useState } from 'react';

const ResponsiveNav = () => {

    const [nav,setNav] = useState(); 


  return (
    <div>
        <Nav />
        <MobileNav />
    </div>
  )
}

export default ResponsiveNav