'use client'

import { Img } from '@/components/ui/Img'
import React from 'react'
import logo from '@/assets/logo/logo.png'
import LLink from '@/components/ui/llink'
import Listing from './Listing'
import { Facebook, Instagram } from 'lucide-react'
import heroImagePt1 from '@/assets/images/homepage/ComingSoon/phone.png'
import { cn } from '@/lib/utils'
import { getLocaleLang } from '@/utils/i18n/get-locale-lang'

export default function ComingSoon({ t }) {
  const localLang = getLocaleLang()
  const isRtl = localLang === 'ar'
  return (
    <header className='min-h-screen'>
      <div className='w-full h-14 bg-primary' />

      <section className='container'>
        <LLink href='/' className='inline-block w-64 h-auto'>
          <Img src={logo} className='w-full h-auto py-5' />
        </LLink>

        <section
          className={cn(
            'flex flex-col lg:flex-row gap-x-10 gap-y-10 items-center justify-between min-h-[calc(100vh-250px)]',
            { 'lg:flex-row-reverse': isRtl }
          )}
        >
          <div className={cn('w-full lg:w-1/2 order-1 lg:order-0 flex flex-col items-start', { 'items-end': isRtl })}>
            <h1 className={cn('text-4xl md:text-6xl font-bold text-balance', { 'text-right': isRtl })}>{t.title}</h1>
            <p className={cn('text-balance mt-10 md:mt-20 mb-10 text-lg', { 'text-right': isRtl })}>{t.subtitle}</p>

            <Listing t={t.listing} />

            <div className='mt-20 mb-10 space-y-3'>
              <p>{t.socialMedia}</p>
              <div className='flex items-center gap-x-3 text-primary'>
                <Facebook className='cursor-pointer size-7' />
                <Instagram className='cursor-pointer size-7' />
              </div>
            </div>
          </div>

          <div className='w-full lg:w-1/2 order-0 lg:order-1 flex items-center justify-center'>
            <Img src={heroImagePt1} className='w-full h-auto max-w-md lg:max-w-xl' sizes='100vw' />
          </div>
        </section>
      </section>

      <div className='w-full h-24 coming-soon-pattern' />
    </header>
  )
}
