import React from 'react'
import {BsFillBusFrontFill} from "react-icons/bs"
import {TbCertificate} from "react-icons/tb"
import {BsCashCoin} from "react-icons/bs";
const SecondSection = () => {
  return (
    <div className="px-2 my-12 bg-transparent py-6 flex-wrap gap-4 container flex justify-around mx-auto">
      <div className="p-5 border shadow rounded w-[300px] hover:bg-[#D8D8D8]" style={{transition:"0.5s"}}>
        <BsFillBusFrontFill className="text-6xl mx-auto text-[#19A7CE]" />
        <div className="p-1 text-center">
          <h2 className="text-xl font-sans py-2">Free Worldwide shipping</h2>
          <p className="text-sm text-slate-700">
            As electricity builds up inside its body, it becomes more
            aggressive. One theory is that the electricity.
          </p>
        </div>
      </div>
      <div className="p-5 border shadow rounded w-[300px] hover:bg-[#D8D8D8]" style={{transition:"0.5s"}}>
        <TbCertificate className="text-6xl mx-auto text-[#19A7CE]" />
        <div className="p-1 text-center">
          <h2 className="text-xl font-sans py-2">Best Quality Product</h2>
          <p className="text-sm text-slate-700">
            Slakoth’s heart beats just once a minute. Whatever happens, it is
            content to loaf around motionless.
          </p>
        </div>
      </div>
      <div className="p-5 border shadow rounded w-[300px] hover:bg-[#D8D8D8] custom-card" style={{transition:"0.5s"}}>
        <BsCashCoin className="text-6xl mx-auto text-[#19A7CE] custom-icon" />
        <div className="p-1 text-center">
          <h2 className="text-xl font-sans py-2">Very Affordable Pricing</h2>
          <p className="text-sm text-slate-700">
            Thought to have gone extinct, Relicanth was given a name that is a
            variation of the name of the person who discovered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection
