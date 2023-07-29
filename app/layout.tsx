import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter Sign Up',
  description: 'This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
