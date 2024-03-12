import React from 'react'
import { IoIosClose } from "react-icons/io";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosArrowRoundForward } from "react-icons/io";


function SingleRecipe({meal}) {

  let { isClick , setIsClick } = useContext(AppContext);

  console.log(meal)
  return (
    <div className={isClick ? 'single-recipe active' : 'single-recipe'}>

        
      

        <div className="bottom-cont">
          <img  src={meal.strMealThumb} alt="" />

        <button className='btn-final' onClick={()=>{
          setIsClick(!isClick)
        }}><IoIosClose /></button>

  

          <div className="text">
          <span>{meal.strCategory}</span>
          <h1 className='head-one'>{meal.strMeal}</h1>
          <h2 className='head-two head-three'>Ingredients</h2>
          <div className="btn-ingredients">
            <button>{meal.strIngredient1}</button>
            <button>{meal.strIngredient2}</button>
            <button>{meal.strIngredient3}</button>
            <button>{meal.strIngredient4}</button>
      

          </div>
            <h2 className='head-two'>Instructions</h2>
            <p> {meal.strInstructions} </p>
          </div>
        </div>  
        <button className='more'><a href={meal.strSource} target='_blank'>Source <IoIosArrowRoundForward />
</a></button>

    </div>
  )
}

export default SingleRecipe
