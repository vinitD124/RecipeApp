import React, { useContext, useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add } from '../redux/Slices/LikeSlice';
import { remove } from '../redux/Slices/LikeSlice';

function Search() {

  let { SearchPost
    ,setSearchPosts,
    SearchImage} = useContext(AppContext)


    
    let [tag,setTag] = useState("")

    let dispatch = useDispatch()
    let {like} = useSelector((state)=>state)

    function formHandler(e){

      e.preventDefault()
      SearchImage(tag)


    }


    useEffect(()=>{
      SearchImage(tag)
    }, [tag])


  return (
    <div className='search-container-one'>
      <div className="search-top">
        <form onSubmit={formHandler}>
        <div className="search-box">
        <input type="text" value={tag} onChange={(e)=>{
          setTag(e.target.value)
        }} placeholder='Search Recipes Here' />
        </div>
        <button className='submit-input-btn'><IoSearchOutline /></button>
        </form>
      </div>

        <div className="all-post">
        {
            SearchPost.meals && SearchPost.meals.map((onePost)=>{
              return (<div className='onePost'>
               <div className="row">
               <div className="row-one">
                  <img src={onePost.strMealThumb} alt="" />
                </div>
                <div className="row-two">
                  <span>{onePost.strCategory}</span>
                  <h2>{onePost.strMeal}</h2>
                </div>
               </div>
               {
            like.some((p)=>p.idMeal == onePost.idMeal) ? ( <button className='recipe-like active' onClick={()=>{dispatch(remove(onePost.idMeal))
              
}}><FaHeart /></button>) : ( <button className='recipe-like' onClick={()=>{
  dispatch(add(onePost))
}}><FaHeart /></button>)
        }
              

              </div>)
            })
        }
        </div>
      
    </div>
  )
}

export default Search
