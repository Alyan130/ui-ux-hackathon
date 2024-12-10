// import carddata from "@/Productdata/data";
// import ProductCard from "./productcard";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShoppingCart } from 'lucide-react'

interface Product {
    id: number
    title: string
    price: number
    originalPrice?: number
    image: string
    badge?: {
      text: string
      variant: "default" | "destructive" | "secondary" | "success"
    }
  }

  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/images/image.png",
      badge: {
        text: "New",
        variant: "success",
      },
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/images/image1.png",
      badge: {
        text: "Sales",
        variant: "destructive",
      },
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/images/image2.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/images/card.png",
    },
  ]
  
  

export default function FeaturedProdoucts(){
// const products=carddata.splice(0,4)

    return(
        <>
        <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-3 md:mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Featured Products</span>
            </div>
            {/* <div className="w-full py-6 flex flex-row space-y-2 md:space-y-0 justify-center lg:justify-between gap-4 flex-wrap md:flex-nowrap">
                {products.map((e)=>
               <ProductCard
               key={e.index}
                index={e.index}
                image={e.image}
                tag={e.tag}
                cutprice={e.cutprice}
               />
)}
            </div> */}


<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="relative overflow-hidden">
          {product.badge && (
            <Badge
            //   variant={product.badge.variant}
              className="absolute right-2 top-2 z-10"
            >
              {product.badge.text}
            </Badge>
          )}
          <CardHeader className="border-b p-0">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-medium">{product.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button variant="secondary" className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>


        </div>
        </section>
        </>
    );
}


