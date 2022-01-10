import {  useSession } from 'next-auth/client'
import Router  from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'
import Orders from '../src/Components/Orders'
import UserDetails from '../src/Components/UserDetails'
import WishList from '../src/Components/WishList'
import Head from 'next/head'



function account() {
    const [state, setstate] = useState(0)
    const [session]=useSession()
    // useEffect(() => {
    //     !session && Router.push('/')
    // }, [session])
    // console.log(session);
    return (
        <div className='min-h-screen'>

            <Head>
                <title>Account</title>
            </Head>
            
            
            <Navbar/>
            <div className='min-h-screen  mt-16'>
            <div className='border-gray-50 border-t-2 mx-4 md:px-20  mt-10 h-5/6 mb-40 '>
            <div className='pt-3 ml-4 border-b-2 border-yellow-50  gap-x-1.5 '>
                <button className={state===0 ? 'px-4 rounded bg-yellow-200' :'px-4 border-yellow-100 border-2 rounded hover:bg-yellow-100'} onClick={()=>setstate(0)}>Details</button>
                <button className={state===1 ? 'px-4 rounded bg-yellow-200' :'px-4 rounded border-yellow-100 border-2 hover:bg-yellow-100'} onClick={()=>setstate(1)}>Wishlist</button>
                <button className={state===2 ? 'px-4 rounded bg-yellow-200' :'px-4 rounded border-yellow-100 border-2 hover:bg-yellow-100'} onClick={()=>setstate(2)}>Orders</button>
            </div>
            <div className='flex w-4/5 m-auto p-auto pt-3 h-full'>
                {state===0 ? <UserDetails/> : state===1 ? <WishList/> : <Orders/>}                  
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default account
