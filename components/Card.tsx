'use client'

import { CardProps } from '@/types';
import IconList from '../assets/images/icon-list.svg';
import ImgDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import ImgMobile from '../assets/images/illustration-sign-up-mobile.svg';
import Image from 'next/image';
import React from 'react';


const Card = ({ card_Title, card_Text, card_List, onSubmit, email, setEmail }: CardProps) => {

  return (
    <div className='w-full sm:w-[700px] h-full sm:h-[500px] 
    flex flex-col sm:flex-row bg-white sm:p-4 rounded-3xl'>
      {/* Top Image (Visible on medium and below) */}
      <div className='sm:hidden'>
        <Image 
            src={ImgMobile}
            alt='mobile-illustration'
            className='w-full h-full'
        />
      </div>
      {/* Form (Always visible) */}
      <div className='flex-1'>
        <h2 className='px-3 py-5 text-center text-4xl font-bold tracking-wide'>
          {card_Title}
        </h2>
        <p className='mx-3 my-2'>
          {card_Text}
        </p>
        <ul className='mx-3 my-2 text-sm'>
          {card_List?.map((item, index) => (
              <li key={index} className='flex my-2'>
                <Image src={IconList} alt='IconList' className='pe-1' height={20} width={20}/>
                {item}
              </li>
            ))}
        </ul>
        <form className='block mt-3 px-3' onSubmit={onSubmit}>
            <label htmlFor='sign-up-form' className='mt-3 text-xs font-bold'>Email address</label>
            <input 
              type="email" 
              className='mt-1 block w-full rounded-md' 
              placeholder='email@company.com' 
              id='sign-up-form'
              value={email}
              onChange={(e) => setEmail?.(e.target.value)}/>
              <button type='submit' className='btn w-full rounded-md mt-4 py-3 text-sm'>Subscribe to monthly newsletter</button>
        </form>
      </div>
      {/* Right Side Image (Hidden on medium and above) */}
      <div className='hidden sm:flex flex-1 justify-end'>
        <Image 
              src={ImgDesktop}
              alt='mobile-illustration'
              className='w-full h-full'
          />
      </div>
    </div>
  )
}

export default Card