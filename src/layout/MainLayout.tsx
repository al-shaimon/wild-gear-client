import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import useBeforeUnload from '@/utils/RefreshPage';

const MainLayout = () => {
  useBeforeUnload('Are you sure you want to leave?');
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
