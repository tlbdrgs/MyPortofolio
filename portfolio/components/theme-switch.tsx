"use client";

import { useTheme } from '@/context/theme-context';
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {

    const { theme , toggleTheme} = useTheme();

    return (
        <button className='fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl
    rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-950 dark:border-gray-500 dark:border-2'
            onClick={toggleTheme}>
            {
                theme === 'light' ? <BsSun /> : <BsMoon />
            }
        </button>
    )
}
