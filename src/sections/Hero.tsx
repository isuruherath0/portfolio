'use client';

import  { ReactTyped } from 'react-typed';

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="flex flex-col">
        <h1 className="text-2xl">
          <ReactTyped
            strings={['Hi, I\'m Isuru Herath']}
            typeSpeed={40}
            showCursor={false}
          />
        </h1>
        <h1 className="text-2xl">
            <ReactTyped
            strings={['Let\'s Get to Know Me Better']}
            typeSpeed={40}
            startDelay={2000}
          />
        </h1>
      </div>
    </main>
  );
}