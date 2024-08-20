import React from "react";
import clothing from "../assets/clothing.png";

function Project() {
  return (
    <div className="max-w-[1200px] mx-auto p-5 " id="projects">
      {/* <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2 text-center ">
        <div className="sm:order-2 relative font-bold">
          <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 uppercase">
            Projects
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
            projects
          </h1>
        </div>
      </div> */}

      <div className="sm:order-2 font-bold flex justify-center items-center relative mb-5 sm:mb-20">
        <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 uppercase">
          Projects
        </div>
        <h1 className="absolute inset-0 flex justify-center items-center text-3xl md:text-4xl">
          projects
        </h1>
      </div>

      {/* project 1*/}
      <div className="grid sm:grid-cols-2  gap-4 sm:px-40">
        <div className="tansform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group contauner rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={clothing} layout="fill" objectFit="cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center ">
            <span className="text-2xl font-bold text-white tracking-wider">
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/TayybaSaveera/clothing-store"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </span>
          </div>
        </div>

        {/* project 1*/}
        {/* 
        <div className="tansform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group contauner rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={clothing} layout="fill" objectFit="cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center ">
            <span className="text-2xl font-bold text-white tracking-wider">
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/TayybaSaveera/clothing-store"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </span>
          </div>
        </div> */}

        {/* project 1*/}

        {/* <div className="tansform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group contauner rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={clothing} layout="fill" objectFit="cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center ">
            <span className="text-2xl font-bold text-white tracking-wider">
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/TayybaSaveera/clothing-store"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
