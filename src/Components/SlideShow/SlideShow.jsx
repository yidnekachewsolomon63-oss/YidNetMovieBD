import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "../MovieCard/MovieCard";

import styles from "./SlideShow.module.css";


function SlideShow({ title, movies }) {

  if (!movies || movies.length === 0) {
    return null;
  }


  return (

    <section className={styles.slideSection}>

      <h2 className={styles.sectionTitle}>
        {title}
      </h2>


      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={10}
        slidesPerView={5.8}
        className={styles.swiper}
      >

        {movies.map((movie) => (

          <SwiperSlide
            key={movie.id}
            className={styles.swiperSlide}
          >

            <MovieCard
              movie={movie}
            />

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );
}


export default SlideShow;