import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ShearedPage/Navbar';

const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <div className="content">
            <Outlet></Outlet>
        </div>
        <h1>Footer</h1>
        </>
    );
};

export default MainLayout;