// Created on 7/20/2023 by igorc:  for Amazon Next Clone project

import { Carousel } from 'react-responsive-carousel'
import sliderImg1 from '../../images/slider/sliderImg_1.jpg'
import sliderImg2 from '../../images/slider/sliderImg_2.jpg'
import sliderImg3 from '../../images/slider/sliderImg_3.jpg'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={`relative`}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image priority src={sliderImg1} alt={'sliderImg'} />
        </div>
        <div>
          <Image src={sliderImg2} alt={'sliderImg'} />
        </div>
        <div>
          <Image src={sliderImg3} alt={'sliderImg'} />
        </div>
      </Carousel>
      <div
        className={`absolute bottom-0 z-20 h-40 w-full bg-gradient-to-t from-gray-100 to-transparent`}
      ></div>
    </div>
  )
}

export default Banner
