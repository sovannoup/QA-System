import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TagsInput } from 'react-tag-input-component';
import QuestionAPI from '../../api/question';

export default function AskQuestion() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);

  let navigate = useNavigate();

  const onSubmit = async () => {
    if (localStorage.getItem('token') === null) {
      alert('Please login first to ask question');
      return;
    }
    if (title === '' || body === '' || tags.length === 0) return;
    const data = { title, body, tags };
    await QuestionAPI.createQuestion(data)
      .then((res) => {
        navigate('/view-question', {
          state: { mydata: res.data.result },
        });
      })
      .catch((err) => {
        alert('Login Required!');
      });
  };

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
            type={'text'}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full text-darkGray border-2 border-lightGray p-3 rounded mt-2 focus:border-fc focus:outline-none"
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
            type={'text'}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            className="w-full text-fc border-2 border-lightGray p-3 rounded mt-2 focus:border-fc focus:outline-none"
            placeholder="Text Editor required"
          />
        </div>
      </div>

      <div className="my-5">
        <p className="text-xl text-fc font-semibold pb-2">Tags and Topics</p>
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
        <button
          onClick={onSubmit}
          className="w-full py-3 border-2 border-btn_color text-btn_color rounded font-semibold mt-10 hover:bg-btn_color hover:text-white"
        >
          Post My Question
        </button>
      </div>
    </div>
  );
}
