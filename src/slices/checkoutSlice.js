import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    shipping:[],
    payment:[],
    order:[]
}
export const checkoutSlice =createSlice({
    name:'checkout',
    initialState,
    reducers:{
        setShipping:(state,action)=>{

        },
        setPayment:(state,action)=>{

        },
        setOrder:(state,action)=>{

        }
    }
})
export const {setShipping,setPayment,setOrder}=checkoutSlice.actions

export const checkout=(state) => state.checkout

export default checkoutSlice.reducer;
