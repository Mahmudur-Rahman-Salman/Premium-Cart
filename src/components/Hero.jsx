import { Link } from "react-router-dom";
import heroLogo from "../assets/Image/hero-logo.png";

const Hero = () => {
  return (
    <>
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img src={heroLogo} className="max-w-sm rounded-lg shadow-2xl object-cover w-2/3" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Discover Your Perfect <br /> Shopping Experience
            </h1>
            <p className="py-6">
              Explore endless possibilities and find what you&apos;ve been
              searching for. <br /> Unlock a world of convenience and choice.
              Your satisfaction is our priority,<br /> crafted with care in every
              detail.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      <section className="bg-base-200 min-h-screen">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 overflow-hidden grid grid-cols-1 lg:grid-cols-2 md:px-8 justify-items-center">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl mt-10 sm:mt-10 lg:mt-20">
            <h1 className="text-3xl text-gray-800 font-extrabold lg:text-4xl">
              Discover Your Perfect <br /> <span className="text-orange-500">Shopping Experience</span> 
            </h1>
            <p>
              Explore endless possibilities and find what you&apos;ve been
              searching for.Unlock a world of convenience and choice.
              Your satisfaction is our priority,crafted with care in every detail.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                href="#"
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Let&apos;s get started
              </Link>
            </div>
          </div>
          <div className="mt-14 md:mt-0 md:max-w-xl lg:mt-10">
            <img
              src={heroLogo}
              className="w-full animate__animated animate__slideInLeft animate__slower"
              alt="about us image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
