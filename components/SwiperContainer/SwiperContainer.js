import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SwiperContainer.module.css";
import { v4 as uuidv4 } from "uuid";

SwiperCore.use([Navigation, EffectCoverflow]);

export default function SwiperContainer(props) {
  var swiperRef = useRef();

  const [children, setChildren] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let tempChildren = [];
    props.children.forEach((child) => {
      tempChildren.push({ id: uuidv4(), child });
    });
    setChildren(tempChildren);
  }, [props.children]);

  return (
    <div className={styles.main}>
      <Swiper
        // navigation={{
        //     prevEl: ".W_SliderButton.prev",
        //     nextEl: ".W_SliderButton.next"
        // }}
        // pagination
        centeredSlidesBounds={true}
        loop={false}
        speed={1000}
        centeredSlides={true}
        edgeSwipeThreshold={2}
        spaceBetween={10}
        slidesPerView={1}
        onSliderFirstMove={function (e) {
          // console.log("slide transition start");
        }.bind(this)}
        onSlideChangeTransitionEnd={function (e) {
          //   // console.log("page", this.props.currentPage)
        }.bind(this)}
        onSlideChange={function (e) {
          // console.log("slide change", e);
          setActiveIndex(e.activeIndex);
        }.bind(this)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 80,
          slideShadows: false,
        }}
        className={styles.swiper}
      >
        {children &&
          children.map((child) => {
            return (
              <SwiperSlide key={child.id} className={styles.slide}>
                {" "}
                {React.cloneElement(child.child, {
                  parentViewport: swiperRef,
                  visibilitySensorReveal: props.visibilitySensorReveal,
                })}
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div className={styles.radioWrapper}>
        {children &&
          children.map((child, index) => {
            return (
              <button
                className={[styles.radio, activeIndex === index && styles.selected].join(" ")}
                onClick={() => {
                  try {
                    swiperRef.current.slideTo(index);
                  } catch (err) {
                    console.log("err", err);
                  }
                }}
              ></button>
            );
          })}
      </div>
    </div>
  );
}
