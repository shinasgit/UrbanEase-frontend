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
import { GetHouseUserAPI } from "../../services/allAPI";
import { useEffect } from "react";
import { serverURL } from "../../services/serverURL";

function Details() {
  //to hold token from local storgar
  const [token, setToken] = useState("");

  const [getHouseUser, setGetHouseUser] = useState([]);

  const getAllHouse = async (token) => {
    // const token = JSON.parse( sessionStorage.getItem("token") )
    const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
    };
    console.log(reqHeader);
    try {
      const response = await GetHouseUserAPI(reqHeader);
      console.log(response);
      setGetHouseUser(response.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    getAllHouse(token);
  }, [token]);

  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Button
        className="focus:ring-0 focus:outline-none"
        onClick={() => setOpenModal(true)}
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
        
          {
          
          getHouseUser?.length > 0
            ? getHouseUser.map((item) => (
              <ModalBody>
                <div className="space-y-6">
                  {/* Carousel */}
                  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                      {item.uploadImage && item.uploadImage.length > 0 ? (
                        item.uploadImage.map((item) => (
                          <img src={`${serverURL}/uploads/${item}`} alt="..." />
                        ))
                      ) : (
                        <h3>No images</h3>
                      )}
                    </Carousel>
                  </div>

                  {/* Hostel Details Section */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold">{item.hostelName}</h2>

                    <p className="text-gray-600">
                      <strong> Location:</strong> {item.location}
                    </p>

                    <p className="text-gray-600">
                      <strong> Rent:</strong> ₹{item.rent} / Month
                    </p>

                    <p className="text-gray-600">
                      <strong> Deposit:</strong> ₹{item.deposit}
                    </p>

                    <p className="text-gray-600">
                      <strong> Property Type:</strong> {item.propertyType}
                    </p>

                    <p className="text-gray-600">
                      <strong> Nearby Metro:</strong> {item.metro}
                    </p>

                    <p className="text-gray-600">
                      <strong>Nearby Bus Stop:</strong> {item.busStop}
                    </p>

                    <p className="text-gray-600">
                      <strong> Tenant Information:</strong> {item.vacancy}
                    </p>

                    <p className="text-gray-600">
                      <strong> Furnishing Type:</strong> {item.furnishing}
                    </p>
                  </div>
                </div>
                </ModalBody>
              ))
            : "No Houses Available"
            
            }
        

        <ModalFooter>
          <Button color="green" onClick={() => setOpenModal(false)}>
            Back
          </Button>
          <Button color="blue" onClick={() => setOpenModal(false)}>
            Book Now
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Details;
