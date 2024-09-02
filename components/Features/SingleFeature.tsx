import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-start text-start"
    >
      <div className="flex items-center">
        <div className="relative flex flex-col items-center">
          <Image src={icon} width={36} height={36} alt={title} />
          {/* Line under the icon */}
          <div className="w-12 border-b-2 border-blue-600 mt-2"></div>
        </div>
        <h3 className="ml-4 text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default SingleFeature;
