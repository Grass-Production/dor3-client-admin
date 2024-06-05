import { NavLink, Outlet } from 'react-router-dom';
import { Header } from '@/layouts/MainLayout/component/Header';
const MainLayout = (): JSX.Element => {
  return (
    <>
      <h1>Header</h1>
      <Header />
      <NavLink to="/accounts">acctount</NavLink>
      <NavLink to="/feedbacks">feedback</NavLink>
      <Outlet />
    </>
  );
};

export default MainLayout;
