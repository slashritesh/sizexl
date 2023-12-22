import React from 'react'

const Navbar = () => {
  return (
    <div className='px-20 flex items-center justify-between py-8'>
        <div className='text-2xl font-bold'>
            <h1>Size<span className='text-blue-600'>XL</span>.</h1>
        </div>
        <ul className='flex font-medium text-sm gap-4'>
            <li className='p-2 px-3 rounded-md hover:bg-slate-100'>New collections</li>
            <li className='p-2 px-3 rounded-md hover:bg-slate-100'>Categories</li>
            <li className='p-2 px-3 rounded-md hover:bg-slate-100'>Men</li>
            <li className='p-2 px-3 rounded-md hover:bg-slate-100'>Women</li>
            <li className='p-2 px-3 rounded-md hover:bg-slate-100'>Teen</li>
            <li className='p-2 px-3 rounded-md hover:bg-slate-100'>Featured</li>
        </ul>
        <div className='flex gap-5'>
            <button className='px-5 text-sm font-medium p-2 bg-slate-100 text-black rounded-lg'>Log In</button>
            <button className='px-5 text-sm font-medium p-2 bg-blue-500 rounded-lg text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar