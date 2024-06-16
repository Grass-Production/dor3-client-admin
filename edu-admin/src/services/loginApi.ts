import { isLoggedIn } from '@/redux/slice/checkLoginSlice';
import { post, get } from '@/services/axios';
import { store } from '@/redux/store';
// export const login = async (newdata) => {
//   const res = await post('login/admin', newdata, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     withCredentials: true,
//   });
//   console.log(res);
//   return res;
// };

export const login = async (newdata) => {
  const dispatch = store.dispatch;
  const res = await post('login/user', newdata, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  dispatch(isLoggedIn());

  console.log(res);
  return res;
};

export const refreshtoken = async () => {
  const res = await get(`user/refresh`, {
    headers: {
      'Content-Type': 'application / json',
    },
    withCredentials: true,
  });
  return res;
};
