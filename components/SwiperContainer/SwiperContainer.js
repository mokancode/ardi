import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import isEmpty from "../../utils/validation/is-empty";
import ReactVisibilitySensor from "react-visibility-sensor";
import StylesContext from "../../store/styles-context";

SwiperCore.use([Navigation, EffectCoverflow]);

export default function SwiperContainer(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "SwiperContainer")
    .styles;
  
  var swiperRef = useRef();

  const [children, setChildren] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showRadioButtons, setShowRadioButtons] = useState(false);

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
        {!isEmpty(children) &&
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

      <ReactVisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) setShowRadioButtons(true);
          // else setShowRadioButtons(false);
        }}
        // partialVisibility={true}
        offset={{ bottom: 30 }}
      >
        <div className={[styles.radioWrapper, showRadioButtons ? styles.show : undefined].join(" ")}>
          {!isEmpty(children) &&
            children.map((child, index) => {
              return (
                <button
                  key={`${child.id}_radiobtn`}
                  className={[styles.radio, activeIndex === index && styles.selected].join(" ")}
                  onClick={() => {
                    try {
                      swiperRef.current.slideTo(index);
                    } catch (err) {
                      // console.log("err", err);
                    }
                  }}
                ></button>
              );
            })}
        </div>
      </ReactVisibilitySensor>
    </div>
  );
}
