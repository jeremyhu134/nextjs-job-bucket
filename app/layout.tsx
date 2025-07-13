import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import { Fragment } from 'react';
import ClientWrapper from './components/ClientWrapper';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JobBucket',
  description: 'Organize your job search with JobBucket',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <html lang="en" data-theme="light">
        <head>
          <link rel="icon" href="/images/JobBucketLogo.png"/>
        </head>
        <body className={inter.className}>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </body>
      </html>
    </Fragment>
  )
}
