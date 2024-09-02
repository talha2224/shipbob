"use client";
import Image from "next/image";
import React from "react";
import Step1 from '../../public/images/brand/step-1.svg'
import Step2 from '../../public/images/brand/step-2.svg'
import Step3 from '../../public/images/brand/step-3.svg'
import Link from "next/link";

// import SingleBrand from "./SingleBrand";
// import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-[#F8F8FC] py-11 dark:border-y-strokedark dark:bg-black">

        <div className="mx-auto px-4 md:px-8 2xl:px-0 flex justify-evenly items-center flex-wrap ">


          <div className="border-l border-[#175CFF] pl-5">
            <p className="text-[3.5rem] text-[#175CFF] dark:white mt-4">99.96%</p>
            <p className="font-bold mt-[1.5rem] text-2xl text-black dark:text-white">Orders shipping <br />on time</p>
            <p className="mt-2 mb-4">within SLA</p>
          </div>


          <div className="border-l border-[#175CFF] pl-5">
            <p className="text-[3.5rem] text-[#175CFF] dark:white mt-4">99.95%</p>
            <p className="font-bold mt-[1.5rem] text-2xl text-black dark:text-white">Accuracy<br />rate</p>
            <p className="mt-2 mb-4">in fulfilling orders</p>
          </div>


          <div className="border-l border-[#175CFF] pl-5">
            <p className="text-[3.5rem] text-[#175CFF] dark:white mt-4">50+</p>
            <p className="font-bold mt-[1.5rem] text-2xl text-black dark:text-white">Fulfillment <br />centers</p>
            <p className="mt-2 mb-4">around the globe</p>
          </div>


          <div className="border-l border-[#175CFF] pl-5">
            <p className="text-[3.5rem] text-[#175CFF] dark:white mt-4">#1</p>
            <p className="font-bold mt-[1.5rem] text-2xl text-black dark:text-white">Best fulfillment <br />technology</p>
            <p className="mt-2 mb-4">by Retail Tech Breakthrough</p>
          </div>




        </div>


        <div className="border-b w-auto h-[1px] mt-[3rem] lg:mx-[7rem] mx-[2rem]"></div>


        <section id="features" className="py-20 lg:py-25 xl:py-30">

          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

            <div className="flex items-center gap-x-4">

              <div className="border-r  pr-5">
                <p className="text-[#175CFF] font-bold">STREAMLINED FULFILLMENT</p>
                <h1 className="text-5xl font-bold text-black mt-1 dark:text-white">How it works</h1>
              </div>

              <div>
                <p className=" text-[#57586E] dark:text-white text-xl font-semibold">From your online store</p>
                <p className="mt-1 text-[#57586E] dark:text-white text-xl font-semibold">to your customer’s door</p>
              </div>

            </div>



            <div className="flex justify-between items-center flex-wrap mt-[2rem]">

              <div>
                <Image src={Step1} alt="image"/>
                <p className="text-[#175CFF] font-bold mt-6">STREAMLINED FULFILLMENT</p>
                <p className="mt-2 text-xl">Connect your store and sync <br /> your products in a couple clicks.</p>

              </div>

              <div>
                <Image src={Step2} alt="image"/>
                <p className="text-[#175CFF] font-bold mt-6">STREAMLINED FULFILLMENT</p>
                <p className="mt-2 text-xl">Send us your inventory, and we'll help <br /> distribute it to your needs.</p>

              </div>


              <div>
                <Image src={Step3} alt="image"/>
                <p className="text-[#175CFF] font-bold mt-6">STREAMLINED FULFILLMENT</p>
                <p className="mt-2 text-xl">Relax as we handle picking, packing, and <br /> shipping for you!.</p>

              </div>

            </div>

            <Link href="https://nextjstemplates.com/templates/solid"className="flex items-center justify-center rounded-full w-[13rem] h-[3.5rem] mt-[3rem] bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Get A Quote</Link>


          </div>

        </section>

      </section>
    </>
  );
};

export default Brands;
