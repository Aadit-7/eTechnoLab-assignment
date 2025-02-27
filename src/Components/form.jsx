import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset(); 
  };

  return (
    <div className="w-screen h-screen p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-center text-[40px] font-bold pt-20">
        Let's Talk About Your Idea
      </h1>
      <p className="text-center text-[20px] pl-[445px] pr-[445px] mt-5 mb-10">
        Feel free to drop us a line below!
        <br /> We would get in touch with you soon.
      </p>
      <div className="grid grid-cols-2 gap-4 p-4 pl-40 pr-40 ">
        <div className="ml-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4"
          >
            <div>
              <label className="block font-medium">Tell us your name *</label>
              <input
                type="text"
                placeholder="Enter name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded-md"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">
                Enter your E-mail ID *
              </label>
              <input
                type="email"
                placeholder="Eg. example@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full p-2 border rounded-md"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">
                Enter your mobile number
              </label>
              <input
                type="tel"
                placeholder="Eg. +91 800 000000"
                {...register("phone", {
                  pattern: {
                    value: /^\+?\d{10,14}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                className="w-full p-2 border rounded-md"
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Message *</label>
              <textarea
                placeholder="Write us a message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border rounded-md"
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="flex ">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-[#ff0044] rounded-4xl"
              >
                SEND MESSAGE
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="px-4 py-2 text-white bg-[#ff0044] rounded-4xl"
              >
                RESET
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="p-4 ml-40 rounded-md">
            <h3 className="mb-5 text-lg font-semibold">Address</h3>
            <p>F.No. 105, 1st Floor, Swami Krupa</p>
            <p>B Wing, Anand Vihar, Colony No-1</p>
            <p>Sinhgad Road, Pune, Maharashtra (India)</p>

            <h3 className="mt-4 mb-5 text-lg font-semibold">
              Interview Address
            </h3>
            <p>471, 2nd Floor, Joshi Building</p>
            <p>Near Lokhande Talim</p>
            <p>Narayan Peth, Pune, Maharashtra (India)</p>

            <h3 className="mt-4 mb-5 text-lg font-semibold">Let's Talk</h3>
            <p>+91 909-651-9449</p>

            <h3 className="mt-4 text-lg font-semibold">General Support</h3>
            <p className="">support@etechnolab.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
