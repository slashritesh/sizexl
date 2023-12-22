import React from "react";
import {RiFacebookBoxLine,RiInstagramLine,RiLinkedinLine} from 'react-icons/ri'

const HeroSection = () => {
  return (
    <div className="px-20">
      <div className="h-[500px] py-2 rounded-lg w-full border"></div>
      <h1 className="text-2xl font-semibold my-10">Popular Collection</h1>
      <div className="flex gap-5 w-full">
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
      </div>
      <h1 className="text-2xl font-semibold my-10">Featured Collection</h1>
      <div className="flex gap-5">
        <div className="flex-1 rounded-lg h-[300px] border"></div>
        <div className="flex-1 rounded-lg h-[300px] border"></div>
      </div>
      <h1 className="text-2xl font-semibold my-10">Best For Men collection</h1>
      <div className="flex gap-5 w-full">
        <div className="p-2 flex-1 rounded-lg border h-[300px]">
          Product Cart
        </div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
      </div>
      <h1 className="text-2xl font-semibold my-10">
        Best For Women collection
      </h1>
      <div className="flex gap-5 w-full">
        <div className="p-2 flex-1 rounded-lg border h-[300px]">
          Product Cart
        </div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
      </div>
      <h1 className="text-2xl font-semibold my-10">
        Best For Teenage collection
      </h1>
      <div className="flex gap-5 w-full">
        <div className="p-2 flex-1 rounded-lg border h-[300px]">
          Product Cart
        </div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
        <div className="p-2 flex-1 rounded-lg border h-[300px]"></div>
      </div>
      <div className="h-[300px] border my-10">offer section</div>

      <Footer />
    </div>
  );
};

export default HeroSection;
