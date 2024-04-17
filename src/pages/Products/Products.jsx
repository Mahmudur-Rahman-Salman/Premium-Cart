import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import cartIcon from "../../assets/Image/cart-icon.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Firebase/Providers/useAuth";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (food) => {
    // console.log(food, user.email);
    if (user && user.email) {
      // send cart data to the database
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login atfirst to add the item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
         navigate("/login"); 
        }
      });
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <SectionTitle heading="All Products" />
        <p className="text-center font-bold">
          Explore a Diverse Collection of Items from the PremiumCart
        </p>
        {/* loading Spinner */}
        {loading && (
          <>
            <div className="text-center mt-5">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
        {error && (
          <div className="flex justify-center mt-5 ">
            <p className="text-red-600 text-center uppercase text-lg font-bold">
              {error}
            </p>
          </div>
        )}
        <div className="container px-5 py-24 mx-auto">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 w-full text-center">
            {products.map((item, index) => (
              <div
                key={index}
                className=" p-4 w-full border-2 rounded-lg m-2 shadow-lg duration-300 hover:shadow-sm"
              >
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
                  <Link to={`/products/${item.id}`} item={item}>
                    <p>Click here to see more... </p>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center w-full justify-center mx-auto mt-3 gap-2 px-3 py-1.5 text-sm text-black duration-150 bg-slate-400 rounded-lg hover:bg-slate-500 hover:text-white "
                  >
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
