import React from "react";
import Bg from "../assets/body.jpg";

const mainBody = () => {
  return (
    <div>
      <div className="w-screen h-screen font-bold ">
        <div
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <p className="text-5xl text-center pt-50">
            Let's Build something
            <p className="text-red-500">Together</p>
          </p>
          <p className="text-5xl text-center pt-50">
            We shape your bussines ideas into{" "}
            <p className="text-red-500">Reality</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default mainBody;
