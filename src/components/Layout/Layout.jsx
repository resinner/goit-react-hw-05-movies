import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Container} from './Styles';

export const Layout = () => {
  return (
    <>
        <Header />
        <Container>
        <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
