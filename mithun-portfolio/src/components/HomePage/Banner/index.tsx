import React from 'react';

const BannerData = {
  Greetings: "Hi, I'm MithunBL 👋",
  Title: 'A passionate web developer who loves to build Creative as well as Interactive websites',
  Links: [
    { Text: 'My Work', TextUrl: 'https://paicon.com/' },
    { Text: 'About Me', TextUrl: 'https://terra-cms.irepo.in/myntra_life/' }
  ]
};

const HomeBanner = () => {
  return (
    <section className="text-center my-12 px-4 md:px-8">
      <div className="container">
        <div className="bg-background text-black-clr py-[100px] px-6 rounded-[50px] shadow-sm transition-all duration-300">
          <span className="text-[20px] font-medium leading-[1.1] inline-block bg-[#f8f2fd] text-black rounded-[50px] py-[10px] px-[20px]">
            {BannerData.Greetings}
          </span>
          <h2 className="text-3xl md:text-[48px] font-bold max-w-[900px] mx-auto my-6 leading-tight">
            {BannerData.Title}
          </h2>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {BannerData.Links.map((LinkItem, index) => (
              <a
                key={index}
                href={LinkItem.TextUrl}
                className={index === 0 ? 'btn_black' : 'btn_bdr'}
              >
                {LinkItem.Text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;