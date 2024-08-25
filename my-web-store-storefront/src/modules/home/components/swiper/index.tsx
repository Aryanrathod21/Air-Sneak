"use client"

import women from "../../../../../public/woman.png";
import women1 from "../../../../../public/woman2.png";
import man from "../../../../../public/man.png";
import man1 from "../../../../../public/man1.png";
1
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

import "./swiper.css";
import Testimonial from "../testimonial";

export default function Slider() {
  return (
    <Swiper
      scrollbar={{ hide: true }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Testimonial imageSrc={women.src}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc={man.src}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc={women1.src}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc={man1.src}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
    </Swiper>
  );
}
