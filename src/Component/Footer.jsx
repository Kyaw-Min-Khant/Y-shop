import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#19A7CE] ">
      <div className="container mx-auto  mt-10 ">
        <footer className="footer flex gap-3 justify-between text-white flex-wrap rounded p-10 ">
          <div>
            <span className="footer-title opacity-100">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title opacity-100">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title opacity-100">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title opacity-100">Newsletter</span>
            <div className="form-control w-64">
              <label className="label">
                <span className="text-white">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-sm bg-white text-slate-700 input-bordered w-full pr-16"
                />
                <button className="btn btn-primary btn-sm absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
