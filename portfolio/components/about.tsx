"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About', 1);
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.275 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3 '>
                <span className='font-bold'>I was born in Targu-Jiu</span>, a very relaxing city located in the South West part of Romania. I grew up as {" "}
                <span className='font-bold'>very passionate about sports of all kinds</span>. As I grew up, I discovered two passions that I gladly pursue: {" "}
                <span className='font-bold'>Visual Design and programming</span>. I have always admired {" "}
                <span className='font-bold'>art of all kinds</span>, starting from <span className='underline'>paintings</span> and <span className='underline'>movies</span> to even <span className='underline'>Origami</span>. In my Middle School, I found out about programming and {" "}
                <span className='font-bold'>I loved it ever since</span>. The concept of <span className='italic'>pressing buttons on a keyboard</span> and seeing all kinds of creative work always amazed me. {" "}
                <span className='font-bold'>Currently, in the second year of University</span>, I decided to follow the {" "}
                <span className='font-bold'>front-end part of programming</span>.
            </p>
        </motion.section>
    )
}
