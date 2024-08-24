import React from 'react';

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="flex justify-center items-center xl:px-12 lg:px-6 md:px-4 sm:px-0 py-12">
      <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
        {/* Circle Image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="mt-4 text-gray-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
