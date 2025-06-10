"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { CgSpinner } from 'react-icons/cg'

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});
const Page = () => {
    return (
        <div className={`bg-slate-900 text-slate-100 grid place-content-center h-dvh  ${poppins.className}`}>
            <div className='space-y-4 flex items-center justify-center flex-col'>
                <CgSpinner className='animate-spin' size={48}/>
                <p>this page hasn&apos;t finished yet, stay tuned!</p>
                <a href="/developer" className='hover:border-b text-yellow-600'>go back</a>
            </div>
        </div>
    )
}
export default Page;