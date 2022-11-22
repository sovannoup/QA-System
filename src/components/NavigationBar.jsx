import React, { Fragment, useState } from 'react';
import ProfileImage from '../assets/images/profile.jpg';
import Button from './Button';
import { Dialog, Transition } from '@headlessui/react';
export default function NavigationBar() {
  const [isLogin, setLogin] = useState(false);
  const [showPW, setShowPW] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const changeShowLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="flex justify-between items-center py-5 px-20">
      {/* Left Side */}
      <div className="flex flex-row">
        <div className="px-3 text-xl text-fc font-bold border-r-2">
          QUESTIONS
        </div>
        <div className="px-3 text-xl text-fc font-bold ">SIGNUP</div>
      </div>
      {/* Right Side */}
      {isLogin ? (
        <div className="flex flex-row">
          {/* Search Box */}
          <div className="relative mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-5 h-5 my-auto text-black left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Questions"
              className="h-full pl-12 pr-4 text-black border border-lightGray bg-gray rounded-md outline-none focus:ring-inset-2 focus:ring-2"
            />
          </div>
          {/* User Profile */}
          <div className="flex items-center justify-center">
            <div className=" relative inline-block text-left dropdown">
              <span className="rounded-md shadow-sm">
                <button
                  className="inline-flex justify-center w-full px-4 items-center text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                  aria-controls="headlessui-menu-items-117"
                >
                  <img
                    src={ProfileImage}
                    className="w-10 h-10 rounded-full"
                    alt="Profile"
                  />
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
              </span>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-0 mt-2 origin-top-right border border-lightGray divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  role="menu"
                >
                  <div className="px-4 pt-4 pb-2">
                    <p className="text-base font-bold leading-5 text-gray-900 truncate mx-3">
                      NOUP SOVAN
                    </p>
                  </div>
                  <div className="py-2">
                    <a
                      href="/"
                      className="text-black flex justify-between w-full px-4 py-2 text-base leading-5 text-left mx-3 hover:bg-gray"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="/"
                      className="text-black flex justify-between w-full px-4 py-2 text-base leading-5 text-left mx-3 hover:bg-gray"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Button text="LOGIN" onClick={changeShowLogin} />
        </div>
      )}

      <Transition appear show={showLogin} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setShowLogin(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
                  <div className="p-12 bg-superwhite border border-lightGray rounded-3xl w-full ">
                    <div className="mb-7">
                      <h3 className="font-semibold text-2xl text-fc">
                        Sign In{' '}
                      </h3>
                      <p className="text-lightGray text-sm">
                        Don't have an account?{' '}
                        <a
                          href="#"
                          className="text-sm text-btn_color font-bold hover:text-fc"
                        >
                          Sign Up
                        </a>
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="">
                        <input
                          className=" w-full text-xl text-fc  px-4 py-3 bg-superwhite focus:bg-gray-100 border  border-fc rounded-lg focus:outline-none focus:border-purple-400"
                          type=""
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative" x-data="{ show: true }">
                        <input
                          placeholder="Password"
                          className="text-base text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                        />
                        <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                          {showPW ? (
                            <svg
                              className="h-4 text-btn_color cursor-pointer"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => {
                                setShowPW(!showPW);
                              }}
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              className="h-4 text-btn_color cursor-pointer"
                              fill="none"
                              onClick={() => {
                                setShowPW(!showPW);
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                              ></path>
                            </svg>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm ml-auto">
                          <a href="#" className="text-btn_color hover:text-fc">
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-8/12 mx-auto flex justify-center bg-btn_color text-white  hover:opacity-60  p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-200"
                        >
                          Sign in
                        </button>
                      </div>
                      <div className="flex items-center justify-center space-x-2 my-5">
                        <span className="h-px w-16 bg-gray-100"></span>
                        <span className="text-gray-300 font-normal">or</span>
                        <span className="h-px w-16 bg-gray-100"></span>
                      </div>
                      <div className="flex justify-center gap-5 w-full ">
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                        >
                          <svg
                            className="w-4 mr-2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#EA4335"
                              d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                            />
                            <path
                              fill="#34A853"
                              d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                            />
                            <path
                              fill="#4A90E2"
                              d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                            />
                          </svg>
                          <span>Google</span>
                        </button>

                        <button
                          type="submit"
                          className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-"
                        >
                          <svg
                            className="w-4"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#fff"
                              fillRule="evenodd"
                              d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"
                            ></path>
                          </svg>
                          <span>Facebook</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-7 text-center text-gray-300 text-xs">
                      <span>
                        Copyright © 2021-2023
                        <a
                          href="https://codepen.io/uidesignhub"
                          rel=""
                          target="_blank"
                          title="Codepen aji"
                          className="text-purple-500 hover:text-purple-600 "
                        >
                          AJI
                        </a>
                      </span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
