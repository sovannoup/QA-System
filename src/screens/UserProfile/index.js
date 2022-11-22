import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import ProfileImage from '../../assets/images/profile.jpg';
import Question from '../../components/Question';
const skill = ['NodeJS', 'ReactJS', 'VueJS', 'Networking', 'Docker'];

export default function UserProfile() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const groupChanged = (i) => {
    if (i === 2) return;
    setSelectedIndex(i);
  };

  return (
    <div className="max-w-screen-xl mx-auto justify-between flex flex-row">
      {/* Left Side */}
      <div className="flex flex-col w-4/12 border-[2px] border-gray rounded pt-10 pb-8 items-center justify-center">
        <img
          src={ProfileImage}
          className="rounded-full"
          alt="Profile"
          width={180}
          height={50}
        />
        <p className="text-black text-1xl font-semibold mt-5 mb-3">
          Noup Sovan
        </p>
        <p className="text-xl text-darkGray py-3 border-b-[2px] border-gray pl-5">
          I am a software engineer in Kirirom Institute of Technology
        </p>
        <div className="self-start border-b-[2px] border-gray py-3">
          <p className="text-fc text-base px-5 py-2">SKILLS</p>
          <div className="flex flex-row px-5 flex-wrap">
            {skill.map((d, i) => {
              return (
                <div
                  className="flex text-sm text-darkGray items-center bg-gray mr-1 py-1 px-3 rounded my-1"
                  key={i}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full self-start px-5 pt-3 pb-5 border-b-[2px] border-gray">
          <p className="text-fc text-base px-5 py-2">FOLLOW ME</p>
          <div className="flex flex-row items-center">
            <svg
              className="w-4 h-4 mr-3 text-fc"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
            <p className="text-xl text-btn_color">morakot.it</p>
          </div>
        </div>
        <div className="flex w-full justify-center items-center pt-10">
          <button className="bg-btn_color text-white rounded px-[5rem] py-3">
            Edit Profile
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-7/12">
        <p className="text-black text-1xl font-semibold">Recognize</p>
        <div className="flex rounded bg-gray border-1 border-gray py-3 justify-center py-5">
          <p className="pt-10 text-xl text-fc font-bold">No Rewards yet</p>
        </div>
        <p className="text-black text-1xl font-semibold py-5">Posts</p>
        <div>
          <Tab.Group selectedIndex={selectedIndex} onChange={groupChanged}>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab
                className={({ selected }) => {
                  return [
                    'text-xl mr-3 py-3',
                    selected
                      ? ' border-b-2 border-btn_color focus:outline-none'
                      : 'bg-gray',
                  ];
                }}
              >
                All
              </Tab>
              <Tab
                className={({ selected }) => {
                  return [
                    'text-xl mr-3 py-3',
                    selected
                      ? ' border-b-2 border-btn_color focus:outline-none'
                      : 'bg-gray',
                  ];
                }}
              >
                <p className="mx-3">Questions</p>
              </Tab>
              <Tab
                disabled
                className="w-full cursor-default focus:outline-none"
              >
                <div className="relative w-6/12 float-right mr-10">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 z-50">
                    <svg
                      className="w-5 h-5 text-fc"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border border-lightGray drop-shadow-md text-black text-xl rounded-lg focus:border-btn_color focus:outline-none w-full pl-10 p-2.5"
                    placeholder="Filter Posts"
                    required
                  />
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel key={0}>
                <div className="flex justify-between mx-auto py-5">
                  <div className="flex flex-row items-center">
                    <span className="mr-5 text-base text-fc">1 Posts</span>
                  </div>
                  <div className="flex flex-row">
                    <div className=" relative inline-block text-left dropdown p-3">
                      <span className="rounded-md">
                        <button
                          className="flex inline-flex justify-center w-full px-4 text-base font-medium leading-5 text-black transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="true"
                          aria-controls="headlessui-menu-items-117"
                        >
                          <p className="text-base">All</p>
                          <svg
                            className="w-4 h-4 ml-2 -mr-1 text-btn_color rounded-full border"
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
                          <div>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 bg-white pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              All
                            </a>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 bg-white pr-5 border-y-2 border-gray py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Answered
                            </a>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 bg-white pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Unanswered
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" relative inline-block text-left dropdown p-3">
                      <span className="rounded-md">
                        <button
                          className="inline-flex justify-center w-full px-4 text-base font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="true"
                          aria-controls="headlessui-menu-items-117"
                        >
                          <span className="text-base">Most Recent</span>
                          <svg
                            className="w-4 h-4 ml-2 -mr-1 text-btn_color rounded-full border"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                          </svg>
                        </button>
                      </span>
                      <div className="flex opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div
                          className="absolute right-0 w-100 mt-2 origin-top-right border border-lightGray divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                          role="menu"
                        >
                          <div>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 pr-5 bg-white py-2 border-b-2 border-gray text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Most Recent
                            </a>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 pr-5 bg-white py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Popular
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-base text-btn_color">PUBLISHED QUESTION</p>
                <Question />
              </Tab.Panel>
              <Tab.Panel key={1}>
                <div className="flex justify-between mx-auto py-5">
                  <div className="flex flex-row items-center">
                    <span className="mr-5 text-base text-fc">2 Posts</span>
                  </div>
                  <div className="flex flex-row">
                    <div className=" relative inline-block text-left dropdown p-3">
                      <span className="rounded-md">
                        <button
                          className="flex inline-flex justify-center w-full px-4 text-base font-medium leading-5 text-black transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="true"
                          aria-controls="headlessui-menu-items-117"
                        >
                          <p className="text-base">All</p>
                          <svg
                            className="w-4 h-4 ml-2 -mr-1 text-btn_color rounded-full border"
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
                          <div>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 bg-white pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              All
                            </a>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 bg-white pr-5 border-y-2 border-gray py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Answered
                            </a>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 bg-white pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Unanswered
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" relative inline-block text-left dropdown p-3">
                      <span className="rounded-md">
                        <button
                          className="inline-flex justify-center w-full px-4 text-base font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="true"
                          aria-controls="headlessui-menu-items-117"
                        >
                          <span className="text-base">Most Recent</span>
                          <svg
                            className="w-4 h-4 ml-2 -mr-1 text-btn_color rounded-full border"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                          </svg>
                        </button>
                      </span>
                      <div className="flex opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div
                          className="absolute right-0 w-100 mt-2 origin-top-right border border-lightGray divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                          role="menu"
                        >
                          <div>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 pr-5 bg-white py-2 border-b-2 border-gray text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Most Recent
                            </a>
                            <a
                              href="/"
                              className="text-black flex justify-between w-full pl-3 pr-5 bg-white py-2 text-base leading-5 text-left hover:bg-gray"
                              role="menuitem"
                            >
                              Popular
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-base text-btn_color">PUBLISHED QUESTION</p>
                <Question />
                <Question />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
