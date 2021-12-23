import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    key:''
}

export const searchSlice =createSlice({
    name:'search',
    initialState,
    reducers:{
        searchKey:(state,action)=>{
            state.key=action.payload
        },
    }
})

export const{addToFav,searchKey}=searchSlice.actions

export const selectItems =(state) => state.search.key

export default searchSlice.reducer;