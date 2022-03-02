import { useSession } from 'next-auth/client'
import {Router} from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'
import Orders from '../src/Components/Orders'
import UserDetails from '../src/Components/UserDetails'
import WishList from '../src/Components/WishList'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'



function account() {
    const [state, setstate] = useState(0)
    const [session] = useSession()
    // useEffect(() => {
    //     !session && Router.push('/')
    // }, [session])
    console.log(session);
    return (
        <div className='min-h-screen'>

            <Head>
                <title>Account</title>
                <link rel="icon" href="/a.jpeg" />
            </Head>


            <Navbar />
            <div className='min-h-screen  mt-16'>
                <div className=' mx-4 md:px-20  mt-10 h-5/6 mb-40 '>
                    <div className='pt-3 ml-4 border-b-2 border-yellow-50  gap-x-2 '>
                        <button className={`${state === 0 ? 'rounded bg-yellow-200 ' :' border-blue-800 hover:bg-yellow-100'} px-4  border-l border-r`} onClick={() => setstate(0)}>Details</button>
                        <button className={`${state === 1 ? 'rounded bg-yellow-200 ' :' border-blue-800 hover:bg-yellow-100'} px-4 `} onClick={() => setstate(1)}>Wishlist</button>
                        <button className={`${state === 2 ? 'rounded bg-yellow-200 ' :'  border-blue-800 hover:bg-yellow-100'} px-4 border-l border-r `} onClick={() => setstate(2)}>Orders</button>
                    </div>
                    <div className='flex w-4/5 m-auto p-auto pt-3 h-full'>
                        {state === 0 ? <UserDetails /> : state === 1 ? <WishList /> : <Orders />}
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer 
                position="top-center"
                autoClose={4000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHove />
        </div>
    )
}

export default account
