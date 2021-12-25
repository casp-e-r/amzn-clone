import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[]
}

export const wishSlice =createSlice({
    name:'wish',
    initialState,
    reducers:{
        addToFav:(state,action)=>{
            const index=state.items.findIndex(e=>e.id == action.payload.id)
            if(index>=0){
                state.items=[...state.items]
            }else{
                state.items=[...state.items,action.payload]
            }
        },
        removeFromFav:(state,action)=>{
            const index=state.items.findIndex(e=>e.id == action.payload.id)
            let newItems=[...state.items]
            newItems.splice(index,1)
            state.items=newItems
        }
    }
})

export const{addToFav,removeFromFav}=wishSlice.actions

export const selectWishItems =(state) => state.wish.items

export default wishSlice.reducer;