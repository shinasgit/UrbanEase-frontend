import React, { useState,useEffect } from "react";
import { CiChat1 } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { Button, Modal, ModalBody, ModalHeader, Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";


export default function AdminHeader() {

  const [userData , setUserData]= useState({})
  
    console.log(userData);
    const navigate = useNavigate()
    
    const logout = async()=>{
      sessionStorage.clear()
      navigate("/")
    }
  
    let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
    console.log(userDetails);
    
  
  
  
    useEffect(()=>{
      setUserData(userDetails)
    },[])
  

  const [openModal, setOpenModal] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50
      w-[98%] mx-auto mt-3
      bg-slate-800 text-white
      shadow-xl rounded-lg px-6 py-3
      flex items-center justify-between"
    >
      {/* LEFT: Logo */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg overflow-hidden shadow bg-white">
          <img
            src="../public/logo.png"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold tracking-wide">UrbanEase</h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* Icons */}
        <button className="p-2 h-9 w-9 rounded-full bg-slate-800 hover:bg-blue-600 transition">
          <CiChat1 className="text-white text-lg" />
        </button>

        <button className="relative p-2 h-9 w-9 rounded-full bg-slate-800 hover:bg-blue-600 transition">
          <IoNotificationsOutline className="text-white text-lg" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center bg-slate-800 rounded-xl px-3 py-1.5">
          <Button
            color="dark"
            className="focus:ring-0"
            onClick={() => setOpenModal(true)}
          >
            <div className="flex flex-col text-right mr-3">
              <span className="font-medium text-white text-sm">
                {userData.username}
              </span>
              <span className="text-xs text-gray-300">{userData.email}</span>
            </div>

            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                src={userData.profile}
                className="w-full h-full object-cover"
              />
            </div>
          </Button>
        </div>

        {/* Modal */}
       <Modal
  show={openModal}
  size="md"
  onClose={() => setOpenModal(false)}
  popup
>
  <ModalHeader />

  <ModalBody>
    <div className="flex justify-center bg-white">
      <Card className="max-w-sm w-full !bg-white shadow-none border-none">
        <div className="flex flex-col items-center gap-3 py-6 bg-white">

          {/* Profile Image */}
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            className="w-24 h-24 rounded-full shadow"
            alt="profile"
          />

          {/* Name */}
          <h5 className="text-xl font-semibold text-gray-800">
            Admin
          </h5>

          {/* Role */}
          <p className="text-sm text-gray-500">
            Visual Designer
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-4 w-full justify-center">
            <Link to={"/admin-profile"}>
            <Button className="bg-green-600 hover:bg-green-700 text-white focus:ring-0 px-6">
              Edit Profile
            </Button>
            </Link>
            

            <Button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white focus:ring-0 px-6">
              Logout
            </Button>
          </div>

        </div>
      </Card>
    </div>
  </ModalBody>
</Modal>

      </div>
    </header>
  );
}
