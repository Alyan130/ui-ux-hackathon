import CategoryCards from "@/components/categories";
import { FeaturedSection } from "@/components/feature";
import FeaturedProdoucts from "@/components/featuredProducts";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero";
import Header from "@/components/middlebar";
import ProductCard from "@/components/productcard";
import { Newsletter } from "@/components/productCTA";
import Products from "@/components/productSection";
import Section3 from "@/components/section2";
import TopBar from "@/components/topbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
   <HeroSection/> 
   <FeaturedSection/>
   <FeaturedProdoucts/>
   <CategoryCards/>
   <Section3/>
   <Products/>
   </>
  );
}
