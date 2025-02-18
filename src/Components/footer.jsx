import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="px-20 py-10 text-white bg-black pt-25">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3">
        <div className="ml-5 mr-10">
          <h2 className="mb-5 text-xl font-semibold">About Us</h2>
          <h3 className="text-lg font-medium text-red-600 ">Mission</h3>
          <p className="text-sm text-gray-300 ">
            We engineer meaningful technology solutions and services to help
            businesses and societies flourish, working together with clients to
            make their businesses stronger.
          </p>
          <h3 className="mt-4 text-lg font-medium text-red-600">Vision</h3>
          <p className="text-sm text-gray-300">
            eTechno Lab takes an agile, collaborative approach to creating
            customized solutions across the digital value chain through our
            solutions, services, and people.
          </p>
        </div>

        <div className="ml-28">
          <h2 className="text-xl font-semibold mb-7">eTechno Lab</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Connect with us</h2>
          <div className="">
            <br />
            <a href="#" className="text-gray-300 hover:text-gray-500">
              <FaFacebook size={24} />
            </a>
            <br />
            <a href="#" className="text-gray-300 hover:text-gray-500">
              <FaTwitter size={24} />
            </a>
            <br />
            <a href="#" className="text-gray-300 hover:text-gray-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
