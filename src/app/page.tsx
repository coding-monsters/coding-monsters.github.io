import Image from "next/image";
import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // Array of background images
  const backgroundImages = [
    "/image01.jpg",
    "/image02.jpg",
    "/image03.jpg",
    "/image04.jpg",
  ];

  // Select a random background image on each refresh
  const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

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

          {/* Overlay with Left-Aligned Logo and Centered Text */}
          <div className="absolute inset-0 flex flex-col px-8 md:px-32 text-white bg-black bg-opacity-0">
            {/* Logo at the Top Left */}
            <div className="flex items-start mt-8 md:mt-16">
              <img src="/logo.png" alt="Logo" className="w-[187px] h-[65px]" />
            </div>

            {/* Centered Content Below Logo */}
            <div className="flex flex-col justify-center flex-grow">
              <h2 className="text-4xl md:text-6xl font-semibold">
                Helping people<br /> grow, <span className="font-light">while<br /> building amazing things.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Right Column with Vertically Centered Content */}
        <div className="flex flex-col justify-center items-start px-8 md:px-24 py-8 md:py-0">
          <h1 className="text-4xl md:text-6xl font-semibold leading-snug">
            Coming<br /> Soon / <br />
            <span className="font-light">Coding<br /> Monsters</span>
          </h1>
          <p className="mt-4">New Website For 2025</p>
        </div>
      </div>
    </main>
  );
}
