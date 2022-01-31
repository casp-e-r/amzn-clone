import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


function Banner() {
    return (
        <div className='relative lg:px-20 '>
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                <div>
                    <img loading='lazy' src='/b1.gif'/>
                </div>
                <div>
                <img loading='lazy' src='/b2.jpg'/>
                </div>
                <div>
                    <img loading='lazy' src='/b3.gif'/>
                </div>
            </Carousel>
            
        </div>
    )
}

export default Banner
