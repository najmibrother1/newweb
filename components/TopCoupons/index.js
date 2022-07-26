import React from 'react'
import CouponCard from '../CouponCard';

const TopCoupons = () => {
  return (
    <div className='bg-indigo-50 flex flex-col justify-center align-middle py-12 px-4 md:px-24'>
      <h1 className='text-center text-2xl'>Our Top Coupon Codes</h1>
      <div className='inline-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mt-10'>
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
        <CouponCard />
      </div>
      <div className='flex justify-center mt-12'>
        <button className='bg-white hover:bg-gray-300 rounded border-2 w-48 p-2 text-black font-bold'>
          Show more discounts
        </button>
      </div>
    </div>
  )
}

export default TopCoupons;