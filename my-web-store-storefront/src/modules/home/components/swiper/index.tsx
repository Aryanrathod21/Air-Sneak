"use client"

import women from "../../../../../public/woman.png"
import women1 from "../../../../../public/woman2.png"
import man from "../../../../../public/man.png"
import man1 from "../../../../../public/man1.png"
1
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar } from "swiper/modules"

import "./swiper.css"
import Testimonial from "../testimonial"

export default function Slider() {
  return (
    <Swiper
      scrollbar={{ hide: true }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Testimonial imageSrc={women.src} userName="Robin">
          "Air Sneak shoes are a perfect blend of fashion and functionality. The
          cushioned sole and supportive fit make them ideal for both exercise
          and daily use. I appreciate the attention to detail in the design,
          making them both stylish and practical. A great choice for any shoe
          lover!"
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc={man.src} userName="Roronoa Zoro">
          "Air Sneak shoes are exceptional for both comfort and style. The
          cushioning is perfect for long runs, and the sleek design looks great
          with any outfit. I appreciate the supportive fit, which keeps my feet
          feeling fresh all day. Highly recommended for anyone in need of a
          reliable, stylish shoe."
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc={women1.src} userName="Megan Fox">
          "Air Sneak shoes are a game-changer for my daily workouts. The fit is
          perfect, providing excellent support without feeling restrictive. I
          love the modern design that goes well with both workout gear and
          casual outfits. Definitely a great investment for both style and
          comfort!"
        </Testimonial>
      </SwiperSlide>
      <SwiperSlide>
        <Testimonial imageSrc={man1.src} userName="Vinsmoke Sanji">
          "I’m really impressed with my Air Sneak shoes. They offer great
          support and are surprisingly lightweight, making them ideal for
          various activities. The modern design adds a touch of flair to my
          casual wardrobe. These shoes combine functionality and style
          perfectly. Definitely worth the investment!"
        </Testimonial>
      </SwiperSlide>
    </Swiper>
  )
}
