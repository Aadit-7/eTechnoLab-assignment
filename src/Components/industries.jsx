import React from "react";
import health from "../assets/heart.svg";
import education from "../assets/education.svg";
import ecommers from "../assets/eCom.svg";
import socialMedia from "../assets/sm.svg";
import retail from "../assets/retail.svg";
import manufacture from "../assets/manufacture.svg";
import airways from "../assets/airways.svg";
import helpDesk from "../assets/hd.svg";
import construction from "../assets/constructiion.svg";
import logistics from "../assets/logistics.svg";
import media from "../assets/media.svg";

const industries = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div>
        <h1 className="text-center text-[40px] font-bold pt-20 ">
          Industries We Serve
        </h1>
        <p className="text-center text-[20px] pl-[445px] pr-[445px] mt-5">
          Our expertise and technology solutions help industry verticals to
          improve return on investment and become more efficient.
        </p>
        <div className="grid grid-cols-6 gap-4 p-4 pl-80 pr-50">
          <div className="p-4 ">
            <img src={health} alt="" className="w-20 h-20" />
            <br />
            <p>Healthcare</p>
          </div>
          <div className="p-4 ">
            <img src={education} alt="" className="w-20 h-20" />
            <br />
            <p>Education</p>
          </div>
          <div className="p-4 ">
            <img src={ecommers} alt="" className="w-20 h-20" />
            <br />
            <p>E-commerce</p>
          </div>
          <div className="p-4 ">
            <img src={socialMedia} alt="" className="w-20 h-20" />
            <br />
            <p>Social media</p>
          </div>
          <div className="p-4 ">
            <img src={retail} alt="" className="w-20 h-20" />
            <br />
            <p>Retail</p>
          </div>
          <div className="p-4 ">
            <img src={manufacture} alt="" className="w-20 h-20" />
            <br />
            <p>Manufacture</p>
          </div>
          <div className="p-4 ">
            <img src={airways} alt="" className="w-20 h-20" />
            <br />
            <p>Airways</p>
          </div>
          <div className="p-4 ">
            <img src={helpDesk} alt="" className="w-20 h-20" />
            <br />
            <p>Help Desk</p>
          </div>
          <div className="p-4 ">
            <img src={construction} alt="" className="w-20 h-20" />
            <br />
            <p>Construction</p>
          </div>
          <div className="p-4 ">
            <img src={logistics} alt="" className="w-20 h-20" />
            <br />
            <p>Logistics</p>
          </div>
          <div className="p-4 ">
            <img src={media} alt="" className="w-20 h-20" />
            <br />
            <p>Media</p>
          </div>
          <div className="p-4 ">
            <img src={health} alt="" className="w-20 h-20" />
            <br />
            <p>Healtcare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default industries;
