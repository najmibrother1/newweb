import React from 'react'
import { useRouter } from 'next/router'
import Brand from '../../models/Brand'
import mongoose from 'mongoose'
import Navbar2 from '../../components/Navbar2'
import Link from 'next/link'
import Image from 'next/image'

const Store = ({ brands }) => {
  const router = useRouter()
  const { letter } = router.query

  return (
    <>
      <Navbar2 />
      <div className='bg-gray-50 mt-32'>
        <div className='bg-gray-700 px-4 py-2 md:px-12'>
          <h1 className='font-normal text-4xl mb-2 text-white'>Coupons according to categories</h1>
          <h4 className='text-sm text-white'>Here you will find all our coupons and deals sorted by category. Select a category to reveal a wide variety of discounts and save some money.</h4>
        </div>
        <div className='inline-grid grid-cols-1 md:grid-cols-12 gap-4 m-4 p-4 md:m-12 md:p-12'>
          <div className='md:col-span-9'>
            <div className='bg-white border-b-2 w-full p-6 flex justify-around'>
              <Link href='0-9'><a><div className='border border-transparent hover:border-slate-200 p-1'>0-9</div></a></Link>
              <Link href='A'><a><div className='border border-transparent hover:border-slate-200 p-1'>A</div></a></Link>
              <Link href='B'><a><div className='border border-transparent hover:border-slate-200 p-1'>B</div></a></Link>
              <Link href='C'><a><div className='border border-transparent hover:border-slate-200 p-1'>C</div></a></Link>
              <Link href='D'><a><div className='border border-transparent hover:border-slate-200 p-1'>D</div></a></Link>
              <Link href='E'><a><div className='border border-transparent hover:border-slate-200 p-1'>E</div></a></Link>
              <Link href='F'><a><div className='border border-transparent hover:border-slate-200 p-1'>F</div></a></Link>
              <Link href='G'><a><div className='border border-transparent hover:border-slate-200 p-1'>G</div></a></Link>
              <Link href='H'><a><div className='border border-transparent hover:border-slate-200 p-1'>H</div></a></Link>
              <Link href='I'><a><div className='border border-transparent hover:border-slate-200 p-1'>I</div></a></Link>
              <Link href='J'><a><div className='border border-transparent hover:border-slate-200 p-1'>J</div></a></Link>
              <Link href='K'><a><div className='border border-transparent hover:border-slate-200 p-1'>K</div></a></Link>
              <Link href='L'><a><div className='border border-transparent hover:border-slate-200 p-1'>L</div></a></Link>
              <Link href='M'><a><div className='border border-transparent hover:border-slate-200 p-1'>M</div></a></Link>
              <Link href='N'><a><div className='border border-transparent hover:border-slate-200 p-1'>N</div></a></Link>
              <Link href='O'><a><div className='border border-transparent hover:border-slate-200 p-1'>O</div></a></Link>
              <Link href='P'><a><div className='border border-transparent hover:border-slate-200 p-1'>P</div></a></Link>
              <Link href='Q'><a><div className='border border-transparent hover:border-slate-200 p-1'>Q</div></a></Link>
              <Link href='R'><a><div className='border border-transparent hover:border-slate-200 p-1'>R</div></a></Link>
              <Link href='S'><a><div className='border border-transparent hover:border-slate-200 p-1'>S</div></a></Link>
              <Link href='T'><a><div className='border border-transparent hover:border-slate-200 p-1'>T</div></a></Link>
              <Link href='U'><a><div className='border border-transparent hover:border-slate-200 p-1'>U</div></a></Link>
              <Link href='V'><a><div className='border border-transparent hover:border-slate-200 p-1'>V</div></a></Link>
              <Link href='W'><a><div className='border border-transparent hover:border-slate-200 p-1'>W</div></a></Link>
              <Link href='X'><a><div className='border border-transparent hover:border-slate-200 p-1'>X</div></a></Link>
              <Link href='Y'><a><div className='border border-transparent hover:border-slate-200 p-1'>Y</div></a></Link>
              <Link href='Z'><a><div className='border border-transparent hover:border-slate-200 p-1'>Z</div></a></Link>
            </div>
            <div id={letter} className='bg-white border-b-2'>
              <div className='w-full p-6'>
                <h1 className='text-gray-500 text-3xl'>{letter}</h1>
              </div>
              {brands?.length === 0 ? (
                <div className='flex justify-center py-10'>
                  <h1>Not Store Found</h1>
                </div>
              ) : (
                <>
                  <div className='inline-grid grid-cols-1 md:grid-cols-5 gap-6 w-full p-4'>
                    {brands[0]?.merchantname && (
                      <Link href={`/coupons/${brands[0]?.slug}`}>
                        <a>
                          <div>
                            <div className='border px-2 py-6'>
                              <Image
                                height={"50"}
                                width={"100"}
                                layout="fixed"
                                src={`/images/${brands[0]?.logo120x60}`}
                                alt={brands[0]?.merchantname}
                              />
                            </div>
                            <div className='flex justify-center'>
                              <a><p className='text-indigo-400'>{brands[0]?.merchantname}</p></a>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}

                    {brands[1]?.merchantname && (
                      <Link href={`/coupons/${brands[1]?.slug}`}>
                        <a>
                          <div>
                            <div className='border px-2 py-6'>
                              <Image
                                height={"50"}
                                width={"100"}
                                layout="fixed"
                                src={`/images/${brands[1]?.logo120x60}`}
                                alt={brands[1]?.merchantname}
                              />
                            </div>
                            <div className='flex justify-center'>
                              <a><p className='text-indigo-400'>{brands[1]?.merchantname}</p></a>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}

                    {brands[2]?.merchantname && (
                      <Link href={`/coupons/${brands[2]?.slug}`}>
                        <a>
                          <div>
                            <div className='border px-2 py-6'>
                              <Image
                                height={"50"}
                                width={"100"}
                                layout="fixed"
                                src={`/images/${brands[2]?.logo120x60}`}
                                alt={brands[2]?.merchantname}
                              />
                            </div>
                            <div className='flex justify-center'>
                              <a><p className='text-indigo-400'>{brands[2]?.merchantname}</p></a>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}

                    {brands[3]?.merchantname && (
                      <Link href={`/coupons/${brands[3]?.slug}`}>
                        <a>
                          <div>
                            <div className='border px-2 py-6'>
                              <Image
                                height={"50"}
                                width={"100"}
                                layout="fixed"
                                src={`/images/${brands[3]?.logo120x60}`}
                                alt={brands[3]?.merchantname}
                              />
                            </div>
                            <div className='flex justify-center'>
                              <a><p className='text-indigo-400'>{brands[3]?.merchantname}</p></a>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}

                    {brands[4]?.merchantname && (
                      <Link href={`/coupons/${brands[4]?.slug}`}>
                        <a>
                          <div>
                            <div className='border px-2 py-6'>
                              <Image
                                height={"50"}
                                width={"100"}
                                layout="fixed"
                                src={`/images/${brands[4]?.logo120x60}`}
                                alt={brands[4]?.merchantname}
                              />
                            </div>
                            <div className='flex justify-center'>
                              <a><p className='text-indigo-400'>{brands[4]?.merchantname}</p></a>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}

                  </div>
                  <div className='inline-grid grid-cols-1 md:grid-cols-12 gap-4 w-full px-4 py-8'>
                    {brands?.map((item) => (
                      <div key={item?._id} className='md:col-span-4'>
                        {item?.merchantname && (
                          <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <Link href={`/coupons/${item?.slug}`}>
                              <a><p className='text-indigo-400'>{item?.merchantname}</p></a>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>

          </div>

          <div className='md:col-span-3 w-full'>
            <h2 className='text-xl'>
              Popular Coupons Codes
            </h2>
          </div>
        </div>

      </div >
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let letter = context.query.letter;
  let brands = await Brand.find({ merchantname: { $regex: `^[${letter}].*` } });
  return {
    props: {
      brands: JSON.parse(JSON.stringify(brands)),
    },
  }
}

export default Store