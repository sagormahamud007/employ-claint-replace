import React, { useContext } from 'react';
import { myContext } from '../contextApi/Authcontext';

const Home = () => {
    const {name, user} = useContext(myContext)
    return (
        <div>
            <h2>Home Page {name} {user ? user?.name : "No Found"} </h2>
            
            
        </div>
    );
};

export default Home;