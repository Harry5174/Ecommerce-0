// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import heroImg from "/public/heroImg.png";

// // images
// import p1 from "/public/p1.png";
// import p2 from "/public/p2.png";
// import p3 from "/public/p3.png";
// import p4 from "/public/p4.png";
// import p5 from "/public/p5.png";
// import p6 from "/public/p6.png";
// import p7 from "/public/p7.png";
// import p8 from "/public/p8.png";
// import p9 from "/public/p9.png";
// import p10 from "/public/p10.png";
// import p11 from "/public/p11.png";
// import p12 from "/public/p12.png";
// // imagesend

// import "swiper/css";
// import ProductCard from "@/components/ui/ProductCard";

// export const Carousel = () => {
//   return (
//     <>
//       <span className="gap-y-6 ">
//         <h4 className="flex justify-center scroll-m-20 text-sm font-semibold tracking-tight text-blue-500 mt-20">
//           PRODUCTS
//         </h4>
//         <h2 className="flex justify-center scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0 mt-3">
//           Check What We Have
//         </h2>
//       </span>

//       {/* Products */}
//       <Swiper 
//         className="mt-10"
//         spaceBetween={50}
//         slidesPerView={2}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <ProductCard title="Burshed Raglan sweatshirt" price={195} img={p1}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Cameryn Sash Tie Dress" price={545} img={p2}/>
//         </SwiperSlide>
        
//         <SwiperSlide>
//           <ProductCard title="Flex Sweatshirt" price={175} img={p3}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Flex Sweatpants" price={175} img={p4}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Pink Fleece SweatPants" price={195} img={p5}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Lite Sweatpants" price={150} img={p6}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Imperial Alpaca Hoodie" price={525} img={p7}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Flex Push Button Bomber" price={225} img={p8}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Muscle Tank" price={75} img={p9}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Brushed Bomber" price={225} img={p10}/>
//         </SwiperSlide>

//         <SwiperSlide>
//           <ProductCard title="Raglan Sweatshirt" price={195} img={p11}/>
//         </SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// };
