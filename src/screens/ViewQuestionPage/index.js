import React from 'react';
import ProfileImage from '../../assets/images/profile.jpg';

const skill = ['NodeJS', 'ReactJS', 'Load Balancing', 'Networking'];

export default function ViewQuestion() {
  const Answer = () => {
    return (
      <div>
        <div className="flex flex-row items-center mt-10">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <p className="text-btn_color text-sm px-3">Sovan</p>
          <p className="text-sm text-darkGray">about 4 hours ago</p>
        </div>
        <div className="p-5 text-base text-darkGray">CONTENT</div>
      </div>
    );
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-row">
      <div className="w-9/12">
        <p className="text-sm text-btn_color">QUESTION</p>
        <h1 className="text-fc text-2xl font-bold tracking-tight">
          Is it possible to point a subdirectory to another doamin?
        </h1>
        <div className="flex flex-row">
          <p className="text-darkGray text-sm">Posted about 12 hours ago</p>
          <div className="flex flex-row px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm px-2">46</span>
          </div>
          {skill.map((d, i) => {
            return (
              <div
                className="flex text-sm text-darkGray items-center bg-gray mx-1 px-3 rounded"
                key={i}
              >
                {d}
              </div>
            );
          })}
        </div>
        {/* Content */}
        <div className="text-black text-base my-10">
          I may be asking a stupid question here <br /> but please bear with me.{' '}
          <br />
          <br />A fully-managed, renderless dialog component jam-packed with
          accessibility and keyboard features, perfect for building completely
          custom modal and dialog windows for your next application.
          <br />
          <br />A fully-managed, renderless dialog component jam-packed with
          accessibility and keyboard features, perfect for building completely
          custom modal and dialog windows for your next application.
        </div>
        {/* Footer */}
        <div className="flex justify-between">
          <div className="flex flex-row">
            <p className="text-sm text-btn_color px-3 cursor-pointer hover:text-darkGray">
              Subscribe
            </p>
            <p className="text-sm text-btn_color px-3 cursor-pointer hover:text-darkGray">
              Share
            </p>
            <p className="text-sm text-btn_color px-3 cursor-pointer hover:text-darkGray">
              Report
            </p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src={ProfileImage}
              className="w-10 h-10 rounded-full"
              alt="Profile"
            />
            <p className="text-sm text-darkGray ml-3 mr-5">Sovan123512441</p>
          </div>
        </div>
        <div className="my-5">
          <p className="text-xl text-fc font-semibold">Leave a comment</p>
        </div>
        <div className="my-5">
          <p className="text-xl text-fc font-semibold">Submit an answer</p>
        </div>
        <div className="my-5">
          <p className="text-xl text-fc font-semibold">1 answer</p>
          <Answer />
        </div>
      </div>
      <div className="w-3/12">
        <p className="text-sm text-btn_color">RELATED</p>
        <div className="flex flex-col items-center w-8/12 border-2 border-gray rounded py-10 my-5">
          <div>
            <svg
              class="w-10 h-10 text-btn_color"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>
          </div>
          <p className="text-base text-darkGray py-1">Instant DNS</p>
          <p className="text-base text-darkGray"> Look up tools</p>
        </div>
        <p className="text-base text-darkGray">
          How to connect a digital ocean domain to Wix by pointing
        </p>
        <div className="flex flex-row py-2">
          <svg
            className="w-4 h-4 text-btn_color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-btn_color text-sm font-semibold px-3">Question</p>
        </div>
        <hr className="text-lightGray rounded" />
        <p className="text-base text-darkGray py-5">
          How to connect a digital ocean domain to Wix by pointing
        </p>
        <div className="flex flex-row py-2">
          <svg
            className="w-4 h-4 text-btn_color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-btn_color text-sm font-semibold px-3">Question</p>
        </div>
      </div>
    </div>
  );
}
