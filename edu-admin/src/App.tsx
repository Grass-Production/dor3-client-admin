import { MainLayout, RouterHandler } from '@/layouts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import routerlist from '@/constants/routes';
import { SignIn } from '@/pages';
import { NotFound } from '@/pages/NotFound';
import { Toaster } from 'react-hot-toast';

export const RouterList = routerlist.map((r) => {
  const Page = r.component;
  return {
    path: r.href,
    element: (
      <>
        <Page />
        <Toaster position="top-center" reverseOrder={false} />
      </>
    ),
  };
});

// export const router = createBrowserRouter([
//   {
//     element: <RouterHandler />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         element: {isLogin ? <MainLayout /> : <SignIn />},
//         children: RouterList,
//       },
//       {
//         path: '/login',
//         element: <SignIn />,
//       },
//     ],
//   },
// ]);

function App(): JSX.Element {
  const isLogin = useSelector((state: RootState) => state.checkLogin.isLogin);
  console.log('isLogin :', isLogin);
  const router = createBrowserRouter([
    {
      element: <RouterHandler />,
      errorElement: <NotFound />,
      children: [
        {
          element: isLogin ? <MainLayout /> : <SignIn />,
          children: RouterList,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
