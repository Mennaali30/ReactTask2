import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import MealDetails from './components/MealDetails/MealDetails'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'


function App() {
const[search,setSearch]=useState("All")
const router=createBrowserRouter([
  {path:'', element:<Layout /> , children:[
    {index:true , element:<Home setSearch={setSearch} search={search}/>},
    {path:'mealDetails/:id', element:<MealDetails/>},
  ]}
])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
