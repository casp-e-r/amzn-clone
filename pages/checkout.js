import { useSelector } from "react-redux"
import { selectItems } from "../src/slices/cartSlice"
import Image from 'next/image';

function checkout(){
    const items = useSelector(selectItems)
    return(
        <div className='grid grid-cols-2 '>
           <div className='px-5 m-11'>
               {items.map(e=>{
                  return(
                  <div>
                    <Image src={e.image} width={80}  objectFit='responsive' />
                    <p>{e.title}</p>
                  </div>)
               })}
           </div>
           <div>
               <form>
                   <h1>ggg</h1>
                   <button >123456</button>
               </form>
           </div>
        </div>
    )
}

export default checkout
