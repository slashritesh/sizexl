import React from 'react'
import {RiFacebookBoxLine,RiInstagramLine,RiLinkedinLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <>
    <div className="p-10 grid grid-cols-4 mt-10 bg-slate-100 rounded-lg">
        <div>
          <div className="text-2xl font-bold">
            <h1>
              Size<span className="text-blue-600">XL</span>.
            </h1>
          </div>
          <p className="py-4 text-sm w-[32ch]">Lorem ipsum dolor quis. Possimus harum vitae, labore oris ab ratione d! Aspernatur, quae suscipit!</p>
          <div className="flex mt-5 gap-5">
            <div className="p-2 rounded-full bg-blue-300">
            <RiFacebookBoxLine className="text-2xl text-black" />

            </div>
            <div className="p-2 rounded-full bg-blue-300">
            <RiInstagramLine className="text-2xl text-black" />

            </div>
            <div className="p-2 rounded-full bg-blue-300">
            <RiLinkedinLine className="text-2xl text-black" />

            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Quick Links</h1>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Categories</h1>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Recent Collection</h1>
        </div>
      </div>
    </>
  )
}

export default Footer