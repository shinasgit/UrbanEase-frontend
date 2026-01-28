import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { updateProfAdminAPI } from "../../services/allAPI";

export default function AdminProfile() {
  const [userData, setUserData] = useState({});
  console.log(userData);

  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  console.log(userDetails);

  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    uploadProfile:""
  });

  const [preview,setPreview] = useState('')
  const [token,setToken] = useState('')

  const uploadFile = async (e) => {
    setAdminDetails({ ...adminDetails, uploadProfile: e.target.files[0] });
    console.log(adminDetails.uploadProfile);
    //imgfile to url
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    
    setPreview(url)
    setAdminDetails({...adminDetails,uploadProfile:url})
  };

  const handleUpdate = async () => {
    console.log(adminDetails);

    // alert("Profile Updated Successfully");
const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
    };
    console.log(reqHeader);

    const reqBody = new FormData()
    for (let key in adminDetails){
      reqBody.append(key,adminDetails[key])
    }
    try {
      
    const response = await updateProfAdminAPI(reqBody,reqHeader) 
    console.log(response);
    if(response.status == 200){
        alert(response.data.message)
      }else{
        alert(response.message)
      }
    
    } catch (error) {
      console.log("error"+error);
      
    }
  };

  useEffect(() => {
    setUserData(userDetails);
    setToken(sessionStorage.getItem('token'));
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="ml-64 mt-18 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-sm shadow overflow-hidden">
          {/* Top Section */}
          <div className="bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white">
              Edit Admin Profile
            </h2>
            <p className="text-blue-100 text-sm">
              Update your personal information
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Profile Image */}
            <div className="flex items-center gap-6 mb-8">
              {/* Label wraps image + text */}
              <label htmlFor="imgfile" className="flex items-center gap-6 cursor-pointer">
                {/* Hidden file input */}
                <input id="imgfile"
                  type="file"
                  accept="image/*"
                  className="hidden"
                   onChange={(e) => uploadFile(e)}
                />

                {/* Profile Image */}
                <img
                  className="w-24 h-24 rounded-full object-cover bg-gray-200"
                  src={preview}
                  alt="Profile"
                />

                {/* User Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {userData.username}
                  </h3>
                  <p className="text-sm text-gray-500">{userData.role}</p>

                  <span className="mt-2 block text-sm text-blue-600 hover:underline">
                    Change Profile Picture
                  </span>
                </div>
              </label>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      username: e.target.value,
                    })
                  }
                  type="text"
                  value={adminDetails.username}
                  placeholder="Enter full name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  onChange={(e) =>
                    setAdminDetails({ ...adminDetails, email: e.target.value })
                  }
                  type="email"
                  value={adminDetails.email}
                  placeholder="Enter email"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  New Password
                </label>
                <input
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      password: e.target.value,
                    })
                  }
                  type="password"
                  value={adminDetails.password}
                  placeholder="password"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Confirm New Password
                </label>
                <input
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      cpassword: e.target.value,
                    })
                  }
                  type="password"
                  value={adminDetails.cpassword}
                  placeholder="password "
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
