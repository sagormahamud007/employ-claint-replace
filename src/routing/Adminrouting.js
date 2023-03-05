import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../contextApi/Authcontext';


const AdminRouting = ({children}) => {
    const {user,Loading} = useContext(myContext)
    const location = useLocation();
    if(Loading){
         
         return <p>Looadding ...</p>
    }
    if (user?.role === "admin"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default AdminRouting;