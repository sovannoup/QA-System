import React from 'react';

export default function Button(props) {
  return (
    <button
      className="bg-btn_color rounded text-white text-xl px-10 py-3 mr-3 hover:opacity-80"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
