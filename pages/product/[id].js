import React, { useEffect, useState } from 'react'
import Product from '../../src/Components/Product'
import Navbar from '../../src/Components/Navbar'
import Footer from '../../src/Components/Footer'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import Image from 'next/image';
import  Router  from 'next/router';
import { Zoom } from 'react-toastify';





function  detail({product,products}) {
    const [cProducts, setCProducts] = useState([])
    useEffect(() => {
      products.map(p=>{
          p.category===product.category && p.id!==product.id && setCProducts(cProducts=>[...cProducts,p])

      })
    }, [product])

    
   
    return (
        <div className=' h-screen justify-between'>
            <Head>
                <title>{product.title}t</title>
                <link rel="icon" href="/a.jpeg" />
            </Head>

            <Navbar/>
            <div className=' mt-16 pb-auto animate-fadeIn'>
                <Product product={product} />

            </div>
            <p className=' mt-12 mb-2 px-1 text-center  border-black w-36 mx-4 bg-yellow-100 rounded-lg'>Similar products</p>
            <div className=' mb-11 grid md:grid-cols-2 px-5 mx-5 lg:mx-15 text-center md:flex bg-blue-50/10 '>
                {cProducts.slice(0,4).map(p =>
                    p.category === product.category &&  p.id!==product.id &&
                    <div className=' w-64 sm:w-80 mx-auto rounded-lg md:shadow-2xl  bg-white md:w-96 shadow-lg text-sm md:text-base my-2 md:mx-2 p-4   '>
                        <div className='cursor-pointer' onClick={()=>Router.push(`/product/${p.id}`)}>
                        <div className='relative text-center mt-1'>
                            <Image src={p.image} width={200} height={200} objectFit='contain' />
                        </div>
                        <p className='text-sm lg:text-base cursor-pointer hover:font-medium'
                            >{p.title.slice(0,40)}...</p>
                        <p className='text-sm md:text-base '>${Math.floor(p.price)} </p>
                        </div>
                    </div>
                )}
                
            </div>
            <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHove
            transition={Zoom}
            />
            <div className='w-full mt-6  bottom-0'>

            <Footer/>
            </div>
        </div>
    )
}

export default detail

export async function getStaticPaths() {
    const products =await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
      const paths=products.map(p=>({
          params:{id:p.id.toString()}
      }))
      return{ paths, fallback:false ,}
    // Return a list of possible value for id

}

  export async function getStaticProps({ params }) {
    // Fetch necessary data for the product details using params.id
 
    const products =await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    const product =await fetch(`https://fakestoreapi.com/products/${params.id}`)
   .then(res=>res.json())
   return{
    props:{
        product,
        products
       
    }
    }
  }

