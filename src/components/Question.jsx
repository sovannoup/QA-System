import React from 'react';
const skill = ['NodeJS', 'ReactJS', 'Load Balancing', 'Networking'];

export default function Question(props) {
  return (
    <div className="w-full my-4">
      <p className="text-fc text-1xl font-bold">Custom Images Status Pending</p>
      <p className="text-black text-sm">
        I am uploading my image to backend, but it seem that it keeps on showing
        its status as pending. I have been waiting for half hour, the images is
        uploaded but face some errors. Gray colors are displayed using an equal
        amount of power to all of the light sources.I have been wa...
      </p>
      <div className="flex flex-row">
        <div>
          <span className="text-sm text-btn_color">1 answer</span>
        </div>
        <div className="flex ml-4 items-center">
          <li className="text-sm text-black">a day ago</li>
        </div>
        <div className="flex ml-4 items-center">
          <li className="text-sm text-black">By Noup Sovan</li>
        </div>
        {skill.map((d, i) => {
          return (
            <div
              className="flex text-sm text-black items-center bg-gray mx-1 px-3 rounded"
              key={i}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}
