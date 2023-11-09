import Image from 'next/image'
import Taskbar from './taskbar'
import { Suspense } from 'react'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div className='w-full h-[65px] bg-[#171010] rounded-xl flex items-center justify-center md:w-5/12'>
          <Taskbar/>
        </div>
      </main>
  )
}
