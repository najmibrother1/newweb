import React from 'react'
import Coupon from '../models/Coupon'
import mongoose from 'mongoose'
import Navbar2 from '../components/Navbar2'
import Image from 'next/image'

const Coupons = ({ coupons }) => {
  console.log(coupons);
  return (
    <>
      <Navbar2 />
      <div className='bg-gray-50 mt-32'>
        <div className='bg-gray-700 px-4 py-2 md:px-12'>
          <h1 className='font-normal text-4xl mb-2 text-white'>Coupons according to categories</h1>
          <h4 className='text-sm text-white'>Here you will find all our coupons and deals sorted by category. Select a category to reveal a wide variety of discounts and save some money.</h4>
        </div>
        <div className='inline-grid grid-cols-1 md:grid-cols-12 gap-4 m-4 p-4 md:m-12 md:p-12'>
          {coupons.map((item) => (
            <div key={item?._id} className='md:col-span-8 bg-white'>
              <div className='inline-grid grid-cols-1 md:grid-cols-6 gap-4 w-full p-4'>
                <div className='w-24'>
                  <Image height={"80"}
                    width={"100"}
                    layout="fixed"
                    src={'/papajohns.webp'}
                    alt={item?.title}
                  />
                </div>
                <div className='md:col-span-5'>
                  <h1 className='font-medium text-2xl text-gray-700 mb-4'>{item?.title}</h1>
                  <div>
                    <p className='text-xs text-gray-500 flex items-center mb-4'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item?.dealexpiry ? item?.dealexpiry : 'VALID UNTIL FURTHER NOTICE'}</p>
                  </div>
                  <div className='inline-grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-4'>
                    <button className='bg-indigo-400 hover:bg-indigo-500 rounded border-2 w-full p-2 text-white'>
                      GET COUPON
                    </button>
                    <button className='bg-gray-50 rounded border-dashed border border-indigo-500 w-full p-2 text-indigo-500 flex justify-center items-center md:col-span-2'>
                      {[...Array(item?.rating)].map((x, i) =>
                        <>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                        </>
                      )}

                    </button>
                  </div>
                  <div>
                    <p className='text-xs text-gray-500'>Terms {'&'} Conditions</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className='md:span-col-1 md:absolute md:right-12 md:w-96'>
            <h2 className='text-xl'>
              Popular Coupons Codes
            </h2>
          </div>
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let coupons = await Coupon.find().limit(100);
  return {
    props: { coupons: JSON.parse(JSON.stringify(coupons)) },
  }
}

export default Coupons