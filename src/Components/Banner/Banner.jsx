import {
  useEffect,
  useState,
} from "react";

import {
  Play,
  Info,
} from "lucide-react";

import movieInstance from "../../utility/movieInstance";

import requests from "../../utility/requesturl";

import styles from "./Banner.module.css";

import logo from "../../assets/image/logo.png";


const BANNER_BASE =
  "https://image.tmdb.org/t/p/original";


function Banner() {

  const [bannerImage, setBannerImage] =
    useState(null);


  /*
  =========================================
  TEXT TRUNCATION FUNCTION
  =========================================
  */

  const truncate = (text, length) => {

    if (!text) {
      return "";
    }

    if (text.length <= length) {
      return text;
    }

    return text.substring(0, length) + "...";
  };


  /*
  =========================================
  FETCH BANNER
  =========================================
  */

  useEffect(() => {

    const fetchBanner = async () => {

      try {

        const response =
          await movieInstance.get(
            requests.fetchNetflixOriginals
          );


        const results =
          response.data.results;


        /*
        Check whether movies exist
        */

        if (
          results &&
          results.length > 0
        ) {

          /*
          Select random movie
          */

          const randomIndex =
            Math.floor(
              Math.random() *
              results.length
            );


          /*
          Store selected movie
          */

          setBannerImage(
            results[randomIndex]
          );

        }

      } catch (error) {

        console.error(
          "Failed to fetch banner:",
          error
        );

      }

    };


    /*
    Execute function
    */

    fetchBanner();

  }, []);


  /*
  =========================================
  LOADING STATE
  =========================================
  */

  if (!bannerImage) {

    return (
      <div
        className={styles.banner}
      />
    );

  }


  /*
  =========================================
  DYNAMIC TITLE
  =========================================
  */

  const movieTitle =
    bannerImage.original_name ||
    bannerImage.original_title ||
    bannerImage.name ||
    bannerImage.title ||
    "Netflix Movie";


  /*
  =========================================
  DYNAMIC IMAGE
  =========================================
  */

  const backgroundImage =
    bannerImage.backdrop_path
      ? `${BANNER_BASE}${bannerImage.backdrop_path}`
      : null;


  return (

    <section
      className={styles.banner}
      style={
        backgroundImage
          ? {
              backgroundImage:
                `url("${backgroundImage}")`,
            }
          : {}
      }
    >

      {/* =================================
          DARK OVERLAY
      ================================= */}

      <div
        className={styles.overlay}
      />


      {/* =================================
          BOTTOM FADE
      ================================= */}

      <div
        className={styles.bottomFade}
      />


      {/* =================================
          BANNER CONTENT
      ================================= */}

      <div
        className={styles.content}
      >

        {/* =================================
            NETFLIX LOGO
        ================================= */}

        <img
          src={logo}
          alt="Netflix"
          className={styles.logo}
        />


        {/* =================================
            MOVIE TITLE
        ================================= */}

        <h1
          className={styles.title}
        >
          {movieTitle}
        </h1>


        {/* =================================
            MOVIE DESCRIPTION
        ================================= */}

        <p
          className={styles.description}
        >
          {truncate(
            bannerImage.overview,
            120
          )}
        </p>


        {/* =================================
            BUTTONS
        ================================= */}

        <div
          className={styles.buttons}
        >

          {/* =================================
              PLAY BUTTON
          ================================= */}

          <button
            className={styles.playButton}
          >

            <Play
              size={22}
              fill="currentColor"
            />

            <span>
              Play
            </span>

          </button>


          {/* =================================
              MORE INFO BUTTON
          ================================= */}

          <button
            className={styles.infoButton}
          >

            <Info
              size={22}
            />

            <span>
              More Info
            </span>

          </button>

        </div>

      </div>

    </section>

  );

}


export default Banner;