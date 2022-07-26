import React from 'react'
import Image from 'next/image'

const InfoBox = () => {
  return (
    <div className='h-48 flex flex-col justify-between items-center bg-white w-full p-4'>
      <div>
        <Image
          className=''
          src="/discount.svg"
          alt="promo"
          height={"100"}
          width={"100"}
          layout="fixed"
        />
      </div>
      <div>
        <h2 className='font-bold text-2xl text-center'>45,000 coupons</h2>
      </div>
      <div>
        <p className='text-sm text-center'>Over 100 million coupons redeemed.</p>
      </div>
    </div>
  )
}

export default InfoBox;