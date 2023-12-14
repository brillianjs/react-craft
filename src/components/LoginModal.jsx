import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import LoginImage from "../assets/images/login-image.svg?react";

export default function LoginModal({ isOpen, onClose }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                <Dialog.Panel className="max-w-4xl container transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-row justify-center items-center gap-4">
                    <div className="w-full">
                      <LoginImage />
                    </div>

                    <div className="w-full flex flex-col space-y-4">
                      <h1 className="text-2xl font-bold text-gray-900">
                        Login
                      </h1>
                      <Input
                        placeholder={"Your email..."}
                        label={"Email"}
                        type={"email"}
                      ></Input>
                      <Input
                        placeholder={"Your password..."}
                        label={"Password"}
                        type={"password"}
                      ></Input>
                      <div>
                        <input type="checkbox"></input>
                        <span className="ml-2 text-gray-500">Remember me</span>
                      </div>
                      <Button onClick={onClose}>Login</Button>
                      <div className="flex flex-row justify-center items-center">
                        <span className="text-gray-500">
                          Don't have an account?
                        </span>
                        <a
                          href="#"
                          className="text-teal-500 hover:text-teal-700 transition-all"
                        >
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
