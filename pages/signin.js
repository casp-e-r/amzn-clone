import React from 'react'
import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import Image from 'next/image'
import Router from 'next/router';


function signin({ providers }) {
  console.log(providers);
  return (
    <div className='grid  justify-center mx-40'>
      <div className=' my-20 text-center text-black font-medium'>
        <Image src='/amzn.png' width={110} height={55} objectFit='contain' layout='responsive' onClick={() => Router.push('/')} className='cursor-pointer' />
        <p>log in  to amzn</p>
        

      </div>
      <div className='bg-gray-400 ' >
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name} className={`flex items-center px-10 gap-x-4 py-2
            ${provider.name === 'Google' ? "bg-black text-white" : provider.name === Google1 ? null: null}`}>
              
              <button
                className=''
                onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
              <Image width={50} height={50}
              src={provider.name === 'Google' ? "/G.png" : provider.name === Google1 ? null: null}/>
            </div>
          );
        })}

      </div>
      <div className='mt-4 space-x-3 border-t-2 text-blue-800 text-xs text-center '>
        <a className='cursor-pointer hover:border-yellow-400 hover:border-b-2 hover:text-yellow-500'>Conditions of use</a>
        <a className='cursor-pointer hover:border-yellow-400 hover:border-b-2 hover:text-yellow-500'>Privacy Notice</a>
        <a className='cursor-pointer hover:border-yellow-400 hover:border-b-2 hover:text-yellow-500'>Help</a>
      </div>

    </div>
  )
}

export default signin

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await providers(context),
    },
  };
}
