import {createSlice} from '@reduxjs/toolkit'

export const LikeSlice = createSlice({
    name :'like',
    initialState : [],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.idMeal !== action.payload)
        }
    }
})

export const {add,remove} = LikeSlice.actions
export default LikeSlice.reducer