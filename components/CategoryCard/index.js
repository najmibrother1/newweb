import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryCard = () => {
  return (
    <div className='h-36 w-40 rounded relative'>
      <Link href='/'>
        <Image
          className='rounded shadow-md w-full h-full object-cover'
          src="/category.webp"
          alt="category"
          height={"150"}
          width={"150"}
          layout="fixed"
        />
      </Link>
      <div className='absolute bottom-0 p-2 w-1/2'>
        <p className='text-white font-bold'>Books {"&"} Megazines</p>
      </div>
    </div>
  )
}

export default CategoryCard;