import { Tab } from "@headlessui/react";
import { FiClock, FiEdit, FiTrash2, FiCheckCircle } from "react-icons/fi";

const Sidebar = () => {
  const menu = [
    { name: "Recents", icon: <FiClock /> },
    { name: "Drafts", icon: <FiEdit /> },
    { name: "Trash", icon: <FiTrash2 /> },
    { name: "Posted", icon: <FiCheckCircle /> },
  ];

  return (
    <div className="flex flex-col min-w-fit bg-white border-t-2 py-5 drop-shadow-xl min-h-screen px-5 space-y-5">
      {menu.map((item, index) => (
        <Tab.List key={index}>
          <Tab
            className={({ selected }) =>
              `w-full flex flex-row justify-between text-gray-700  items-center px-10 py-3 rounded-lg cursor-pointer border-none outline-none ${
                selected ? "bg-teal-500 text-white" : ""
              }`
            }
          >
            <div className="flex flex-row items-center space-x-3">
              {item.icon}

              <h1 className="text-lg font-semibold ">{item.name}</h1>
            </div>
          </Tab>
        </Tab.List>
      ))}
    </div>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col min-w-fit bg-white space-y-3 py-5 drop-shadow-xl min-h-screen px-5 ">
//       <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
//         Recents
//       </span>
//       <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
//         Drafts
//       </span>
//       <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
//         Trash
//       </span>
//       <span className="bg-gray-50 text-gray-900 px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ">
//         Posted
//       </span>
//     </div>
//   );
// };

// export default Sidebar;
