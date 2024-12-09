import carddata from "@/Productdata/data";
import ProductCard from "./productcard";

export default function AllProducts() {
  return (
    <>
      <section className="py-14 mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-2 lg:px-1">
          <div className="w-full py-1 flex items-center md:justify-between justify-center mb-5 px-6">
            <span className="text-3xl md:text-[32px] font-semibold text-color1">
              All Products
            </span>
          </div>
<div className="py-4 w-full flex flex-wrap gap-x-4  gap-y-10 md:gap-y-12 justify-center md:justify-center">
  {carddata.map((e, index) => (
    <ProductCard
      key={index}
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
