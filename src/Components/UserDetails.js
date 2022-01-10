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
            <div className=' rounded-full border-4 border-yellow-300 w-52 h-52'>
            <Image className='rounded-full ' height={200} width={200} src={session.user.image}/>
            </div>
                
            <div className='pt-6 space-y-3'>

            
            <p className='text-gray-500 text-sm'>name</p>
            <h1 className='border-b-2 w-full'>  {session.user.name}</h1>
    
            <p className='text-gray-500 text-sm'>email</p>
            <h1 className='border-b-2 w-full'> {session.user.email}</h1>
            </div>
            </>
            }
            
        </div>
    )
}

export default UserDetails
