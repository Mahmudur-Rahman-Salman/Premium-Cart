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
                  <li
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
                      <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                        {item.description}
                      </p>
                      <h5 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                        Price: {item.price}
                      </h5>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Button
                    </button>
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
