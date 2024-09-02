import React from 'react';

function FulfillmentSteps() {
  return (
    <section className="bg-[#F8F8FC] overflow-hidden pb-10 pt-4 md:pt-4 xl:pb-10 xl:pt-4">
      <div className='mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0'>

        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-blue-600">READY, SET, SHIP</p>
          <h2 className="text-2xl font-bold text-gray-900">
            Streamlined fulfillment from your online store to your customer’s door
          </h2>
        </div>
        <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
          {/* Step 1: Remove the line from the left side */}
          <li className="flex w-full relative after:content-[''] after:w-full after:h-0.5 after:bg-blue-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-1/2">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-[#E7EEFF] border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">
                1
              </span>

              Connect your store and send us your products
            </div>
          </li>

          {/* Step 2 */}
          <li className="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-blue-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-[#E7EEFF] border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">
                2
              </span>
              We store your inventory securely in our fulfillment centers
            </div>
          </li>

          {/* Step 3 */}
          <li className="flex w-full relative text-gray-900 after:content-[''] after:w-full after:h-0.5 after:bg-blue-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-[#E7EEFF] border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-600 lg:w-10 lg:h-10">
                3
              </span>
              Your customer places an order on your store
            </div>
          </li>

          {/* Step 4: Remove the line from the right side */}
          <li className="flex w-full relative text-gray-900 before:content-[''] before:w-full before:h-0.5 before:bg-blue-600 before:inline-block before:absolute lg:before:top-5 before:top-3 before:right-1/2">
            <div className="block whitespace-nowrap z-10">
              <span className="w-6 h-6 bg-[#E7EEFF] border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-gray-600 lg:w-10 lg:h-10">
                4
              </span>
              We pick, pack, and ship the order to your customer fast
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default FulfillmentSteps;
