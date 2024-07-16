"use client";
import { Button } from '@medusajs/ui';
import Link from 'next/link';
import React from 'react';

const FeatureGrid = () => {
  const items = [
    { id: 1, title: 'Football', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fc6a13d-7526-4cd8-9327-26cff85c9b28/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png', count: 1 },
    { id: 2, title: 'Jordons', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ebdc8f36-bb8d-44f0-ade5-9b676a54d197/jumpman-mvp-shoes-JV1HCs.png', count: 6 },
    { id: 3, title: 'Sneaker', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-shoes-VWCc04.png', count: 1 },
    { id: 4, title: 'Casuals', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a34bf01a-65c2-4d50-94b7-8baff33bbe38/air-zoom-infinity-tour-nrg-golf-shoes-KjbRB7.png', count: 9 },
  ];

  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden rounded-lg">
          <div className="w-full h-full transition-transform duration-300 transform hover:scale-110">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-75 rounded-lg">
            <Link href="/store"><Button className="text-center font-semibold">
              {item.title} ({item.count})
            </Button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
