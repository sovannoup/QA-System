import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionAPI from '../../api/question';
import Button from '../../components/Button';
import Question from '../../components/Question';
import Pagination from 'rc-pagination';
import { data } from 'autoprefixer';

export default function HomePage(props) {
  const [numQuestion, setNumQuestion] = useState(0);
  const [result, setResult] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [popular, setPopular] = useState(0);

  const [perPage, setPerPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(5);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  // const getData = (current, pageSize) => {
  //   // Normally you should get the data from the server
  //   return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  // };

  const PaginationChange = async (page, pageSize) => {
    if (page === current) return;
    setCurrent(page);
    setSize(pageSize);

    const data = { answer: answer, popular: popular, page: page - 1 };
    await QuestionAPI.getQuestion(data)
      .then((res) => {
        setNumQuestion(res.data.result.numQuestion);
        setResult((result) => [...result, ...res.data.result.questions]);
      })
      .catch((err) => {
        throw err;
      });
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <button>
          <svg
            className="w-4 h-4 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button>
          <svg
            className="w-4 h-4 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      );
    }
    return originalElement;
  };

  let navigate = useNavigate();

  useEffect(() => {
    return async () => {
      const data = { answer: answer, popular: popular, page: current - 1 };
      await QuestionAPI.getQuestion(data)
        .then((res) => {
          setNumQuestion(res.data.result.numQuestion);
          setResult((result) => [...result, ...res.data.result.questions]);
        })
        .catch((err) => {
          throw err;
        });
    };
  }, []);

  const changeAnswer = async (answer) => {
    const data = { answer: answer, popular: popular, page: current - 1 };
    await QuestionAPI.getQuestion(data)
      .then((res) => {
        setNumQuestion(res.data.result.numQuestion);
        setResult((result) => [...result, ...res.data.result.questions]);
      })
      .catch((err) => {
        throw err;
      });
    setAnswer(answer);
  };

  const changePopular = async (popular) => {
    const data = { answer: answer, popular: popular, page: current - 1 };
    await QuestionAPI.getQuestion(data)
      .then((res) => {
        setNumQuestion(res.data.result.numQuestion);
        setResult((result) => [...result, ...res.data.result.questions]);
      })
      .catch((err) => {
        throw err;
      });
    setPopular(popular);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Home Title */}
      <div className="flex justify-center">
        <p className="text-fc text-2xl font-semibold">Questions</p>
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
          <span className="mr-5 text-base text-black">
            {numQuestion ? numQuestion : 0} Questions
          </span>
          <Button
            text="Ask a question"
            onClick={() => {
              navigate('/ask-question');
            }}
          />
        </div>
        <div className="flex flex-row">
          <div className=" relative inline-block text-left dropdown p-3">
            <span className="rounded-md">
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
                  <span
                    onClick={() => {
                      changeAnswer(0);
                    }}
                    className="text-black flex justify-between w-full pl-3 bg-white pr-5 py-2 text-base leading-5 text-left hover:bg-gray cursor-pointer"
                    role="menuitem"
                  >
                    All
                  </span>
                  <span
                    onClick={() => {
                      changeAnswer(1);
                    }}
                    className="text-black flex justify-between w-full pl-3 bg-white pr-5 border-y-2 border-gray py-2 text-base leading-5 text-left hover:bg-gray cursor-pointer"
                    role="menuitem"
                  >
                    Answered
                  </span>
                  <span
                    onClick={() => {
                      changeAnswer(2);
                    }}
                    className="text-black flex justify-between w-full pl-3 bg-white pr-5 py-2 text-base leading-5 text-left hover:bg-gray cursor-pointer"
                    role="menuitem"
                  >
                    Unanswered
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative inline-block text-left dropdown p-3">
            <span className="rounded-md">
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
                  <span
                    onClick={() => {
                      changePopular(0);
                    }}
                    className="text-black flex justify-between w-full pl-3 pr-5 bg-white py-2 border-b-2 border-gray text-base leading-5 text-left hover:bg-gray cursor-pointer"
                    role="menuitem"
                  >
                    Most Recent
                  </span>
                  <span
                    onClick={() => {
                      changePopular(1);
                    }}
                    className="text-black flex justify-between w-full pl-3 pr-5 bg-white py-2 text-base leading-5 text-left hover:bg-gray cursor-pointer"
                    role="menuitem"
                  >
                    Popular
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-9/12 justify-center mx-auto">
        {result &&
          result.map((d, i) => {
            return (
              <Question
                key={i}
                data={d}
                onClick={() => {
                  navigate('/view-question', {
                    state: { mydata: d },
                  });
                }}
              />
            );
          })}
      </div>
      <div className="flex justify-center my-5">
        {/* <button className="px-5 py-3 rounded text-darkGray text-sm bg-gray">
          Load More Questions
        </button> */}
        <Pagination
          className="pagination-data"
          onChange={PaginationChange}
          total={numQuestion ? numQuestion * 2 : 0}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        />
      </div>
    </div>
  );
}
