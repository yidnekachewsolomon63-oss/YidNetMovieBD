import {
  FaCirclePlay,
} from "react-icons/fa6";

import {
  BsPlusCircle,
} from "react-icons/bs";

import {
  GoCheckCircleFill,
} from "react-icons/go";

import {
  IoIosArrowDropdownCircle,
} from "react-icons/io";

import styles from "./MovieCard.module.css";


const IMAGE_BASE_URL =
  "https://image.tmdb.org/t/p/w500";


function MovieCard({ movie }) {

  if (!movie) {
    return null;
  }


  return (

    <div className={styles.movieCard}>

      {/* =================================
          POSTER
      ================================= */}

      <div className={styles.posterContainer}>

        {movie.poster_path ? (

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={
              movie.title ||
              movie.name ||
              "Movie"
            }
            className={styles.poster}
          />

        ) : (

          <div className={styles.noImage}>
            No Image
          </div>

        )}

      </div>


      {/* =================================
          HOVER CARD
      ================================= */}

      <div className={styles.hoverCard}>

        {movie.poster_path && (

          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={
              movie.title ||
              movie.name ||
              "Movie"
            }
            className={styles.hoverImage}
          />

        )}


        {/* Image Fade */}

        <div className={styles.imageFade}></div>


        {/* =================================
            HOVER CONTENT
        ================================= */}

        <div className={styles.hoverContent}>

          {/* Badge */}

          <div className={styles.badge}>
            Recently added
          </div>


          {/* Title */}

          <h3 className={styles.movieTitle}>

            {movie.title ||
              movie.name}

          </h3>


          {/* =================================
              BUTTON ROW
          ================================= */}

          <div className={styles.buttonRow}>

            <div className={styles.leftButtons}>

              <button
                className={styles.iconButton}
                aria-label="Play"
              >
                <FaCirclePlay />
              </button>


              <button
                className={styles.iconButton}
                aria-label="Add to My List"
              >
                <BsPlusCircle />
              </button>


              <button
                className={styles.iconButton}
                aria-label="Added to My List"
              >
                <GoCheckCircleFill />
              </button>

            </div>


            <button
              className={styles.iconButton}
              aria-label="More information"
            >
              <IoIosArrowDropdownCircle />
            </button>

          </div>


          {/* =================================
              METADATA
          ================================= */}

          <div className={styles.metadataRow}>

            <span>
              {movie.adult ? "18+" : "U/A 13+"}
            </span>

            <span>
              {movie.media_type === "tv"
                ? "TV"
                : "Movie"}
            </span>

            <span>
              HD
            </span>

          </div>


          {/* =================================
              GENRES
          ================================= */}

          <div className={styles.genres}>

            <span>
              {movie.media_type === "tv"
                ? "Series"
                : "Movie"}
            </span>

            <span className={styles.dot}>
              •
            </span>

            <span>
              Netflix
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}


export default MovieCard;