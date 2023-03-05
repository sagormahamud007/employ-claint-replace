import React, { useContext } from "react";
import { myContext } from "../contextApi/Authcontext";

const Home = () => {
  const {  user, Loading } = useContext(myContext);
  if (Loading) {
    return <p>Loadding...</p>;
  }
  return (
    <div>
      <h2 className="text-center text-2xl">
         {user ? `wellcome back ${user?.name}` : "Home Page"}{" "}
      </h2>
    </div>
  );
};

export default Home;
