// Created on 7/20/2023 by igorc:  for Amazon Next Clone project

import React from 'react'

interface Props {
  amount: number
}

const FormattedPrice = ({ amount }: Props) => {
  const formattedAmount = Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })
  return <span>{formattedAmount}</span>
}

export default FormattedPrice
