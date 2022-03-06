import { ArrowCircleRightIcon, GiftIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import  Router  from 'next/router'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import Banner from '../src/Components/Banner'
import Feed from '../src/Components/Feed'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'
import { checkoutItems, setStep } from '../src/slices/checkoutSlice'
import { Zoom } from 'react-toastify';






export default function Home({products,categories}) {

  const [state, setState] = useState(false);
  const checkout = useSelector(checkoutItems)
  const [c, setC] = useState(0);
  const [c1, setC1] = useState(0);
  const dispatch = useDispatch()


 
  useEffect(() => {
    setC((pre)=>{
      setC1(pre)
      return checkout.order.length  
    })
  },[]);
  
  
  useEffect(() => {
    const func = () => {
      setState(true)
      setTimeout(() => {
        setState(false)  
      },5000);      
    }
    if (c1!=c) {
      func()
      console.log('called');

    }  
  }, [checkout.order.length]);
  if (state) {
    toast(<div  >
      <p className="text-blue-900 flex justify-center">
      Order Placed !! <GiftIcon   className="  ml-5 h-7" /> 
      </p>
      <button onClick={async()=>{await Router.push('/account'),dispatch(setStep('c'))}} 
      className="z-50 flex text-sm font-extralight justify-center hover:bg-yellow-500 ">  
      view order <ArrowCircleRightIcon   className="text-blue-900  ml-5 h-5" />  
      </button>
      </div>,{closeOnClick:false},{style:{borderRadius:'10px',boxShadow:'500px',background:'rgba(255,229,26)'}}) 
  }

  
 
  return (
    <div className=" no-scrollbar  overflow-x-hidden">
      <Head>
        <title>Amzn Cart</title>
        <link rel="icon" href="/a.jpeg" />
      </Head>

      <Navbar/>
      <main className='justify-center h-auto animate-fadeIn  lg:px-20 mt-16    '>
      <Banner/>
      <Feed products={products} categories={categories}/>
      {state && <Confetti
      numberOfPieces={1000} 
      tweenDuration={5000} 
      recycle={false}
      colors={['#ffea1a','#1a1ab0']}
      gravity={0.1}
      />}    

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
  
  // const Sproducts= shuffleArray(products)
  // console.log(Sproducts);
  
  return{
      props:{
          categories,
          products
      }
  }
}
  
  

  
