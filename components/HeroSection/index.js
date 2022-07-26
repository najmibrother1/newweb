import React from 'react'
import styles from '../../styles/Hero.module.css';
import PromoCard from '../PromoCard';
import Link from 'next/link'
import Image from 'next/image'


const HeroSection = ({ brands }) => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.herobg}>
        <Image
          src="/bg.webp"
          alt="Picture of the author"
          className={styles.imgbg}
          height={"100%"}
          width={"100%"}
        />
      </div> */}
      <div className={styles.herocontent}>
        <h1 className={styles.heroh1}>All <strong>Coupons {"&"} Promo Codes</strong> at a Glance</h1>
        <div className='w-full mt-10'>
          <input
            type="text"
            name="street-address"
            placeholder='Enter Shop...'
            id="street-address"
            autoComplete="street-address"
            className="mt-1 border-2 focus:ring-indigo-400 focus:border-indigo-500 outline-none bg-gray-700 block w-full shadow-sm sm:text-md text-white p-3 border-gray-700 rounded-full"
          />
        </div>
        <p className={styles.herop} style={{ display: 'flex' }}>
          or check all <Link href="/stores"><a>
            <p className='text-indigo-400 ml-1'> Shops & Brands</p></a></Link>.
        </p>
        <p className={styles.herop2}>
          When you click on one of our offers and make a purchase, we may earn a small commission.
        </p>
        <div className='inline-grid grid-cols-3 md:grid-cols-7 gap-4 mt-10'>
          {brands?.map((item) => (
            <PromoCard key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection;