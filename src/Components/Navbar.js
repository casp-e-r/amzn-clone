import React from 'react'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { signIn,signOut,session, useSession } from "next-auth/client";
import { useRouter } from "next/router";

function Navbar() {
    const [session] = useSession();
    const router = useRouter();

    return (
        <div className=' flex  items-center  lg:space-x-12 '>
            <div className='mx-1 md:mr-20 md:ml-10'>
                <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='fixed' onClick={()=>router.push('/')} className='cursor-pointer'/>
            </div>
             
            <div className='flex  items-center rounded-lg  bg-yellow-200 h-9 flex-grow  '>
                <input type='text'  className=' flex-grow outline-none  bg-transparent text-sm p-2 '/>
                <SearchIcon className='h-10 p-2 font-black cursor-pointer'/>    
            </div>

            <div className='flex  items-center m-3 ' >
                <div className='hidden sm:flex items-center px-3 '>
                    <UserIcon className='h-10 p-2 cursor-pointer ' onClick={!session ? signIn :signOut}/>
                    <p className='text-xs '>{session ? `hello, ${session.user.name}`: ' Sign In'}</p>
                </div>
                <div className='cursor-pointer' onClick={()=>router.push('/cart')}>
                <ShoppingBagIcon className='h-10 p-2 md:mr-10' />
                </div>
            </div>
            
            
        </div>
    )
}

export default Navbar
