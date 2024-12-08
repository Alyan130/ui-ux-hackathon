import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="mx-2 md:mx-4 lg:mx-10">
      <div className="max-w-6xl bg-color3 mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex ml-10 flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[14px] font-regular tracking-wider text-color1 mb-4">
              WELCOME TO CHAIRY
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-color1 leading-tight mb-8">
              Best Furniture <br/> Collection For Your Interior.
            </h1>
            <Button 
              className="bg-btncolor hover:bg-teal-600 text-white h-12 w-44 px-6 py-4 rounded-[10px] text-lg group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex-1 relative">
            <div className="w-full aspect-square">
              <img
                src="/images/Product Image.png"
                alt="Modern dining chair"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

