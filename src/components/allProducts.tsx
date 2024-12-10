
import ProductCard from "./productcard";

interface pdata{
  index:number,
  image:string,
  tag?:string,
 cutprice?:string,
}

const carddata:pdata[]=[
  {
      index:0,
      image:"/images/Image.png",
      tag:"New",
       
  },
  {
      index:1,
      image:"/images/Image1.png",
      tag:"Sale",
      cutprice:"$30",
  },
  {
      index:2,
      image:"/images/Image2.png",
      
  },
  {
      index:3,
      image:"/images/card.png",
  },
  {
      index:4,
      image:"/images/Parent2.png",
      tag:"New",
  },
  
  {
      index:5,
      image:"/images/02.png",
      tag:"Sale",
      cutprice:"$30",
  },
  {
      index:6,
      image:"/images/pro2.png",
    
  },
  {
      index:7,
      image:"/images/Image.png",
     
  },
  {
      index:8,
      image:"/images/pro1.png",
      tag:"New",
  },
  {
      index:9,
      image:"/images/Image1.png",
      tag:"Sale",
      cutprice:"$30",
     
  },
  {
      index:10,
      image:"/images/Image2.png",
     
  },
  {
      index:11,
      image:"/images/pro3.png",
     
  },

]

export default function AllProducts() {
  
  return (
    <>
      <section className="py-16 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-2 lg:px-1">
          <div className="w-full py-1 flex items-center md:justify-between justify-center mb-5 px-6">
            <span className="text-3xl md:text-[32px] font-semibold text-color1">
              All Products
            </span>
          </div>
<div className="py-4 px-4 sm:px-2  md:px-0 w-full flex flex-wrap gap-x-4  gap-y-10 md:gap-y-12 justify-center md:justify-center">
  {carddata.map((e) => (
    <ProductCard
      key={e.index}
      index={e.index}
      image={e.image}
      tag={e.tag}
      cutprice={e.cutprice}
    />
  ))}
</div>

        </div>
      </section>


    </>
  );
}
