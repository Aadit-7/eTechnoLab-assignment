import React from "react";
import Collaborative from "../assets/collaborative.png";
import Think from "../assets/think.png";
import Integrity from "../assets/integrity.png";
import Client from "../assets/clientService.png";

const values = () => {
  return (
    <div className="container bg-[#F7F7F7] w-screen h-screen">
      <div className="">
        <h1 className="text-center text-[40px] font-bold pt-20 ">Our Values</h1>
        <p className="text-center text-[20px] pl-[445px] pr-[445px] mt-5">
          eTechno Lab is a Software Services company, provides IT solutions to
          our clients with our core values Collaborative spirit, Integrity, and
          Serenity.
        </p>
        <div className="w-full h-96">
          <div className="flex items-center justify-center gap-10 p-5 m-5 pl-50 pr-50">
            <div className="flex flex-wrap items-center justify-center p-5 card h-90 w-80">
              <img src={Collaborative} alt="" className="w-20 h-20" />
              <h1 className="text-[20px] font-bold text-center tracking-tight">
                Collaborative Spirit
              </h1>
              <p className="text-[20px] text-center">
                Talent wins game, but teamwork and intelligence win chamionship
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center p-5 card h-90 w-80">
              <img src={Think} alt="" className="w-20 h-20" />
              <h1 className="text-[20px] font-bold text-center tracking-tight">
                Expert Thinking
              </h1>
              <p className="text-[20px] text-center">
                Our expert and experienced team provide the ultimate solution
                for the client's query.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center p-5 card h-90 w-80">
              <img src={Integrity} alt="" className="w-20 h-20 ml-8" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h1 className="text-[20px] text-center font-bold tracking-tight mt-5">
                Integrity
              </h1>
              <p className="text-[20px] text-center mt-5 ">
                To give real services to the client, we add something which
                cannot be bought or measured with money, and that is integrity.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center p-5 card h-90 w-80">
              <img src={Client} alt="" className="w-20 h-20" />
              <h1 className="text-[20px] font-bold tracking-tight">
                Client Serenity
              </h1>
              <p className="text-[20px] text-center">
                We are doing everything with clarity. Because clarity brings
                Serenity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default values;
