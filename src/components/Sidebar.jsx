import { Tab } from "@headlessui/react";
import Recent from "./Recent";

const Sidebar = () => {
  const TabName = ["Recent", "Drafts", "Trash", "Posted"];
  return (
    <div className="h-screen w-full bg-yellow-500">
      <Tab.Group>
        <div className="w-full h-full space-x-6 flex flex-row bg-white">
          <Tab.List className="flex flex-col space-y-10 border border-gray-600/20 py-8 px-10 bg-white p-1 drop-shadow-lg">
            {TabName.map((item, index) => (
              <Tab
                key={index}
                className="ring-white/60 ring-offset ring-offset-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:rounded-lg focus:bg-blue-400 focus:text-white px-6 py-2"
              >
                {item}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Recent />
            </Tab.Panel>
            <Tab.Panel>Drafts</Tab.Panel>
            <Tab.Panel>Trash</Tab.Panel>
            <Tab.Panel>Posted</Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
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
