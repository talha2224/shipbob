"use client";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 bg-[#F8F8FC] pt-10">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <p className="font-bold text-[#0675FE]">annual report</p>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-4xl ">Download ShipBob’s 2024 <br /> State of Ecommerce <br /> Fulfillment Report</h1>
              <h1 className="mb-2 pr-16 text-md font-bold text-black dark:text-white ">Access 70+ data points from ecommerce brands, such as:</h1>

              <div className="flex items-start gap-x-3 mt-4">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE] text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick />
                </div>
                <p>48% already sell on 3 or more sales channels.</p>
              </div>

              <div className="flex items-start gap-x-3 mt-4">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick />
                </div>
                <p>83% increased revenue in 2023.</p>
              </div>

              <div className="flex items-start gap-x-3 mt-4">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick />
                </div>
                <p>64% will add at least one new sales channel in 2024.</p>
              </div>


              <div className="flex items-start gap-x-3 mt-4">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE] text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick />
                </div>
                <p>21% will fulfill orders in a new country in 2024.</p>
              </div>

              <div className="flex items-start gap-x-3 mt-4">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick />
                </div>
                <p>27% always offer site-wide free shipping for domestic orders.</p>
              </div>

              <div className="flex items-center gap-x-3 mt-4">
                <div className="min-w-[1.5rem] min-h-[1.5rem] rounded-full bg-[#0675FE]  text-white flex justify-center items-center text-[1.3rem]">
                  <TiTick />
                </div>
                <p>In the US, 35% of all ecommerce orders and GMV are in 4 states: CA, TX, FL, and NY.</p>
              </div>


              <Link href="https://nextjstemplates.com/templates/solid" className="flex items-center justify-center rounded-full w-[13rem] h-[3.5rem] mt-6 border border-primary px-7.5 py-2.5 text-regular text-primary hover:text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Get A Copy Today</Link>


            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/700] w-full">
                  <Image className="shadow-solid-l dark:hidden" src="/images/hero/annual-report.png" alt="Hero" fill />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
