import carddata from "@/Productdata/data";
import ProductCard from "./productcard";

export default function FeaturedProdoucts(){
const products=carddata.splice(0,4)

    return(
        <>
        <section className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="w-full py-1 flex flex-row items-center justify-center md:justify-between ml-1 mb-3 md:mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Featured Products</span>
            </div>
            <div className="w-full py-6 flex flex-row space-y-2 md:space-y-0 justify-center lg:justify-between gap-4 flex-wrap md:flex-nowrap">
                {products.map((e)=>
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


