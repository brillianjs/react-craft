import { Tab } from "@headlessui/react";
import { FiFileText, FiEdit, FiCheckCircle } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../../assets/images/showcase-projects/1.png";
import Image2 from "../../assets/images/showcase-projects/2.png";
import Image3 from "../../assets/images/showcase-projects/3.png";
import Image4 from "../../assets/images/showcase-projects/4.png";
import { toast } from "react-toastify";

export default function SelectProjects({ onCloseModal }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const myImage = [Image1, Image2, Image3, Image4];

  const menu = [
    {
      name: "Init your website",
      icon: <FiFileText />,
    },
    {
      name: "Select Templates",
      icon: <FiEdit />,
    },
    {
      name: "Checkup",
      icon: <FiCheckCircle />,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full flex flex-col space-y-5 z-40">
      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-500">
          Create Your Website
        </h1>
      </div>
      <div className="w-full border border-b-0"></div>
      <div className="w-full">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List
            className={"flex flex-row justify-center items-center gap-4"}
          >
            {menu.map((item, index) => (
              <div
                className="w-full flex flex-row justify-center items-center"
                key={index}
              >
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `w-full flex flex-row justify-between text-gray-700 outline-none items-center  cursor-pointer whitespace-nowrap  ${
                      selected ? "text-teal-500 " : ""
                    }`
                  }
                >
                  <div className="flex flex-row items-center space-x-3">
                    {item.icon}
                    <h1 className="text-base font-semibold ">{item.name}</h1>
                  </div>
                </Tab>
                <div className="w-full border border-b-0"></div>
              </div>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="py-10">
                <Input
                  label={"Name Project"}
                  placeholder={"input name...."}
                ></Input>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <Carousel responsive={responsive}>
                {myImage.map((item, index) => (
                  <div className="w-full  py-10 flex justify-center items-center bg-gray-200 rounded-xl my-3">
                    <img src={item} alt="img" className="max-w-md " />
                  </div>
                ))}
              </Carousel>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full flex flex-col my-5 p-5">
                <div className="w-full flex flex-row space-x-5">
                  <h1 className="font-bold text-gray-500">Name Projects :</h1>
                  <p className="font-light">Projects Amburadul</p>
                </div>
                <h1 className="font-bold text-gray-500">Template :</h1>
                <div className="bg-gray-200 p-5 rounded-lg flex justify-center items-center">
                  <img
                    className="max-w-md container"
                    src={Image1}
                    alt="gambartest"
                  />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="w-full flex flex-row justify-end gap-3 items-center">
        <div className="flex flex-row gap-1">
          <Button
            variant="secondary"
            onClick={() =>
              selectedIndex >= 1
                ? setSelectedIndex(selectedIndex - 1)
                : onCloseModal()
            }
          >
            {selectedIndex >= 1 ? "Back" : "Cancel"}
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              selectedIndex < 2
                ? setSelectedIndex(selectedIndex + 1)
                : (() => {
                    onCloseModal();
                    toast.success("🦄 Your Project has been created!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  })()
            }
          >
            {selectedIndex < 2 ? "Next" : "Finish"}
          </Button>
        </div>
      </div>
    </div>
  );
}
