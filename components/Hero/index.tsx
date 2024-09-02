"use client";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

const Hero = () => {


  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">The <span className="text-[#0675FE]">#1</span> ecommerce fulfillment solution</h1>

              <div className="flex items-start gap-x-3 mt-2">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick/>
                </div>
                <p><span className="font-bold">Order fulfillment services.</span> Outsource warehousing, picking, packing, 2-day shipping, returns, customization, and more.</p>
              </div>

              <div className="flex items-start gap-x-3 mt-2">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick/>
                </div>
                <p><span className="font-bold">Single, scalable partner. </span>  Single source of truth for inventory across warehouses. Track in real-time. Get alerts to refill stock.</p>
              </div>

              <div className="flex items-start gap-x-3 mt-2">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick/>
                </div>
                <p><span className="font-bold">Award-winning technology.</span> Integrate all sales channels and track inventory and orders in real time across fulfillment centers.</p>
              </div>


              <Link href="https://nextjstemplates.com/templates/solid"className="flex items-center justify-center rounded-full w-[10rem] h-[3.5rem] mt-6 bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Get A Quote</Link>


            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image className="shadow-solid-l dark:hidden" src="/images/hero/dashboard.png" alt="Hero" fill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
