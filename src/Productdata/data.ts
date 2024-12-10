

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
    {
        index:8,
        image:"/images/pro1.png",
        tag:"New",
    },
    {
        index:9,
        image:"/images/Image1.png",
        tag:"Sale",
        cutprice:"$30",
       
    },
    {
        index:10,
        image:"/images/Image2.png",
       
    },
    {
        index:11,
        image:"/images/pro3.png",
       
    },

]

export default carddata;