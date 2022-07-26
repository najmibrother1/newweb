import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PromoCard = ({ item }) => {
  return (
    <div className='h-14 w-24 rounded-md'>
      <Link href={`/coupons/${item?.slug}`}>
        <a>
          <Image
            className='rounded-md shadow-md border-2 border-transparent hover:border-indigo-400 w-full h-full object-contain'
            src={`/images/${item?.logo120x60}`}
            alt={item?.merchantname}
            height={"60"}
            width={"100"}
            layout="fixed"
          />
        </a>
      </Link>
    </div>
  )
}

export default PromoCard;