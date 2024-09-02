import React from 'react';
import Image from 'next/image';

function Solution() {
    const features = [
        {
            icon: '/images/Solution/product-sec10-1.svg', // Replace with the correct path to your icon
            title: 'Solutions for your unique needs',
            description:
                'ShipBob can accommodate your business if you require additional services such as kitting, B2B orders, international fulfillment, and much more.',
        },
        {
            icon: '/images/Solution/product-sec10-2.svg', // Replace with the correct path to your icon
            title: 'A scalable partner as you grow',
            description:
                'From helping you grow to supporting your growth, ShipBob makes it easy to increase revenue, reduce cart abandonment, and expand domestically or internationally.',
        },
        {
            icon: '/images/Solution/product-sec10-3.svg', // Replace with the correct path to your icon
            title: 'World-class support',
            description:
                'You get fast support from the same people who are familiar with your unique needs. We also have on-site reps at each location to help troubleshoot any issues that arise.',
        },
    ];

    return (
        <section className="bg-[#F8F8FC] overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    More than just picking, packing, <br />and shipping
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center  mx-auto px-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-[#F8F8FC] p-8 "
                        >
                            <div className="flex flex-col items-center">
                                <Image src={feature.icon} width={48} height={48} alt={feature.title} />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-[#5d5d66]">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-base text-[#727285]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Solution;
