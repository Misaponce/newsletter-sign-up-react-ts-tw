import { CardProps } from '@/types'
import IconList from '../assets/images/icon-list.svg';
import ImgDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import ImgMobile from '../assets/images/illustration-sign-up-mobile.svg';
import Image from 'next/image'
import React from 'react'

const Card = ({ card_Title, card_Text, card_List }: CardProps) => {
    
  return (
    <div className='w-full md:w-[700px] h-full sm:h-[500px] 
    flex flex-col sm:flex-row bg-white sm:p-4 rounded-3xl'>
        {/* Top Image (Visible on medium and below) */}
        <div className="top-side sm:hidden w-full">
            <Image 
                src={ImgMobile}
                alt='mobile-illustration'
                className='w-full h-full'
            />
        </div>
        {/* Form (Always visible) */}
        <div className="flex-1">
          <h2>
            {card_Title}
          </h2>
          <p>
            {card_Text}
          </p>
          <ul>
            {card_List?.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
          </ul>
          <form className='block'>
              <label htmlFor='sign-up-form'>Email address</label>
              <input type="email" 
                className='mt-1 block w-full rounded-md' 
                placeholder='email@company.com' 
                id='sign-up-form'/>
                <button type='submit' className='btn w-full rounded-md mt-4 py-2'>Subscribe to monthly newsletter</button>
          </form>
        </div>
        {/* Right Side Image (Hidden on medium and above) */}
        <div className="hidden sm:flex flex-1">
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