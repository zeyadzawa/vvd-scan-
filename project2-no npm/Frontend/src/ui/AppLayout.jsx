import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="flex h-screen flex-col px-5 mix-blend-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
