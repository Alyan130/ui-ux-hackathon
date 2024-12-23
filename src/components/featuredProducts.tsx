
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
  ]  

export default function FeaturedProdoucts(){

    return(
        <>
        <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-2 md:mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Featured Products</span>
            </div>
            <div className="w-full py-6 px-4 sm:px-2  md:px-0 flex flex-row space-y-2 md:space-y-0 md:justify-between lg:justify-between gap-4 flex-wrap lg:flex-nowrap">
                {carddata.map((e)=>
               <ProductCard
               key={e.index}
                index={e.index}
                image={e.image}
                tag={e.tag}
                cutprice={e.cutprice}
               />
)}
            </div>



        </div>
        </section>
        </>
    );
}


