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
]


export default function Products() {
  
  return (
    <>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full py-1 flex items-center justify-center mb-2 md-mb-5">
            <span className="text-[24px] md:text-[32px] font-semibold text-color1">
              Products
            </span>
          </div>

          <div className="py-6 px-4 sm:px-2 md:px-0 w-full flex flex-wrap gap-x-6 gap-y-10 justify-center md:justify-center">
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
