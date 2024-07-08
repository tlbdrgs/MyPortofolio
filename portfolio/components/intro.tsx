"use client";

import React from 'react'
import Image from 'next/image'
import { profilePicUrl } from '@/lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView('Home', 1);

    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profilePicUrl}
                            alt='profile photo'
                            width="256"
                            height="256"
                            quality={100}
                            priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hello, I'm Dragoș.</span> I'm a {" "}
                <span className='font-bold'>Student at Babes-Bolyai University</span> in {" "}
                <span className='font-bold'>Cluj-Napoca.</span> Currently I am studying {" "}
                <span className='underline'>Computer science</span>. This is a {" "}
                <span className='font-bold'>website</span> I built to practice {" "}
                <span className='font-bold'>my front-end skills.</span> 😸
            </motion.p>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-5 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2
                }}>
                <Link href="https://github.com/tlbdrgs" target="_blank" className='group bg-slate-900 text-white px-7 py-3 flex items-center gap-2.5 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition border border-black/10'>
                    Go to my GitHub <FaGithubSquare className='opacity-60 group-hover:translate-x-1' />
                </Link>

                <a href='/CV.pdf' download={true} className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>

                <a href='https://www.linkedin.com/in/dragoș-ionuț-talabă-774aa5206/' target="_blank" className='bg-white p-4 text-slate-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10 hover:text-slate-950 dark:bg-white/10 dark:text-white/75'>
                    <BsLinkedin />
                </a>

                <a href='https://www.instagram.com/talabadragos/' target="_blank" className='bg-white p-4 text-slate-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/75'>
                    <BsInstagram />
                </a>
            </motion.div>
        </section>
    )
}
