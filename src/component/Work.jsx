import React from "react";

import coffee from "../assets/coffee2.jpg";

const Work = () => {
  const work = [
    {
      id: 1,
      src: "/taskManagementAdmin.png",
      demo: "https://task-management-app-frontend-eta.vercel.app/",
      code: "https://github.com/Tomiogunsan/task-management-app-frontend",
    },
    {
      id: 2,
      src: "/productPage.png",
      demo: "https://product-page-green-ten.vercel.app/",
      code: "https://github.com/Tomiogunsan/product-page",
    },
    {
      id: 3,
      src: "/verificationPin.png",
      demo: "https://www.npmjs.com/package/input-token",
      code: "https://github.com/Tomiogunsan/TokenInput",
    },

    {
      id: 4,
      src: coffee,
      demo: "https://sparkly-taffy-84748f.netlify.app",
      code: "https://github.com/Tomiogunsan/MockUpCoffee",
    },

    {
      id: 5,
      src: "/taskManagement.png",
      demo: "https://task-management-app-frontend-eta.vercel.app/",
      code: "https://github.com/Tomiogunsan/task-management-app-frontend",
    },
  ];
  return (
    <div
      name="work"
      className="bg-[#18191b] text-[#f4f4f4] w-full md:h-screen "
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#f1b007]">
            Work
          </p>
          <p className="py-6">Checkout some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-col-3 gap-8 px-12 sm:px-0 ">
          {/* grid item */}

          {work.map((item) => (
            <div key={item.id} className="shadow-md shadow-[#001] rounded-lg  ">
              <img
                src={item.src}
                alt="/"
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={item.demo} target="_blank" rel="noreferrer">
                  <button className="w-[65%] px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text-center hover:bg-yellow-600">
                    Demo
                  </button>
                </a>
                {item.id !== 4 && (
                  <a href={item.code} target="_blank" rel="noreferrer">
                    <button className="w-[65%] px-6 py-3 m-4 duration-200 hover:scale-105 font-bold hover:bg-yellow-600 ">
                      Code
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
