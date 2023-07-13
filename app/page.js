"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username1.trim() !== "" && username2.trim() !== "") {
      // Redirect to the API requests page with both usernames as search queries
      window.location.href = `/results?username1=${username1}&username2=${username2}`;
    }
  };

  return (
    <div class="bg-[url('/bg.jpeg')] min-h-screen bg-cover bg-no-repeat">
      <div className="flex flex-col items-left">
        <h1 className="mt-[9rem] pt-10 text-6xl ml-10 font-semibold text-white">
          ThreadsCompare
        </h1>
      </div>
      <div className="flex flex-col ml-10 items-left justify-left pt-20">
        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-yellow-400 after:dark:via-[#bb82dc] after:dark:opacity-40 before:lg:h-[360px]"></div>
        <div className="absolute -z-20 h-[180px] w-[240px] translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl"></div> */}

        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            placeholder="Username 1"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Username 2"
            value={username2}
            onChange={(e) => setUsername2(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-lg "
          >
            Lets Go!
            
          </button>
        </form>
      </div>
    </div>
  );
}
