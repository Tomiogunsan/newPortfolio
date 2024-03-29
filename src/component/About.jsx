import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#18191b] text-[#f4f4f4]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4  border-[#f1b007]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Tomi, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              {" "}
              Tomi is a skilled, consistent and professional Software Engineer
              with professional knowledge of maintaining, organizing,
              implementing and developing information systems and software for
              human resource, and financial operations. Has experience of
              customer service in a high-tech environment. Possess a good team
              spirit, deadline orientated and has the ability to organize and
              present complex solutions clearly and accurately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
