import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoonLoader } from "react-spinners";
import style from './MealDetails.module.css'
import { CiYoutube } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
export default function MealDetails() {
  const{id}=useParams()
  const[loading,setLoading]=useState(true)
const[details,setDetails]=useState(null)
async function getMeal(idMeal){
  try{
      setLoading(true)
 const{data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
 setDetails(data.meals[0])
}
catch(error){
  console.log(error)
}
finally{setLoading(false)}
  }

useEffect(function(){
  getMeal(id)
},[id])
if(loading){
  return <div className='text-green flex justify-center items-center pt-[500px]'> <MoonLoader /> </div>
  }
  const ingrediants=[];
for(let i=0;i<=20;i++){
  const ing=details[`strIngredient${i}`]
  const measure=details[`strMeasure${i}`]
  if(ing && ing.trim()!==""){
    ingrediants.push(`${ing} : ${measure}`)
  }
}
  return (
    <div className='p-7'>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
        <h1 className='font-[600] text-[48px]'>{details.strMeal.split(" ").slice(0,2).join(" ")}</h1>
     
      <img src={details.strMealThumb} alt={details.strMeal} className=' w-full h-auto rounded-3xl' />
   <div className='flex items-center pt-7 ps-10 flex-wrap'>
    <button onClick={()=>window.open(details.strYoutube)} className=' cursor-pointer bg-[#DC2626] flex items-center text-white py-2 px-5 rounded-[7px] me-3'><CiYoutube />Youtube</button>
    <button onClick={()=>window.open(details.strSource)}  className=' cursor-pointer bg-[#21BA75] flex items-center text-white py-2 px-5 rounded-[7px]'><FaEarthAmericas />Source</button>
    </div>
    </div>

    <div className='pt-[70px] ms-3'>
      <p className='font-[450] text-[16px]'>{details.strInstructions}</p>
    </div>

    <div className='bg-[white] p-5 rounded-xl mt-10 ms-2 h-fit'>
      <h2 className='text-[24px] font-[600] border-b-[5px] border-b-[#E5E7EB] pb-[7px] mb-5'>Ingredients</h2>
      <ul>
      {ingrediants.map(function(item,index){
        const[ingrediant,measure]=item.split(" : ")
        return(
        <li key={index} className='border-b-[3px] border-b-[#E5E7EB] py-[9px] text-[16px] font-[500] flex justify-between'>
          <span>{ingrediant}</span>
          <span>{measure}</span>
        </li>)
        
      })}
      </ul>
    </div>
    </div>
    </div>
  )
}
