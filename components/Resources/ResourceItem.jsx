"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ResourceItem = ({ blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
      <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }} initial="hidden" whileInView="visible" transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="animate_top min-w-[20rem] max-w-[20rem] ">
        {/* <Link href={`/blog/`} className="relative block aspect-[368/239]"> */}
        <Image src={mainImage} alt={title} className="rounded-md" width={220} height={70} />
        {/* </Link> */}
        <p className="text-black dark:text-white text-wrap mt-4 text-lg font-semibold">{blog?.title}</p>
        <p className="text-black dark:text-white text-wrap mt-4">{blog?.description}</p>

        <Link href="https://nextjstemplates.com/templates/solid" className="flex items-center text-black hover:text-white justify-center rounded-full bg-[#f1f1f1] px-7.5 py-2.5 text-regular duration-300 ease-in-out hover:bg-primaryho font-bold mt-5 w-fit">Get The Pdf</Link>

      </motion.div >
    </>
  );
};

export default ResourceItem;

