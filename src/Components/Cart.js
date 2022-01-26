
import { useSession, Usesession } from "next-auth/client"
import  Router  from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectItems,showCart, toggleCart } from "../slices/cartSlice"
import CartProduct from "./CartProduct"
import { XIcon } from '@heroicons/react/outline'



function Cart() {
    const [session] =useSession()
    const items = useSelector(selectItems)
    const dispatch = useDispatch()
    const toggle = useSelector(toggleCart)
    useEffect(() => {
        // if(toggle){
            // document.body.style.overflow='visible'
        // }else{
        //   document.body.style.overflow='unset'
        
  
        // }
      },[])

    
    return (
        <div id='cart' className={` w-screen fixed top-0  h-screen bg-opacity-0 ${toggle ? "translate-x-0" : "translate-x-full"}`} >
            <div className='z-40 min-h-screen fixed right-0 top-0 left-0 bg-opacity-10 bg-gray-400 ' onClick={()=>dispatch(showCart(false))}>   
            </div>  
            <div  className={`fixed w-full  min-h-screen float-right z-50 top-0 right-0 bottom-0 shadow-2xl overflow-y-scroll overflow-x-hidden bg-white md:w-3/5 lg:w-2/5 transition-all ease-in-out duration-1000 ${toggle ? "translate-x-0" : "translate-x-full"} `}>
                <div className='h-screen'>
                <button className=' m-2 bg-yellow-300 py-1 px-3 rounded-full' onClick={()=>dispatch(showCart(false))} ><XIcon height={20}/></button>
                
                <div className='pr-3 md:m-3 lg:mx-6 grid relative  '>
                        <h1>{items.length === 0 ? 'Cart is empty' : 'Your Cart'}</h1>
                    <div className='w-min mx-auto sm:w-full sm:mx-0 p-2'>
                        <div className='overflow-y-scroll'>

                        {items.map((item, i) => {
                            return (<CartProduct product={item} />)
                        })}
                        </div>
                    </div>
                    {items.length > 0 &&
                    <div className='w-full bg-white fixed bottom-0 pl-10 pb-12 '>
                        <h1>Price</h1>
                        {/* <p>{items.reduce((total, item) => total + item.quantity, 0)}</p> */}
                        <p>{items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                        <button
                            onClick={() => Router.push('/checkout')}
                            disabled={!session}
                            className={`${!session && "bg-gray-300 cursor-not-allowed"} cursor-pointer px-4 py-2 rounded-xl bg-yellow-400 `}>
                            {!session ? "sign in to proceed" : 'Proceed to checkout'}</button>
                    </div>
                    }
                </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
