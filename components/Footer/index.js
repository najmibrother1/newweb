import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div style={{ background: "#0c0c0c" }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className='px-20 py-10'>
          <h1 className='text-white font-bold mb-4'>Help</h1>
          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/about-us'>
              <p className='text-indigo-500 font-normal'>About Us</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/contact'>
              <p className='text-indigo-500 font-normal'>Contact Feedback</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/faq'>
              <p className='text-indigo-500 font-normal'>FAQ</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/shop'>
              <p className='text-indigo-500 font-normal'>Shop Overview</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/merchant'>
              <p className='text-indigo-500 font-normal'>Merchant FAQ</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/how'>
              <p className='text-indigo-500 font-normal'>How We Work</p>
            </Link>
          </div>

        </div>
        <div className='px-20 py-10'>
          <h1 className='text-white font-bold mb-4'>Corporate</h1>
          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/advertise'>
              <p className='text-indigo-500 font-normal'>Advertise</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/style'>
              <p className='text-indigo-500 font-normal'>Style Guide</p>
            </Link>
          </div>

          <div className='py-3 border-b-[1px] border-gray-500'>
            <Link href='/jobs'>
              <p className='text-indigo-500 font-normal'>Jobs</p>
            </Link>
          </div>
        </div>
        <div className='px-20 py-10'>
          <p className='text-white text-xs font-medium mb-2'>Exclusive coupons may not be republished without written permission.</p>
          <p className='text-white text-xs font-medium'>Copyright © 2014 - 2022 Couponbox - All rights reserved</p>
        </div>
      </div>
    </div >
  )
}

export default Footer;