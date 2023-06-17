import React, { useEffect } from "react";
import { StateContextCustom } from "../Statecontext/StateContext";
import Card from "./Card";
import Loading from "./Loading";

const CardGenerate = () => {
  const {
    product,
    state: { productList },
    hide,
    setHide,
    loader,
  } = StateContextCustom();
  useEffect(() => {
    setHide(false);
  }, []);
  if (loader) {
    return <Loading />;
  }

  return (
    <div className="mt-16 pt-5 flex flex-wrap container lg:justify-start mx-auto md:gap-6 justify-center gap-4 lg:gap-9">
      {productList?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardGenerate;
