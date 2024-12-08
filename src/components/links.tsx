
import { RiMenuLine } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "../components/ui/sheet";

import Link from "next/link";

export default function Navbar() {
    return (
      <>
     <nav className="hidden md:block w-full h-[74px] py-6 border-b-2 border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-row items-center justify-between">
    <ul className="gap-8 hidden md:flex ml-1">
        <Link href={"/"} ><li className="text-[#636270] text-[14px] font-meduim">Home</li></Link>
        <Link href={"/products"}><li className="text-[#636270] text-[14px] font-meduim">Shop</li></Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[14px] font-meduim">Product</li> </Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[14px] font-meduim">Pages</li> </Link>
        <Link href={"/contact"}><li className="text-[#636270] text-[14px] font-meduim">About</li> </Link>
    </ul>
     <p className="text-[14px] text-color1"><span className="text-[#636270]">Contact:</span>(808) 555-0111</p>
</div>
      </nav>
      </>
    );
}