import { useSelector } from "react-redux"
import Footer from "../src/Components/Footer"
import Navbar from "../src/Components/Navbar"
import WishCard from "../src/Components/WishCard"
import { selectItems } from "../src/slices/wishSlice"
import {HeartIcon as H1} from '@heroicons/react/outline'


function wishlist() {
 const wish = useSelector(selectItems)
 console.log(wish)
    return (
        <div className='relative  '>
            <Navbar/>
            <div className='flex min-h-screen '>
            {wish.length===0 ? 
                <div className='w-full flex justify-center'>
                    <h1 className='pt-20 font-extrabold '>your wishlist is empty</h1>
                    <h2 className='flex items-center'>use <H1 className='h-3 text-red-700 fill-current'/> to wishlist</h2>
                </div>
                :
                <div>
                <h1>your wishlist</h1>
                    <div className='grid grid-flow-row grid-cols-1'>

                    {wish.map(e=>{
                        return(<WishCard product={e}/>)
                    })}
                    </div>
                </div>
            }
                
            
            </div>

            <Footer />
        </div>
    )
}

export default wishlist
