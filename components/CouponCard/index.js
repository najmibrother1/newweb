import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CouponCard = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Link href='/'>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className='rounded shadow-md border-2 border-transparent hover:border-indigo-400 h-60 p-2 bg-white w-44'>
        <div className='h-2/5'>
          <Image
            className='rounded w-full h-full object-cover'
            src="/papajohns.webp"
            alt="promo"
            height={"90"}
            width={"155"}
            layout="fixed"
          />
        </div>
        <div className='h-3/5 flex justify-between items-stretch flex-col'>
          <div>
            <p className='text-indigo-400 text-xs mt-2'>25% off all orders</p>
          </div>
          <div>
            {isShown ? (
              <button className='bg-indigo-400 hover:bg-indigo-500 rounded border-2 w-full p-2 text-white'>
                Coupon
              </button>
            ) : (
              <div>
                <p className='font-bold text-xs'>Papa John&apos;s</p>
                <p className='mt-2 text-gray-500 text-xs'>Without MOV</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CouponCard;