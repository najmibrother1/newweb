import React from 'react'
import Brand from '../models/Brand'
import mongoose from 'mongoose'
import Navbar2 from '../components/Navbar2'
import Link from 'next/link'
import Image from 'next/image'

const alphabets = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const item = 'A';

const Stores = ({ brands_09, brands_A, brands_B, brands_C, brands_D, brands_E, brands_F, brands_G, brands_H, brands_I, brands_J, brands_K, brands_L, brands_M, brands_N, brands_O, brands_P, brands_Q, brands_R, brands_S, brands_T, brands_U, brands_V, brands_W, brands_X, brands_Y, brands_Z }) => {

  console.log(brands_A);

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
              <Link href='#0-9'><a><div className='border border-transparent hover:border-slate-200 p-1'>0-9</div></a></Link>
              <Link href='#A'><a><div className='border border-transparent hover:border-slate-200 p-1'>A</div></a></Link>
              <Link href='#B'><a><div className='border border-transparent hover:border-slate-200 p-1'>B</div></a></Link>
              <Link href='#C'><a><div className='border border-transparent hover:border-slate-200 p-1'>C</div></a></Link>
              <Link href='#D'><a><div className='border border-transparent hover:border-slate-200 p-1'>D</div></a></Link>
              <Link href='#E'><a><div className='border border-transparent hover:border-slate-200 p-1'>E</div></a></Link>
              <Link href='#F'><a><div className='border border-transparent hover:border-slate-200 p-1'>F</div></a></Link>
              <Link href='#G'><a><div className='border border-transparent hover:border-slate-200 p-1'>G</div></a></Link>
              <Link href='#H'><a><div className='border border-transparent hover:border-slate-200 p-1'>H</div></a></Link>
              <Link href='#I'><a><div className='border border-transparent hover:border-slate-200 p-1'>I</div></a></Link>
              <Link href='#J'><a><div className='border border-transparent hover:border-slate-200 p-1'>J</div></a></Link>
              <Link href='#K'><a><div className='border border-transparent hover:border-slate-200 p-1'>K</div></a></Link>
              <Link href='#L'><a><div className='border border-transparent hover:border-slate-200 p-1'>L</div></a></Link>
              <Link href='#M'><a><div className='border border-transparent hover:border-slate-200 p-1'>M</div></a></Link>
              <Link href='#N'><a><div className='border border-transparent hover:border-slate-200 p-1'>N</div></a></Link>
              <Link href='#O'><a><div className='border border-transparent hover:border-slate-200 p-1'>O</div></a></Link>
              <Link href='#P'><a><div className='border border-transparent hover:border-slate-200 p-1'>P</div></a></Link>
              <Link href='#Q'><a><div className='border border-transparent hover:border-slate-200 p-1'>Q</div></a></Link>
              <Link href='#R'><a><div className='border border-transparent hover:border-slate-200 p-1'>R</div></a></Link>
              <Link href='#S'><a><div className='border border-transparent hover:border-slate-200 p-1'>S</div></a></Link>
              <Link href='#T'><a><div className='border border-transparent hover:border-slate-200 p-1'>T</div></a></Link>
              <Link href='#U'><a><div className='border border-transparent hover:border-slate-200 p-1'>U</div></a></Link>
              <Link href='#V'><a><div className='border border-transparent hover:border-slate-200 p-1'>V</div></a></Link>
              <Link href='#W'><a><div className='border border-transparent hover:border-slate-200 p-1'>W</div></a></Link>
              <Link href='#X'><a><div className='border border-transparent hover:border-slate-200 p-1'>X</div></a></Link>
              <Link href='#Y'><a><div className='border border-transparent hover:border-slate-200 p-1'>Y</div></a></Link>
              <Link href='#Z'><a><div className='border border-transparent hover:border-slate-200 p-1'>Z</div></a></Link>
            </div>
            {alphabets.map((item) => {
              let brands;
              if (item === '0-9') {
                brands = brands_09
              } else if (item === 'A') {
                brands = brands_A
              } else if (item === 'B') {
                brands = brands_B
              } else if (item === 'C') {
                brands = brands_C
              } else if (item === 'D') {
                brands = brands_D
              } else if (item === 'E') {
                brands = brands_E
              } else if (item === 'F') {
                brands = brands_F
              } else if (item === 'G') {
                brands = brands_G
              } else if (item === 'H') {
                brands = brands_H
              } else if (item === 'I') {
                brands = brands_I
              } else if (item === 'J') {
                brands = brands_J
              } else if (item === 'K') {
                brands = brands_K
              } else if (item === 'L') {
                brands = brands_L
              } else if (item === 'M') {
                brands = brands_M
              } else if (item === 'N') {
                brands = brands_N
              } else if (item === 'O') {
                brands = brands_O
              } else if (item === 'P') {
                brands = brands_P
              } else if (item === 'Q') {
                brands = brands_Q
              } else if (item === 'R') {
                brands = brands_R
              } else if (item === 'S') {
                brands = brands_S
              } else if (item === 'T') {
                brands = brands_T
              } else if (item === 'U') {
                brands = brands_U
              } else if (item === 'V') {
                brands = brands_V
              } else if (item === 'W') {
                brands = brands_W
              } else if (item === 'X') {
                brands = brands_X
              } else if (item === 'Y') {
                brands = brands_Y
              } else if (item === 'Z') {
                brands = brands_Z
              }
              return (
                <div id={item} className='bg-white border-b-2'>
                  <div className='w-full p-6'>
                    <h1 className='text-gray-500 text-3xl'>{item}</h1>
                  </div>
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
                  <div className='inline-grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 w-full px-4 py-8'>
                    <div className='md:col-span-4'>
                      {brands[5]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[5]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[5]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                      {brands[6]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[6]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[6]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                      {brands[7]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[7]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[7]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                    </div>

                    <div className='md:col-span-4'>

                      {brands[8]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[8]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[8]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                      {brands[9]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[9]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[9]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                      {brands[10]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[10]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[10]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                    </div>

                    <div className='md:col-span-4'>

                      {brands[11]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[11]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[11]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                      {brands[12]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[12]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[12]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                      {brands[13]?.merchantname && (
                        <div className='flex items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                          </svg>
                          <Link href={`/coupons/${brands[13]?.slug}`}>
                            <a><p className='text-indigo-400'>{brands[13]?.merchantname}</p></a>
                          </Link>
                        </div>
                      )}

                    </div>
                  </div>
                  <div className='flex justify-center items-center pb-10'>
                    <Link href={`/stores/${item}`}>
                      <a><p className='text-indigo-400'>All shops with "{item}"</p></a>
                    </Link>
                  </div>
                </div>
              )
            })}

          </div>

          <div className='md:col-span-3 w-full'>
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
  let brands_09 = await Brand.find({ merchantname: { $regex: '^[0-9].*' } });
  let brands_A = await Brand.find({ merchantname: { $regex: '^[Aa].*' } });
  let brands_B = await Brand.find({ merchantname: { $regex: '^[Bb].*' } });
  let brands_C = await Brand.find({ merchantname: { $regex: '^[Cc].*' } });
  let brands_D = await Brand.find({ merchantname: { $regex: '^[Dd].*' } });
  let brands_E = await Brand.find({ merchantname: { $regex: '^[Ee].*' } });
  let brands_F = await Brand.find({ merchantname: { $regex: '^[Ff].*' } });
  let brands_G = await Brand.find({ merchantname: { $regex: '^[Gg].*' } });
  let brands_H = await Brand.find({ merchantname: { $regex: '^[Hh].*' } });
  let brands_I = await Brand.find({ merchantname: { $regex: '^[Ii].*' } });
  let brands_J = await Brand.find({ merchantname: { $regex: '^[Jj].*' } });
  let brands_K = await Brand.find({ merchantname: { $regex: '^[Kk].*' } });
  let brands_L = await Brand.find({ merchantname: { $regex: '^[Ll].*' } });
  let brands_M = await Brand.find({ merchantname: { $regex: '^[Mm].*' } });
  let brands_N = await Brand.find({ merchantname: { $regex: '^[Nn].*' } });
  let brands_O = await Brand.find({ merchantname: { $regex: '^[Oo].*' } });
  let brands_P = await Brand.find({ merchantname: { $regex: '^[Pp].*' } });
  let brands_Q = await Brand.find({ merchantname: { $regex: '^[Qq].*' } });
  let brands_R = await Brand.find({ merchantname: { $regex: '^[Rr].*' } });
  let brands_S = await Brand.find({ merchantname: { $regex: '^[Ss].*' } });
  let brands_T = await Brand.find({ merchantname: { $regex: '^[Tt].*' } });
  let brands_U = await Brand.find({ merchantname: { $regex: '^[Uu].*' } });
  let brands_V = await Brand.find({ merchantname: { $regex: '^[Vv].*' } });
  let brands_W = await Brand.find({ merchantname: { $regex: '^[Ww].*' } });
  let brands_X = await Brand.find({ merchantname: { $regex: '^[Xx].*' } });
  let brands_Y = await Brand.find({ merchantname: { $regex: '^[Yy].*' } });
  let brands_Z = await Brand.find({ merchantname: { $regex: '^[Zz].*' } });
  return {
    props: {
      brands_09: JSON.parse(JSON.stringify(brands_09)),
      brands_A: JSON.parse(JSON.stringify(brands_A)),
      brands_B: JSON.parse(JSON.stringify(brands_B)),
      brands_C: JSON.parse(JSON.stringify(brands_C)),
      brands_D: JSON.parse(JSON.stringify(brands_D)),
      brands_E: JSON.parse(JSON.stringify(brands_E)),
      brands_F: JSON.parse(JSON.stringify(brands_F)),
      brands_G: JSON.parse(JSON.stringify(brands_G)),
      brands_H: JSON.parse(JSON.stringify(brands_H)),
      brands_I: JSON.parse(JSON.stringify(brands_I)),
      brands_J: JSON.parse(JSON.stringify(brands_J)),
      brands_K: JSON.parse(JSON.stringify(brands_K)),
      brands_L: JSON.parse(JSON.stringify(brands_L)),
      brands_M: JSON.parse(JSON.stringify(brands_M)),
      brands_N: JSON.parse(JSON.stringify(brands_N)),
      brands_O: JSON.parse(JSON.stringify(brands_O)),
      brands_P: JSON.parse(JSON.stringify(brands_P)),
      brands_Q: JSON.parse(JSON.stringify(brands_Q)),
      brands_R: JSON.parse(JSON.stringify(brands_R)),
      brands_S: JSON.parse(JSON.stringify(brands_S)),
      brands_T: JSON.parse(JSON.stringify(brands_T)),
      brands_U: JSON.parse(JSON.stringify(brands_U)),
      brands_V: JSON.parse(JSON.stringify(brands_V)),
      brands_W: JSON.parse(JSON.stringify(brands_W)),
      brands_X: JSON.parse(JSON.stringify(brands_X)),
      brands_Y: JSON.parse(JSON.stringify(brands_Y)),
      brands_Z: JSON.parse(JSON.stringify(brands_Z)),
    },
  }
}

export default Stores