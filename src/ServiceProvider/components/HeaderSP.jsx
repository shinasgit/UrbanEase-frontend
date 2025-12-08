import React from "react";
import { CiChat1 } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { Card, Dropdown, DropdownItem } from "flowbite-react";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header
      className="bg-white fixed top-0 left-0 right-0 z-50 
            w-[98%] mx-auto mt-3 shadow-lg rounded-2xl px-6 py-2 
            flex items-center justify-between"
    >
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg overflow-hidden shadow">
          <img
            src="../public/logo.png"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg font-bold text-gray-800">UrbanEase</h1>
      </div>

      {/* MIDDLE SEARCH */}
      {/* <div className="hidden md:block w-1/3 relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm"
                />
                <svg
                    className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div> */}

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="p-2 h-9 w-9 rounded-full bg-gray-50">
            <CiChat1 className="text-gray-600 text-lg" />
          </button>

          <button className="relative p-2 h-9 w-9 rounded-full bg-gray-50">
            <IoNotificationsOutline className="text-gray-600 text-lg" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        <div className="flex items-center bg-gray-100 rounded-xl px-3 py-1.5 shadow-sm">
          <Button onClick={() => setOpenModal(true)}>
            <div className="flex flex-col text-right mr-3">
              <span className="font-medium text-gray-800 text-sm">
                Cora Richards
              </span>
              <span className="text-xs text-gray-500">cora.r@edu.com</span>
            </div>

            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                src="https://placehold.co/40x40/F59E0B/FFFFFF?text=CR"
                className="w-full h-full object-cover"
              />
            </div>
          </Button>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <ModalHeader />
            <ModalBody>
              <div className="text-center bg-white">
                <Card className="max-w-sm  !bg-white">
                  
                  <div className="flex flex-col items-center pb-10  bg-white">
                    <img 
                      alt="Bonnie image"
                      height="96"
                      src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                      width="96"
                      className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      Bonnie Green
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Visual Designer
                    </span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      >
                        Add friend
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </Card>
                
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </header>
  );
}
