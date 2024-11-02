"use client";

import { useState, useEffect } from "react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [randomImage, setRandomImage] = useState("");

  // Array of background images
  const backgroundImages = [
    "/image01.jpg",
    "/image02.jpg",
    "/image03.jpg",
    "/image04.jpg",
  ];

  useEffect(() => {
    // Select a random background image on the client side
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setRandomImage(backgroundImages[randomIndex]);
  }, []); // Run only once after the component mounts

  return (
    <main className={inter.className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen">
        {/* Left Column with Random Background Image */}
        <div
          className="relative bg-cover bg-center min-h-[400px] md:min-h-screen"
          style={{ backgroundImage: `url(${randomImage})` }}
        >
          {/* 10px Divider */}
          <div className="absolute top-0 right-0 h-full w-[10px] bg-white bg-opacity-5"></div>

          {/* Overlay with Centered Logo and Centered Text */}
          <div className="absolute inset-0 flex flex-col px-4 md:px-16 lg:px-32 text-white bg-black bg-opacity-0">
            {/* Logo at the Top Center for Mobile, Top Left for Larger Screens */}
            <div className="flex items-start justify-center md:justify-start mt-4 md:mt-8 lg:mt-16">
              <img src="/logo.png" alt="Logo" className="w-[150px] md:w-[187px] h-auto" />
            </div>

            {/* Centered Content Below Logo */}
            <div className="flex flex-col justify-center flex-grow">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center md:text-left">
                Helping people<br /> grow, <span className="font-light">while<br /> building<br /> amazing things.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Right Column with Vertically Centered Content */}
        <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-12 lg:px-24 py-8 md:py-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug text-center md:text-left">
            Coming<br /> Soon / <br />
            <span className="font-light">Coding<br /> Monsters</span>
          </h1>
          <p className="mt-4 text-center md:text-left">New Website For 2025</p>
        </div>
      </div>
    </main>
  );
}
