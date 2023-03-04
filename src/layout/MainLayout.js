import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
        <h1>navbar</h1>
        <div className="content">
            <Outlet></Outlet>
        </div>
        <h1>Footer</h1>
        </>
    );
};

export default MainLayout;