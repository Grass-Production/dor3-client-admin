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

export const getActivityLog = async () => {
  const res = await get(`user/info`, {
    headers: {
      'Content-Type': 'application / json',
    },
    withCredentials: true,
  });
  return res;
};
