import { MainLayout, RouterHandler } from '@/layouts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routerlist from '@/constants/routes';
import { SignIn } from '@/pages';
import { NotFound } from '@/pages/NotFound';

const RouterList = routerlist.map((r) => {
  const Page = r.component;
  return {
    path: r.href,
    element: (
      <>
        <Page />
      </>
    ),
  };
});

export const router = createBrowserRouter([
  {
    element: <RouterHandler />,
    errorElement: <NotFound />,
    children: [
      {
        element: <MainLayout />,
        children: RouterList,
      },
      {
        path: '/login',
        element: <SignIn />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
