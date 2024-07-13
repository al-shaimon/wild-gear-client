import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import useBeforeUnload from '@/utils/RefreshPage';
import { useEffect } from 'react';

const MainLayout = () => {
  useBeforeUnload('Are you sure you want to leave?');

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
