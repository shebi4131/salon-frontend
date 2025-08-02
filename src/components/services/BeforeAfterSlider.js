import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/beforeAfter.css';

const BeforeAfterSlider = () => {
  const slides = [
    {
      before: '/images/services/bridal.jpg',
      after: '/images/services/facial.jpg',
      label: 'Facial Glow Treatment',
    },
    {
      before: '/images/services/bridal.jpg',
      after: '/images/services/facial.jpg',
      label: 'Bridal Makeover',
    },
    {
      before: '/images/services/bridal.jpg',
      after: '/images/services/hair.jpg',
      label: 'Skin Clean Up',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="before-after-section container my-5">
      <h2 className="text-center mb-4 ">Before & After Transformations</h2>
 <p className="section-subtitle">Pamper yourself with our expert beauty solutions.</p>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        onSlideChange={(swiper) => {
          // Swiper.realIndex gets actual index in loop mode
          setActiveIndex(swiper.realIndex);
        }}
        className="before-after-swiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-wrapper">
              <div className="image-pair">
                <img src={item.before} alt="" className="before-image" />
                <img src={item.after} alt="" className="after-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Caption outside of Swiper */}
      <p className="caption text-center mt-3 text-secondary fs-5">
        {slides[activeIndex].label}
      </p>
    </section>
  );
};

export default BeforeAfterSlider;
