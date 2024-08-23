// components/Slider.js

'use client'; // Required for client-side rendering in Next.js 13+ with the app directory structure

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import './swiper.css';

export default function Slider() {
  return (
    <Swiper
      scrollbar={{ hide: true }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
