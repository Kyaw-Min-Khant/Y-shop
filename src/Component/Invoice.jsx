import React, { useEffect, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { StateContextCustom } from "../Statecontext/StateContext";
import {MdDelete} from "react-icons/md";
import Swal from "sweetalert2";

const Invoice = ({
  id,
  title,
  thumbnail,
  category,
  brand,
  price,
  discountPercentage,
  decreaseTotal,
  increaseTotal,
  increasePrice,
  decreasePrice,
}) => {

 const moreTotal=()=>{
dispatch({type:"Remove_card",payload:id}),
  decreasePrice(countPrice);
  decreaseTotal(discountPercentage);
 }
 const noticeTotal=()=>{
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!","success");
      moreTotal();
    }
  });
 }
  const { dispatch,final,setFinal } = StateContextCustom();
  const [count, setCount] = useState(1);
  const eachPercentage = (price * discountPercentage/100);
  const eachPrice = price - eachPercentage;
  const countPrice = eachPrice * count;

  const increaseItem = () => {
    setCount(count + 1);
    increaseTotal(discountPercentage/100);
    increasePrice(price);
    setFinal(final+eachPrice)
  };
  const decreaseItem = () => {
    if (count > 1) {
      setCount(count - 1);
      decreaseTotal(discountPercentage/100);
      decreasePrice(price);
      setFinal(final-eachPrice)
    }
  };
  return (
    <div className=" my-5 overflow-hidden">
      <div className="card card-side bg-white shadow-2xl lg:w-[80%] md:w-[70%]  w-[100%]">
        <figure>
          <img
            className="object-contain lg:w-[200px] lg:h-[200px] md:h-[150px] md:w-[150px]  w-[100px] h-[100px]"
            src={thumbnail}
            alt={category}
          />
        </figure>
        <div className="card-body lg:p-7 md:p-5  p-3">
          <div className=" flex justify-between">
            <h2 className="text-slate-700 card-title lg:text-2xl md:text-xl text-lg truncate">
              {title}
            </h2>
            <button onClick={noticeTotal} className="">
              <MdDelete className="lg:text-2xl md:text-xl text-lg text-red-500" />
            </button>
          </div>
          <p className="text-slate-700">Brand : {brand}</p>
          <p className="text-slate-700">
            Price :<span className=" line-through mr-2"> {price} </span>$
            {countPrice.toFixed(2)}
          </p>
          <div className="">
            <div className=" btn-group shadow">
              <button onClick={increaseItem} className="btn btn-ghost btn-sm">
                <HiPlus />
              </button>
              <p className="text-lg select-none">{count}</p>
              <button onClick={decreaseItem} className="btn btn-ghost btn-sm">
                <HiMinus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
