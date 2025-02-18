import React from "react";
import Web from "../assets/www.svg";
import App from "../assets/app.svg";
import EC from "../assets/eCom.svg";
import AWS from "../assets/aws.svg";
import DM from "../assets/dm.svg";
import IOT from "../assets/iot.svg";
import Devops from "../assets/devops.svg";
import Translation from "../assets/translation.svg";

const servicies = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-[40px] font-bold pt-20">
          Our Services
        </h1>
        <h1 className="text-center text-[30px] mt-5 mb-8 tracking-wide">
          Think Big. We make IT, possible!
        </h1>
        <p className="text-center text-[20px] pl-[445px] pr-[445px] mb-10">
          Being a top-notch Custom software development company, our services
          are designed to take your business to the next level, reducing the gap
          between you and the heights of success you wish to achieve
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 p-4 pl-80 pr-50 ">
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={Web} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">Web Developement</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              Responsive and scalable web application development cutting across
              the domains and technologies. that are hosted on various cloud
              infrastructure.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={App} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">App Development</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              We develop powerful applications that provide a thrilling
              experience for your users and bring tangible value to your
              business. Whether native, hybrid, or cross-platform, our mobile
              development.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={EC} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">E-commerce</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              Our experts provide complete online store Solutions to grow your
              business. We are also proficient in consulting, support &
              maintenance, feature packed web and mobile friendly eCommerce
              technologies.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={AWS} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">AWS</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              We are experienced professionals in building web & mobile
              applications using AWS Services to Scale & Enhance your
              application.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={DM} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">Digital Marketing</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              Online advertising allows brands to reach out beyond their
              existing networks, to tap into new, highly targeted audiences via
              search, social or display ads.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={IOT} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">IoT Development</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              IoT is transforming businesses across industries worldwide. Learn
              about Market Trends, Industry Impact, Business Benefits,
              Implementation Roadmap and why eTechno Lab is ideally positioned
              to be your IoT Solutions and IoT Services partner
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={Devops} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">DevOps</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              24/7 Dev Ops services that we have been providing to Google and
              Palo Alto Networks to name just a few.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-baseline justify-center w-50">
          <div className="mb-5">
            <img src={Translation} alt="" />
          </div>
          <div className="mb-5">
            <h1 className="text-[20px] font-bold">Translation</h1>
          </div>
          <div>
            <p className="leading-5.5 tracking-tight text-center">
              We provide complete high-quality translation services using Native
              professional translators, Quick turnaround with exceptional
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default servicies;
