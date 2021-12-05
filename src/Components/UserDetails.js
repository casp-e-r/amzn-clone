import { useSession } from 'next-auth/client'
import React from 'react'
import Image from 'next/image'

function UserDetails() {
    const [session]=useSession()
    console.log(session);
    return (
        <div className='py-10 flex-row '>
            {session && 
            <>
            <div className='p-3 '>
            <Image className='rounded-full ' height={200} width={200} src={session.user.image}/>
            </div>
                
            <div className='pt-6 space-y-3'>

            
            <p className='text-gray-500 text-sm'>name</p>
            <h1 className=''>  {session.user.name}</h1>
    
            <p className='text-gray-500 text-sm'>email</p>
            <h1>{session.user.email}</h1>
            </div>
            </>
            }
            
        </div>
    )
}

export default UserDetails
