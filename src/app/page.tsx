'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src="https://picsum.photos/1920/400"
          alt="Reel Rush"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
          <div className="h-full flex flex-col justify-center px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Reel Rush
            </h1>
            <p className="text-white/80 text-lg mb-6 max-w-md">
              Experience the thrill of the rush with our newest slot sensation!
            </p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-orange-700 w-fit">
              <span>BET NOW</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Games Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={`https://picsum.photos/400/300?random=${i}`}
                  alt={`Game ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Game Title {i}</h3>
                <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`https://picsum.photos/400/300?random=${i + 10}`}
                  alt={`News ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">News Title {i}</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 