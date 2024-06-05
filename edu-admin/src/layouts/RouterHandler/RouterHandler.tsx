import { Helmet } from 'react-helmet';
import { useLocation, Outlet } from 'react-router-dom';
import { getRouteTitle } from '@/constants/routes';
import { useEffect, useState } from 'react';

const RouterHandler = (): JSX.Element => {
  const location = useLocation();
  const [title, setTitle] = useState<string>(() => getRouteTitle(location.pathname));

  useEffect(() => {
    setTitle(getRouteTitle(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>DOR3 | {title}</title>
      </Helmet>
      <Outlet />
    </>
  );
};
export default RouterHandler;
