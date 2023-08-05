'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import IconSuccess from '../assets/images/icon-success.svg';
import Link from 'next/link';

const SuccessCard = () => {

  const [email, setEmail] = useState('')

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail || 'Not email Found' ); // if email is not found, a default message is display
  }, [])


  return (
  <div className='w-full sm:w-[500px] h-full sm:h-[500px] flex flex-col justify-between items-center py-4 bg-white sm:p-4 rounded-3xl'>
    <div className='w-full h-full mx-4 px-4 flex flex-col justify-end'>
      <div className='sm:my-5 mx-5 sm:mx-2 px-5 sm:px-2'>
        <Image src={IconSuccess} alt='Icon-Success'/>
      </div>
      <div className="flex flex-col">
        <h2 className='w-2/3 my-5 mx-5 sm:mx-2 px-5 sm:px-2 text-5xl font-bold'>
        Thanks for subscribing!
        </h2>
        <p className='mb-5 sm:my-1 mx-5 sm:mx-2  px-5 sm:px-2 text-lg tracking-wide'>
          A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription
        </p>
      </div>
    </div>
    <div className='w-full h-full px-8 flex flex-col justify-end sm:justify-center items-center'>
          <Link href='/' className='w-full'>
            <button className='w-full btn rounded-md py-3 mb-4'>
                Dismiss message
            </button>
          </Link>
    </div>
  </div>
  )
}

export default SuccessCard