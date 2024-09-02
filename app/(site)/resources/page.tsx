import ResourceData from "@/components/Resources/ResourcesData";
import ResourceItem from "@/components/Resources/ResourceItem"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ResourceImage from '../../../public/images/resorce.png'
export const metadata: Metadata = {
  title: "Resources Page",
  description: "This is Resources page for Solid Pro",
  // other metadata
};

const ResourcePage = async () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">


        <div className="bg-[#f8f8fc] flex justify-between gap-x-[4rem] flex-wrap items-center p-[3rem] md:p-[5.5rem]">
          <div className="w-[25rem] h-[30rem] bg-[#0a083a] rounded-md flex justify-center items-center">
            <Image width={200} height={100} src={ResourceImage} alt="" className="rounded-md" />
          </div>
          <div>
            <p className="text-black dark:text-white text-sm font-bold mb-2 mt-2">FEATURED RESOURCE</p>
            <h1 className="text-[2rem] sm:text-[3.3rem] text-black font-bold dark:text-white h-fit sm:leading-[4rem] leading-10 ">How to Choose a <br />Fulfillment Partner for <br /> Your Ecommerce <br /> Business</h1>
            <p className="text-black dark:text-white my-5">Learn which questions to ask to find a partner you can trust to <br /> help your business grow.</p>
            <Link href="https://nextjstemplates.com/templates/solid" className="flex items-center justify-center rounded-full bg-[#175cff] px-7.5 py-3.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold md:mt-0 mt-5 w-fit">Download The Guide</Link>
          </div>
        </div>


        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {ResourceData.map((blog, key) => (
              <ResourceItem blog={blog} key={key} />
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default ResourcePage;
