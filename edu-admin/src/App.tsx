import { MainLayout, RouterHandler } from '@/layouts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routerlist from '@/constants/routes';

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
    path: '/',
    element: <RouterHandler />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        element: <MainLayout />,
        children: RouterList,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
