import carddata from "@/Productdata/data";
import ProductCard from "./productcard";

export default function FeaturedProdoucts(){
const products=carddata.splice(0,4)

    return(
        <>
        <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="w-full py-1 flex flex-row items-center justify-between ml-1 mb-5">
                <span className="text-[24px] md:text-[32px] font-semibold text-color1">Featured Products</span>
            </div>
            <div className="w-full py-6 flex flex-row  space-y-2 justify-center lg:justify-between gap-4 flex-wrap md:flex-nowrap">
                {products.map((e,index)=>
               <ProductCard
               key={index}
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


