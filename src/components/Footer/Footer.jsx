import React from 'react'
import image from'../../images/recipe.png'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
  const navigate=useNavigate();
  function goHome(){
    navigate('/')
  }
  return (
    <div className='bg-white'>
    <div className='p-5 flex justify-between items-center border-b-[1px] border-b-[#E5E7EB] pb-9'>
      <div className='flex items-center'>
        <img src={image} alt="recipe image" className='w-[50px] cursor-pointer'onClick={goHome}/>
        <span className='font-[600] text-[24px] ps-5 cursor-pointer'onClick={goHome}>Recipe</span>
      </div>
      <span className='font-[700] text-[#1D4ED8] text-[24px]' >Route</span>
    </div>
    <p className='text-center text-[#6B7280] py-9 text-[14px] font-[400]'>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </div>
  )
}
