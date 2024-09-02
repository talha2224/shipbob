"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFactProduct = () => {
  return (
    <>
      {/* <!-- ===== FunFactProduct Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg  py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <h1 className="text-[#175CFF] font-bold text-center">CUSTOMER STORIES</h1>
          <h1 className="mt-2 text-4xl font-semibold text-black dark:text-white text-center">Don’t just take our word for it — see why ShipBob is trusted by thousands <br /> of merchants</h1>


          <div className="flex items-start justify-between gap-x-4 flex-wrap mt-[3rem]">


            <div className="sm:max-w-[25rem] sm:min-w-[25rem] sm:h-[30rem] mb-4">
              <Image width={50} height={150} alt="image" src={`https://www.shipbob.com/wp-content/uploads/2020/01/Noel.jpg`} className="rounded-md"/>
              <p className="mt-7 text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"It was kind of like magic — my orders were imported into ShipBob from my Shopify Plus store and started getting fulfilled right away. I didn’t have to do anything. Since then, we’ve grown 115% and experienced 2.5 times more order volume. And with ShipBob’s 2-Day Express program, we’ve seen a 24% increase in our average order value for qualifying orders placed on our Shopify Plus store."</p>
            </div>


            <div className="sm:max-w-[25rem] sm:min-w-[25rem] sm:h-[30rem] mb-4">
              <Image width={50} height={150} alt="image" src={`https://www.shipbob.com/wp-content/uploads/2019/12/headshot-matt-300x289-1.png`} className="rounded-md"/>
              <p className="mt-7 text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"IThere is a cost-benefit to having several fulfillment centers, as orders can be shipped from warehouses that are closer to customers and delivered very quickly. With ShipBob, I stay up-to-date with what’s shipped, physical inventory levels, and my company’s performance. They keep getting better, helping brands grow and expand at a ratio that other 3PLs might be a few years behind."</p>
            </div>

            <div className="sm:max-w-[25rem] sm:min-w-[25rem] sm:h-[30rem] mb-4">
              <Image width={50} height={150} alt="image" src={`https://www.shipbob.com/wp-content/uploads/2019/12/oded.jpg`} className="rounded-md"/>
              <p className="mt-7  text-wrap text-xl border-l-2 border-[#175CFF] pl-[1rem]">"Our business is almost all subscriptions, and ShipBob helps us offer reliable, affordable shipping that shows up at the same time each month. ShipBob’s analytics tool helps us a lot with planning inventory reorders, seeing when SKUs are going to run out, and we can even set up email notifications so that we’re alerted when a SKU has less than a certain quantity left."</p>
            </div>

          </div>

          <div className="flex justify-center items-center">
            <button className="text-white bg-[#175CFF] p-4 text-xl font-semibold rounded-3xl">See Their Stories</button>
          </div>
        </div>
      </section>
      {/* <!-- ===== FunFactProduct End ===== --> */}
    </>
  );
};

export default FunFactProduct;
