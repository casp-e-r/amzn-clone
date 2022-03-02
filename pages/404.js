import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function Notfound() {
  return (
    <div className=" h-screen w-screen text-center flex justify-center items-center md:px-10">
            <Head>
                <title>404 Error</title>
                <link rel="icon" href="/a.jpeg" />
            </Head>
            <div className="">

            <h1 className=" font-black text-2xl md:text-6xl animate-pulse">404  NOT FOUND</h1>
            <Link href='/'>
            <button className="flex px-2 md:px-4 md:py-1 bg-yellow-400/80 rounded-xl cursor-pointer hover:bg-yellow-400 items-center" >Go Back Home <img className="h-9 md:h-10 ml-3" src='./amzn.png' alt='amzn'/></button>
            </Link>
            </div>
    </div>
  )
}

export default Notfound