import {  useSession } from 'next-auth/client'
import Router  from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'
import Orders from '../src/Components/Orders'
import UserDetails from '../src/Components/UserDetails'
import WishList from '../src/Components/WishList'


function account() {
    const [state, setstate] = useState(0)
    const [session]=useSession()
    useEffect(() => {
        !session && Router.push('/')
    }, [session])
    console.log(session);
    return (
        <div className=''>
            
            <Navbar/>
            <div className='h-screen mt-16'>
            <div className='border-yellow-100 border-4 md:px-20  mt-10 h-5/6 mb-40 '>
            <div className='pt-3 ml-4 border-b-2  '>
                <button className='px-4 border hover:bg-gray-100' onClick={()=>setstate(0)}>Details</button>
                <button className='px-4 border hover:bg-gray-100' onClick={()=>setstate(1)}>Wishlist</button>
                <button className='px-4 border hover:bg-gray-100' onClick={()=>setstate(2)}>Orders</button>
            </div>
            <div className='flex w-4/5 m-auto p-auto py-3'>
                {state===0 ? <UserDetails/> : state===1 ? <WishList/> : <Orders/>}                  
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default account
