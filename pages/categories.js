import React from 'react'
import Category from '../models/Category'
import mongoose from 'mongoose'
import Navbar2 from '../components/Navbar2'
import Image from 'next/image'

const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <Navbar2 />
      <div className='bg-gray-50 mt-32'>
        <div className='bg-gray-700 text-white px-4 py-2 md:px-12'>
          <h1 className='font-normal text-4xl mb-2'>Coupons according to categories</h1>
          <h4 className='text-sm'>Here you will find all our coupons and deals sorted by category. Select a category to reveal a wide variety of discounts and save some money.</h4>
        </div>
        <div className='bg-white m-4 p-4 md:m-12 md:p-12 inline-grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 border-b-[3px]'>
          {categories.map((item) => (
            <div key={item}>
              <Image
                height={"80"}
                width={"160"}
                layout="fixed"
                className='w-72' src={`/images/beercartel.com.au-coupons.jpg`}
                alt={item.categoryname}
              />
              <p className='font-normal text-sm text-center border-t-[3px] mt-4'>{item.categoryname}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let categories = await Category.find();
  return {
    props: { categories: JSON.parse(JSON.stringify(categories)) },
  }
}

export default Categories