import { Outlet } from 'react-router';

import { Footer } from './footer';
import { Navbar } from './Navbar';

const UnAuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="flex size-full flex-1 flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UnAuthLayout;
