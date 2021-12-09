import React from 'react'

function Shipping() {
    return (
        <div>
            <div className='text-center font-bold mb-4'>
                <h2>Shipping Details</h2>
            </div>
            <div>
                <form className='flex'>
                    <div className='grid gap-y-4 max-w-xl flex-grow '>
                    
                    <div className='w-full grid flex-grow gap-y-3 '>
                        <label className='text-sm text-gray-600'>Name</label>
                        <input type='text' className='border outline-none border-black ' />
                    </div>
                    
                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Email</label>
                        <input type='email' className='border outline-none border-black' />
                    </div>

                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Phone</label>
                        <input type='number' inputMode='numeric' className='border outline-none border-black ' />
                    </div>

                    <div className='w-full grid flex-grow gap-y-3'>
                        <label className='text-sm text-gray-600'>Address</label>
                        <textarea type='text'  className='border outline-none resize-none border-gray-400' />
                    </div>

                    


                    

                    {/* <div className='col-span-full md:col-span-6 '>        
                    <label>2</label>
                    <input className='outline' type='input'/>

                    <label>3</label>
                    <input className='outline' type='input'/>
                    </div> */}
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Shipping
