import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    show:false
}

export const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        //actions
        addToCart: (state,action) => {
            const index=state.items.findIndex(e=>e.id == action.payload.id)
            if(index>=0){
                state.items[index].quantity +=action.payload.quantity
            }else{
                state.items = [...state.items,action.payload]
            }
            
        },
        removeFromCart: (state,action) =>{
            const index=state.items.findIndex(e=>e.id == action.payload.id)
            let newItems=[...state.items]
            newItems.splice(index,1)
            state.items=newItems
        },
        updateQuantity: (state,action) =>{
            const index=state.items.findIndex(e=>e.id == action.payload.id)
            state.items[index].quantity =action.payload.quantity
        },
        showCart:(state,action)=>{
            state.show=action.payload
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addToCart,removeFromCart,updateQuantity,showCart,clearCart} =cartSlice.actions

// selectors
export const selectItems =(state) => state.cart.items
export const toggleCart =(state) => state.cart.show

export default cartSlice.reducer;
