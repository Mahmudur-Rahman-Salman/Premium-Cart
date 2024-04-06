import SectionTitle from "./SectionTitle";

import { useEffect, useState } from "react";

const FeatureProducts = () => {
  const [featureProducts, setFeatureProducts] = useState([]);

  // Fetching feature products data
  useEffect(() => {
    const featureProductsData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setFeatureProducts(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    featureProductsData();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <SectionTitle heading="Feature Products" />
        {/* <section>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {featureProducts.map((item, index) => {
                return (
                  <div
                    className="w-full mx-auto group sm:max-w-sm border-2 rounded-lg p-5"
                    key={index}
                  >
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.title}
                      className="border-b-2 object-contain h-56 w-96 p-2"
                    />
                    <div className="mt-3 space-y-2">
                      <span className="block text-indigo-600 text-sm">
                        {item.category}
                      </span>
                      <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                        {item.title}
                      </h3>

                      <h5 className="mt-4 text-gray-800 text-xl font-semibold">
                        Price: {item.price}
                      </h5>
                    </div>
                  </div>

                 
                );
              })}
            </div>
          </div>
        </section> */}

        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featureProducts.map((items, index) => (
              <div
                className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
                key={index}
              >
                <img
                  src={items.image}
                  loading="lazy"
                  alt={items.title}
                  className="border-b-2 object-contain h-56 w-96 p-2"
                />

                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h5 className="text-indigo-600 text-xs tracking-widest title-font mb-1">
                    {items.category}
                  </h5>
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
                <div className="flex justify-between p-4">
                  <h5 className=" text-gray-800 text-xl font-semibold">
                    Price: ${items.price}
                  </h5>
                  <button className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FeatureProducts;
