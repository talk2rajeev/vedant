import React from 'react';
import Head from 'next/head';

const scriptures = [
  { id: 1, title: 'Bhagavad Gita', description: 'The Song of God, a dialogue between Prince Arjuna and his charioteer Krishna.' },
  { id: 2, title: 'Upanishads', description: 'The philosophical texts forming the theoretical basis for Hinduism.' },
  { id: 3, title: 'Rigveda', description: 'The oldest of the Vedas, a collection of hymns in Vedic Sanskrit.' },
  { id: 4, title: 'Ramayana', description: 'An ancient Indian epic poem about the journey of Lord Rama.' },
  { id: 5, title: 'Mahabharata', description: 'The great epic of India, including the Bhagavad Gita.' },
  { id: 6, title: 'Puranas', description: 'A vast genre of Indian literature concerning a wide range of topics, particularly myths and legends.' },
];

export default function Scriptures() {
  return (
    <>
      <Head>
        <title>The Fountain of Wisdom</title>
        <meta name="description" content="Discover the foundational texts, epics, and philosophical treatises that illuminate the path of ancient knowledge." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 py-16 px-4 sm:px-6 lg:px-8">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23915c00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 tracking-tight" 
                style={{ fontFamily: "'Cinzel', serif" }}>
              The Fountain of Wisdom
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover the foundational texts, epics, and philosophical treatises that illuminate the path of ancient knowledge.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {scriptures.map((scripture) => (
              <div
                key={scripture.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg 
                           hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out 
                           overflow-hidden border border-amber-200/50 hover:border-amber-400/50"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-orange-100/0 
                               group-hover:from-amber-50/50 group-hover:to-orange-100/30 
                               transition-all duration-300 pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4 
                                 group-hover:text-amber-950 transition-colors duration-300"
                      style={{ fontFamily: "'Cinzel', serif" }}>
                    {scripture.title}
                  </h2>
                  
                  <p className="text-gray-700 italic mb-6 leading-relaxed text-base md:text-lg 
                               group-hover:text-gray-800 transition-colors duration-300">
                    {scripture.description}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 
                                   text-white font-semibold px-6 py-3 rounded-full 
                                   transform group-hover:translate-x-1 transition-all duration-300
                                   shadow-md hover:shadow-lg">
                    Read Now
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
