import React, { useEffect, useState } from "react";
import { Rating } from "@mantine/core";
import { HiArrowSmRight } from "react-icons/hi";
import { StateContextCustom } from "../Statecontext/StateContext";

const Details = () => {
  const [show, setShow] = useState(true);
  const {
    state: { details },
    dispatch,
    setHide,
    hide,
  } = StateContextCustom();
  const eachPercentage = (details.price * details.discountPercentage) / 100;
  const eachPrice = details.price - eachPercentage;
  useEffect(() => {
    setHide(true);
  }, []);
  return (
    <>
      {show ? (
        <div
          key={details.id}
          className="py-20 mt-5  container mx-auto p-3 flex flex-wrap"
        >
          <div className="card lg:card-side bg-white shadow-xl relative">
            <div className="absolute bg-[#FF8400]  px-3 py-1 rounded-full text-white font-body">
              {details.discountPercentage}%off
            </div>
            <img
              src={details.thumbnail}
              alt="photo"
              className="lg:max-h-[500px] md:max-h-[350px] max-h-[350px] object-fill p-1"
            />
            <div className="card-body text-black p-4">
              <h2 className="card-title lg:text-3xl md:text-2xl text-xl">
                {details.title}
              </h2>
              <p className="p-0 font-serif lg:text-xl text-lg ">Description</p>
              <p className="p-0 font-mono lg:text-sm text-xs text-slate-500">
                {details.description}
              </p>
              <p className="p-0 font-serif lg:text-xl text-lg">Brand</p>
              <p className="p-0 font-mono lg:text-sm text-xs text-slate-500">
                {details.brand}
              </p>
              <p className="p-0 font-serif lg:text-xl text-lg">Category</p>
              <p className="p-0 font-mono lg:text-sm text-xs text-slate-500">
                {details.category}
              </p>
              <p className="p-0 font-serif lg:text-xl text-lg">Price</p>
              <p className="p-0  font-bold lg:text-sm text-xs  text-slate-700">
                <span className="decoration-rose-600 line-through mr-3">
                  $ {details.price}
                </span>
                $ {eachPrice.toFixed(2)}
              </p>
              <p className="p-0 font-serif lg:text-xl text-lg">Rating</p>
              <Rating
                defaultValue={details.rating}
                fractions={4}
                color="orange"
                readOnly
              />
              <div className="">
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: details })
                  }
                  className="px-4 py-2 bg-[#146C94] text-white rounded active:bg-[#2c93c2]"
                >
                  Add To Cart
                </button>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => setShow(!show)}
                  className="px-3 py-1bg-slate-200 shadow-lg rounded"
                >
                  <HiArrowSmRight className=" text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" container  mx-auto px-3 h-screen py-20">
          <div className="carousel my-auto carousel-end  rounded-box">
            {details.images?.map((image, i) => (
              <div key={i} className="carousel-item">
                <img
                  className="max-h-[380px] lg:max-h-[500px]"
                  src={image}
                  alt="Photo"
                />
              </div>
            ))}
          </div>
          <div className=" flex justify-between pt-4">
            <h1 className="text-black text-2xl text-center font-bold font-sans">
              {details.title}
              <span className=" ml-2 text-[#146C94] text-lg ">
                {details.discountPercentage}%off
              </span>
            </h1>

            <button
              className="justify-end px-3 py-1 bg-slate-200 shadow-lg rounded"
              onClick={() => {
                setShow(!show);
              }}
            >
              <HiArrowSmRight className=" text-3xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
