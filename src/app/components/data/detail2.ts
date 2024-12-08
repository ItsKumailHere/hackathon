import { StaticImageData } from "next/image";
import p1 from "../../../../public/product/p (1).jpg";
import p2 from "../../../../public/product/p (2).jpg";
import p3 from "../../../../public/product/p (3).jpg";
import p4 from "../../../../public/product/p (4).jpg";
import p5 from "../../../../public/product/p (5).jpg";
import p6 from "../../../../public/product/p (6).jpg";
import p7 from "../../../../public/product/p (7).jpg";
import p8 from "../../../../public/product/p (8).jpg";
import p9 from "../../../../public/product/p (9).jpg";
import p10 from "../../../../public/product/p (10).jpg";
import p11 from "../../../../public/product/p (11).jpg";
import p12 from "../../../../public/product/p (12).jpg";
import p13 from "../../../../public/product/p (13).jpg";
import p14 from "../../../../public/product/p (14).jpg";
import p15 from "../../../../public/product/p (15).jpg";
import p16 from "../../../../public/product/p (16).jpg";
import p17 from "../../../../public/product/p (1).jpg";
import p18 from "../../../../public/product/p (1).jpg";
import p19 from "../../../../public/product/p (1).jpg";
import p20 from "../../../../public/product/p (1).jpg";
import p21 from "../../../../public/product/p (1).jpg";
import p22 from "../../../../public/product/p (1).jpg";
import p23 from "../../../../public/product/p (1).jpg";
import p24 from "../../../../public/product/p (1).jpg";
import p25 from "../../../../public/product/p (1).jpg";
import p26 from "../../../../public/product/p (1).jpg";
import p27 from "../../../../public/product/p (1).jpg";
import p28 from "../../../../public/product/p (1).jpg";
import p29 from "../../../../public/product/p (1).jpg";
import p30 from "../../../../public/product/p (1).jpg";

export interface ProductDetail {
  id: string; // Alphanumeric ID
  name: string;
  description: string;
  price: string | number; // Flexible price type
  imageUrl: string | StaticImageData; // Supports both static and dynamic images
  category?: "men" | "women"; // Optional category for categorization
  deal: string; // Deal information (color orange can be handled in UI)
}

export const products: ProductDetail[] = [
  
  {
    id: "P001",
    name: "Nike Air Force 1 Mid",
    description: "Men's Shoe",
    price: "$13.99",
    imageUrl: p1,
    category: "men",
    deal: "Just In",
  },

  {
    id: "P002",
    name: "Nike Court Vision Low Next Nature",
    description: "Men's Shoes",
    price: "₹4,995.00",
    imageUrl: p2,
    category: "men",
    deal: "Just In"
  },

  {
    id: "P003",
    name: "Nike Air Force 1 Platform",
    description: "Women's Shoe",
    price: "$8695.00",
    imageUrl: p3,
    category: "men",
    deal: "15% OFF",
  },
  {
    id: "P004",
    name: "Nike Air Force 1 React",
    description: "Men's Shoes",
    price: "₹13995.00",
    imageUrl: p4,
    category: "men",
    deal: "Just In",
  },
  {
    id: "P005",
    name: "Air Jaordan 1 Elecate Low",
    description: "Women's Shoes",
    price: "₹11895.00",
    imageUrl: p5,
    category: "women",
    deal: "Promo Exculsion",
  },
  {
    id: "P006",
    name: "Nike Standard Issue",
    description: "Women's Basketball Issue",
    price: "₹2895.00",
    imageUrl: p6,
    category: "women",
    deal: "Just In",
  },
  {
    id: "P007",
    name: "Nike Dunk Low Retro SE",
    description: "Men's Shoes",
    price: "₹9695",
    imageUrl: p7,
    category: "men",
    deal: "Promo Exculsion",
  },

  
  {
    id: "P008",
    name: "Nike Dri-FIT UV Hyverse",
    description: "Men's Short-Sleeve Graphic Fitness Top",
    price: "₹2495.00",
    imageUrl: p8,
    category: "men",
    deal: "Sustainable Materials",
  },

  
  {
    id: "P009",
    name: "Nike Court Vision Low",
    description: "Men's Shoes",
    price: "₹5695.00",
    imageUrl: p9,
    category: "men",
    deal: "Just In",
  },
  
  {
    id: "P010",
    name: "Nike Dri-FIT Ready",
    description: "Men's Short-Sleeve Fitness Top",
    price: "₹2495.00",
    imageUrl: p10,
    category: "men",
    deal: "Just In",
  },

{
  id: "P011",
  name: "Nike One Leak Protection: Period",
  description: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
  price: "₹3395.00",
  imageUrl: p11,
  category: "women",
  deal: "Just In",
},

{
id: "P012",
name: "Nike Air Force 1 LV8 3",
description: "Older Kids Shoe",
price: "₹2495.00",
imageUrl: p12,
category: "men",
deal: "Just In",
},

{
  id: "P013",
  name: "Nike Blazer Low Plattorm",
  description: "Women's Shoes",
  price: "₹8195.00",
  imageUrl: p13,
  category: "women",
  deal: "Just In",
  },

  {
    id: "P014",
    name: "Nike Air Force 1 '07",
    description: "Women's Shoe",
    price: "₹8195.00",
    imageUrl: p14,
    category: "women",
    deal: "Just In",
    },

    {
      id: "P015",
      name: "Nike Pro Dri-Fit",
      description: "Men's Tight-Fit Sleeveless Top",
      price: "₹1495.00",
      imageUrl: p15,
      category: "men",
      deal: "Just In",
      },

      {
        id: "P016",
        name: "Nike Dunk Low Retro",
        description: "Men's Shoes",
        price: "₹8695.00",
        imageUrl: p16,
        category: "men",
        deal: "Just In",
        },

]