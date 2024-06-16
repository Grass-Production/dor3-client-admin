import { getActivityLog } from '@/services/activityLog';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Toaster, toast } from 'react-hot-toast';
import { refreshtoken } from '@/services/loginApi';

const ActivityLog = (): JSX.Element => {
  useEffect(() => {
    GetActivityLog();
  }, []);

  const isToast = useSelector((state: RootState) => state.toast.value);
  // const notify = () => toast.error('Please Login');

  //  if (isToast) {
  //    toast.error('Please Login');
  // }

  const GetActivityLog = async () => {
    const res = await getActivityLog();
    console.log(res);
  };

  const Refreshtoken = async () => {
    const res = await refreshtoken();
    console.log(res);
  };

  return (
    <>
      <h1 className=" text-primary-text text-3xl font-bold">ActivityLog</h1>
      {isToast && <h1 className=" text-primary-text text-3xl font-bold">ActivityLog</h1>}
      <div>
        <button onClick={refreshtoken}>Refreshtoken</button>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </>
  );
};

export default ActivityLog;
