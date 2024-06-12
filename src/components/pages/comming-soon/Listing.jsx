import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Listing({ className, t }) {
  return (
    <div className={cn('bg-gray-200 pl-10 pr-3 py-3 shadow-md rounded-full inline-flex gap-x-5', className)}>
      <input placeholder={t.placeholder} className='bg-gray-200 focus:outline-none' />
      <button className='text-white bg-primary px-8 py-4 rounded-full flex items-center gap-x-3 placeholder:text-gray-700'>
        {t.button} <ArrowRight className='size-8 text-white' />
      </button>
    </div>
  )
}
