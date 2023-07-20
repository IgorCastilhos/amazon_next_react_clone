// Created on 7/20/2023 by igorc:  for Amazon Next Clone project

import React from 'react'
import { ProductProps } from '../../../type'
import Image from 'next/image'
import { HiShoppingCart } from 'react-icons/hi'
import { FaHeart } from 'react-icons/fa'
import FormattedPrice from '@/components/FormattedPrice'

const Products = ({ productData }: any) => {
  return (
    <div
      className={`grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-4`}
    >
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className={`group w-full  overflow-hidden rounded-lg border border-gray-300 bg-white px-4 text-black`}
          >
            <div className={`relative h-[260px] w-full`}>
              <Image
                className={`h-full w-full scale-90 object-cover transition-transform duration-300 hover:scale-100`}
                width={300}
                height={300}
                src={image}
                alt={'Product Image'}
              />

              <div
                className={`absolute bottom-10 right-0 flex h-24 w-12 translate-x-20 flex-col rounded-md border-[1px] border-gray-400 bg-white transition-transform duration-300 group-hover:translate-x-0 `}
              >
                <span
                  className={`flex h-full w-full cursor-pointer items-center justify-center border-b-[1px] border-b-gray-400 bg-transparent text-xl duration-300 hover:bg-amazon_yellow`}
                >
                  <HiShoppingCart />
                </span>
                <span
                  className={`flex h-full w-full cursor-pointer items-center justify-center border-b-[1px] border-b-gray-400 bg-transparent text-xl duration-300 hover:bg-amazon_yellow`}
                >
                  <FaHeart />
                </span>
              </div>
              {isNew && (
                <p
                  className={`absolute right-0 top-0 animate-bounce text-xs font-medium tracking-wide text-amazon_blue`}
                >
                  !save <FormattedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>
            <hr />
            <div className={`flex flex-col gap-1 px-4 py-3`}>
              <p className={`text-xs tracking-wide text-gray-500`}>
                {category}
              </p>
              <p className={`text-base font-medium`}>{title}</p>
              <p className={`flex items-center gap-2`}>
                <span className={`text-sm line-through`}>
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className={`font-semibold text-amazon_blue`}>
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className={`text-justify text-xs text-gray-600`}>
                {description.substring(0, 120)}
              </p>
              <button
                className={`mt-2 h-10 rounded-md bg-amazon_blue font-medium text-white duration-300 hover:bg-amazon_yellow hover:text-black`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default Products
