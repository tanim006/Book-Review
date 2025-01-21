import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Books from '../Books/Books';

const Root = () => {
    return (
        <div>
            <div className='mx-auto pt-10 pl-20 pr-20'>
                <Navbar></Navbar>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
