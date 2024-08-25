"use client"

import women from "../../../../../public/woman.png";

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
        <Testimonial imageSrc="https://via.placeholder.com/100">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc="https://via.placeholder.com/100">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc="https://via.placeholder.com/100">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </Testimonial>
      </SwiperSlide>
    </Swiper>
  );
}
