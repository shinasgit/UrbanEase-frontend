import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { Carousel } from "flowbite-react";


function Details() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
         <Button className="focus:ring-0 focus:outline-none" onClick={() => setOpenModal(true)}>
  View Details
</Button>

      <Modal size="4xl" dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody>
  <div className="space-y-6">

    {/* Carousel */}
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>

    {/* Hostel Details Section */}
    <div className="space-y-3">

      <h2 className="text-xl font-bold">The Scholars' Hub Hostel</h2>

      <p className="text-gray-600">
        <strong> Location:</strong> Kakkanad
      </p>

      <p className="text-gray-600">
        <strong> Rent:</strong> ₹5000 / Month
      </p>

      <p className="text-gray-600">
        <strong> Deposit:</strong> ₹3000
      </p>

      <p className="text-gray-600">
        <strong> Property Type:</strong> Hostel (Single Room)
      </p>

      <p className="text-gray-600">
        <strong> Nearby Metro:</strong> Kakkanad Metro Station
      </p>

      <p className="text-gray-600">
        <strong>Nearby Bus Stop:</strong> Infopark Bus Stop
      </p>

      <p className="text-gray-600">
        <strong> Tenant Information:</strong> Students & Working Professionals
      </p>

      <p className="text-gray-600">
        <strong> Furnishing Type:</strong> Semi-Furnished
      </p>
      
    </div>

  </div>
</ModalBody>

        <ModalFooter>
          
          <Button  color="green" onClick={() => setOpenModal(false)}>
            Back 
          </Button>
          <Button color="blue" onClick={() => setOpenModal(false)}>Book Now</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Details