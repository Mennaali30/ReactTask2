import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import { FaEarthAmericas } from "react-icons/fa6";
import { MoonLoader } from "react-spinners";
import MealDetails from '../MealDetails/MealDetails';
import {useNavigate } from 'react-router-dom';
export default function Home({setSearch, search}) {
  const [active, setActive] = useState("All")
  const[allProducts,setAllproducts]=useState([])
  const[loading,setLoading]=useState(true)
  const navigate=useNavigate()
  const categories = [
    'All', 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat',
    'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood',
    'Side', 'Starter', 'Vegan', 'Vegetarian'
  ]
async function getProducts() {
  setLoading(true)
  try{
  if(search==="All"){
  const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  setAllproducts(data.meals)}
else{
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
  setAllproducts(data.meals)
}
}
catch(error){console.log(error)}
finally{setLoading(false)}
}
useEffect(function(){getProducts()},[search])
if(loading){
  return <div className='text-green flex justify-center items-center pt-[500px]'> <MoonLoader /> </div>
  }
  return (
    <div className='px-5 py-7 '>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </div>

      <h1 className="text-[36px] font-[700] bg-gradient-to-r from-[#F09325] to-[#D8524E] bg-clip-text text-transparent">
        Learn, Cook, Eat Your Food
      </h1>

      <ul className='flex flex-wrap my-5 gap-3 border-b-[1px] border-[#E5E7EB]'>
        {categories.map((cat) => (
          <li
            key={cat}
           onClick={() => {
  setActive(cat);
  setSearch(cat);
}}

            className={`
              me-5 font-[500] px-4 py-2 rounded-[100px] transition-all duration-300 cursor-pointer
              ${active === cat
                ? 'bg-black text-white'
                : 'border border-[#A2A6B1] text-[#4B5563] hover:shadow-2xl'}
            `}
           
          >
            {cat}
            
          </li>
        ))}
      </ul>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  
{allProducts?.map(function(meal){
  
  return(
   <div className={`${style.card} me-4 mb-7 text-center bg-white rounded-[50px] pt-[20px] hover:scale-105 hover:shadow-2xl transition-all duration-300 p-5 mt-[60px]`} >
  <img src={meal.strMealThumb} alt={meal.strMeal} className='rounded-[500px] w-[150px] mx-auto shadow-2xl -mt-[75px]' />
  <h2 className='text-[20px] font-[600] text-[#000] mt-[20px]'>{meal.strMeal.split(" ").slice(0,2).join(" ")}</h2>
  <span className='flex text-[#21BA75] items-center justify-center my-3'><FaEarthAmericas />{meal.strArea}</span>
  <button className='bg-[#21BA75] text-white font-[600] px-7 py-4 rounded-3xl cursor-pointer' onClick={()=>navigate(`/MealDetails/${meal.idMeal}`)}>View Recipe</button>
</div>
  )
})}
</div>
    </div>
  )
}
