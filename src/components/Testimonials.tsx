import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Testimonials.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="bg-p-black rounded-big">
        
        <SwiperSlide>
          <div>
            <div className="mySlide">
              <p className="text-p-white">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="square"></div>
            </div>
            <div className="pl-[80px] mt-10">
              <p className="text-p-green text-xl">John Smith</p>
              <p className="text-p-white text-xl">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="mySlide">
              <p className="text-p-white">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="square"></div>
            </div>
            <div className="pl-[80px] mt-10">
              <p className="text-p-green text-xl">John Smith</p>
              <p className="text-p-white text-xl">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="mySlide">
              <p className="text-p-white">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="square"></div>
            </div>
            <div className="pl-[80px] mt-10">
              <p className="text-p-green text-xl">John Smith</p>
              <p className="text-p-white text-xl">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="mySlide">
              <p className="text-p-white">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="square"></div>
            </div>
            <div className="pl-[80px] mt-10">
              <p className="text-p-green text-xl">John Smith</p>
              <p className="text-p-white text-xl">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="mySlide">
              <p className="text-p-white">
                "We have been working with Positivus for the past year and have
                seen a significant increase in website traffic and leads as a
                result of their efforts. The team is professional, responsive,
                and truly cares about the success of our business. We highly
                recommend Positivus to any company looking to grow their online
                presence."
              </p>
              <div className="square"></div>
            </div>
            <div className="pl-[80px] mt-10">
              <p className="text-p-green text-xl">John Smith</p>
              <p className="text-p-white text-xl">Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
