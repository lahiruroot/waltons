import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './hero.css'
import Navbar from '../navbar/navbar'
import video from '../../assets/video.mp4';
import Carousel from '../carousel/carousel'




export default function Hero() {

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <Navbar />
            </header>
            <section class="relative h-screen flex flex-col items-center justify-center text-center text-white ">
                <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video class="min-w-full min-h-full absolute object-cover" src={video} type="video/mp4" autoPlay loop muted ></video>
                </div>
                <div class="video-content space-y-2 z-10">
                    <h1 class="font-light text-6xl">full Hero Video</h1>
                    <h3 class="font-light text-3xl">with TailwindCSS</h3>
                </div>
            </section>
            <Carousel />
        </div >
    )
}
