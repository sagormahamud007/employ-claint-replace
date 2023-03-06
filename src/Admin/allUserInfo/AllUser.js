import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../contextApi/Authcontext';

const AllUser = () => {
    const [users, setusers] = useState([])
    const {Loading}= useContext(myContext)
    useEffect(() => {
      axios.get(`https://employ-server.vercel.app/admin/all-user`)
      .then(res =>{
        if(res.data.message === "success"){
            setusers(res.data.data)
        }
      })
      .catch(e=> console.log(e))
    }, [])
    


    return (
      <div className="overflow-x-auto ">
  {
    users?.length>0 ?
    <table className="table-auto my-5 w-full text-center text-sm">
    <thead class="bg-gray-200">
               <tr className="sticky top-0 bg-gray-200">
                 <th className="px-4 py-2">Serial</th>
                 <th className="px-4 py-2">Name</th>
                 <th className="px-4 py-2">Email</th>
                 <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Action</th>
               
               </tr>
             </thead>
      <tbody>
      {
              users.map((data,index) =>  <tr key={data._id} className="hover:bg-gray-100">
              <td className="border px-4 py-2"> {index + 1} </td>
               <td className="border px-4 py-2"> {data.name} </td>
               <td className="border px-4 py-2"> {data.email} </td>
                <td className="border px-4 py-2"> <Link className='btn btn-outline btn-primary' to = {`/adminpannel/users/${data._id}`}> Details </Link> </td>
                <button className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              </tr>)
             }
      </tbody> 
    </table>
     :
          <div>
          <h2>No History Abailable</h2>
         </div>
  }
  :
    </div>
    );
};

export default AllUser;