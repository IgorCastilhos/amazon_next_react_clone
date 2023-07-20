// Created on 7/19/2023 by igorc:  for Amazon Next Clone project

import React, { ReactElement } from 'react'
import Header from '@/components/header/Header'
import BottomHeader from '@/components/header/BottomHeader'
import Footer from '@/components/footer/Footer'

interface Props {
  children: ReactElement
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
