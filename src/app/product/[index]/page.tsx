import ProductDetail from "@/components/single-product/deatail";
import DetailCards from "@/components/single-product/detailcards";
import carddata from "@/Productdata/data";

interface params{
    params:{
        index:number,
    }
}

export default function SingleProduct({params}:params){
 
    const {index}=params;

    return(
       <>
       <ProductDetail
        image={carddata[index].image}
       />
   
       <DetailCards/>
       </>
    );
}