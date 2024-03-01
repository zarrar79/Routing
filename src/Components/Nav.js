import React, { useState } from 'react'
import DashboardD from './Dashboard Dark.png'
import Dashboard from './Dashboard.png'
import TransactionD from './TransactionsD.png'
import Transaction from './Transactions.png'
import { Route } from 'react-router-dom';
import Help from './Help.png'
import HelpD from './HelpD.png'
import { Link, Routes } from 'react-router-dom'
import { SupPage } from './SupPage'
import { TransPage } from './TransPage'
import { DashPage } from './DashPage'
export const Nav = () => {
  const [color, setColor] = useState("#171717");
  const [colorT, setColorT] = useState("#171717");
  const [colorB, setColorB] = useState("#171717");
  const imgDarkElements = document.getElementsByClassName('imgDark');
  const imgLight = document.getElementsByClassName('imgLight');
  const imgDarkElementsT = document.getElementsByClassName('transacD');
  const imgLightT = document.getElementsByClassName('transacL');
  const supportL = document.getElementsByClassName('supportL');
  const supportD = document.getElementsByClassName('supportD');
  const Change = () => {
    for (let i = 0; i < imgDarkElements.length && i < imgLight.length; i++) {
      imgDarkElements[i].style.display = "none";
      imgLight[i].style.display = "block";
      imgLightT[i].style.display = "none";
      imgDarkElementsT[i].style.display = "block";
      supportL[i].style.display="none";
      supportD[i].style.display="block";
    }
    setColor("grey");
    setColorT("#171717");
    setColorB("#171717");
  }
  const changTrasc = () => {
    for (let i = 0; i < imgDarkElementsT.length && i < imgLightT.length; i++) {
      imgDarkElements[i].style.display = "block";
      imgLight[i].style.display = "none";
      imgLightT[i].style.display = "block";
      imgDarkElementsT[i].style.display = "none";
      supportL[i].style.display="none";
      supportD[i].style.display="block";
    }
    setColor("#171717");
    setColorT("grey");
    setColorB("#171717");
  }
  const support = () => {
    for (let i = 0; i < imgDarkElementsT.length && i < imgLightT.length; i++) {
      imgDarkElements[i].style.display = "block";
      imgLight[i].style.display = "none";
      imgLightT[i].style.display = "none";
      imgDarkElementsT[i].style.display = "block";
      supportD[i].style.display = "none";
      supportL[i].style.display = "block";
      
    }
    setColorT("#171717");
    setColor("#171717");
    setColorB("grey");

  }
  return (
    <>
      {/* parent */}
      <div className='font-Ubuntu'>
        {/* components */}
        <div className='ml-[1.5rem] mt-11'>
          {/* head */}
          <div className='font-[500] text-[20px] text-[#5F00D9]'>@DOSOMECODING</div>
          {/* link1 */}
          <Link onLoad={Change} onClick={Change} to='/'>
            <div>
              {/* img text */}
              <div className='flex items-center mt-7'>
                {/* img */}
                <div className='relative w-[16px] h-[16px]'>
                  {/* absolute */}
                  <img className='absolute imgDark' src={DashboardD}></img></div>
                <img src={Dashboard} className='absolute imgLight hidden'></img>
                {/* text */}
                <div className='font-[500] text-[14px] ml-4 dashboard' style={{color : color}}>Dashboard</div>
              </div>
            </div>
          </Link>
          {/* link 2 */}
          <Link  onClick={changTrasc} to='/transPage'>
            <div>
              {/* img text */}
              <div className='flex items-center mt-7'>
                {/* img */}
                <div className='relative w-[16px] h-[16px]'>
                  {/* absolute */}
                  <img className='absolute transacD' src={TransactionD}></img></div>
                <img src={Transaction} className='absolute hidden transacL'></img>
                {/* text */}
                <div className='font-[500] text-[14px] ml-4' style={{ color: colorT }}>Transactions</div>
              </div>
            </div>
          </Link>
          {/* link 3 */}
          <div className='mt-[643px]'>
            <Link onClick={support} to='/supPage'>
              {/* img text */}
              <div className='flex items-center' onClick={support}>
                {/* img */}
                <div className='relative w-[16px] h-[16px]'>
                  {/* absolute */}
                  <img className='absolute supportD' src={HelpD}></img></div>
                <img src={Help} className='absolute hidden supportL'></img>
                {/* text */}
                <div className='font-[500] text-[14px] ml-4' style={{ color:colorB }}>Support</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<DashPage/>}></Route>
        <Route path='/transPage' element={<TransPage/>}></Route>
        <Route path='/supPage' element={<SupPage/>}></Route>
      </Routes>
    </>
  )
}