import React from "react";
import { StateContextCustom } from "../Statecontext/StateContext";
import { GiMeltingIceCube } from "react-icons/gi";
import { Link } from "react-router-dom";

const SecondNav = () => {
  const {
    state: { card },
    nav,
    setFilter,
    setCategory,
    filter,
    setHide,
    hide,
  } = StateContextCustom();

  return (
    <div className="">
      <div
        className="navbar lg:px-20 md:px-10 px-3  mb-12  fixed top-0 right-0 left-0 bg-[#F6F1F1]"
        style={{ zIndex: 100 }}
      >
        <div className="flex-1 mr-1">
          <Link to="/">
            <div className="flex">
              <GiMeltingIceCube className="text-[#19A7CE] text-3xl" />
              <p className="pl-2 font-bold text-2xl text-[#146C94] tracking-wider font-sans">
                YKT
              </p>
            </div>
          </Link>
        </div>
        <div className={hide ? "hidden" : "flex"}>
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-sm bg-white  focus-visible:outline-none input-bordered input-accent  w-full max-w-xs"
          />
        </div>
        <div className={hide ? "hidden" : "dropdown dropdown-hover "}>
          <label tabIndex={0} className="text-slate-800 px-2 py-1 font-sans">
            Products
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content overflow-scroll mix-x-screen   shadow bg-white  text-slate-800 w-48"
          >
            <li
              className=" py-[2px] hover:bg-slate-300  text-sm "
              onClick={() => setCategory("")}
            >
              <a className="px-2 ">Popular</a>
            </li>
            {nav?.map((item, index) => (
              <li
                onClick={() => setCategory("/category/" + item)}
                className="p-[2px] hover:bg-slate-300"
                key={index}
              >
                <a className="px-2 text-slate-800">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-black  btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge text-white bg-[#19A7CE] border-none badge-sm indicator-item">
                  {card.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact bg-white dropdown-content w-52 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-black text-lg">
                  Products :{card.length}
                </span>
                <div className="card-actions">
                  <Link to="/AddToCard">
                    <button className="btn text-white bg-[#19A7CE] btn-block border-none btn-sm">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
