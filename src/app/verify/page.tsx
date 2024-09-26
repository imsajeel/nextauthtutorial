import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black my-10 mx-auto p-5 rounded-2xl w-full max-w-lg flex flex-col [&>*]:my-3 ">
      <h2 className=" text-2xl text-center">Verify</h2>
      <p> A temporary code was sent to your email hello@example.com</p>
      <input
        className="border-2 border-black p-2 w-full"
        type="otp"
        placeholder="OTP"
      />
      <button className="bg-gray-400 px-5 py-2">Verify</button>
    </div>
  );
};

export default page;
