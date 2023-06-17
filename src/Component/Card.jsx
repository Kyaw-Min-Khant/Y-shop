import React from "react";
import { Rating, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../Statecontext/StateContext";
import "./card.css";

const Card = (props) => {
  const {
    title,
    price,
    rating,
    brand,
    category,
    thumbnail,
    discountPercentage,
  } = props;
  const eachPercentage = (price * discountPercentage) / 100;
  const eachPrice = price - eachPercentage;
  const { dispatch } = StateContextCustom();
  return (
    <div>
      <div className=" lg:w-[220px] md:w-[180px] w-[160px] card-size pb-2 hover:shadow-lg bg-white rounded relative">
        <div className=" absolute p-1 text-xs rounded-full bg-[#FF8400] font-bold text-white top-[-2px] left-[-10px]">
          {discountPercentage}% off
        </div>
        <Link to="/Details">
          <img
            onClick={() => dispatch({ type: "ADD_To_Details", payload: props })}
            src={thumbnail}
            className=" lg:w-[220px] md:w-[170px] card-img lg:h-[170px] h-[150px] object-fit rounded-t"
            alt=""
          />
        </Link>
        <span className=" text-xs img-relative bg-[#146C94] capitalize rounded p-1  text-white font-body absolute  lg:top-[150px] top-[130px] right-0">
          {category}
        </span>
        <div className="md:p-2 p-1">
          <h2 className=" pb-1 capitalize lg:text-lg text-sm  text-[#253333]  font-sans font-bold truncate">
            {title}
          </h2>
          <h2 className="md:text-sm text-xs font-serif">
            $<span className="mx-1 pb-1 line-through">{price}</span>/
            {eachPrice.toFixed(2)}
          </h2>
          <Rating
            defaultValue={rating}
            className="pt-1"
            color="orange"
            size="xs"
            readOnly
          />
        </div>
        <button
          type="button"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
          className="block w-auto  active:bg-[#00c8ff] border-[1px] font-medium mx-auto border-[#19A7CE] rounded bg-transparent hover:bg-[#19A7CE] px-5 lg:text-xl text-sm   font-sans text-[#24a7cb] hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
