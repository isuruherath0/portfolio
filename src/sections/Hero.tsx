'use client';

import  { ReactTyped } from 'react-typed';
import TextType from '@/components/TextType';



export default function Hero() {
  return (
    <main id="hero" className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="flex flex-col">
        {/* <h1 className="text-2xl">
          <ReactTyped
            strings={['Hi, I\'m Isuru Herath']}
            typeSpeed={40}
            showCursor={false}
          />
        </h1>
        <h1 className="text-2xl">
            <ReactTyped
            strings={['Let\'s Get to Know Me Better.!!']}
            typeSpeed={40}
            startDelay={2000}
            showCursor={false}
          />
        </h1> */}
        <h1 className="text-5xl">
        <TextType 
            // text={["Text typing effect", "for your websites", "Happy coding!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="▎"
            text={['Hi, I\'m Isuru Herath','Let\'s Get to Know Me Better.!!']}
            deletingSpeed={50}
            // variableSpeedEnabled={false}
            // variableSpeedMin={60}
            // variableSpeedMax={120}
            cursorBlinkDuration={0.5}
        />
        </h1>
      </div>
    </main>
  );
}