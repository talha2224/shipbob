"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";
import Link from "next/link";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          <div className="flex justify-between items-center flex-wrap">
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/uploads/2022/04/spikeball-logo-2-scaled.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/smush-webp/2023/10/61311b1fbd7eb193f8b2c63b03964b06.png.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/smush-webp/2024/05/015f3dbf2674c472dcd1a357881acd87.png.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/uploads/2022/04/dossier-logo-1.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/smush-webp/2022/04/tb-12-logo-bw.png.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/smush-webp/2022/04/Chamberlain_Coffee_Logo.png.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/smush-webp/2023/05/2011dad857110b535724f612781158e1.png.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/smush-webp/2022/04/100_Thieveslogo_profile-bw.png.webp`} alt="partners"/>
            <Image width={100} height={100} src={`https://www.shipbob.com/wp-content/uploads/2022/04/spikeball-logo-2-scaled.webp`} alt="partners"/>

          </div>


          <div className="flex justify-center items-center flex-wrap gap-x-6 mt-[9rem]">
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2022/02/Shopify-Icon-Listings.webp`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2022/02/BigCommerce-Logo-Listings-1.webp`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2022/02/Woo-Listings-Logo.jpeg`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/smush-webp/2023/11/df1f3edb9115acb0a1e04209b7a9937b.png.webp`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2021/03/Squarespace-Listings-Icon.png`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2021/03/Square-Listings-Logo.jpg`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2022/02/Walmart-Logo-Listings.jpeg`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/smush-webp/2022/04/100_Thieveslogo_profile-bw.png.webp`} alt="partners"/>
            <Image width={50} height={50} className="rounded-md" src={`https://www.shipbob.com/wp-content/uploads/2021/03/BackerKit-Listings-Logo.png`} alt="partners"/>

          </div>


          <div className="mt-[5rem]">
            <p className="font-bold text-[#0675FE] text-center text-lg">INTEGRATE ALL OF YOUR TOOLS</p>
            <div className="flex justify-center items-center mt-3 flex-col ">
              <p className="text-3xl text-black dark:text-white max-w-[60%] font-semibold text-center">Choose from our pre-built integrations or build your own with our developer-friendly REST API</p>
              <Link href="https://nextjstemplates.com/templates/solid"className="flex items-center h-[4rem] mt-[3rem] justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Request Fulfillment Pricing</Link>
            </div>
          </div>

        </div>

      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
