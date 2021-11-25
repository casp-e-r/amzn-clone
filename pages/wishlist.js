import { useSelector } from "react-redux"
import Footer from "../src/Components/Footer"
import Navbar from "../src/Components/Navbar"
import WishCard from "../src/Components/WishCard"
import { selectItems } from "../src/slices/wishSlice"

function wishlist() {
 const wish = useSelector(selectItems)
 console.log(wish)
    return (
        <div className=''>
            <Navbar/>
            <div className='flex '>
            {wish.length===0 ? 
                <div className='w-full items-center text-center'>
                    <h1 className='pt-20 font-extrabold '>your wishlist is empty</h1>
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
