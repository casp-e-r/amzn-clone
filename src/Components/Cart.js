import { useSession, Usesession } from "next-auth/client"
import { useSelector } from "react-redux"
import { selectItems } from "../slices/cartSlice"
import CartProduct from "./CartProduct"

function Cart() {
    const [session] =useSession()
    const items = useSelector(selectItems)
    return (
        <div className='m-4 md:m-6 lg:mx-40  lg:flex relative min-h-screen'>
            <div className='w-full lg:w-2/3 p-2  '>
                <h1>{items.length === 0 ? 'Cart is empty':'Your Cart'}</h1>
                { items.map ((item,i)=>{
                    return (<CartProduct product={item} />)

                })}
            </div>
            {items.length>0 &&
            <div className='bg-white'>
            <h1>Price</h1>

            
              <p>{items.reduce((total, item) => total + item.quantity, 0)}</p>
              <p>{items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              <button 
              role='link'
              disabled={!session}
              className={`${!session && "from-gray-100 to-gray-400 cursor-not-allowed"}cursor-pointer px-4 py-2 rounded-xl bg-yellow-400 
                        `}>
                        {!session ? "sign in to proceed":'Proceed to checkout'}</button>
           
        </div>
            }
            
        </div>
    )
}

export default Cart
