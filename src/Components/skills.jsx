import React from "react";
import java from "../assets/1.svg";
import react from "../assets/3.svg";
import angular from "../assets/4.svg";
import vue from "../assets/5.svg";
import node from "../assets/6.svg";
import python from "../assets/python.png";
import r from "../assets/r.png";
import javascript from "../assets/2.svg";
import css from "../assets/7.svg";
import html from "../assets/8.svg";
import swift from "../assets/swift.png";
import objc from "../assets/objc.png";

const skills = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-[40px] font-bold pt-20">
          Our Skills That Define us
        </h1>
      </div>
      <div className="mt-5 text-[18px]">
        <ul>
          <li className="flex items-center justify-center font-bold gap-30">
            <a className="p-5 " href="">
              Programming
            </a>
            <a className="p-5 " href="">
              Framework & CMS
            </a>
            <a className="p-5 " href="">
              Database & Cloud
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 pl-80 pr-50">
        <div className="p-4">
          <img src={java} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={react} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={angular} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={vue} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={node} alt="" className="h-10 w-25" />
        </div>
        <div className="p-4">
          <img src={python} alt="" className="h-10 w-25" />
        </div>
        <div className="p-4">
          <img src={r} alt="" className="h-10 w-25" />
        </div>
        <div className="p-4">
          <img src={javascript} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={css} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={html} alt="" className="h-25 w-25" />
        </div>
        <div className="p-4">
          <img src={swift} alt="" className="h-10 w-25" />
        </div>
        <div className="p-4">
          <img src={objc} alt="" className="h-10 w-25" />
        </div>
      </div>
    </div>
  );
};

export default skills;
