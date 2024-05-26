import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './hero.css'
import Navbar from '../navbar/navbar'
import video from '../../assets/video.mp4';
import Carousel from '../carousel/carousel'
import PropertySearch from '../Property search/Property_search'




export default function Hero() {

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <Navbar />
            </header>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video className="min-w-full min-h-full absolute object-cover" src={video} type="video/mp4" autoPlay loop muted ></video>
                </div>
                <div className="video-content space-y-2 z-10">
                    <PropertySearch />
                </div>
            </section>
            <Carousel />
        </div >
    )
}
