
import  Router  from 'next/router'

import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {checkoutItems} from '../slices/checkoutSlice'
import OrderCard from './OrderCard'

function Orders() {
    // const [orderShip, setOrderShip] = useState()
     const dispatch = useDispatch()
     const checkout = useSelector(checkoutItems)
    console.log(checkout.order);
    return (
        <div className='pt-5 w-full h-full overflow-hidden animate-fade '>
            {checkout.order.length ===0 ? <div className='mx-auto'>
                <h1 className=' font-extrabold flex text-center '>No Order Found  </h1>
                    <p className='text-gray-600 py-1 font-light'> looks like you haven't made your first order yet</p>
                    <button className='bg-yellow-300 rounded-xl px-3 py-1 hover:bg-yellow-400 duration-300 mt-5 ' onClick={()=> Router.push('/')}>start shopping</button>
            </div>:
            <div>
            {checkout.order && checkout.order.map(e=>{
                return <div className='grid my-2  w-full overflow-hidden'>
                    <OrderCard order={e}/>
                </div>
            })}
            </div>
            }
        </div>
    )
}

export default Orders
