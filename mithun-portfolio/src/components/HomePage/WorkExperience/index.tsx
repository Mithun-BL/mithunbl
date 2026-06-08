import React from 'react';

const Work = () => {
  return (
    <section id="Experience" className="secPad px-4 md:px-8">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 pb-4">
          Education & Hands-On Experience in IT Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Education Column */}
          <div className="flex flex-col">
            <div className="group relative overflow-hidden z-0 p-8 rounded-[20px] border-[1.259px] border-[#DEE5F6] bg-white text-black transition-all duration-500 ease-in-out hover:shadow-[0_19px_25px_0_rgba(0,0,0,0.19)] mb-8">
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#f5f5f5] transition-all duration-[800ms] ease-in-out -z-10"></div>
              <span className="text-sm font-semibold opacity-60 mb-2 block">Sep 2016 - Oct 2020</span>
              <h5 className="text-lg font-bold mb-1 text-[#2f2f91]">Education - BE</h5>
              <h4 className="text-base font-semibold opacity-90 mb-3">
                Proudhadevaraya Institute of Technology <span className="block text-xs font-normal opacity-70 mt-1">Hosapete, Karnataka</span>
              </h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="group relative overflow-hidden z-0 p-8 rounded-[20px] border-[1.259px] border-[#DEE5F6] bg-white text-black transition-all duration-500 ease-in-out hover:shadow-[0_19px_25px_0_rgba(0,0,0,0.19)] mb-8">
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#f5f5f5] transition-all duration-[800ms] ease-in-out -z-10"></div>
              <span className="text-sm font-semibold opacity-60 mb-2 block">June 2014 - April 2016</span>
              <h5 className="text-lg font-bold mb-1 text-[#2f2f91]">Education - PUC</h5>
              <h4 className="text-base font-semibold opacity-90 mb-3">
                Ballari independent PU College [Best College], <span className="block text-xs font-normal opacity-70 mt-1">Ballari, Karnataka</span>
              </h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="group relative overflow-hidden z-0 p-8 rounded-[20px] border-[1.259px] border-[#DEE5F6] bg-white text-black transition-all duration-500 ease-in-out hover:shadow-[0_19px_25px_0_rgba(0,0,0,0.19)] mb-8">
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#f5f5f5] transition-all duration-[800ms] ease-in-out -z-10"></div>
              <span className="text-sm font-semibold opacity-60 mb-2 block">June 2013 - April 2014</span>
              <h5 className="text-lg font-bold mb-1 text-[#2f2f91]">Education - 10th / SSLC</h5>
              <h4 className="text-base font-semibold opacity-90 mb-3">
                St&apos; Marys High School, <span className="block text-xs font-normal opacity-70 mt-1">HD Kote - Mysore, Karnataka</span>
              </h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Experience Column */}
          <div className="flex flex-col">
            <div className="group relative overflow-hidden z-0 p-8 rounded-[20px] border-[1.259px] border-[#DEE5F6] bg-white text-black transition-all duration-500 ease-in-out hover:shadow-[0_19px_25px_0_rgba(0,0,0,0.19)] mb-8">
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#f5f5f5] transition-all duration-[800ms] ease-in-out -z-10"></div>
              <span className="text-sm font-semibold opacity-60 mb-2 block">June 2022 - Present</span>
              <h5 className="text-lg font-bold mb-1 text-[#2f2f91]">Software Engineer - III</h5>
              <h4 className="text-base font-semibold opacity-90 mb-3">
                Terralogic Software Solutions Pvt Ltd, <span className="block text-xs font-normal opacity-70 mt-1">Bangalore, Karnataka</span>
              </h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="group relative overflow-hidden z-0 p-8 rounded-[20px] border-[1.259px] border-[#DEE5F6] bg-white text-black transition-all duration-500 ease-in-out hover:shadow-[0_19px_25px_0_rgba(0,0,0,0.19)] mb-8">
              <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[#f5f5f5] transition-all duration-[800ms] ease-in-out -z-10"></div>
              <span className="text-sm font-semibold opacity-60 mb-2 block">June 2021 - May 2022</span>
              <h5 className="text-lg font-bold mb-1 text-[#2f2f91]">Junior Software Engineer</h5>
              <h4 className="text-base font-semibold opacity-90 mb-3">
                Codehive IT Solutions Pvt Ltd, <span className="block text-xs font-normal opacity-70 mt-1">Ballari, Karnataka</span>
              </h4>
              <p className="text-sm opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
