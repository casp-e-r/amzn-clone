import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    shipping:[],
    payment:[],
    order:[],
    step:'a'
}
export const checkoutSlice =createSlice({
    name:'checkout',
    initialState,
    reducers:{
        setShipping:(state,action)=>{
            state.shipping=action.payload
        },
        setPayment:(state,action)=>{
            state.payment=action.payload
        },
        setOrder:(state,action)=>{
            state.order=[...state.order,action.payload]
            state.step==='a'
        },
        setStep:(state,action)=>{
            state.step=action.payload
        }
        
    }
})
export const {setShipping,setPayment,setOrder,setStep}=checkoutSlice.actions

export const checkoutItems=(state) => state.checkout

export const checkoutStep =(state) => state.checkout.step


export default checkoutSlice.reducer;
