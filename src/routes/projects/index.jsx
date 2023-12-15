import Sidebar from "../../components/Sidebar";
import Recents from "./recents";
import Drafts from "./drafts";
import Trash from "./trash";
import { Tab, Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";
import SelectProjects from "./select-projects";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-full -z-10 flex flex-row gap-3">
        <Tab.Group>
          <Tab.List>
            <Sidebar />
          </Tab.List>
          <div className=" bg-white w-full min-h-screen drop-shadow-xl m-4 p-10">
            <div>
              <Tab.Panels>
                <Tab.Panel>
                  <Recents onAddProjects={() => setIsOpen(true)} />
                </Tab.Panel>
                <Tab.Panel>
                  <Drafts />
                </Tab.Panel>
                <Tab.Panel>
                  <Trash />
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="max-w-5xl container transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <SelectProjects onCloseModal={() => setIsOpen(false)} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

// export default function Projects() {
//   return (
//     <>
//       <div className="w-full -z-10 flex flex-row gap-3">
//         <Sidebar />
//         <div className=" bg-white w-full min-h-screen drop-shadow-xl m-4 p-10">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
