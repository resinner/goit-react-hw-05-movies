import { Route, Routes } from 'react-router-dom';
// import { Header } from './components/Header/Header';
import { Home } from 'components/Home/Home';
import { Layout } from 'components/Layout/Layout';
import { MoviesSearch } from 'components/Movies/MoviesSearch.js/MoviesSearch';
import { MovieDetails } from './components/MovieDetails/MovieDetails'
import { Cast } from './components/Cast/Cast'
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
