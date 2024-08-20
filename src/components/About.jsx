import React from "react";

function About() {
  return (
    <div className="container  sm:px-60  px-6   pt-4 " id="about">
      <div className="sm:order-2 relative font-bold">
        <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 uppercase">
          About
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
          About
        </h1>
      </div>
      <div className="Home flex sm:pt-10   flex-col gap-2">
        <p className="uppercase mt-2 text-2xl">hello!</p>
        <p className="text-4xl sm:text-6xl  font-bold ">I'm Tayyba</p>

        <p className="font-medium sm:text-2xl text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="flex gap-5 mt-4 sm:pb-10">
        <div className="text-xl font-medium cursor-pointer bg-[#FEF3E2] hover:shadow-md hover:bg-[#D0B8A8] rounded-lg px-2 py-1">
          <a
            href="\public\TayybaCV.pdf"
            download="cv.pdf"
            className="flex gap-1"
          >
            <button>Download CV</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
