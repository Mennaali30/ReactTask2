// Sidebar.jsx
import React from 'react'
import image from '../../images/recipe.png' 
import { CiForkAndKnife } from "react-icons/ci";
export default function Sidebar() {
  return (
    <div className='w-64 bg-[#F9FAFB] h-full-screen'>
      <img src={image} alt="recipe image" />
      <ul className=' w-55 mx-auto'>
        <li className='flex items-center bg-[#F29724] text-white p-2 rounded-xl shadow-xl shadow-[#FCCC9A] text-[18] font-[600] hover:scale-105 hover:shadow-none transition-all duration-300 ps-6'><CiForkAndKnife /> Meals</li>
        <li className='flex items-center p-2 rounded-xl border border-[#D5D2D7] text-[#000] text-[18] font-[600] hover:scale-105  transition-all duration-300 ps-6 mt-5'><CiForkAndKnife /> Ingrediants</li>
        <li className='flex items-center p-2 rounded-xl border border-[#D5D2D7] text-[#000] text-[18] font-[600] hover:scale-105  transition-all duration-300 ps-6 mt-5'><CiForkAndKnife /> Area</li>
      </ul>
    </div>
  )
}
