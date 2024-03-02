import React from 'react'
import User from './User.png'
import In from './Down.svg'
import Search from './Search.svg'
import Toogle from './Toogle.svg'
export const TransPage = () => {
  return (
    <>
        {/* fluid container */}
        <div className ='font-Ubuntu w-[100%] max-w-[900px] mx-auto'>
            {/* transaction & User */}
      <div className='flex justify-between mt-3'>
        {/* Dashboard */}
        <div className='font-[500] text-[28px] text-[#171717]'>Transaction</div>
        {/* User */}
        <div className='cursor-pointer rounded-[50%]  items-center flex justify-center border-solid border-black border w-[50px] h-[50px]'><img src={User} className='w-[20px] h-[20px]'></img></div>
      </div>
      {/* export CSV */}
       <div className='flex justify-end mt-9'>
       <button className='bg-[#5F00D9] px-[15px] py-[8.5px] rounded-[10px] text-center'>
            {/* img + text */}
            <div className='flex items-center text-center'>
              {/* img */}
              <div><img src={In}></img></div>
              {/* text */}
              <div className='ml-2 font-[500] text-[14px] text-[#FFFF]'>Export CSV</div>
            </div>
          </button>
       </div>
       {/* flex */}
       <div className='flex justify-between mt-4'>
        {/* left */}
        <div>
          {/* components */}
          <div className='flex justify-between'>
            {/* All + num */}
            <div className='cursor-pointer flex justify-between border-b-[2px] border-b-[#5F00D9] px-5 pb-4'>
              {/* All */}
              <div className='font-[500] text-[12px] text-[#171717]'>All</div>
              {/* num */}
              <div className='font-[500] text-[12px] text-[#797E82] ml-2'>349</div>
            </div>
            {/* deposit + num */}
            <div className='cursor-pointer flex justify-between ml-10'>
              {/* All */}
              <div className='font-[500] text-[12px] text-[#797E82]'>Deposit</div>
              {/* num */}
              <div className='font-[500] text-[12px] text-[#797E82] ml-2'>114</div>
            </div>
            {/* withdraw + num*/}
            <div className='cursor-pointer flex justify-between ml-10'>
              {/* All */}
              <div className='font-[500] text-[12px] text-[#797E82]'>Withdraw</div>
              {/* num */}
              <div className='font-[500] text-[12px] text-[#797E82] ml-2'>213</div>
            </div>
            {/* trade + num */}
            <div className='cursor-pointer flex justify-between ml-10'>
              {/* All */}
              <div className='font-[500] text-[12px] text-[#797E82]'>Trade</div>
              {/* num */}
              <div className='font-[500] text-[12px] text-[#797E82] ml-2'>22</div>
            </div>
          </div>
        </div>
        {/* right */}
           {/* search + text */}
           <div className='cursor-pointer flex items-center'>
            {/* search */}
            <div><img src={Search}></img></div>
            {/* text */}
            <div className='cursor-pointer font-[500] text-[12px] text-[#797E82] ml-1 mr-7'>Search by ID or destination</div>
           </div>
           </div>
           {/* info flex */}
           <div className='ml-2 flex mt-[15px]'>
            {/* id, date, time,type */}
            <div className='font-[500] text-[12px] text-[#797E82] flex justify-between items-center'>
            {/* id  */}
            <div>ID</div>
            {/* date & time */}
            <div className='flex items-center ml-28'>
            <div>Date & Time</div>
            <div className='ml-[3px]'><img src={Toogle}></img></div>
            </div>
            
            {/* type */}
            <div className='ml-[4.5rem]'>Type</div>
            </div>
            {/* amount & status */}
            <div className='font-[500] text-[12px] text-[#797E82] flex ml-[13rem]'>
              {/* amount */}
              <div className='flex items-center mr-20'>
            <div>Amount</div>
            <div className='ml-[3px]'><img src={Toogle}></img></div>
            </div>
              {/* status */}
              <div className='ml-[6.5rem]'>Status</div>
            </div>
           </div>
        </div>
    </>
  )
}
