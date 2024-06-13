import Spinner from '@/components/icons/Spinner'
import { cn } from '@/lib/utils'
import { getLocaleLang } from '@/utils/i18n/get-locale-lang'
import axios from 'axios'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function Listing({ className, t }) {
  const localLang = getLocaleLang()
  const isRtl = localLang === 'ar'

  const [isLoading, setisLoading] = useState(false)
  const [email, setemail] = useState()

  // Add email to the listing
  const handleSubmit = async e => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email')
      return
    }

    try {
      setisLoading(true)
      const res = await axios.post('https://api.inovasolutions.ai/api/1.1/wf/addToWaitlist', {
        email
      })
      if (res.status === 200) {
        toast.success(res.data.response.message)
        setemail('')
      }
      setisLoading(false)
    } catch (error) {
      setisLoading(false)
      setemail('')
      console.error(error)
      toast.error('An error occurred, please try again!')
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'bg-gray-200 pl-5 sm:pl-10 pr-5 sm:pr-5 py-6 sm:py-3 shadow-md rounded-3xl sm:rounded-full inline-flex flex-col sm:flex-row w-full sm:w-auto gap-x-5 gap-y-3',
        className
      )}
    >
      <input
        type='email'
        placeholder={t.placeholder}
        value={email}
        onChange={e => setemail(e.target.value)}
        className='bg-gray-300 rounded-full sm:bg-gray-200 focus:outline-none p-4 sm:p-0'
      />
      <button
        className={cn(
          'text-white bg-primary px-8 py-4 rounded-full flex items-center gap-x-3 placeholder:text-gray-700 justify-center',
          { 'flex-row-reverse': isRtl }
        )}
        type='submit'
      >
        {t.button}
        {isLoading ? (
          <Spinner className='animate-spin size-8' />
        ) : isRtl ? (
          <ArrowLeft className='size-8 text-white' />
        ) : (
          <ArrowRight className='size-8 text-white' />
        )}
      </button>
    </form>
  )
}
