
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export interface ProductData {
  index: number;
  image: string;
  tag?: string;
  cutprice?: string;
}

const tagColors: Record<number, string> = {
  0: "bg-[#01AD5A]",
  1: "bg-[#F5813F]",
  4: "bg-[#01AD5A]",
  5: "bg-[#F5813F]",
  8: "bg-[#01AD5A]",
  9: "bg-[#F5813F]",
};

export default function ProductCard({ index, image, tag, cutprice }: ProductData) {
  const tagColor = tagColors[index] || "bg-transparent";

  return (
    <div className="hover:scale-105 transition-all duration-200 ease w-[320px] md:w-[260px] h-96 flex flex-col">
      
      <Link href={`/product/${index}`}>
        <div className="relative w-full h-80 rounded-[10px] bg-cover bg-center overflow-hidden">
        
          <Image
            src={image}
            alt="Product Image"
            fill
            className="object-cover rounded-[10px]"
            loading={index < 2 ? "eager" : "lazy"}
          />
      
          {tag && (
            <div
              className={`absolute top-6 left-6 w-14 h-7 flex items-center justify-center rounded-md ${tagColor}`}
            >
              <p className="text-[13px] text-white">{tag}</p>
            </div>
          )}
        </div>
      </Link>
  
      <div className="w-full flex flex-row justify-between py-3 px-1">
        <div className="flex flex-col space-y-1">
          <p className="text-[16px]">Library stool chair</p>
          <p className="text-[18px]">
            $20 <s className="text-[14px] text-color1">{cutprice}</s>
          </p>
        </div>
  
        <Link href="/cart">
          <div className="h-11 w-11 hover:bg-btncolor hover:text-white flex items-center self-center justify-center rounded-md text-[22px] text-color1 bg-[#F0F2F3]">
            <ShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
}
