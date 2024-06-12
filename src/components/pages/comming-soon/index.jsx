import { Img } from '@/components/ui/Img'
import React from 'react'
import logo from '@/assets/logo/logo.png'
import LLink from '@/components/ui/llink'
import Listing from './Listing'
import { Facebook, Instagram } from 'lucide-react'
import heroImagePt1 from '@/assets/images/homepage/ComingSoon/phone.png'
import heroImagePt2 from '@/assets/images/homepage/ComingSoon/person.png'

export default function ComingSoon({ t }) {
  return (
    <header className='min-h-screen'>
      <div className='w-full h-14 bg-primary' />

      <section className='container'>
        <LLink href='/' className='inline-block w-64 h-auto'>
          <Img src={logo} className='w-full h-auto py-5' />
        </LLink>

        <section className='flex gap-x-5 gap-y-3 items-center justify-between  min-h-[calc(100vh-250px)]'>
          <div className='w-1/2'>
            <h1 className='text-6xl font-bold text-balance'>{t.title}</h1>
            <p className='text-balance mt-20 mb-10 text-lg'>{t.subtitle}</p>

            <Listing t={t.listing} />

            <div className='mt-20 space-y-3'>
              <p>{t.socialMedia}</p>
              <div className='flex items-center gap-x-3 text-primary'>
                <Facebook className='cursor-pointer size-7' />
                <Instagram className='cursor-pointer size-7' />
              </div>
            </div>
          </div>

          <div className='w-1/2 flex items-center justify-center'>
            <Img src={heroImagePt1} className='w-full h-auto' sizes='100vw' />
          </div>
        </section>
      </section>

      <div className='w-full h-24 coming-soon-pattern' />
    </header>
  )
}
