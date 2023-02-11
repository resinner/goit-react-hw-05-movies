import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import {
  Container,
  GoBack,
} from '../Layout/Styles';


export const NotFound = () => {
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from);

  return (
    <Container>
      <GoBack to={backLinkHref.current ?? '/'}>
        <HiChevronLeft />
        Go back
      </GoBack>

          <h3 style={{ textAlign:"center" }}>This page not found, please enter a search term!</h3>
    </Container>
  );
};
