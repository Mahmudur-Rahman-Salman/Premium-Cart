import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import cartIcon from "../../assets/Image/cart-icon.png";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <SectionTitle heading="All Products" />
        <p className="text-center font-bold">
          Explore a Diverse Collection of Items from the PremiumCart
        </p>
        <div className="container px-5 py-24 mx-auto">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 w-full text-center">
            {products.map((item, index) => (
              <div key={index} className=" p-4 w-full border-2 rounded-lg m-2 shadow-lg duration-300 hover:shadow-sm">
                {/* <Link to={item.id} item={item}> */}
                  <img
                    alt={item.title}
                    className="object-contain mx-auto h-56 w-96 p-2 block border-b-2"
                    src={item.image}
                  />
                {/* </Link> */}

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">Price: ${item.price}</p>

                  <span className="text-orange-500 ml-3 font-semibold">
                    {item.rating.rate} Reviews
                  </span>
                  <Link to={`/products/${item.id}`} item={item} ><p>Click here to see more... </p></Link>
                  <button className="flex items-center w-full justify-center mx-auto mt-3 gap-2 px-3 py-1.5 text-sm text-black duration-150 bg-slate-400 rounded-lg hover:bg-slate-500 hover:text-white ">
                    <img src={cartIcon} className="w-8 h-8" alt="cart icon" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
