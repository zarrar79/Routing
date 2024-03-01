import React from 'react'
import User from './User.png'
import Info from './Info.png'
import In from './Down.svg'
import Up from './Up.svg'
import SideArrow from './Side Arrow.svg'
import Add from './Add.svg'
import Remove from './Remove.svg'
import Graph from './Graph.svg'
import Dollar from './Dollar.svg'
import Bitcoin from './Bitcoin.svg'
 export const DashPage = () => {
  return (
    <>
    {/* fluid container */}
    <div className='font-Ubuntu w-[100%] max-w-[900px] mx-auto'>
      {/* Dashboard & User */}
      <div className='flex justify-between mt-3'>
        {/* Dashboard */}
        <div className='font-[500] text-[28px] text-[#171717]'>Dashboard</div>
        {/* User */}
        <div className='cursor-pointer rounded-[50%]  items-center flex justify-center border-solid border-black border w-[50px] h-[50px]'><img src={User} className='w-[20px] h-[20px]'></img></div>
      </div>
      {/* parent */}
      <div className='px-5'>
      {/* Ammount */}
      <div className='flex justify-between mt-[49px]'>
        {/* portfolio */}
        <div>
          {/* total */}
          <div className='flex items-center'>
            {/* text */}
            <div className='font-[500] text-[14px] text-[#535D66]'>Total Portfolio Value</div>
            {/* image */}
            <div className='ml-2'><img src={Info} className='w-[14px] h-[14px]'></img></div>
          </div>
          {/* rupee */}
          <div className='mt-2 font-[500] text-[24px] text-[#171717]'>₹ 112,312.24</div>
        </div>
        {/* currency */}
        <div>
        {/* balance */}
        <div className='font-[500] text-[14px] text-[#535D66]' >Wallet Balances</div>
        {/* big + small */}
        <div className='flex justify-between items-center'>
          {/* big */}
          <div className='font-[500] text-[22px] text-[#171717] mt-2'>22.39401000</div>
          {/* small */}
          <div className='font-[500] text-[12px] text-[#797E82] ml-2 mt-2'>BTC</div>
        </div>
        </div>
        {/* simple */}
        <div>
        {/* balance */}
        <div className='font-[500] text-[14px] text-[white]' >Wallet Balances</div>
        {/* big + small */}
        <div className='flex justify-between items-center'>
          {/* big */}
          <div className='font-[500] text-[22px] text-[#171717] mt-2'>₹ 1,300.00</div>
          {/* small */}
          <div className='font-[500] text-[12px] text-[#797E82] ml-2 mt-2'>INR</div>
        </div>
        </div>
        {/* buttons */}
        <div>
          {/* button 1 */}
          <button className='bg-[#5F00D9] px-[15px] py-[8.5px] rounded-[10px] text-center'>
            {/* img + text */}
            <div className='flex items-center text-center'>
              {/* img */}
              <div><img src={In}></img></div>
              {/* text */}
              <div className='ml-2 font-[500] text-[14px] text-[#FFFF]'>Deposit</div>
            </div>
          </button>
          {/* button 2 */}
          <button className='bg-[#5F00D9] px-[15px] py-[8.5px] rounded-[10px] ml-3'>
            {/* img + text */}
            <div className='flex items-center'>
              {/* img */}
              <div><img src={Up}></img></div>
              {/* text */}
              <div className='ml-2 font-[500] text-[14px] text-[#FFFF]'>Withdraw</div>
            </div>
          </button>
        </div>
      </div>
      {/* current Price Parent */}
       <div className='grid grid-cols-2 gap-14 mt-16'>
        {/* left */}
        <div>
          {/* head */}
          <div className='flex justify-between'>
       <div>
        {/* balance */}
        <div className='font-[500] text-[14px] text-[#535D66]' >Current Price</div>
        {/* big + small */}
        <div className='flex items-end'>
          {/* big */}
          <div className='font-[500] text-[22px] text-[#171717] mt-2'>₹26,670.25</div>
          {/* small + img*/}
          <div className='flex ml-2'>
            <div className='mt-[5px]'><img src={SideArrow}></img></div>
          <div className='font-[500] text-[14px] text-[#059669] mb-[2px] ml-[3px]'>0.04%</div>
          </div> 
        </div>
        </div>
        {/* buttons */}
        <div>
          {/* button 1 */}
          <button className='bg-[#5F00D9] rounded-[10px] px-[15px] py-[8.5px]'>
            {/* img + text */}
            <div className='flex items-center'>
              {/* img */}
              <div><img src={Add}></img></div>
              {/* text */}
              <div className='ml-2 font-[500] text-[14px] text-[#FFFF]'>Buy</div>
            </div>
          </button>
          {/* button 2 */}
          <button className='bg-[#5F00D9] px-[15px] py-[8.5px] rounded-[10px] ml-3'>
            {/* img + text */}
            <div className='flex items-center'>
              {/* img */}
              <div><img src={Remove}></img></div>
              {/* text */}
              <div className='ml-2 font-[500] text-[14px] text-[#FFFF]'>Sell</div>
            </div>
          </button>
        </div>
        </div>
        {/* single right */}
        <div className='font-[500] text-[12px] text-[#797E82] flex justify-end mt-3'>
          {/* box1 */}
          <div className=' py-[4px] px-[6px] rounded-[6px] bg-[#F3F3F7] w-[30px]'>1H</div>
          {/* box2 */}
          <div className='text-[#171717]  py-[4px] px-[6px] rounded-[6px] bg-[#F3F3F7] w-[30px]'>1D</div>
          {/* box3 */}
          <div className=' py-[4px] px-[6px] rounded-[6px] bg-[#F3F3F7] w-[30px]'>1W</div>
          {/* box4 */}
          <div className=' py-[4px] px-[6px] rounded-[6px] bg-[#F3F3F7] w-[30px]'>1M</div>
        </div>
        {/* Graph */}
        <div className='mt-12'>
          <img src={Graph}></img>
        </div>
        {/* time */}
        <div className='font-[400] text-[12px] text-[#797E82] flex justify-between mt-[13px]'>
          {/* t1 */}
          <div>7:15 PM</div>
          {/* t2 */}
          <div>12:55 AM</div>
          {/* t3 */}
          <div>6:35 AM</div>
          {/* t4 */}
          <div>12:15 PM</div>
          {/* t5 */}
          <div>5:55 PM</div>
        </div>
       </div>
       {/* right */}
       <div>
        {/* recent transactions */}
        <div className='font-[500] text-[14px] text-[#535D66]'>Recent Transactions</div>
         {/* flex */}
         <div className='flex justify-between items-center'>
          {/* details */}
          <div className='flex justify-between items-center ml-3 mt-6'>
            {/* img */}
          <div><img src={Dollar}></img></div>
          {/* box for flex */}
          <div className='ml-7'>
           {/* deposit */}
           <div className='font-[400] text-[16px] text-[#171717]'>INR Deposit</div>
            {/* time */}
            <div className='font-[400] text-[14px] text-[#797E82]'>2022-06-09 7:06 PM</div>
          </div>
          </div>
            
          {/* Amount */}
          <div>
          <div className='font-[500] text-[16px] text-[#171717]'>+ ₹81,123.10</div>
          <div className='font-[500] text-[16px] text-[#ffff]'>+ ₹81,123.10</div>
          </div>
         </div>
         {/* flex */}
         <div className='flex justify-between items-center'>
          {/* details */}
          <div className='flex justify-between items-center ml-3 mt-6'>
            {/* img */}
          <div><img src={Bitcoin}></img></div>
          {/* box for flex */}
          <div className='ml-7'>
           {/* deposit */}
           <div className='font-[400] text-[16px] text-[#171717]'>BTC Sell</div>
            {/* time */}
            <div className='font-[400] text-[14px] text-[#797E82]'>2022-05-27 12:32 PM</div>
          </div>
          </div>
            
          {/* Amount */}
          <div>
          <div className='font-[500] text-[16px] text-[#171717]'>- 12.48513391 BTC</div>
          <div className='font-[400] text-[14px] text-[#797E82] flex justify-end'>+ $81,123.10</div>
          </div>
         </div>
         {/* flex */}
         <div className='flex justify-between items-center'>
          {/* details */}
          <div className='flex justify-between items-center ml-3 mt-6'>
            {/* img */}
          <div><img src={Dollar}></img></div>
          {/* box for flex */}
          <div className='ml-7'>
           {/* deposit */}
           <div className='font-[400] text-[16px] text-[#171717]'>INR Deposit</div>
            {/* time */}
            <div className='font-[400] text-[14px] text-[#797E82]'>2022-06-09 7:06 PM</div>
          </div>
          </div> 
          {/* Amount */}
          <div>
          <div className='font-[500] text-[16px] text-[#171717]'>+ ₹81,123.10</div>
          <div className='font-[500] text-[16px] text-[#ffff]'>+ ₹81,123.10</div>
          </div>
         </div>
         {/* view button */}
         <button className='mt-6 rounded-[10px] text-center px-44 py-2 font-[500] text-[13px] text-[#171717] bg-[#EEEEF4]'>View All</button>
       </div>
       </div>
       {/* box grid */}
       <div className='grid grid-cols-2 gap-7 mt-12 pb-[160px]'>
        {/* left */}
        <div>
          {/* Loans Box */}
        <div className='bg-[#ffff]  rounded-[16px] p-6 '>
          {/* head */}
          <div className='cursor-pointer text-center font-[500] text-[12px] text-[#ffff] bg-[#5F00D9] w-[56px] rounded-[100px] py-[2px]'>Loans</div>
          {/* text */}
          <div className='font-[500] text-[18px] text-[#171717] mt-[14px]'>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</div>
        </div>
        </div>
        {/* right */}
        <div>
          {/* Contact Box */}
        <div className='bg-[#5F00D9] rounded-[16px] p-6 '>
          {/* head */}
          <div className='cursor-pointer text-center font-[500] text-[12px] text-[#5F00D9] bg-white p-1 w-[56px] rounded-[100px] py-[1px] px-[6px]'>Contact</div>
          {/* text */}
          <div className='font-[500] text-[18px] text-[#ffff] mt-[14px]'>Learn more about our real estate, mortgage, and  corporate account services</div>
        </div>
        </div>
       </div>
      </div>
    </div>
    
    </>
  )
}
