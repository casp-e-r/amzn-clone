import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    key:'',
    results:[]
}

export const searchSlice =createSlice({
    name:'search',
    initialState,
    reducers:{
        searchKey:(state,action)=>{
            state.key=action.payload
        },
        searchProducts:(state,action)=>{
            state.results=action.payload
        }
    }
})

export const{searchProducts,searchKey}=searchSlice.actions

export const selectSearchItems =(state) => state.search

export default searchSlice.reducer;