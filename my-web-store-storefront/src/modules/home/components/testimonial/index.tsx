import React, { ReactNode } from "react";

type Props = {
  imageSrc: string;
  userName: string;
  bgColor?: string;
  children?: ReactNode;
};

const Testimonial = ({ imageSrc, userName, bgColor = "bg-white", children }: Props) => {
  return (
    <div className="flex justify-center items-center xl:px-12 lg:px-6 md:px-4 sm:px-0 py-12">
      <div className={`relative ${bgColor} shadow-lg rounded-lg p-8 max-w-2xl w-full text-center`}>
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
          <img
            src={imageSrc}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
            style={{ width: "100px", height: "100px" }} // Added inline styles to enforce 100x100 size
          />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold">{userName}</h3>
          <p className="mt-4 text-gray-600 font-semibold">
            {children
              ? children
              : `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
