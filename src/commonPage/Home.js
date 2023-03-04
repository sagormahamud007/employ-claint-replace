import React, { useContext } from 'react';
import { myContext } from '../contextApi/Authcontext';

const Home = () => {
    const {name} = useContext(myContext)
    return (
        <div>
            <h2>Home Page {name} </h2>
        </div>
    );
};

export default Home;