import { useState } from 'react'
import img from './img/img1.png'
import './App.css'

function App() {
     const data ={
      title : "lorem ipsum dolor sit amet consectetur. fames proin... ",
      auth:"nithin",
      comp:"AMD (India)",
      pic:img

     }

  return (
    <>
      <div className=" m-auto flex flex-col w-[90%] rounded-lg items-center bg-sky-200 ">
        <div className=" flex items-center flex-col">
        <div className=" flex  m-5  w-[70%]  md:w-1/2 relative">
          <img src={data.pic} alt="img" className='mr-2 w-7 h-7 rounded-full absolute bottom-0 -left-10' />
          <div className=" bg-slate-600 rounded-lg p-3 text-white ">
            <p className="  text-2xl">{data.title}</p>
            <p className="mt-2 capitalize">{data.auth},{data.comp}</p>
            
          </div>
        </div>
        <div className=" relative flex w-[70%] m-5 md:w-1/2">
         
          <div className=" bg-slate-600 rounded-lg p-3 text-white ">
            <p className="text-2xl">{data.title}</p>
            <p className="mt-2 capitalize">{data.auth},{data.comp}</p>
          </div>
          <img src={data.pic} alt="img" className=' ml-2 w-7 h-7 rounded-full absolute bottom-0 -right-10'/>
        </div>
        <div className=" flex relative m-5 w-[70%] md:w-1/2">
          <img src={data.pic} alt="img" className='mr-2 w-7 h-7 rounded-full absolute bottom-0 -left-10' />
          <div className=" bg-slate-600 rounded-lg text-white p-3">
            <p className="text-2xl">{data.title}</p>
            <p className="mt-2 capitalize ">{data.auth},{data.comp}</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
