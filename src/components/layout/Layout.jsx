import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';
import { trackPageview } from '../../analytics/ga';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    trackPageview(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
