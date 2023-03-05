import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../contextApi/Authcontext";

const Login = () => {
  const { setisLogedind, setLoading } = useContext(myContext);
  const neviget = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");

  const handlLogin = (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;

    const userinfo = {
      email,
      password,
    };

    axios
      .post(`https://employ-server.vercel.app/auth/login`, userinfo)
      .then((res) => {
        switch (res.data.message) {
          case "Login Successful":
            const token = res.data.data;
            localStorage.setItem("token", token);
            setisLogedind(true);
            neviget(from, { replace: true });
            break;
          case "password not Match":
            setLoginError(res.data.message);
            break;
          case "user not Valid":
            setLoginError(res.data.message);
            break;
          default:
          // handle other cases or errors
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="w-full h-[100vh] login_page flex items-center justify-center">
      <div className=" p-10 lg:w-[479px] md:w-[479px] md:h-[497px] lg:h-[497px] w-11/12 h-full">
        <form onSubmit={handleSubmit(handlLogin)}>
          <div className="form-control w-full">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              placeholder="Enter Your Email"
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full py-2 px-4 my-2 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              placeholder="Enter Your Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full py-2 px-4 my-2 rounded-lg"
            />
            <label className="label"> </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className=" bg-[#A5D9D0] hover:cursor-pointer hover:bg-[#11c7a8] my-2  py-2 px-4 mt-0 font-bold text-xl w-full rounded-lg"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="my-1">
          New To Tanzil's Blog ?{" "}
          <Link to="/register" className="font-bold text-blue-400">
            Register Now
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
