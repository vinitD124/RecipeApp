import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import bg from "../assets/bg.png";
import Spinner from "../components/Spinner";
import { MdOutlineCancel } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/LikeSlice";








function Home() {

  let dispatch = useDispatch()
  let {like} = useSelector((state)=>state)
  let [isLike , setIsLike] = useState(false)


  // console.log(like)
  let { getRandomRecipe, randomRecipe, loading, setLoading } =
    useContext(AppContext);



  useEffect(() => {
    getRandomRecipe();
  }, []);

  return (
    <div className="home">
      <div className="main-container recipe-container-two">
        {loading ? (
          <Spinner/>
        ) : (
          <div className="recipe-container">
            <div className="top">
            <h1 className="heading2">Random Recipes</h1>
            <button><FaUser /></button>
            </div>
            <div className="img"></div>
            <div className="img-container">
            

              <img
                className="img-one"
                src={randomRecipe.strMealThumb ? randomRecipe.strMealThumb : "https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg"}
                alt=""
              />
              <img className="img-two" src={randomRecipe.strMealThumb ?  bg   : "https://www.themealdb.com/images/media/meals/41cxjh1683207682.jpg"} alt="" />
              <div className="recipe-container-text">
                <span><p>{randomRecipe.strCategory}</p></span>
              <h2 className="heading">
                {randomRecipe.strMeal && randomRecipe.strMeal.length < 25
                  ? randomRecipe.strMeal
                  : randomRecipe.strMeal &&
                    randomRecipe.strMeal.substring(0, 25) + "..."}
              </h2>
            </div>
            </div>
         
            <div className="buttons-container">
              <button className="cancel" onClick={()=>{
                getRandomRecipe()
                
              }}> <IoCloseOutline /></button>
              <button className="like" onClick={()=>{
                setIsLike(true)
                dispatch(add(randomRecipe))
                toast.success("liked succesdduly")
              getRandomRecipe()
              }}> <IoMdHeart /> </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
