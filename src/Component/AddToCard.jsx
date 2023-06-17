import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Statecontext/StateContext";
import Invoice from "./Invoice.jsx";
import Swal from "sweetalert2";

const AddToCard = () => {
  const { dispatch, final, setFinal, setHide } = StateContextCustom();
  const {
    state: { card, total },
  } = StateContextCustom();
  useEffect(() => {
    setHide(true);
  }, []);
  const [mainTotal, setMainTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    dispatch({ type: "Add_To_Percentage", payload: percentage });
  }, [percentage]);
  // const Total = () =>
  // card.reduce((pv, cv) => pv + cv.discountPercentage / 100, 0);
  const Price = () =>
    card.reduce(
      (pv, cv) =>
        pv +
        cv.price -
        (cv.price.toFixed(2) * cv.discountPercentage.toFixed(2)) / 100,
      0
    );
  const noticeTotal = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete All!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "success");
        dispatch({ type: "Remove" });
      }
    });
  };
  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };
  const increasePrice = (price) => {
    setPercentage(percentage + price);
  };
  const decreasePrice = (price) => {
    setPercentage(percentage - price);
  };
  useEffect(() => {
    // setMainTotal(Total);
    setPercentage(Price);
    // console.log(mainTotal);
    // console.log(percentage);
  }, []);
  return (
    <>
      {card.length > 0 ? (
        <div className="lg:py-20 sm:py-10 mt-10 container justify-around mx-auto flex flex-wrap">
          <div className="sm:w-[10%] md:w-[80%] lg:w-[60%]">
            {card?.map((item) => (
              <Invoice
                key={item.id}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
                decreasePrice={decreasePrice}
                increasePrice={increasePrice}
                {...item}
              />
            ))}
          </div>
          <div className="p-5 w-[400px]">
            <span className=" text-2xl font-sans mr-2 text-slate-700 font-bold">
              Total :{" "}
            </span>
            <span className="shadow bg-slate-100 text-slate-700 p-3">
              {percentage.toFixed(2)}
            </span>
            <div className="lg:ml-10 my-5 sm:ml-5">
              <button
                onClick={noticeTotal}
                className=" px-3 py-1 border-2 border-red-700   text-red-700 rounded text-center my-3 hover:bg-[#ce1919] hover:border-none hover:text-white"
              >
                Remove All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white flex justify-center flex-col container mx-auto h-screen">
          <iframe
            className="h-[300px]"
            src="https://embed.lottiefiles.com/animation/83548"
          ></iframe>
          <div className=" text-center">
            <Link to="/CardGenerate">
              <button className="btn bg-[#1994cd] text-white border-0 outline-none hover:bg-[#0175aa]">
                Go shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCard;
