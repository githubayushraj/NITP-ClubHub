import React from "react";
import Event from "./hs4-event";

const Hero4 = () => {
  return (
    <div className=" bg-purple-950 w-full text-white lg:p-20 md:p-12 flex flex-col p-8">
      <div className="md:text-[2rem] lg:text-[2.4rem] font-bold md:pb-14 lg:pb-24 text-3xl pb-10 ">
        Experience The Events
      </div>
      <main className="flex flex-col md:flex-row">
        <Event
          title="Explore a wide range of events
and competitions"
          info="Choose from various categories and showcase your
skills"
        />
        <Event
          title="Connect with like-minded
individuals and form teams"
          info="Collaborate with others to create something amazing "
        />
        <Event
          title="Experience the thrill of competing
and winning"
          info="Participate in various events and stand a chance to win
exciting prizes"
        />
      </main>
    </div>
  );
};

export default Hero4;
