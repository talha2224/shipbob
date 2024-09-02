"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";

const Integration = () => {
  return (
    <>

      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 mb-[10rem]">

          <div className="mt-[5rem]">
            <p className="font-bold text-center text-4xl text-black dark:text-white">Ship from 50+ global locations</p>
            <div className="flex justify-center items-center mt-3 flex-col ">
              <p className="text-xl  md:max-w-[60%] font-semibold text-center mt-6">We use our network of fulfillment centers to help you strategically split and manage your inventory to reduce shipping costs and transit times.</p>
              <Link href="https://nextjstemplates.com/templates/solid" className="flex items-center h-[4rem] mt-[3rem] justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Speak To A Fulfillment Expert</Link>
            </div>
          </div>


          <div className="mt-[3rem]">
            <img src="https://www.shipbob.com/wp-content/smush-webp/2024/05/78805a221a988e79ef3f42d7c5bfd418.png.webp" alt="" className="rounded-3xl" />
          </div>

        </div>
      </section>
      
    </>
  );
};

export default Integration;
