import React from 'react';
import Button from '../../components/Button';
import Question from '../../components/Question';

export default function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Home Title */}
      <div className="flex justify-center">
        <p className="text-fc text-2xl">Questions</p>
      </div>
      <div className="flex justify-center text-fc text-xl">
        Ask a development question or answer others' in our diverse Q&A section.
      </div>
      {/* Search Box */}
      <div className="flex justify-center ">
        <div className="w-9/12 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3 bottom-0 w-5 h-5 my-auto text-black left-3"
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
            className="w-full mt-3 py-2 pl-12 pr-4 text-black border border-lightGray rounded-md outline-none focus:ring-inset-1 focus:ring-1"
          />
        </div>
      </div>
      <div className="flex w-9/12 justify-between mx-auto py-5">
        <div className="flex flex-row items-center">
          <span className="mr-5 text-sm text-black">15102 Questions</span>
          <Button text="Ask a question" />
        </div>
        <div className="flex flex-row">
          <div className=" relative inline-block text-left dropdown p-3">
            <span className="rounded-md shadow-sm">
              <button
                className="inline-flex justify-center w-full px-4 items-center text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span className="text-base">All</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1 text-btn_color rounded-full border"
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
                    className="text-black flex justify-between w-full pl-3 pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
                    role="menuitem"
                  >
                    All
                  </a>
                  <a
                    href="/"
                    className="text-black flex justify-between w-full pl-3 pr-5 border-y-2 border-gray py-2 text-base leading-5 text-left hover:bg-gray"
                    role="menuitem"
                  >
                    Answered
                  </a>
                  <a
                    href="/"
                    className="text-black flex justify-between w-full pl-3 pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
                    role="menuitem"
                  >
                    Unanswered
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative inline-block text-left dropdown p-3">
            <span className="rounded-md shadow-sm">
              <button
                className="inline-flex justify-center w-full px-4 items-center text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span className="text-base">Most Recent</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1 text-btn_color rounded-full border"
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
                    className="text-black flex justify-between w-full pl-3 pr-5 py-2 border-b-2 border-gray text-base leading-5 text-left hover:bg-gray"
                    role="menuitem"
                  >
                    Most Recent
                  </a>
                  <a
                    href="/"
                    className="text-black flex justify-between w-full pl-3 pr-5 py-2 text-base leading-5 text-left hover:bg-gray"
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
      <div className="flex flex-col w-9/12 justify-center mx-auto">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <div className="flex justify-center my-5">
        <button className="px-5 py-3 rounded text-darkGray text-sm bg-gray">
          Load More Questions
        </button>
      </div>
    </div>
  );
}
