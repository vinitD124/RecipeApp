import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from "react-icons/fa6";
import { remove } from '../redux/Slices/LikeSlice';
import SingleRecipe from '../components/SingleRecipe';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Like() {

  let { isClick , setIsClick , singleMeal 
    ,setSingleMeal } = useContext(AppContext);
  let {like} = useSelector((state)=>state)

  let dispatch = useDispatch()

  console.log(like)

  return (

    
    <div className='home'>
    <div className="top-like">

      <h1>Liked Recipe</h1>
    </div>
    <div className="bottom-likes">
        {
          like.length === 0 ? (<div className='like-recipe-box'>

            <h1>No Liked Recipes available</h1>

        </div>) : (
          like.map((meal)=>{

            return <div className="like-item">
           {
            isClick ? ( <SingleRecipe meal={singleMeal}/> ) : ("")
           }
           <div className='col-3'>
           <img src={meal.strMealThumb} alt="" />
            <h2 className='meal-name' onClick={()=>{
                 setSingleMeal(meal)
                 setIsClick(!isClick)
            }}>{meal.strMeal}</h2>
           </div>
            <button className='like-meal-btn' onClick={()=>{


                dispatch(remove(meal.idMeal))

            }}><FaHeart /></button>
          </div>
          })
        ) 
        }
    </div>
  </div>
  )
}

export default Like
