import { NavLink, useLocation } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import routerlist from '@/constants/routes';
import { IconButton } from '@mui/material';
export const Sidebar = (): JSX.Element => {
  const [index, setIndex] = useState(null);
  const [isExpand, setIsExpand] = useState(true);

  const location = useLocation();

  const handleIsActive = (i) => {
    setIndex(i);
  };

  const handleIsExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    // h-[var(--sidebarHeight)]
    <>
      {/* <div className=" pt-2 w-60 bg-primary-color sticky top-[var(--headerHeight)] left-0 h-[var(--sidebarHeight)] col-span-1 ">
        <div className=" flex flex-col">
          {routerlist.map((router, i) => {
            const Icon = router.icon;
            return (
              <NavLink onClick={() => handleIsActive(i)} key={router.href} to={router.href}>
                <div className="h-14 flex justify-start items-center gap-5">
                  <div
                    className={
                      router.href === location.pathname
                        ? 'w-2 rounded-tr rounded-br bg-active h-full'
                        : ' w-2 rounded-tr rounded-br  h-full'
                    }></div>
                  <div
                    className={
                      router.href === location.pathname
                        ? 'bg-active rounded-md h-full px-4 flex gap-4 justify-start items-center w-3/4'
                        : ' h-full px-4 flex gap-4 justify-start items-center w-3/4'
                    }>
                    <div className={router.href === location.pathname ? ' text-white ' : ' text-primary-text '}>
                      <Icon />
                    </div>
                    <h1
                      className={
                        router.href === location.pathname
                          ? ' text-white font-semibold text-sm'
                          : ' text-primary-text font-semibold text-sm'
                      }>
                      {router.title}
                    </h1>
                  </div>
                </div>
              </NavLink>
            );
          })}

          <div className="">
            <div onClick={handleIsExpand} className="h-14 flex justify-start items-center gap-5">
              <div className="w-2 rounded-tr rounded-br bg-active h-full"></div>
              <div className="bg-active rounded-md h-full px-4 flex gap-4 justify-start items-center w-3/4">
                <div className=" text-white "></div>
                <h1 className=" text-white font-semibold text-sm">Dashboard</h1>

                {isExpand ? (
                  <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <ExpandLessIcon className=" text-primary-text/60" fontSize="medium" />
                  </IconButton>
                ) : (
                  <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <ExpandMoreIcon className=" text-primary-text/60" fontSize="medium" />
                  </IconButton>
                )}
              </div>
            </div>
            {isExpand && (
              <div className={isExpand ? `transition-all duration-300 delay-300 transform translate-y-2` : ''}>
                <div className=" h-14 flex hover:bg-second-color justify-start items-center gap-5">
                  <div className="w-2 rounded-tr rounded-br h-full"></div>
                  <div className=" rounded-md h-full px-4 flex gap-4 justify-start items-center w-3/4">
                    <div className=" text-primary-text "></div>
                    <h1 className=" text-primary-text font-semibold text-sm">Dashboard</h1>
                  </div>
                </div>
                <div className="h-14 flex hover:bg-second-color justify-start items-center gap-5">
                  <div className="w-2 rounded-tr rounded-br  h-full"></div>
                  <div className=" rounded-md h-full px-4 flex gap-4 justify-start items-center w-3/4">
                    <div className=" text-primary-text "></div>
                    <h1 className=" text-primary-text font-semibold text-sm">Dashboard</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
      <div className=" pt-2 w-20 bg-primary-color sticky top-[var(--headerHeight)] left-0 h-[var(--sidebarHeight)] col-span-1 ">
        {routerlist.map((router, i) => {
          const Icon = router.icon;
          return (
            <NavLink onClick={() => handleIsActive(i)} key={router.href} to={router.href}>
              <div className="h-14 flex justify-start items-center ">
                <div
                  className={
                    router.href === location.pathname
                      ? 'w-1 rounded-tr rounded-br bg-active h-full'
                      : ' w-1 rounded-tr rounded-br  h-full'
                  }></div>
                <div
                  className={
                    router.href === location.pathname
                      ? ' rounded-md h-full mx-auto flex flex-col justify-center items-center w-3/4'
                      : ' h-full mx-auto flex flex-col justify-center items-center w-3/4'
                  }>
                  <div className={router.href === location.pathname ? ' text-active ' : ' text-primary-text '}>
                    <Icon />
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
