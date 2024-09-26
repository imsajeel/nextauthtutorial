import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black my-10 mx-auto p-5 rounded-2xl w-full max-w-lg flex flex-col [&>*]:my-3 ">
      <h2 className=" text-2xl text-center">Signin</h2>
      <input
        className="border-2 border-black p-2 w-full"
        type="text"
        placeholder="username or email"
      />

      <input
        className="border-2 border-black p-2 w-full"
        type="password"
        placeholder="password"
      />
      <button className="bg-gray-400 px-5 py-2">Sign in</button>
      <Link href={"/register"} className="text-center">
        Register
      </Link>
    </div>
  );
};

export default page;
