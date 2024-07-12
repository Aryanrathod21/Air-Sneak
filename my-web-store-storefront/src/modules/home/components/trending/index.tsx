"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type Props = {
    className: string;
};

const Trending = (props: Props) => {
    // Array of image URLs (replace with your actual image URLs)
    const imageUrls = [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fc6a13d-7526-4cd8-9327-26cff85c9b28/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26c4acd1-385f-48fe-b4c0-8e573671e530/dunk-low-retro-shoe-66RGqF.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ebdc8f36-bb8d-44f0-ade5-9b676a54d197/jumpman-mvp-shoes-JV1HCs.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-shoes-VWCc04.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a34bf01a-65c2-4d50-94b7-8baff33bbe38/air-zoom-infinity-tour-nrg-golf-shoes-KjbRB7.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8866e5f-5749-4047-ad10-f5f5262a28a1/mercurial-vapor-15-elite-fg-low-top-football-boot-nt9B0G.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f03bbe0f-9863-417e-a7db-085f7f844b82/phantom-luna-2-elite-fg-high-top-football-boot-kvD5sX.png'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
        }, 2000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [imageUrls.length]);

    return (
        <section className='xl:border-4 lg:border-4 md:border-2 sm:border-2 border-2 border-green-600 grid grid-cols-5 h-fit w-full text-black rounded-lg'>
            <div className='col-span-3 flex justify-center items-center bg-[url("https://www.transparenttextures.com/patterns/asfalt-dark.png")] bg-cover bg-center relative'>
                <div className='text-center'>
                    <p className='text-black xl:text-9xl lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-extrabold'>
                        Hot<br />Trending
                    </p>
                </div>
            </div>
            <div className='col-span-2 relative flex justify-center items-center overflow-visible'>
                <Link href="/store">
                    <div className='h-full bg-gray-200 rounded-lg overflow-visible w-full relative'>
                        <img src={imageUrls[currentImageIndex]} alt='Sample Image' className='object-cover h-full w-full' />
                        <div className='absolute top-0 right-0 transform xl:translate-x-[20%] xl:-translate-y-[20%] lg:translate-x-[20%] lg:-translate-y-[20%] md:translate-x-[20%] md:-translate-y-[20%] sm:translate-x-[25%] sm:-translate-y-[25%] translate-x-[35%] -translate-y-[55%] bg-yellow-500 text-black xl:font-extrabold lg:font-extrabold md:font-extrabold sm:font-extrabold font-normal xl:text-3xl lg:text-3xl md:text-xl sm:text-lg text-sm rounded-full xl:px-6 xl:py-20 lg:px-6 lg:py-20 md:px-2 md:py-10 sm:px-4 sm:py-10 px-2 py-6'>
                            Trending
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Trending;
