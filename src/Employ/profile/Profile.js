import React, { useContext } from 'react';
import { myContext } from '../../contextApi/Authcontext';

const Profile = () => {
    const {user } =  useContext(myContext)
    return (
        <div>
            <h2> Hi {user?.name} </h2>
        </div>
    );
};

export default Profile;