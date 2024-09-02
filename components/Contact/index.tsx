"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className=" md:px-8 2xl:px-0">
        <div className="relative sm:mx-auto sm:max-w-c-1390 px-1.5 pt-10 lg:px-5 lg:pt-5">

          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full"></div>

          <div className="flex justify-between items-start flex-wrap">

            <div>
              <h1 className="text-[4rem] font-bold text-black dark:text-white mb-[3rem]">Contact Us</h1>
              <p className="mt-4 text-lg">We’re here to help. Ask us about the product, our services, and any <br /> questions you have.</p>
              <p className="mt-4 text-lg">ShipBob HQ address 120 N Racine Ave. Suite 100 Chicago, IL 60607</p>
              <p className="mt-4 text-lg border-b border-[#2F6DFF] pb-1 w-fit text-[#2F6DFF] cursor-pointer">View our fulfillment locations here.</p>
              <p className="mt-4 text-lg font-semibold">Customer Support</p>
              <p className="mt-4 text-lg">Need help with anything?</p>
              <ul>
                <li className="mt-2 list-disc text-lg font-semibold border-b border-[#2F6DFF] pb-1 w-fit text-[#2F6DFF] cursor-pointer">Contact ShipBob’s Merchant Care team</li>
                <li className="mt-2 list-disc text-lg font-semibold">Call 1-312-313-1104</li>
                <li className="mt-2 list-disc text-lg font-semibold border-b border-[#2F6DFF] pb-1 w-fit text-[#2F6DFF] cursor-pointer">View our Help Center</li>
                <li className="mt-2 list-disc text-lg font-semibold border-b border-[#2F6DFF] pb-1 w-fit text-[#2F6DFF] cursor-pointer">Media inquiries</li>
              </ul>

            </div>

            <div className="bg-[#F8F8FC] h-[1000vh] fixed top-[7rem] right-0 w-[30rem] -z-999 lg:block hidden"></div>


            <div className="bg-white w-auto h-auto lg:h-[43rem] lg:w-[38rem] lg:rounded-3xl lg:shadow-lg lg:border lg:px-7 py-10">
              <h1 className="text-[2rem] font-bold text-black dark:text-white mb-[1.5rem]">Contact ShipBob’s Sales Team</h1>
              <p className="text-xl font-semibold text-black dark:text-white mb-[1rem]">Need customer support? Please go <span className=" border-b border-[#2F6DFF]  w-fit text-[#2F6DFF] cursor-pointer">here</span>.</p>

              <form action="">

                <div className="flex justify-between items-center gap-x-4 mt-[2rem] flex-wrap ">
                  <input type="text" name="" id="" className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2" placeholder="First Name" />
                  <input type="text" name="" id="" className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2" placeholder="Last Name" />
                </div>

                <div className="flex justify-between items-center gap-x-4 mt-[1rem] flex-wrap">
                  <input type="email" name="" id="" className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2" placeholder="Email" />
                  <input type="text" name="" id="" className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2" placeholder="Company Name" />
                </div>


                <div className="flex justify-between items-center gap-x-4 mt-[1rem] flex-wrap">
                  <select id="platform" value={selectedValue} onChange={handleChange} className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2">
                    <option value="" className="text-gray-500">Please Select</option>
                    <option value="amazon">Amazon</option>
                    <option value="bigcommerce">BigCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="none">None/Other</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="shopify">Shopify</option>
                    <option value="square">Square</option>
                    <option value="squarespace">Squarespace</option>
                    <option value="tiktok">TikTok</option>
                    <option value="walmart">Walmart</option>
                    <option value="wix">Wix</option>
                    <option value="woocommerce">WooCommerce</option>
                  </select>
                  <select id="platform" value={selectedValue} onChange={handleChange} className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2">
                    <option value="" className="text-gray-500">Current Monthly Shipment</option>
                    <option value="amazon">Amazon</option>
                    <option value="bigcommerce">BigCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="none">None/Other</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="shopify">Shopify</option>
                    <option value="square">Square</option>
                    <option value="squarespace">Squarespace</option>
                    <option value="tiktok">TikTok</option>
                    <option value="walmart">Walmart</option>
                    <option value="wix">Wix</option>
                    <option value="woocommerce">WooCommerce</option>
                  </select>
                </div>

                <div className="flex justify-between items-center gap-x-4 mt-[1rem] flex-wrap">
                  <input type="text" name="" id="" className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2" placeholder="Phone" />
                  <input type="text" name="" id="" className="border border-[#E2E1EA] min-w-[100%] lg:min-w-[16rem] min-h-[4rem] rounded-md px-4 mb-2" placeholder="Company Webiste" />
                </div>

                <div className="mt-3">
                  <ReCAPTCHA sitekey={"https://staging.vizii.com/#/"} />
                </div>

                <input type="submit" value="Contact Us" className="bg-[#2F6DFF] text-white w-[10rem] h-[3.5rem] rounded-3xl font-bold mt-[2rem]" />


              </form>
            </div>


          </div>

        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
