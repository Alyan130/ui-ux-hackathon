
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function Footer() {
  return (
    <section className='py-4 md:py-8 '>
    <footer className=" border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 3.438 2.169 6.37 5.214 7.489-.07-.808-.214-2.055-.214-2.489 0-1.657 1.343-3 3-3s3 1.343 3 3c0 .434-.144 1.681-.214 2.489C17.831 16.37 20 13.438 20 10z" />
                </svg>
              </div>
               <div className='w-full flex gap-2'>
               <img src="/icons/Vector.png" alt="" />
              <span className="text-xl font-semibold text-color1">Comforty</span>
              </div>
            </div>
            <p className="text-gray-500 text-[16px] text-color1">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. 
              Cras egestas purus
            </p>
            <div className="flex space-x-4 items-end">
            <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
              <Link href="#" className="text-iconcolor2 group-hover:text-btncolor">
                <FaFacebook className="w-5 h-5" />
              </Link>
              </div>
              <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
              <Link href="#" className=" text-iconcolor2 group-hover:text-btncolor">
                <FaTwitter className="w-5 h-5" />
              </Link>
              </div>
              <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
              <Link href="#" className=" text-iconcolor2  group-hover:text-btncolor">
                <CiInstagram className="w-5 h-5" />
              </Link>
              </div>
              <div className='h-9 w-9 flex items-center justify-center hover:border-[2px] hover:border-btncolor rounded-[50%] group'>
              <Link href="#" className= "text-iconcolor2  group-hover:text-btncolor">
                <FaYoutube className="w-5 h-5" />
              </Link>
              </div>
            </div>
          </div>

          {/* Category Links */}
          <div>
            <h3 className="text-sm  text-color4 ppercase tracking-wider mb-4">
              Category
            </h3>
            <ul className="space-y-3">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-color1 hover:text-btncolor text-[16px]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm  text-color4 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-color1 hover:text-btncolor text-[16px]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium text-color4 uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <div className="space-y-4">
              <div className="flex max-w-md gap-x-2 text-color4">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white"
                />
                <Button className='bg-btncolor text-white rounded-[10px]'>
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-color4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam tincidunt erat enim.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2021 - Blogv - Designed & Develop by{' '}
              <Link href="#" className="text-color1 hover:text-primary/90">
                Zakirsoft
              </Link>
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="PayPal"
                width={50}
                height={30}
                className="h-8 w-auto"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="American Express"
                width={50}
                height={30}
                className="h-8 w-auto"
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Visa"
                width={50}
                height={30}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}

