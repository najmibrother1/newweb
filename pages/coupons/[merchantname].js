import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { CopyToClipboard } from 'react-copy-to-clipboard';


export default function Coupons() {
  const [open, setOpen] = useState(true)
  const [copy, setCopy] = useState({
    value: 'THANKS30',
    copied: false,
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    {/* <div className="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img src={'/papajohns.webp'} alt={product.imageAlt} className="object-center object-cover" />
                    </div> */}
                    <div className="sm:col-span-12 lg:col-span-12">

                      <h2 className="text-2xl text-gray-700 text-center py-4">Your coupon code</h2>

                      <div className='w-full bg-gray-300 flex justify-center py-4 rounded-md'>
                        <input className='text-center bg-transparent' disabled value={copy.value}
                          onChange={({ target: { value } }) => setCopy({ value, copied: false })} />
                      </div>
                      <div className='flex justify-center mt-2'>
                        <CopyToClipboard text={copy.value}
                          onCopy={() => setCopy({ copied: true })}>
                          <button className='bg-green-500 rounded-md p-2 text-white text-xs font-bold'>COPY {"&"} GO TO SHOP</button>
                        </CopyToClipboard>
                      </div>

                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
