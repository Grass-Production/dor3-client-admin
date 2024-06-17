import { Button, Checkbox, IconButton, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { IconGoogle } from '@/assets/svg';
import { login } from '@/services/loginApi';

const SignIn = (): JSX.Element => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleIsShowPass = () => {
    setIsShowPass(!isShowPass);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await login({ email: email, password: pass });
    console.log(res);
  };

  return (
    <>
      <div
        className="  !bg-blue w-full flex justify-center items-center h-screen"
        style={{ background: `url('src/assets/images/ShapeBackground.png')` }}>
        <div className=" bg-white rounded-3xl w-[39rem] px-14 py-14">
          <h1 className=" text-black text-3xl font-bold text-center mb-4">Login to Account</h1>
          <h1 className=" text-lg font-semibold text-black/80 text-center mb-9">
            Please enter your email and password to continue
          </h1>
          <div className=" flex justify-center mb-6">
            <Button
              sx={{ width: '50%', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              color="inherit"
              variant="text"
              className=" text-white"
              startIcon={<IconGoogle size="32" />}>
              Google
            </Button>
          </div>

          <form onSubmit={handleLogin}>
            <div className=" mb-10">
              <h1 className=" text-lg font-semibold text-black/80 mb-3">Email address</h1>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
                className="peer  outline-blue rounded-lg w-full p-4 border border-[#D8D8D8] bg-[#F1F4F9]"
                type="email"
                name=""
                id="email"
              />
            </div>
            <div className=" mb-6">
              <div className="flex justify-between items-center mb-3">
                <h1 className=" text-lg font-semibold text-black/80">Password</h1>
                <h1 className=" text-lg font-semibold text-black/60">Forget Password?</h1>
              </div>
              <div className=" flex justify-between items-center outline-blue rounded-lg w-full p-4 border border-[#D8D8D8] bg-[#F1F4F9]">
                <input
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                  placeholder="email"
                  className=" w-full outline-none"
                  type={isShowPass ? 'password' : 'text'}
                  name=""
                  id="pass"
                />
                <IconButton onClick={handleIsShowPass} sx={{ p: 0 }}>
                  {isShowPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </div>
            </div>
            <label className="flex items-center cursor-pointer mb-14">
              <Checkbox />
              <span className="text-lg font-semibold text-black/60 ml-2">Remember Password</span>
            </label>
            {/* <div className=" flex items-center mb-14">
              <Checkbox />
              <h1 className=" text-lg font-semibold text-black/60">Remember Password</h1>
            </div> */}

            <button type="submit" className=" bg-blue rounded-lg w-full py-4 font-bold text-white text-xl mb-5">
              Sign In
            </button>
            <h1 className=" text-center text-lg font-semibold text-black/60">
              Don’t have an account?{' '}
              <strong className=" font-bold text-lg text-[#5A8CFF] underline cursor-pointer">Create Account</strong>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
