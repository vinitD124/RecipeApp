import { Context, createContext, useState } from "react";
// import baseUrl from '../baseUrl'

export const AppContext = createContext();

export function AppContextProvider({children}){

    let [randomRecipe , setRandomRecipe] = useState({})
    let [loading,setLoading] = useState(false)
    let [isClick , setIsClick] = useState(false)
    let [singleMeal ,setSingleMeal ] = useState({})

    let [SearchPost,setSearchPosts] = useState([])

   let specificRecipe = "https://www.themealdb.com/api/json/v1/1/search.php?s=" 
    let randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php"


    // "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    

    const getRandomRecipe = async () => {
        setLoading(true)
        let response = await fetch(randomUrl);
        let data = await response.json();

        
        setLoading(false)
        setRandomRecipe(data.meals[0])
        
    }
    

    async function SearchImage(tag){
   

        try {
            let response = await fetch(specificRecipe+tag)
            let data = await response.json()
            setSearchPosts(data)

        } catch (error) {
            return new console.error(error);
        }



    }

    
    const value = {
        getRandomRecipe,
        randomRecipe,
        loading,
        setLoading,isClick 
        , setIsClick,
        singleMeal 
        ,setSingleMeal,
        SearchPost
        ,setSearchPosts,
        SearchImage
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}