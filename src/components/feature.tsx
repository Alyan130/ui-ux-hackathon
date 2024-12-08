import React from 'react';

interface logos{
    image:string,
}

const companies:logos[]= [
 {image:"/logo/Logo (1).png"},
 {image:"/logo/Logo (2).png"},
 {image:"/logo/Logo (3).png"},
 {image:"/logo/Logo (4).png"},
 {image:"/logo/Logo (5).png"},
 {image:"/logo/Logo (6).png"},
]

export const FeaturedSection = () => {

  return (

        <section className="bg-white py-10 sm:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between px-2 gap-2 flex-wrap justify-items-center">
              {companies.map((e, index) => (
                <div
                  key={index}
                  className="w-24 h-24 flex items-center justify-center rounded-md"
                >
                  <img src={e.image} alt={`Company logo ${index + 1}`} className="object-contain h-full w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}