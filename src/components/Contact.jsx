import React from "react";

function Contact() {
  return (
    <div className="container mb-6 mt-6 " id="contact">
      {/* <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2 text-center "> */}
      <div className="sm:order-2 font-bold flex justify-center items-center relative mb-5 sm:mb-20 sm:mt-10">
        <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 uppercase">
          Contact
        </div>
        <h1 className="absolute inset-0 flex justify-center items-center text-3xl md:text-4xl">
          Contact
        </h1>
      </div>
      {/* </div> */}
      <div className="text-xl font-medium mb-3">
        Got a question, proposal, project, or want to work together on
        something?
      </div>
      <div>
        <button className=" text-2xl font-medium cursor-pointer bg-[#FEF3E2] hover:shadow-md hover:bg-[#D0B8A8] rounded-lg px-6 py-3">
          <a href="mailto:tayybasaveera28@gmail.com">Contact</a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
