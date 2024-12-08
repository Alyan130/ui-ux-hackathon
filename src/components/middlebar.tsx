
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import Navbar from './links'
import { RiMenuLine } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

export default function Header() {
  return (
    <>
    


<header className="bg-color3 border-b h-[84px] py-2">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div className="flex justify-between items-center h-16">
 
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-md flex items-center justify-center">
          <img src="/icons/Vector.png" alt="Logo" />
        </div>
        <span className="text-xl md:text-[26px] font-medium text-color1">Comforty</span>
      </Link>
     
      <div className="hidden md:flex flex-1 justify-center"></div>

      <div className="hidden md:flex items-center justify-center w-24 md:w-36 h-11 gap-3 bg-white">
       <Link href={'/cart'}><ShoppingCart className="h-5 w-5" /></Link>
        <span className="text-[12px] font-medium text-color1">Cart</span>
        <div className="w-5 h-5 text-[10px] rounded-[50%] text-white bg-iconcolor flex items-center justify-center">
          2
        </div>
      </div>

      <Sheet>
        <SheetTrigger>
          <RiMenuLine size={28} className="font-bold md:hidden" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center py-32 bg-white">
          <ul className="mb-2 space-y-24 ">
          <Link href={"/"} ><li className="text-[#636270] text-[14px] font-meduim">Home</li></Link>
        <Link href={"/products"}><li className="text-[#636270] text-[14px] font-meduim">Shop</li></Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[14px] font-meduim">Product</li> </Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[14px] font-meduim">Pages</li> </Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[14px] font-meduim">About</li> </Link>
        <p className="text-[14px] text-color1"><span className="text-[#636270]">Contact:</span>(808) 555-0111</p>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</header>
<Navbar />

  </>
  )
}

