import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../contextApi/Authcontext';

const Privetrouting = ({children}) => {
    const {user,Loading} = useContext(myContext)
    const location = useLocation();
    if(Loading){
         return <h2>Loadding...</h2>
    }
    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default Privetrouting;