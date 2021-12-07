
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
            document.body.style.overflow='hidden'
        // }else{
        //   document.body.style.overflow='unset'
        
  
        // }
      },[])

    
    return (
        <div id='cart' className=' w-screen h-30 bg-opacity-0   ' >
        <div className='z-40 min-h-screen absolute right-0  top-0 left-0 ' onClick={()=>dispatch(showCart(false))}>   
        </div>  
        <div  className='fixed w-full min-h-screen  float-right  z-50 top-0 right-0 bottom-0 shadow-2xl bg-white bg-opacity-70 overflow-y-scroll md:w-2/5'>
            {/* <div className='fixed top-0 bg-gray-900'> */}
            <button className=' m-2 bg-yellow-300 py-1 px-3 rounded-full' onClick={()=>dispatch(showCart(false))} ><XIcon height={20}/></button>
            {/* </div> */}
        <div className=' m-1 md:m-3 lg:mx-6 grid relative  '>
            <div className='w-full p-2'>
                <h1>{items.length === 0 ? 'Cart is empty' : 'Your Cart'}</h1>
                {items.map((item, i) => {
                    return (<CartProduct product={item} />)
                })}
            </div>
            {items.length > 0 &&
                <div className='w-full bg-white fixed bottom-0 pb-12 border-4'>
                    <h1>Price</h1>
                    {/* <p>{items.reduce((total, item) => total + item.quantity, 0)}</p> */}
                    <p>{items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                    <button
                        onClick={() => Router.push('/checkout')}
                        disabled={!session}
                        className={`${!session && "bg-gray-300 cursor-not-allowed"} cursor-pointer px-4 py-2 rounded-xl bg-yellow-400 
                        `}>
                        {!session ? "sign in to proceed" : 'Proceed to checkout'}</button>

                </div>
            }

        </div>
        </div>
        </div>


    )
}

export default Cart
