import React from 'react'
import PromoCard from '../PromoCard';

const PromoSection = ({ brands }) => {
  return (
    <div className='bg-indigo-50 flex flex-col justify-center align-middle py-12 px-8 md:px-24'>
      <h1 className='text-center text-2xl'>Where would you like to save?</h1>
      <div className='inline-grid grid-cols-3 md:grid-cols-7 gap-4 mt-10'>
        {brands?.map((item) => (
          <PromoCard key={item?._id} item={item} />
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <button className='bg-white hover:bg-gray-300 rounded border-2 w-56 p-2 text-black font-bold'>
          Shops {"&"} Brands Overview
        </button>
      </div>
    </div>
  )
}

export default PromoSection;