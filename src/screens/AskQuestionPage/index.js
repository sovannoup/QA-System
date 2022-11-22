import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';

export default function AskQuestion() {
  const [tags, setTags] = useState([]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <p className="text-fc text-2xl font-bold">Ask Community</p>
      <p className="text-black text-xl">
        Running into troble? Our developer community is here to help! Ask
        anything related to administation, programming, devops, open source.
      </p>
      <div className="my-5">
        <p className="text-xl text-fc font-semibold">Question Title</p>
        <span className="text-sm text-darkGray">
          Enter 15 characters or more.
        </span>
        <div>
          <input
            className="w-full border-2 border-lightGray p-3 rounded mt-2 focus:border-btn_color focus:outline-none"
            placeholder="How to setup automatic deployment with Git with a VPS"
          />
        </div>
      </div>
      <div className="my-5">
        <p className="text-xl text-fc font-semibold">Question Body</p>
        <span className="text-sm text-darkGray">
          Write your full question here, including any relavent information like
          operating system, error logs, and step taken.
        </span>
        <div>
          <input
            className="w-full border-2 border-lightGray p-3 rounded mt-2 focus:border-btn_color focus:outline-none"
            placeholder="Text Editor required"
          />
        </div>
      </div>

      <div className="my-5">
        <p className="text-xl text-fc font-semibold">Tags and Topics</p>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="Tags"
          placeHolder="Enter Tags for this question"
        />
        {/* <input
            type="text"
            onKeyDown={onAddTags}
            className="w-full border-2 border-lightGray p-3 rounded mt-2 focus:border-btn_color focus:outline-none"
            placeholder="Select tags for this question..."
          /> */}
      </div>
      <div className="my-5">
        <button className="w-full py-3 border-2 border-btn_color text-btn_color rounded font-semibold mt-10">
          Post My Question
        </button>
      </div>
    </div>
  );
}
