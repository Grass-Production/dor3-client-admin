import { Helmet } from 'react-helmet';
import { useLocation, Outlet } from 'react-router-dom';
import { getRouteTitle } from '@/constants/routes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const RouterHandler = (): JSX.Element => {
  const location = useLocation();
  const [title, setTitle] = useState<string>(() => getRouteTitle(location.pathname));
  const { t } = useTranslation('mainLayout');
  useEffect(() => {
    setTitle(getRouteTitle(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>DOR3 | {t(`sidebar.${title}`)}</title>
      </Helmet>
      <Outlet />
    </>
  );
};
export default RouterHandler;
