import React from 'react'
import CategoryCard from '../CategoryCard';

const TopCategories = () => {
  return (
    <div className='bg-indigo-50 flex flex-col justify-center align-middle py-12 px-8 md:px-24'>
      <h1 className='text-center text-2xl'>Top Categories</h1>
      <div className='inline-grid grid-cols-2 md:grid-cols-6 gap-4 mt-10'>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className='flex justify-center mt-12'>
        <button className='bg-white hover:bg-gray-300 rounded border-2 w-48 p-2 text-black font-bold'>
          Show all categories
        </button>
      </div>
    </div>
  )
}

export default TopCategories;