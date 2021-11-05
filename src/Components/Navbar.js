import { SearchIcon,ShoppingBagIcon,UserIcon } from '@heroicons/react/outline'


function Navbar() {
    return (
        <div className='flex pt-2 justify-evenly h-30 bg-yellow-200  sm:flex-grow-0'>
            <div className='w-24 h-10 '>
                <h1>amzn</h1>
            </div>
            <div className=' flex m-1 w-1/2 h-6'>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                <SearchIcon className='ml-1 scale-80' />
                
            </div>
            <div className='flex w-20 h-10 items-center  justify-between'>
                <UserIcon className='w-6 hover:cursor-pointer'/>
                <ShoppingBagIcon className='w-6'/>
            </div>
        </div>
    )
}

export default Navbar
