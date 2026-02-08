import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import { addBookingAPI, GetHouseUserAPI, GetModalViewUser } from "../../services/allAPI";
import { useEffect } from "react";
import { serverURL } from "../../services/serverURL";

function Details({id}) {
  //to hold token from local storgar

  const [modalData,setModalData] = useState({})
  const [token, setToken] = useState("");

  const [getHouseUser, setGetHouseUser] = useState([]);

  //to add to bookings
  const [houseBook,setHouseBook] = useState({
    userID:"",
    username:"",
    name:"",
    type:""
  })

  const getAllHouse = async () => {
    // const token = JSON.parse( sessionStorage.getItem("token") )
    // const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);
    try {
      const searchKey = ''
      const response = await GetHouseUserAPI(searchKey,reqHeader);
      console.log(response);
      setGetHouseUser(response.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  //modalview
  const handleModal = async(id)=>{
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);
    try {
      const response  =await GetModalViewUser(id,reqHeader)
      console.log(response);
      if(response.status == 200){
        setModalData(response.data)
        console.log(modalData);
        
      }
      
    } catch (error) {
      console.log("Error" + error);
    }
  }

  useEffect(() => {
    setToken(JSON.parse( sessionStorage.getItem("token") ));
    if(token){
    getAllHouse();

    }
  }, [token]);

  // create a function to add to booking
  const handleBooking = async (id,hostelName,propertyType,token) => {
    console.log('inside handleBook');    
    console.log(id,hostelName,propertyType);
    const userData = JSON.parse(sessionStorage.getItem("userDetails"))
    console.log(userData._id,userData.username)
    setHouseBook({userID:userData._id,username:userData.username,name:hostelName,type:propertyType})
    console.log(houseBook);

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);
    try {
      const response = await addBookingAPI(houseBook,reqHeader)
      console.log(response);
      
    } catch (error) {
      console.log("Error" + error);
    }
  } 

  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Button
        className="focus:ring-0 focus:outline-none"
        onClick={() => {setOpenModal(true);{handleModal(id)}}}
      >
        View Details
      </Button>

      <Modal
        size="4xl"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader>Terms of Service</ModalHeader>
        
          
          
          
              <ModalBody>
                <div className="space-y-6">
                  {/* Carousel */}
                  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                      {modalData.uploadImage && modalData.uploadImage.length > 0 ? (
                        modalData.uploadImage.map((modalData) => (
                          <img src={`${serverURL}/uploads/${modalData}`} alt="..." />
                        ))
                      ) : (
                        <h3>No images</h3>
                      )}
                    </Carousel>
                  </div>

                  {/* Hostel Details Section */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold">{modalData?.hostelName}</h2>

                    <p className="text-gray-600">
                      <strong> Location:</strong> {modalData?.location}
                    </p>

                    <p className="text-gray-600">
                      <strong> Rent:</strong> ₹{modalData?.rent} / Month
                    </p>

                    <p className="text-gray-600">
                      <strong> Deposit:</strong> ₹{modalData?.deposit}
                    </p>

                    <p className="text-gray-600">
                      <strong> Property Type:</strong> {modalData?.propertyType}
                    </p>

                    <p className="text-gray-600">
                      <strong> Nearby Metro:</strong> {modalData?.metro}
                    </p>

                    <p className="text-gray-600">
                      <strong>Nearby Bus Stop:</strong> {modalData?.busStop}
                    </p>

                    <p className="text-gray-600">
                      <strong> Tenant Information:</strong> {modalData?.vacancy}
                    </p>

                    <p className="text-gray-600">
                      <strong> Furnishing Type:</strong> {modalData?.furnishing}
                    </p>
                  </div>
                </div>
                </ModalBody>
              
            
        

        <ModalFooter>
          <Button color="green" onClick={() => setOpenModal(false)}>
            Back
          </Button>
          <Button color="blue" onClick={() => handleBooking(id,modalData.hostelName,modalData.propertyType,token)}>
            Book A Visit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Details;
