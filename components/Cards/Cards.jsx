"use client";
import Image from "next/image";
import Link from "next/link";

const Cards = ({item,position,p1,p2,heading,url,brWord}) => {
  return (
    <>
      <section className="overflow-hidden pb-10 pt-5 md:pt-4 xl:pb-5 xl:pt-46 ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

            {
                item==1 && (
                    <div>
                        <p className="text-[#175CFF] font-semibold">FEATURES</p>
                        <h1 className="text-3xl text-black dark:white font-semibold mt-4">{heading} <br />{brWord}</h1>
                    </div>
                )
            }
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5 mt-[3rem]">
            <div className={`md:w-1/2 ${position ==1 ? "order-1" :"order-2"}`}>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">{heading} <br /> {brWord}</h1>

              <div className="mt-2">
                <p>{p1}</p>
              </div>

              <div className="mt-2">
                <p>{p2}</p>
              </div>



            </div>

            <div className={`animate_right hidden md:w-1/2 lg:block ${position ==1 ? "order-2" :"order-1"}`}>
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full bg-[#FDFEFF]">
                  <Image className="shadow-solid-l rounded-3xl" src={url} alt="Hero" width={400} height={300}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
