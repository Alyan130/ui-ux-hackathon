import carddata from "@/Productdata/data";
import ProductCard from "./productcard";

export default function Products() {
  const products=carddata.splice(0,8);
  return (
    <>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full py-1 flex items-center justify-center mb-3 md-mb-5">
            <span className="text-[24px] md:text-[32px] font-semibold text-color1">
              Products
            </span>
          </div>

          <div className="py-6 w-full flex flex-wrap gap-x-6 gap-y-10 justify-center md:justify-center">
            {products.map((e, index) => (
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
