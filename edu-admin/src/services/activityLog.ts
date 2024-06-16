import { IUser } from '@/interface/IUser';
import { get } from '@/services/axios';

// export const getActivityLog = async (page = '') => {
//   const res = await get(`admin/activity/fetch${page}`, {
//     headers: {
//       'Content-Type': 'application / json',
//     },
//     withCredentials: true,
//   });
//   return res;
// };

export const getActivityLog = async (): Promise<IUser> => {
  const res = await get<{ user: IUser }>(`user/info`, {
    headers: {
      'Content-Type': 'application / json',
    },
    withCredentials: true,
  });
  return res.user;
};
