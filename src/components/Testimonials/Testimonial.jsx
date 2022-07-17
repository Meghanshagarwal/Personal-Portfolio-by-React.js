import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile5.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " He communicated with me throughout the entire process and delivered the product quickly and efficiently within the given timeline. I submitted Xd files to follow and the final product was delivered exactly how the design was sent. I was continually updated and kept in the loop, I could not recommend Saddam enough I am very impressed with the service and quality of work!",
    },
    {
      img: profilePic2,
      review:
        "Meghansh helped me build react front end for the application I am building. Even without design, he managed to deliver the work within the timeframe he promised. Communication with him was quite smooth and he kept me in loop at every stage of the product delivery. Being a software developer myself I am satisfied with the code quality he has delivered. I would work with him again and also recommend him for the frontend development.",
    },
    {
      img: profilePic3,
      review:
        "Overall positive experience. Will recommend! He had to edit existing code, it is not an easy project. We had to order more time to finish this phase of the project. To be continued, but I'd recommend him for sure!",
    },
    {
      img: profilePic4,
      review:
        "We are extremely lucky to have found Meghansh. He is basically a member of our team because our workflows go through him and he customizes how he delivers the code to work perfectly with our team.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper

        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
