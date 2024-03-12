import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
      <div className="col">
        <NavLink to={"/"}>
       <button><IoHomeSharp /></button>
        </NavLink>


        </div>
       
        <div className="col">
     
        <NavLink to={"/search"}>
        <button><FaSearch /></button>
        </NavLink>



        </div>

        <div className="col">

      <NavLink to={"/like"}>
      <button>  <IoMdHeart /></button>
        </NavLink>

        </div>
      
       
    </div>
  )
}

export default Footer
