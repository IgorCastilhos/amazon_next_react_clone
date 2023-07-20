// Created on 7/19/2023 by igorcastilhos:  for Amazon Next Clone project
import Image from 'next/image'
import logo from '../../images/logo.png'
import cartIcon from '../../images/cartIcon.png'
import { BiCaretDown } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'
import { SlLocationPin } from 'react-icons/sl'
import Link from 'next/link'

const Header = () => {
  return (
    <div
      className={`sticky top-0 z-50 h-20 w-full bg-amazon_blue text-lightText`}
    >
      <div
        className={`mx-auto inline-flex h-full w-full items-center justify-between gap-1 px-4 mdl:gap-3`}
      >
        {/* Logo */}
        <Link
          href={'/'}
          className={`flex h-[70%] cursor-pointer items-center justify-center border border-transparent px-2 duration-300 hover:border-white`}
        >
          <Image
            className={`mt-1 w-28 object-cover`}
            src={logo}
            alt={'logo image'}
          />
        </Link>

        {/* Delivery */}
        <div
          className={`hidden h-[70%] cursor-pointer items-center justify-center gap-1 border border-transparent px-2 duration-300 hover:border-white xl:inline-flex`}
        >
          <SlLocationPin />
          <div className={`text-xs`}>
            <p>Deliver to</p>
            <p className={`font-bold uppercase text-white`}>Brazil</p>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`relative hidden h-10 flex-1 items-center justify-between md:inline-flex`}
        >
          <input
            className={`h-full w-full rounded-md border-[3px] border-transparent px-2 text-base text-black outline-none placeholder:text-sm focus-visible:border-amazon_yellow`}
            type="text"
            placeholder={`Search products`}
          />
          <span
            className={`absolute right-0 flex h-full w-12 items-center justify-center rounded-br-md rounded-tr-md bg-amazon_yellow text-2xl text-black`}
          >
            <HiOutlineSearch />
          </span>
        </div>

        {/* Sign In */}
        <div
          className={`flex h-[70%] cursor-pointer flex-col justify-center border border-transparent px-2 text-xs text-gray-100 duration-300 hover:border-white`}
        >
          <p>Hello, sign in</p>
          <p className={`flex items-center font-bold text-white`}>
            Account & Lists
            <BiCaretDown />
          </p>
        </div>

        {/* Favorites */}
        <div
          className={`flex h-[70%] cursor-pointer flex-col justify-center border border-transparent px-2 text-xs text-gray-100 duration-300 hover:border-white`}
        >
          <p>Marked</p>
          <p className={`font-bold text-white`}>& Favorites</p>
        </div>

        {/* Cart */}
        <Link
          href={'/cart'}
          className={`relative flex h-[70%] cursor-pointer items-center border border-transparent px-2 duration-300 hover:border-white`}
        >
          <Image
            className={`h-8 w-auto object-cover`}
            src={cartIcon}
            alt={'Cart Image'}
          />
          <p className={`mt-3 text-xs font-bold text-white`}>Cart</p>
          <span
            className={`absolute left-[30px] top-2 text-sm font-semibold text-amazon_yellow`}
          >
            0
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header
