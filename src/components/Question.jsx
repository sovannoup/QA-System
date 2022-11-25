import React, { useEffect, useState } from 'react';
import TrimString from '../utils/TrimString';
const skill = ['NodeJS', 'ReactJS', 'Load Balancing', 'Networking'];

export default function Question(props) {
  const [data, setData] = useState();
  useEffect(() => {
    setData(props.data);
  }, [props]);
  return (
    <div
      className="px-3 py-3 w-full cursor-pointer hover:bg-gray"
      onClick={props.onClick}
    >
      <p className="text-fc text-1xl font-bold">
        {data && data.data.title && data.data.title}
      </p>
      <p className="text-black text-base py-2">
        {data && data.data.body && TrimString(data.data.body, 230) + ' ...'}
      </p>
      <div className="flex flex-row">
        <div>
          <span className="text-sm text-btn_color">
            {data && data.data.numAnswer && data.data.numAnswer} answer
          </span>
        </div>
        <div className="flex ml-4 items-center">
          <li className="text-sm text-black">
            {data && data.data.created && data.data.created}
          </li>
        </div>
        <div className="flex ml-4 items-center">
          <li className="text-sm text-black">
            By {data && data.fullname && data.fullname}
          </li>
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
