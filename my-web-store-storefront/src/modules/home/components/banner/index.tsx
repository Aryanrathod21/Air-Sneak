import React from 'react';

type Props = {};

const Banner = (props: Props) => {
  return (
<div className="relative h-64 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/zorop.png')", backgroundColor: '#000' }}>
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Our Site</h1>
        <p className="mt-2 text-sm md:text-lg">Discover amazing content</p>
      </div>
    </div>
  );
}

export default Banner;
