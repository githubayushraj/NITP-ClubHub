import React from "react";

const Event = (props) => {
  return (
    <main className="md:w-1/3 w-4/5 lg:px-6 md:px-4">
      <div className="bg-slate-400 w-full h-60 md:mb-6 mb-3">IMAGE</div>
      <div className="text-lg md:text-xl lg:text-2xl font-semibold md:mb-4 mb-2">
        {props.title}
      </div>
      <div className="text-neutral-400 md:text-base lg:text-lg">
        {props.info}
      </div>
      <div className="text-neutral-500 text-sm md:pt-4 pt-2 mb-8 cursor-pointer">
        Learn More
      </div>
    </main>
  );
};

export default Event;
