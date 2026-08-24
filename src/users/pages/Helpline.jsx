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
      <div className="ue-bg-page pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen transition-colors duration-300">
        {/* PAGE WRAPPER */}
        <div className="ue-bg-surface ue-border p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100 transition-colors duration-300">
          
          <div className="mb-8">
            <h1 className="ue-text-primary text-3xl font-extrabold text-gray-800">
              Local Helpline Contacts
            </h1>
            <p className="ue-text-muted text-gray-500 mt-1">
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
                <div className="ue-card bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center transition-colors duration-300">
              <div>
                <h2 className="ue-text-primary text-xl font-semibold">{item.station}</h2>

                <p className="ue-text-muted text-gray-700 flex items-center gap-2">
                  <b className="ue-text-primary">Location:</b> {item.location}
                </p>

                <p className="ue-text-muted text-gray-700 flex items-center gap-2 mt-1">
                  <b className="ue-text-primary">Phone:</b> {item.phonenumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:100"
                  className="bg-[#5BA4D4] text-white px-5 py-2.5 rounded-xl hover:bg-[#4a90c0] text-center transition-colors"
                >
                  Call Now
                </a>

                <a
                  href="https://maps.google.com/?q=Police+Station"
                  target="_blank"
                  className="bg-gray-200 dark:bg-[#1B3A5C] text-gray-800 dark:text-gray-200 px-5 py-2.5 rounded-xl hover:bg-gray-300 dark:hover:bg-[#2A4B70] text-center transition-colors"
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
