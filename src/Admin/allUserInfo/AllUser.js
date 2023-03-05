import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUser = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:5000/admin/all-user`)
      .then(res =>{
        if(res.data.message === "success"){
            setusers(res.data.data)
        }
      })
      .catch(e=> console.log(e))
    }, [])
    


    return (
        <div>
        
        <div className="flex justify-center w-8/12 mx-auto">
          
         {
           users.length > 0 ?
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
               <td className="border px-4 py-2"> <Link className='btn' to = {`/adminpannel/users/${data._id}`}> Details </Link> </td>
               <td className="border px-4 py-2">  Delete </td>
             </tr>)
            }
   
           </tbody>
         </table>
           :
          <div>
           <h2>No History Abailable</h2>
          </div>
   
         }
       </div>
      </div>
    );
};

export default AllUser;