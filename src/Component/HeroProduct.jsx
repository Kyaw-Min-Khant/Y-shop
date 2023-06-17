import React, { useEffect } from "react";
import { useState } from "react";
import { Rating, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import "./card.css";
const HeroProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const fetchproduct = await fetch(
      "https://dummyjson.com/products?limit=15&skip=10"
    );
    const { products } = await fetchproduct.json();
    setData(products);
  };
  return (
    <div className="my-10 md:my-5  container mx-auto ">
      <Link to="/CardGenerate">
        <h2
          className="mb-3 text-2xl font-sans pl-3 text-[#146C94]  py-3 font-semibold hover:border-b-4 border-bottom-[#19A7CE]"
          style={{ transition: "0.5s" }}
        >
          Popular Now
        </h2>
      </Link>
      <div className="flex mt-5 justify-start gap-10 overflow-scroll">
        {data?.map((item) => (
          <div
            key={item.id}
            className="card bg-white card-compact p-0  lg:w-[250px] w-[180px]   shadow-xl relative"
          >
            <figure>
              <img
                style={{ height: "210px" }}
                className="object-fill"
                src={item.thumbnail}
                alt={item.category}
              />
            </figure>
            <div className="badge bg-[#146C94] outline-none border-0 absolute top-44 right-0 capitalize">
              {item.category}
            </div>
            <div className="card-body p-0">
              <h2 className=" text-base p-0 font-bold capitalize truncate">
                {item.title}
              </h2>
              <p className="">{item.price}</p>
              <Group>
                <Rating
                  className="text-sm"
                  color="orange"
                  size="sm"
                  value={item.rating}
                  fractions={4}
                  readOnly
                />
              </Group>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroProduct;
