
import { useSession } from "next-auth/client"
import  Router  from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { selectItems,showCart, toggleCart } from "../slices/cartSlice"
import CartProduct from "./CartProduct"
import { XIcon,ShoppingBagIcon,EmojiSadIcon } from '@heroicons/react/outline'



function Cart() {
    const [session] =useSession()
    const items = useSelector(selectItems)
    const dispatch = useDispatch()
    const toggle = useSelector(toggleCart)
    

    
    return (
        <div id='cart' className={`no-scrollbar w-screen fixed top-0  duration-1000  h-screen bg-opacity-0 ${toggle ? "translate-x-0" : "translate-x-full"}`} >
            <div className='z-40 min-h-screen fixed right-0 top-0 left-0  ' onClick={()=>dispatch(showCart(false))}>   
            </div>  
            <div  className={`absolute overflow-y-hidden  w-full min-h-screen float-right z-50 top-0 right-0 bottom-0 shadow-2xl  overflow-x-hidden bg-white md:w-3/5 lg:w-2/5 ease-in-out duration-1000 ${toggle ? "translate-x-0" : "translate-x-full"} `}>
                <div className='h-screen'>
                <button className=' m-2 bg-yellow-300 py-1 px-3 rounded-full hover:bg-yellow-500 duration-300' onClick={()=>dispatch(showCart(false))} ><XIcon height={20}/></button>
                
                <div className='pr-3 md:m-3 lg:mx-6 grid relative  h-[95%]    '>
                        <h1 className={`px-10 py-1 mb-3 max-h-10 ${items.length === 0 && "flex mx-auto pt-10" }`}>
                            {items.length === 0 ?
                             <div className='h-full '>
                                 <p className='flex py-1 font-semibold'>Your Cart is Empty <EmojiSadIcon className='h-6 pl-4 text-yellow-600 animate-pulse '/></p> 
                                 <p className=' font-extralight text-md'>Get your new favorite products before they’re gone!</p>
                             </div>
                             : 
                            <div className='flex border-b-2 pb-3 h-full border-black'>Your cart <ShoppingBagIcon className='text-blue-900 h-6 pl-4'/></div>
                            }</h1>
                    <div className=' align-top mx-auto sm:w-full sm:mx-0 sm:px-2 px-0.5   h-full overflow-y-scroll '>

                        {items.map((item, i) => {
                            return (<CartProduct product={item} />)
                        })}
                    </div>
                    {items.length > 0 &&
                    <div className='h-40  bottom-0 px-10 my-2 mt-10 sm:my-5 py-2 md:py-4  rounded-xl border-yellow-400 bg-yellow-100 '>
                        <h1 className='text-md font-light underline'>Total Price </h1>
                        <p className='text-lg font-bold'>${items.reduce((total, item) => total + (Math.floor(item.price)) * item.quantity, 0)} </p>
                        <button
                            onClick={() => Router.push('/checkout')}
                            disabled={!session}
                            className={`${!session && "bg-gray-300 hover:bg-gray-400 cursor-not-allowed"} cursor-pointer px-4 my-3 py-2 rounded-xl bg-yellow-400 `}>
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
