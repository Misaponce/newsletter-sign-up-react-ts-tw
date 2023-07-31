import { CardProps } from '@/types'
import IconList from '../assets/images/icon-list.svg';
import ImgDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import Image from 'next/image'
import React from 'react'

const Card = ({ card_Title, card_Text, card_List }: CardProps) => {
    
  return (
    <div className='bg-slate-100 flex h-[500px] rounded-3xl p-1 py-4'>
        <div className="left-side flex-auto text-center">
            <h2 className='font-bold px-5 mt-4 text-4xl text-center'>
                {card_Title}
            </h2>
            <p className='px-5'>
                {card_Text}
            </p>
            <ul className='px-10'>
                {card_List?.map((item, index) => (
                    <li key={index} className='flex ps-1'>
                        <Image 
                            src={IconList} 
                            alt='icon-list' 
                            width={20} 
                            height={20}
                            className='pe-1'
                        />
                        {item}
                    </li>
                ))}
            </ul>
            <div className='form px-5'>
                <input type='email' placeholder='email@company.com' className='w-full rounded-md'></input>
                <button type='submit' className='bg-slate-800 w-full rounded-md text-white py-2'>Subscribe to monthly newsletter</button>
            </div>
        </div>
        <div className="right-side flex-auto">
            <Image
                src={ImgDesktop}
                alt='desktop-illustration'
                className='h-full w-full object-fill'
            />
        </div>
    </div>
  )
}

export default Card