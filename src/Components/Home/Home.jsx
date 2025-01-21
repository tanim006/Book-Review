import React from 'react';
import Books from '../Books/Books';
import Banner from '../Banner/Banner';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavLink to='/'></NavLink>
            <h1>this is home Pages</h1>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;