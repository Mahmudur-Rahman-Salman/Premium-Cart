// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import headphone from "../assets/Image/headphones.avif";
import camera from "../assets/Image/camerapic.avif";
import glass from "../assets/Image/slider-bg.jpg";

const Slider = () => {
  return (
    <div className="bg-base-200">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        classNameName="mySwiper"
      >
        <SwiperSlide>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Discover Your Perfect
                  <br className="hidden lg:inline-block" />
                  <span className="text-orange-500">Shopping Experience</span>
                </h1>
                <p className="mb-8 leading-relaxed">
                  Explore endless possibilities and find what you&apos;ve been
                  searching for.Unlock a world of convenience and choice. Your
                  satisfaction is our priority,crafted with care in every
                  detail.
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded-full"
                  alt="hero"
                  src={headphone}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Dive into a World of Convenience
                  <br className="hidden lg:inline-block" /> with Our
                  <span className="text-orange-500">
                    {" "}
                    One-Stop Online Shop!
                  </span>
                </h1>
                <p className="mb-8 leading-relaxed">
                  Shop Smarter, Faster, and Easier – Where Quality Meets
                  Affordability, and Convenience Meets Choice!
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded-full"
                  alt="hero"
                  src={camera}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Discover Unmatched Deals
                  <br className="hidden lg:inline-block" />
                  and Delights at Our
                  <span className="text-orange-500">
                    {" "}
                    E-commerce Wonderland!
                  </span>
                </h1>
                <p className="mb-8 leading-relaxed">
                  Your Ultimate Destination for Premium Products, Unbeatable
                  Prices, and Seamless Shopping Experiences!
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded-full"
                  alt="hero"
                  src={glass}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
