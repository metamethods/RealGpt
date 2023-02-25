import Image from "next/image"

import Title from "./title"

export default function HomePage() {
  return (
    <main>
      <div className="w-full h-screen | p-10">
        <div className="absolute top-0 left-0 | w-full h-full | -z-50">
          <Image 
            src="/mountains.jpg"
            alt="Mountains"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="backdrop-blur-md | bg-black/60 | w-full h-full | absolute top-0 left-0"></div>
        </div>

        <div className="flex items-center justify-center | w-full h-full">
          <Title />
        </div>
      </div>

      <div className="w-full h-screen | bg-white p-8 | text-black">
        <h1 className="text-2xl font-bold">
          Some Cool Stuff down here ngl
        </h1>
      </div>
    </main>
  )
}