import { CardProps } from '@/types'
import IconList from '../assets/images/icon-list.svg';
import Image from 'next/image'
import React from 'react'

const Card = ({ card_Title, card_Text, card_List }: CardProps) => {
    
  return (
    <div className='bg-slate-100 w-[600px] h-[500px] rounded-xl'>
        <h2 className='font-bold'>
        {card_Title}
        </h2>
        <p>
        {card_Text}
        </p>
        <ul>
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
    </div>
  )
}

export default Card