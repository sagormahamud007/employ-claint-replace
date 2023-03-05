import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../contextApi/Authcontext";

const Profile = () => {
  const { user } = useContext(myContext);
  const [myDatas, setmyDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/my-history?email=${user?.email}`)
      .then((res) => {
        if (res.data.message === "success") {
          setmyDatas(res.data.data);
        }
      })

      .catch((e) => console.log(e));
  }, [user?.email]);

  console.log(myDatas);
  return (
   <div>
     <h2 className="text-xl text-center my-4">Hi ,  {user?.name} </h2>
     <div className="flex justify-center w-8/12 mx-auto">
       
      {
        myDatas.length > 0 ?
        <table className="table-auto w-full text-center text-sm">
        <thead class="bg-gray-200">
          <tr className="sticky top-0 bg-gray-200">
            <th className="px-4 py-2">Serial</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">reason</th>
            <th className="px-4 py-2">costAmount</th>
          
          </tr>
        </thead>
        <tbody>
         {
            myDatas.map((data,index) =>  <tr key={data._id} className="hover:bg-gray-100">
            <td className="border px-4 py-2"> {index + 1} </td>
            <td className="border px-4 py-2"> {data.date} </td>
            <td className="border px-4 py-2"> {data.reason} </td>
            <td className="border px-4 py-2"> {data.costAmount} </td>
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

export default Profile;
