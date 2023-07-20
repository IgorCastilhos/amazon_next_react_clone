// Created on 7/19/2023 by igorc:  for Amazon Next Clone project

import { LuMenu } from 'react-icons/lu'

const BottomHeader = () => {
  return (
    <div
      className={`flex h-10 w-full items-center bg-amazon_light px-4 text-sm text-white`}
    >
      <p
        className={`flex h-8 cursor-pointer items-center gap-1 border border-transparent px-2 duration-300 hover:border-white`}
      >
        <LuMenu className={`text-xl`} /> All
      </p>
      <p
        className={`hidden h-8 cursor-pointer items-center border border-transparent px-2 duration-300 hover:border-white md:inline-flex`}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Today's Deals
      </p>
      <p
        className={`hidden h-8 cursor-pointer items-center border border-transparent px-2 duration-300 hover:border-white md:inline-flex`}
      >
        Customer Service
      </p>
      <p
        className={`hidden h-8 cursor-pointer items-center border border-transparent px-2 duration-300 hover:border-white md:inline-flex`}
      >
        Registry
      </p>
      <p
        className={`hidden h-8 cursor-pointer items-center border border-transparent px-2 duration-300 hover:border-white md:inline-flex`}
      >
        Gift Cards
      </p>
      <p
        className={`hidden h-8 cursor-pointer items-center border border-transparent px-2 duration-300 hover:border-white md:inline-flex`}
      >
        Sell
      </p>
      <p
        className={`hidden h-8 cursor-pointer items-center border border-transparent px-2 text-amazon_yellow duration-300 hover:border-red-600 hover:text-red-400 md:inline-flex`}
      >
        Sign Out
      </p>
    </div>
  )
}

export default BottomHeader
