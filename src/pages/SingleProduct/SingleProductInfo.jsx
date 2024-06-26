import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProductInfo = () => {
  const { id } = useParams();
  console.log(id);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setSingleProduct(data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [id]);
  return (
    <>
      <section className="text-gray-600 body-font">
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
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt={singleProduct?.title}
            src={singleProduct?.image}
          />
          <div className="text-center lg:w-2/3 w-full">
            <p className="font-mono">{singleProduct?.category}</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {singleProduct?.title}
            </h1>
            <p className="mb-8 leading-relaxed">{singleProduct?.description}</p>
            <div className="flex justify-center">
              <p className="font-mono text-orange-500">
                {singleProduct?.rating?.rate} Reviews
              </p>
              <p className="font-mono ms-5">
                {" "}
                Count: {singleProduct?.rating?.count}
              </p>
            </div>
          </div>
          <Link
            to="/products"
            className="flex justify-center items-center text-indigo-600 hover:text-indigo-900 border-b-2 border-b-indigo-500 font-mono font-medium m-2"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            Go back to products
          </Link>
        </div>
      </section>
    </>
  );
};

export default SingleProductInfo;
