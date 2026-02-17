'use client';

import TextType from '@/components/TextType';

export default function Hero() {
  return (
    <main id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-col">
        <h1 className="text-5xl">
          <TextType
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="▎"
            text={["Hi, I'm Isuru Herath", "Let's Get to Know Me Better.!!"]}
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </h1>
      </div>
    </main>
  );
}