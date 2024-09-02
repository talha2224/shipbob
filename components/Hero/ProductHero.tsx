"use client";
import Image from "next/image";
import Link from "next/link";

const ProductHero = () => {


  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">How ShipBob <br /> Works</h1>

              <div className="mt-2">
                <p>ShipBob is a full-stack fulfillment platform. We use our proprietary software across our fulfillment network for a cohesive experience. Orders are automatically sent to our warehouses, where inventory is picked, packed, and shipped to your customers.</p>
              </div>

              <div className="mt-2">
                <p>Our fulfillment services help you optimize for time and cost, use the delivery experience to beat customer expectations, and own more of the customer relationship.</p>
              </div>


              <Link href="https://nextjstemplates.com/templates/solid"className="flex items-center justify-center rounded-full w-[18rem] h-[3.9rem] mt-6 bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold">Request A Fulfillment Quote</Link>


            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <Image className="shadow-solid-l rounded-3xl" src="https://www.shipbob.com/wp-content/smush-webp/2024/06/231fd94566e22ad84e4651e7e722d878.jpg.webp" alt="Hero" width={450} height={300}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHero;

