import React from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";
import { useEffect, useState } from "react";
import { GetHelpUserAPI } from "../../services/allAPI";

function Helpline() {

  const [token,setToken] = useState('')
    
      const [getHelp,setGetHelp]=useState([])
  
      const getHelper = async(token)=>{
          const updatedToken = token.replace(/"/g, "");
          const reqHeader = {
            Authorization: `Bearer ${updatedToken}`,
          };
          console.log(reqHeader);
          try {
            const response = await GetHelpUserAPI(reqHeader)
            console.log(response);
            setGetHelp(response.data)
            
          } catch (error) {
            console.log("Error"+error);
          }
        }
      
        useEffect(()=>{
          setToken(sessionStorage.getItem('token'))
          getHelper(token)
        },[token])

  return (
    <>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen">
        {/* PAGE WRAPPER */}
        <div className="p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100">
          
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Local Helpline Contacts
            </h1>
            <p className="text-gray-500 mt-1">
              Easily access essential local services including police, railway
              station, private bus stand, and KSRTC bus stand for quick
              assistance anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Police Station */}
            {
              getHelp?.length>0?
              getHelp.map((item)=>(
                <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.station}</h2>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Location:</b> {item.location}
                </p>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Phone:</b> {item.phonenumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:100"
                  className="bg-blue-800 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 text-center"
                >
                  Call Now
                </a>

                <a
                  href="https://maps.google.com/?q=Police+Station"
                  target="_blank"
                  className="bg-sky-500 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 text-center"
                >
                  Location
                </a>
              </div>
            </div>
              )):"No Nearby found"
            }

            
              
          

            
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <UrbanFooter />
    </>
  );
}

export default Helpline;
