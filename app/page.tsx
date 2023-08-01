import { Card } from '@/components';

export default function Home() {
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
      />
    </main>
  )
}
