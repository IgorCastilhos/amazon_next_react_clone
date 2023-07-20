// Created on 7/19/2023 by igorc:  for Amazon Next Clone project

import logo from '../../images/logo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div
      className={`flex h-20 w-full items-center justify-center gap-4 bg-amazon_light text-gray-300`}
    >
      <Image className={`w-24`} src={logo} alt={'logo'} />
      <p className={`-mt-4 text-sm`}>
        All rights reserved{' '}
        <a
          className={`cursor-pointer decoration-[1px] duration-300 hover:text-white hover:underline`}
          target={'_blank'}
          href="https://igor-paprocki-portfolio-website.vercel.app/"
        >
          @IgorPaprocki
        </a>
      </p>
    </div>
  )
}

export default Footer
