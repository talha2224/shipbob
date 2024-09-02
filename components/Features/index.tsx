"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          {/* <SectionHeader
            headerInfo={{
              title: "Ecommerce Fulfillment Services",
              subtitle: "ShipBob is an end-to-end fulfillment provider trusted by thousands of brands",
              description:
                "ShipBob is an end-to-end fulfillment provider trusted by thousands of brands",
            }}
          />{" "} */}
          <div className="text-start">
            <p className="text-base font-extrabold uppercase text-[#0063ED]">
              Ecommerce Fulfillment Services
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ShipBob is an end-to-end fulfillment provider
              <br />
              trusted by thousands of brands
            </h2>
          </div>
          {/* <!-- Section Title End --> */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
