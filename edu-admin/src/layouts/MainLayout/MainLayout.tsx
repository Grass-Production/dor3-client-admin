import { NavLink, Outlet } from 'react-router-dom';
// import { Header } from '@/layouts/MainLayout/component/Header';
import { Header, Sidebar } from '@/layouts/MainLayout/component';
const MainLayout = (): JSX.Element => {
  return (
    <>
      <div className=" flex min-h-screen max-w-[100vw] flex-col font-font">
        <Header />
        <div className="page-content ">
          <div className="relative flex w-full">
            <Sidebar />
            <div className="w-[calc(100%-304px)] flex-auto rounded-lg bg-background p-[45px] ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" mt-[var(--headerHeight)]">
        <NavLink to="/accounts">acctount</NavLink>
        <NavLink to="/feedbacks">feedback</NavLink>
      </div> */}
    </>
  );
};

export default MainLayout;
