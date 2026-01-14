import React, { useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Hyperspeed from "./Hyperspeed";
import { useNavigate } from "react-router-dom";
import { GoogleloginUserAPI, loginUserAPI, registerUserAPI } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode'

function Auth({ register }) {
  console.log(register);

  //register-part
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userData);

  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.email || !userData.password) {
      toast.warn("Please fill the fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await registerUserAPI(userData);
        console.log(response);

        if (response.status === 200) {
          // alert("Registered Successfully")
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setTimeout(() => {
            navigate("/login");
          }, 2000);

          setUserData({ username: "", email: "", password: "" });
        } else {
          toast.error("Registration Failed!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(response.response.data.message);
        }
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const handleLogin = async () => {
    if (!userData.email || !userData.password) {
      toast.warn("Please fill the fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        const response = await loginUserAPI(userData);
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.user)
          );
          sessionStorage.setItem(
            "token",
            JSON.stringify(response.data.token)
          );

          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          if (response.data.user.role == "UEAdmin") {
            setTimeout(() => {
              navigate("/admin-home");
            }, 2000);
          } else if (response.data.user.role == "UEProvider") {
            setTimeout(() => {
              navigate("/homeSP");
            }, 2000);
          } else {
            setTimeout(() => {
              navigate("/housebook");
            }, 2000);
          }
        } else {
          toast.error("Login Failed!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  const handleGoogleLogin = async(credentialResponse) => {
    console.log("google login",credentialResponse);
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);

    const response = await GoogleloginUserAPI({email:decode.email,password:"googlepswd",username:decode.name,profile:decode.picture})
    console.log(response);
    
    if(response.status == 200){
      sessionStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.user)
          );
          sessionStorage.setItem(
            "token",
            JSON.stringify(response.data.token)
          );

          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setTimeout(() => {
              navigate("/housebook");
            }, 2000);
          
          
    }
    
  }

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border border-gray-200  !bg-white ">
        {register ? (
          <h1 className="text-3xl font-bold text-center text-blue-800">
            REGISTER
          </h1>
        ) : (
          <h1 className="text-3xl font-bold text-center text-blue-800">
            LOGIN
          </h1>
        )}

        {register ? (
          <h3 className="text-center text-xl text-gray-500 mb-4">
            Register your Account
          </h3>
        ) : (
          <h3 className="text-center text-xl text-gray-500 mb-4">
            Login to your Account
          </h3>
        )}

        <form className="flex flex-col gap-4">
          {register && (
            <div>
              <Label htmlFor="Username" className="mb-1 block" />
              <TextInput
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                type="text"
                placeholder="Enter Your Username"
                required
                style={{ color: "black" }}
              />
            </div>
          )}

          {/* Email */}
          <div>
            <Label htmlFor="email" className="mb-1 block" value="Email" />
            <TextInput
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              id="email"
              type="email"
              placeholder="Enter Your E-mail"
              required
              style={{ color: "black" }}
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="mb-1 block" value="Password" />
            <TextInput
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              id="password"
              type="password"
              required
              placeholder="Enter Your Password"
              style={{ color: "black" }}
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-teal-700 hover:underline hover:text-teal-800"
            >
              Forgot password?
            </a>
          </div>

          {register ? (
            <Button
              onClick={handleRegister}
              type="button"
              className="bg-blue-800 hover:bg-blue-700"
            >
              Register
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              type="button"
              className="bg-blue-800 hover:bg-blue-700">
              Login
            </Button>
          )}
          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          <GoogleLogin onClick={()=>handleGoogleLogin(credentialResponse)}
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              handleGoogleLogin(credentialResponse)
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />

          

          

          {/* Register Link */}
          {register ? (
             <><p className="text-center text-sm text-gray-600">
              Register as a Service Provider?
              <a
                href="/login"
                className="ml-1 text-blue-800 font-medium hover:underline"
              >
                Register
              </a>
            </p>
            
            <p className="text-center text-sm text-gray-600">
              Already have an account?
              <a
                href="/login"
                className="ml-1 text-blue-800 font-medium hover:underline"
              >
                Login
              </a>
            </p></>
          ) : (
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?
              <a
                href="/register"
                className="ml-1 text-blue-800 font-medium hover:underline"
              >
                Register
              </a>
            </p>
          )}
        </form>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Auth;
