import { decrement } from '@/redux/slice/counterSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const Dashboard = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value);
  const { t } = useTranslation('mainLayout');
  const dispatch = useDispatch();
  const notify = () => toast.success('Here is your toast.');
  return (
    <>
      <h1 className=" text-primary-text text-3xl font-bold">{t('sidebar.Dashboard')}</h1>
      <h1>Count : {count}</h1>

      <button onClick={notify}>Make me a toast</button>

      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Dashboard;
