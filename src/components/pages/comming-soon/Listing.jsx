import { cn } from '@/lib/utils'
import { getLocaleLang } from '@/utils/i18n/get-locale-lang'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function Listing({ className, t }) {
  const localLang = getLocaleLang()
  const isRtl = localLang === 'ar'
  return (
    <div
      className={cn(
        'bg-gray-200 pl-5 sm:pl-10 pr-5 sm:pr-5 py-6 sm:py-3 shadow-md rounded-3xl sm:rounded-full inline-flex flex-col sm:flex-row w-full sm:w-auto gap-x-5 gap-y-3',
        className
      )}
    >
      <input
        type='email'
        placeholder={t.placeholder}
        className='bg-gray-300 rounded-full sm:bg-gray-200 focus:outline-none p-4 sm:p-0'
      />
      <button
        className={cn(
          'text-white bg-primary px-8 py-4 rounded-full flex items-center gap-x-3 placeholder:text-gray-700 justify-center',
          { 'flex-row-reverse': isRtl }
        )}
      >
        {t.button}
        {isRtl ? <ArrowLeft className='size-8 text-white' /> : <ArrowRight className='size-8 text-white' />}
      </button>
    </div>
  )
}
