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
        <section>
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {featureProducts.map((item, index) => {
                return (
                  <li className="w-full mx-auto group sm:max-w-sm border-2 rounded-lg p-5" key={index}>
                    <a href={item.href}>
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
                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeatureProducts;
