import bannerImage from "../../assets/images/banner/home-banner.png";

const Banner = () => {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-sky-50 pt-38 pb-10 md:pb-0 pl-2 md:pl-0 md:pr-0">
      <div className="mx-auto max-w-330 grid grid-cols-12 gap-7 xl:gap-15 items-center">
        <div className="col-span-full md:col-span-6 md:px-2 xl:px-0">
          <h1 className="font-extrabold text-[38px] xl:text-[80px] leading-[125%]">
            One Step Closer To Your{" "}
            <span className="gradient-text">Dream Job</span>
          </h1>
          <p className="text-lg text-dark-3 font-medium mt-6 xl:pr-26.25">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a className="btn bg-linear-90 from-blue-500 to-violet-500 font-medium xl:font-bold text-sm xl:text-xl text-white px-5.5 xl:px-5.75 py-6 xl:py-[31.5px] rounded-lg hover:bg-linear-180 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-300 mt-8">
            Get Started
          </a>
        </div>
        <div className="hidden md:block col-span-6">
          <img src={bannerImage} alt="Banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
