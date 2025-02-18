import React from "react";
import Logo from "../assets/logo1.png";

const nav = () => {
  return (
    <div className="container sticky flex flex-col items-center w-screen h-28 ">
      <div className="relative w-full h-12 ">
        <div>
          <ul>
            <li className="flex items-center justify-center gap-5 p-1 ml-80 -mr-80">
              <a
                className="text-[#0000ff] pr-3 border-r-2 tracking-tighter"
                href="#"
              >
                We'er Hiring-Work Remotely
              </a>
              <a className="pr-3 border-r-2" href="#">
                Blogs
              </a>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="mr-80">
          <a href="">
            {" "}
            <img src={Logo} alt="Logo" className="h-9 w-50" />
          </a>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-center gap-10 p-1 font-bold tracking-tighter">
              <a href="#">HOME</a>
              <a href="#">SERVICE</a>
              <a href="#">TECHNOLOGY</a>
              <a href="#">COMPANY</a>
              <a href="#">PORTFOLIO</a>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default nav;
