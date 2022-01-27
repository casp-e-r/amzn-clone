import Head from 'next/head'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Banner from '../src/Components/Banner'
import Feed from '../src/Components/Feed'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'
import { checkoutItems } from '../src/slices/checkoutSlice'




export default function Home({products,categories}) {

  const [state, setState] = useState(false);
  const checkout = useSelector(checkoutItems)
  
  useEffect(() => {
    setState(true)
    setTimeout(() => {
      setState(false)
      
    }, 3000);
    
  }, [checkout.length]);

  
 
  return (
    <div className=" overflow-x-hidden">
      <Head>
        <title>Amzn Cart</title>
        <link rel="icon" href="/a.jpeg" />
      </Head>

      <Navbar/>
      <main className='justify-center h-auto  lg:px-20 mt-16    '>
      <Banner/>
      <Feed products={products} categories={categories}/>
      {/* {state && <Confetti tweenDuration={2000} recycle={false}/>  }      */}

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
      
      />
      
      </main>
      <Footer/>
      
    </div>
  )
}
export async function getStaticProps(context){
  const products = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  const categories =await fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  
  
  return{
      props:{
          categories,
          products
      }
  }
}
  
  

  
