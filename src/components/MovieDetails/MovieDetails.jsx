import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';

import {
  Container,
  MoreInfoLink,
  MoreInfoList,
  Box,
  GoBack,
} from '../Layout/Styles';
import { movieInfoRequest } from '../../api/api';
import { AboutMovie } from '../AboutMovie/AboutMovie';
// import { EventsLoader } from 'components/Loader';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
    const { movieId } = useParams();
      const location = useLocation();
      const backLinkHref = useRef(location.state?.from);
    const [isLoading, setIsLoading] = useState(true);
    // const navigate = useNavigate();


    // console.log(movieId);
    
    useEffect(() => {
      if (!movieId) {
        return;
      }

      (async function aboutMovie() {
        const res = await movieInfoRequest(movieId);
        if (res.data.length === 0) {
          return;
        }
        setMovieInfo(res.data);
        setIsLoading(false);
      })();

      return () => {
        // second
      };
    }, [movieId]);

   return (
     <Container>
       <GoBack to={backLinkHref.current ?? '/'}>
         <HiChevronLeft />
         Go back
       </GoBack>

       {/* <button onClick={() => navigate(-1)}>Go back</button> */}

       {/* {isLoading && <EventsLoader />} */}
       {!isLoading && <AboutMovie movieInfo={movieInfo} />}

       <Box>
         <p>Additional information</p>
         <MoreInfoList>
           <li>
             <MoreInfoLink to={'cast'}>Cast</MoreInfoLink>
           </li>
           <li>
             <MoreInfoLink to={'reviews'}>Reviews</MoreInfoLink>
           </li>
         </MoreInfoList>
       </Box>

       <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
       </Suspense>
     </Container>
   );
};