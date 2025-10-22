import React, { useState } from "react";
import LoginModalWindow from "./loginModalWindow";
import { getCookie } from "./util";

const Login = () => {
  const [showModal, setShowModal] = useState(true);

  const handleOpenModal = () => {
    setShowModal(!showModal);
    console.log("clicked");
    const username = getCookie("username");
    const password = getCookie("password");
    console.log("Username from cookie:", username);
    console.log("Password from cookie:", password); 
    
  };

  return (
    <div className="w-full flex justify-end items-center p-4 bg-gray-800 text-white relative">
      <h2
        onClick={() => {
        handleOpenModal();
        }}
        className="cursor-pointer"
      >
        Login Component
      </h2>

      {/* 👇 Conditionally render the modal */}
      {showModal && <LoginModalWindow onClose={handleOpenModal}/>}
    </div>
  );
};

export default Login;
