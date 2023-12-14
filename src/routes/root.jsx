import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../components/LoginModal";

export default function Root() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    console.log("open modal", isModalOpen);
  };
  return (
    <>
      <Topbar onLoginButtonClick={openModal} />
      <div className="w-full">
        <Outlet />
      </div>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
