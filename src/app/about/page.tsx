import OurBrand from "@/components/about/aboutfeature";
import OurPopularProducts from "@/components/about/aboutProduct";
import Section1 from "@/components/about/section1";
import Cart from "@/components/cart";
import ProductDetail from "@/components/single-product/deatail";

export default function section(){
    return(
    <>
     <Section1/>
      <OurBrand/>
      <OurPopularProducts/>
         </>
    );
}