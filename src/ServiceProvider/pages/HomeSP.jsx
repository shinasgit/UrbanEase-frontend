import React from "react";
import { Tabs, TabItem, TextInput } from "flowbite-react";
import { HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { HiAdjustments } from "react-icons/hi";
import HeaderSP from "../components/HeaderSP";
import { IoHomeOutline } from "react-icons/io5";
import { PiWashingMachine } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FileInput, HelperText, Label } from "flowbite-react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addHouseAPI,addAppAPI, addHelperAPI } from "../../services/allAPI";
import { useEffect } from "react";

function HomeSP() {
  // const inputStyle =
  //   "text-black bg-white focus:ring-blue-500 focus:border-blue-500";

  //to hild token
  const [token, setToken] = useState("");

  const [preview, setPreview] = "";
  const [previewList, setPreviewList] = useState([]);

  

  const [houseDetails, setHouseDetails] = useState({
    hostelName: "",
    location: "",
    rent: "",
    deposit: "",
    propertyType: "",
    metro: "",
    busStop: "",
    vacancy: "",
    furnishing: "",
    uploadImage: [],
  });
  console.log(houseDetails);

  const {
    hostelName,
    location,
    rent,
    deposit,
    propertyType,
    metro,
    busStop,
    vacancy,
    furnishing,
  } = houseDetails;

  //image upload
  const handleUpload = (e) => {
    console.log(e.target.files[0]);

    let imgArray = houseDetails.uploadImage;
    imgArray.push(e.target.files[0]);
    console.log(imgArray);

    setHouseDetails({ ...houseDetails, uploadImage: imgArray });

    //convert img to url
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPreview(url);

    //to hold image details
    let imgList = previewList;
    imgList.push(url);
    console.log(imgList);
    setPreviewList(imgList);
  };

  const addHouseSP = async () => {
    console.log(token);

    if (
      hostelName == "" ||
      location == "" ||
      rent == "" ||
      deposit == "" ||
      propertyType == "" ||
      metro == "" ||
      busStop == "" ||
      vacancy == "" ||
      furnishing == ""
    ) {
      alert("Please fill the fields");
    } else {
      //api calling
      //define reqheader
      //1 to get token
      const updatedToken = token.replace(/"/g, "");
      console.log(updatedToken);

      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`,
      };

      console.log(reqHeader);
      //define reqbody
      const reqBody = new FormData();
      for (let key in houseDetails) {
        if (key !== "uploadImage") {
          reqBody.append(key, houseDetails[key]);
        } else {
          houseDetails.uploadImage.forEach((item) => {
            reqBody.append("uploadImage", item);
          });
        }
      }

      const response = await addHouseAPI(reqBody, reqHeader);
      console.log(response);

      alert("House added");
      console.log(houseDetails);
    }
  };

  const handleReset = () => {
    setHouseDetails({
      hostelName: "",
      location: "",
      rent: "",
      deposit: "",
      propertyType: "",
      metro: "",
      busStop: "",
      vacancy: "",
      furnishing: "",
      uploadImage: [],
    });
    setPreview("");
    setPreviewList([]);
  };

  //add washing appliance
  const [appAdd, setAppAdd] = useState({
    product: "",
    brand: "",
    type: ""
  });

  const addApp = async () => {

    console.log(appAdd);
    if(
      appAdd.product==""||
    appAdd.brand==""||
    appAdd.type==""
    ){
      alert("Please fill the Fields")
    }else{
      //api calling
      //define reqheader
      //1 to get token
      const updatedToken = token.replace(/"/g, "");
      console.log(updatedToken);

      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`,
      };

      try {
        const response = await addAppAPI(appAdd,reqHeader)
        console.log(response);
         if(response.status == 200){
          alert(response.data.message)
         }else{
          alert(response.message)
         }
        
      } catch (error) {
        console.log("Error"+error);
        
      }
    }
      
      // try {
      //   const response = await addAppAPI();
      //   console.log(response);
      //   // setJobAdd(response.data);
       
      // } catch (error) {
      //   console.log(error);
      // }
    
  };

  const handleAppReset = () => {
    setAppAdd({
      product: "",
      brand: "",
      type: ""
      
    });
    
  };

  const [helpAdd,setHelpAdd]= useState({
    jobType:"",
    helpername:"",
     number:"",
    station:"",
     location:"",
    phonenumber:""
  })

  const handleAddHelp = async()=>{
    console.log(helpAdd);
    
    if(
    helpAdd.jobType==""||
    helpAdd.helpername==""||
    helpAdd.number==""||
    helpAdd.station==""||
    helpAdd.location==""||
    helpAdd.phonenumber==""
    ){
      alert("Please fill the fields")
    }else{
      const updatedToken = token.replace(/"/g, "");
      console.log(updatedToken);

      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`,
      };
      try {
        const response = await addHelperAPI(helpAdd,reqHeader)
        console.log(response);
        if(response.status == 200){
          alert(response.data.message)
         }else{
          alert(response.message)
         }
        
      } catch (error) {
        console.log("Adding Failed"+error);
        
      }
    }
  }

  const handleHelpReset = () => {
    setHelpAdd({
      jobType: "",
      helpername: "",
      number: "",
      station: "",
      location: "",
      phonenumber: ""
      
    });
  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  return (
    <>
      <HeaderSP />

      <div className="pt-28 px-6 pb-10 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Service Provider Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <Tabs
            aria-label="Main tabs"
            variant="underline"
            className="flex justify-center"
          >
            {/* HOUSE MANAGE */}
            <TabItem title="House Manage" icon={IoHomeOutline}>
              <div className="mt-6 p-6 rounded-xl bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  House Manage
                </h2>

                <Tabs
                  aria-label="House Tabs"
                  variant="underline"
                  className="flex justify-center"
                >
                  {/* HOUSE DATA */}
                  <TabItem title="House Data" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            hostelName: e.target.value,
                          })
                        }
                        value={houseDetails.hostelName}
                        style={{ color: "black" }}
                        placeholder="Hostel Name"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            location: e.target.value,
                          })
                        }
                        value={houseDetails.location}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Location"
                      />
                      {/* // inputClassName={inputStyle} */}
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            rent: e.target.value,
                          })
                        }
                        value={houseDetails.rent}
                        style={{ color: "black" }}
                        className="mt-3"
                        type="number"
                        placeholder="Rent"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            deposit: e.target.value,
                          })
                        }
                        value={houseDetails.deposit}
                        style={{ color: "black" }}
                        className="mt-3"
                        type="number"
                        placeholder="Deposit"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            propertyType: e.target.value,
                          })
                        }
                        value={houseDetails.propertyType}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Property Type"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            metro: e.target.value,
                          })
                        }
                        value={houseDetails.metro}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Nearby Metro"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            busStop: e.target.value,
                          })
                        }
                        value={houseDetails.busStop}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Nearby Bus Stop"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            vacancy: e.target.value,
                          })
                        }
                        value={houseDetails.vacancy}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="No of Vacancy"
                      />
                      <TextInput
                        onChange={(e) =>
                          setHouseDetails({
                            ...houseDetails,
                            furnishing: e.target.value,
                          })
                        }
                        value={houseDetails.furnishing}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Furnishing Type"
                      />
                      <label htmlFor="imgfile">
                        <input
                          // value={houseDetails.uploadImage}
                          id="imgfile"
                          type="file"
                          hidden
                          onChange={(e) => handleUpload(e)}
                        />
                        {previewList.length < 3 ? (
                          preview && preview ? (
                            <div className="flex justify-evenly">
                              <img
                                src={preview}
                                alt=""
                                width={"100px"}
                                height={"100px"}
                              />
                              <img
                                src="https://i.pinimg.com/474x/67/95/2b/67952b52665c7166da95c3d5858ab83c.jpg"
                                width={"50px"}
                                height={"20px"}
                              />
                            </div>
                          ) : (
                            <img
                              src="https://i.pinimg.com/474x/e8/ee/07/e8ee0728e1ba12edd484c111c1f492f2.jpg"
                              width={"60px"}
                              height={"70px"}
                            />
                          )
                        ) : (
                          ""
                        )}
                        {/* ------------preview list array 3 image add cheythathu------------- */}
                        {preview && (
                          <div className="flex justify-evenly flex-wrap">
                            {previewList?.map((item) => (
                              <img
                                src={item}
                                alt=""
                                width={"80px"}
                                height={"80px"}
                              />
                            ))}
                          </div>
                        )}
                      </label>
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button
                            type="button"
                            onClick={addHouseSP}
                            variant="contained"
                            color="success"
                          >
                            Submit
                          </Button>
                          <Button
                            type="button"
                            onClick={handleReset}
                            variant="contained"
                            color="warning"
                          >
                            Reset
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </TabItem>

                  {/* DASHBOARD */}
                  <TabItem title="Bookings" icon={HiClipboardList}>
                    <div className="mt-6 bg-white rounded-xl shadow p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        House Bookings
                      </h3>

                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600">
                          <tr>
                            <th className="px-4 py-2">Tenant</th>
                            <th className="px-4 py-2">House</th>
                            <th className="px-4 py-2">Date</th>
                            {/* <th className="px-4 py-2">Status</th> */}
                          </tr>
                        </thead>

                        <tbody className="">
                          <tr>
                            <td className="px-4 py-2">Rahul</td>
                            <td className="px-4 py-2">Green Villa</td>
                            <td className="px-4 py-2">12 Jan 2025</td>
                            {/* <td className="px-4 py-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Confirmed
            </span>
          </td> */}
                          </tr>

                          <tr>
                            <td className="px-4 py-2">Anu</td>
                            <td className="px-4 py-2">Sunrise Hostel</td>
                            <td className="px-4 py-2">15 Jan 2025</td>
                            {/* <td className="px-4 py-2">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              Pending
            </span>
          </td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabItem>
                </Tabs>
              </div>
            </TabItem>

            {/* APPLIANCE */}
            <TabItem title="Appliance Manage" icon={PiWashingMachine}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Appliance Manage
                </h2>
                <Tabs
                  aria-label="Tabs with icons"
                  variant="underline"
                  className="flex justify-center"
                >
                  <TabItem active title="Appliance" icon={HiUserCircle}> 
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput value={appAdd.product} onChange={e =>
                          setAppAdd({
                            ...appAdd,
                            product:e.target.value,
                          })
                        }
                        style={{ color: "black" }}
                        placeholder="Product "
                      />
                      <TextInput value={appAdd.brand} onChange={e =>
                          setAppAdd({
                            ...appAdd,
                            brand:e.target.value,
                          })
                        }
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Brand"
                      />
                      {/* <TextInput style={{ color: "black" }} className="mt-3" type="number" placeholder="Working" /> */}
                      <TextInput value={appAdd.type} onChange={e=>
                          setAppAdd({
                            ...appAdd,
                            type:e.target.value,
                          })
                        }
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Type"
                      />
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button onClick={handleAppReset} variant="contained" color="warning">
                            Reset
                          </Button>
                          <Button onClick={addApp} variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </TabItem>

                  <TabItem title="Bookings" icon={HiClipboardList}>
                    <div className="mt-6 bg-white rounded-2xl shadow-md p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Appliance Bookings
                      </h3>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                          <thead className="bg-gray-100 text-gray-700">
                            <tr>
                              <th className="px-4 py-3 font-medium">
                                Customer
                              </th>
                              <th className="px-4 py-3 font-medium">
                                Appliance
                              </th>
                              <th className="px-4 py-3 font-medium">
                                Duration
                              </th>
                              <th className="px-4 py-3 font-medium text-center">
                                Status
                              </th>
                            </tr>
                          </thead>

                          <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition">
                              <td className="px-4 py-3">Fahad</td>
                              <td className="px-4 py-3">Washing Machine</td>
                              <td className="px-4 py-3">3 Months</td>
                              <td className="px-4 py-3 text-center">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                  Active
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabItem>
                </Tabs>
              </div>
            </TabItem>

            {/* HELPERS */}
            <TabItem title="Helpers Manage" icon={FaRegUser}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Helpers , Contacts & Support
                </h2>
                <Tabs
                  aria-label="Tabs with icons"
                  variant="underline"
                  className="flex justify-center"
                >
                  <TabItem active title="Helpers" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput value={helpAdd.jobType}
                      onChange={e=>setHelpAdd({...helpAdd,jobType:e.target.value})}
                        style={{ color: "black" }}
                        placeholder="Job Type "
                      />
                      <TextInput value={helpAdd.helpername}
                      onChange={e=>setHelpAdd({...helpAdd,helpername:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Name"
                      />
                      <TextInput value={helpAdd.number}
                      onChange={e=>setHelpAdd({...helpAdd,number:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        type="number"
                        placeholder="Number"
                      />
                      <TextInput value={helpAdd.station}
                      onChange={e=>setHelpAdd({...helpAdd,station:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Bus/Police/Railway/Auto Station"
                      />
                      <TextInput value={helpAdd.location}
                      onChange={e=>setHelpAdd({...helpAdd,location:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Location"
                      />
                      <TextInput value={helpAdd.phonenumber}
                      onChange={e=>setHelpAdd({...helpAdd,phonenumber:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        type="number"
                        placeholder="Phone Number"
                      />
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button onClick={handleHelpReset} variant="contained" color="warning">
                            Reset
                          </Button>
                          <Button onClick={handleAddHelp} variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </TabItem>

                  <TabItem title="Bookings" icon={HiClipboardList}>
                    <div className="mt-6 bg-white rounded-xl shadow p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Helper Bookings
                      </h3>

                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Helper</th>
                            <th className="px-4 py-3">Job</th>
                            <th className="px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="px-4 py-3">Neha</td>
                            <td className="px-4 py-3">Ramesh</td>
                            <td className="px-4 py-3">Cleaning</td>
                            <td className="px-4 py-3 text-green-600">
                              Completed
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabItem>
                </Tabs>
              </div>
            </TabItem>

            {/* CONTACTS
            <TabItem title="Contacts" icon={HiClipboardList}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Contacts & Support
                </h2>
                <Tabs
                  aria-label="Tabs with icons"
                  variant="underline"
                  className="flex justify-center"
                >
                  <TabItem active title="Local Helpline" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput value={helpAdd.station}
                      onChange={e=>setHelpAdd({...helpAdd,station:e.target.value})}
                        style={{ color: "black" }}
                        placeholder="Bus/Police/Railway/Auto Station"
                      />
                      <TextInput value={helpAdd.location}
                      onChange={e=>setHelpAdd({...helpAdd,location:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        placeholder="Location"
                      />
                      <TextInput value={helpAdd.phonenumber}
                      onChange={e=>setHelpAdd({...helpAdd,phonenumber:e.target.value})}
                        style={{ color: "black" }}
                        className="mt-3"
                        type="number"
                        placeholder="Phone Number"
                      />
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button  variant="contained" color="warning">
                            Reset
                          </Button>
                          <Button onClick={handleAddHelp} variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </TabItem>

                  <TabItem title="Preview" icon={MdDashboard}>
                    <p className="text-gray-600">
                      This is{" "}
                      <span className="font-semibold text-gray-900">
                        Dashboard
                      </span>{" "}
                      tab's associated content. Clicking another tab will toggle
                      the visibility.
                    </p>
                  </TabItem>
                </Tabs>
              </div>
            </TabItem> */}
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default HomeSP
