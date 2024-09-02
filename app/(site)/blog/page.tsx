import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">


        <div className="bg-[#f8f8fc] flex justify-between flex-wrap items-center p-[3rem] md:p-[5.5rem]">

          <div>
            <h1 className="text-3xl font-bold text-black dark:text-white">Subscribe to the</h1>
            <h1 className="text-3xl font-bold text-black dark:text-white">ShipBob Blog</h1>
            <p className="text-lg mt-4">Get a bi-weekly email, rounding up our latest articles that</p>
            <p className="text-lg ">feature the latest tips to improve ecommerce logistics.</p>
          </div>

          <div className="flex items-end gap-x-3 flex-wrap md:mt-0 mt-10 md:justify-start justify-center">
            <div>
              <Image width={100} height={50} src={`https://www.shipbob.com/wp-content/themes/shipbob-2022/resources/graphics/love-card.svg`} alt="" className="sm:block hidden" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#175cff] mb-2">Enter email to subscribe to our newsletter*</p>
              <input type="text" name="" id="" placeholder="e.g:robert@shipbob.com" className="h-[4rem] border border-[#d2d2d2] px-3 outline-none rounded-md" />
            </div>
            <div>
              <Link href="https://nextjstemplates.com/templates/solid" className="flex items-center justify-center rounded-full bg-primary px-7.5 py-3.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho font-bold md:mt-0 mt-5">Subscribe</Link>
            </div>
          </div>

        </div>


        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
