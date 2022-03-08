import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'



function Banner() {
    return (
        <div className='relative md:h-60 md:mx-2 lg:h-64 xl:h-72 2xl:h-96  xl:px-20 xl:mb-5 '>
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            // showArrows={false}
            interval={5000}
            >
                <div>
                    <img loading='lazy' alt='' src='/b6.jpg'/>
                </div>
                <div>
                    <img loading='lazy' alt='' src='/b3.gif'/>
                </div>
                <div>
                <img loading='lazy' alt='' src='/b1.gif'/>
                </div>
                <div>
                    <img loading='lazy' alt='' src='/b5.jpg'/>
                </div>
            </Carousel>
            
        </div>
    )
}

export default Banner
