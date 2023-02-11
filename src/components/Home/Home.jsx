import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Container, MoviesList } from '../Layout/Styles';
import { trendingmoviesRequest } from "../../api/api";

const Home = () => {
  const [moviesTrand, setMoviesTrend] = useState([]);

  useEffect(() => {
    (async function trendingMovies() {
      const res = await trendingmoviesRequest();
      const movies = res.data.results;
      if (movies) {
        setMoviesTrend(movies);
      }
    })();

    return () => {
      //
    };
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      <MoviesList>
        {moviesTrand.map(({ id, name, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>
              {title} {name}
            </Link>
          </li>
        ))}
      </MoviesList>
    </Container>
  );
};

export default Home;