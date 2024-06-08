import { decrement } from '@/redux/slice/counterSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className=" text-primary-text text-3xl font-bold">Dashboard</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Dashboard;
