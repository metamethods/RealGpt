'use client';

import Image from "next/image"

export default function Title() {
  return (
    <div className="flex flex-row relative | max-w-screen-2xl">
      <div className="space-y-8 | max-w-[30%] | flex flex-col items-center justify-center">
        <h1 className="text-5xl">
          RealGPT: Real Language Model for Real Dialogue (real)
        </h1>
        <p className="text-2xl">
          At RIT (Real Intelligent Technology), we have developed a model called RealGPT which interacts with the user in a real way (real). The real format makes it so RealGPT can answer follow-up questions, and can admit that its real. RealGPT is a child of FakeGPT.
        </p>

        <div className="flex flex-row items-start justify-start | w-full">
          <button 
            className="bg-black/60 | px-4 py-3 | rounded-md"
            onClick={() => window.open('/chat', '_blank')}
          >
            Try RealGPT ↗
          </button>
        </div>
      </div>

      <div className="flex content-end justify-end | w-full">
        <Image
          src="/realGpt.png"
          alt="RealGPT"
          width={800}
          height={800}
        />
      </div>
    </div>
  )
}