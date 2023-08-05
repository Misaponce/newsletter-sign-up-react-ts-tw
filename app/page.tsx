'use client'

import { Card } from '@/components';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Home() {

  const [email, setEmail] = useState('');
  const router = useRouter();

  const emailChecker = (event: React.FormEvent) => {
    event.preventDefault()

    if (email === '') {
      return alert('Email Invalido')
    } else {
      localStorage.setItem('email', email);
      router.push('/successcard');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 md:p-24 sm:pt-24 sm:px-4">
      <Card 
      card_Title='Stay Updated!'
      card_Text='Join 60,000+ product managers receiving monthly updates on:'
      card_List={
        [
          'Product discovery and building what matters',
          'Measuring to ensure updates are a success',
          'And much more!'
        ]
      }
      email={email}
      setEmail={setEmail}
      onSubmit={emailChecker}
      />
    </main>
  )
}
