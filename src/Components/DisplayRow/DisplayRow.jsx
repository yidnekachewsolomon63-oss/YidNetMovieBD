import { useEffect, useState } from "react";

import movieInstance from "../../utility/movieInstance";
import requests from "../../utility/requesturl";

import SlideShow from "../SlideShow/SlideShow";

import styles from "./DisplayRow.module.css";


function DisplayRow() {

  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRatedMovies: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  });


  useEffect(() => {

    const fetchMovies = async () => {

      try {

        const [
          trending,
          netflixOriginals,
          topRatedMovies,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries,
        ] = await Promise.all([

          movieInstance.get(
            requests.fetchTrending
          ),

          movieInstance.get(
            requests.fetchNetflixOriginals
          ),

          movieInstance.get(
            requests.fetchTopRatedMovies
          ),

          movieInstance.get(
            requests.fetchActionMovies
          ),

          movieInstance.get(
            requests.fetchComedyMovies
          ),

          movieInstance.get(
            requests.fetchHorrorMovies
          ),

          movieInstance.get(
            requests.fetchRomanceMovies
          ),

          movieInstance.get(
            requests.fetchDocumentaries
          ),

        ]);


        setMovies({

          trending:
            trending.data?.results || [],

          netflixOriginals:
            netflixOriginals.data?.results || [],

          topRatedMovies:
            topRatedMovies.data?.results || [],

          actionMovies:
            actionMovies.data?.results || [],

          comedyMovies:
            comedyMovies.data?.results || [],

          horrorMovies:
            horrorMovies.data?.results || [],

          romanceMovies:
            romanceMovies.data?.results || [],

          documentaries:
            documentaries.data?.results || [],

        });

      } catch (error) {

        console.error(
          "Failed to fetch movies:",
          error
        );

      }

    };


    fetchMovies();

  }, []);


  return (

    <div className={styles.displayRow}>

      {/* =================================
          TRENDING
      ================================= */}

      <SlideShow
        title="Netflix Trending"
        movies={movies.trending}
      />


      {/* =================================
          NETFLIX ORIGINALS
      ================================= */}

      <SlideShow
        title="Netflix Originals"
        movies={movies.netflixOriginals}
      />


      {/* =================================
          TOP RATED
      ================================= */}

      <SlideShow
        title="Top Rated Movies"
        movies={movies.topRatedMovies}
      />


      {/* =================================
          ACTION
      ================================= */}

      <SlideShow
        title="Action Movies"
        movies={movies.actionMovies}
      />


      {/* =================================
          COMEDY
      ================================= */}

      <SlideShow
        title="Comedy Movies"
        movies={movies.comedyMovies}
      />


      {/* =================================
          HORROR
      ================================= */}

      <SlideShow
        title="Horror Movies"
        movies={movies.horrorMovies}
      />


      {/* =================================
          ROMANCE
      ================================= */}

      <SlideShow
        title="Romance Movies"
        movies={movies.romanceMovies}
      />


      {/* =================================
          DOCUMENTARIES
      ================================= */}

      <SlideShow
        title="Documentaries"
        movies={movies.documentaries}
      />

    </div>

  );
}


export default DisplayRow;