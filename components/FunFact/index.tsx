"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg  py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <h1 className="text-[#175CFF] font-bold">CUSTOMER STORIES</h1>
          <h1 className="mt-2 text-4xl font-semibold text-black dark:text-white">ShipBob is a partner for the long run — at all stages of <br /> growth</h1>


          <div className="flex items-start justify-between gap-x-4 flex-wrap mt-[3rem]">


            <div className="sm:max-w-[20rem] sm:min-w-[20rem] sm:h-[30rem] mb-4">
              <Image width={200} height={150} alt="image" src={`https://www.shipbob.com/wp-content/smush-webp/2023/11/ed145c852edd364485e01e1a1db4eae6.png.webp`} className="rounded-md"/>
              <h1 className="mt-6 text-3xl text-black dark:text-white font-semibold">2,400</h1>
              <h1 className="mt-3 text-xl">SKUs in their catalog</h1>
              <p className="mt-7 text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"We have a high item per order ratio, The ability to have variable costs and competitive pricing for shipping is important to us. We have days with over 1,000 orders and it’s not problem for ShipBob."</p>
            </div>


            <div className="sm:max-w-[20rem] sm:min-w-[20rem] sm:h-[30rem] mb-4">
              <Image width={200} height={150} alt="image" src={`https://www.shipbob.com/wp-content/uploads/2021/07/Series-E-Funding-4.png`} className="rounded-md"/>
              <h1 className="mt-6 text-3xl text-black dark:text-white font-semibold">2,400</h1>
              <h1 className="mt-3 text-xl">SKUs in their catalog</h1>
              <p className="mt-7 text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"We have a high item per order ratio, The ability to have variable costs and competitive pricing for shipping is important to us. We have days with over 1,000 orders and it’s not problem for ShipBob."</p>
            </div>

            <div className="sm:max-w-[20rem] sm:min-w-[20rem] sm:h-[30rem] mb-4">
              <Image width={200} height={150} alt="image" src={`https://www.shipbob.com/wp-content/uploads/2020/02/TB12-body-coaches.png`} className="rounded-md"/>
              <h1 className="mt-6 text-3xl text-black dark:text-white font-semibold">2,400</h1>
              <h1 className="mt-3 text-xl">SKUs in their catalog</h1>
              <p className="mt-7  text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"We have a high item per order ratio, The ability to have variable costs and competitive pricing for shipping is important to us. We have days with over 1,000 orders and it’s not problem for ShipBob."</p>
            </div>

            <div className="sm:max-w-[20rem] sm:min-w-[20rem] sm:h-[30rem] mb-4">
              <Image width={200} height={150} alt="image" src={`https://www.shipbob.com/wp-content/uploads/2021/03/Touchland-hand-sanitizer.png`} className="rounded-md"/>
              <h1 className="mt-6 text-3xl text-black dark:text-white font-semibold">2,400</h1>
              <h1 className="mt-3 text-xl">SKUs in their catalog</h1>
              <p className="mt-7 text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"We have a high item per order ratio, The ability to have variable costs and competitive pricing for shipping is important to us. We have days with over 1,000 orders and it’s not problem for ShipBob."</p> 
            </div>

          </div>

          <div className="flex justify-center items-center">
            <button className="text-white bg-[#175CFF] p-4 text-xl font-semibold rounded-3xl">Read More Customer Stories</button>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
