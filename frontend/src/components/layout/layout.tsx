import React from 'react'
import Sidebar from './sidebar'

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className='bg-slate-800'>
      <Sidebar/>
      <div className='p-5 sm:ml-48 md:ml-48 sm:mt-14 md:mt-14 md:p-4'>
      {children}
      </div>
    </main>
  )
}
