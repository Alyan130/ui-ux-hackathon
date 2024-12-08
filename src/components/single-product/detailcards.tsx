import detaildata from "@/Productdata/cards";
import DetailSection from "./deatilSection2";

export default function DetailCards(){
   return(
   <>
    <section className="py-20  mt-8 md:mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
            <div className="w-full py-1 flex flex-row items-center md:justify-between justify-center mb-5">
                <span className="text-[24px] md:text-[28px] font-semibold text-color1 uppercase mb-7">Featured Products</span>
                <p className="mr-4 text-black text-xl font-bold hidden md:block decoration-black">View all</p>
            </div>
            <div className="w-full flex flex-row space-y-2 justify-center lg:justify-between gap-4 flex-wrap">
                {detaildata.map((e,index)=>
                <DetailSection
                image={e.image}
                key={index}
               />
)}
            </div>
        </div>
        </section>
   </>
   );
}


  