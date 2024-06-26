import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import routerlist from '@/constants/routes';
import { IconButton, Tooltip } from '@mui/material';
export const Sidebar = ({ isExpand }: { isExpand?: boolean }): JSX.Element => {
  const { t } = useTranslation('mainLayout');
  const [index, setIndex] = useState(null);

  const location = useLocation();

  const handleIsActive = (i) => {
    setIndex(i);
  };

  return (
    // h-[var(--sidebarHeight)]
    <>
      {/* <h1>{t('sidebar.CloudDinary')}</h1> */}
      {isExpand ? (
        <div
          className={` pt-2 w-0 ${isExpand && '!w-fit'} bg-primary-color sticky top-[var(--headerHeight)] left-0 h-[var(--sidebarHeight)] col-span-1 `}>
          <div className=" flex flex-col">
            {routerlist.map((router, i) => {
              const Icon = router.icon;
              return (
                <NavLink onClick={() => handleIsActive(i)} key={router.href} to={router.href}>
                  <div className="h-14 flex justify-start items-center gap-5">
                    <div
                      className={
                        router.href === location.pathname
                          ? 'w-1 rounded-tr rounded-br bg-active h-full'
                          : ' w-1 rounded-tr rounded-br  h-full'
                      }></div>

                    <div
                      className={
                        router.href === location.pathname
                          ? 'bg-active rounded-md h-full px-4 flex gap-4 justify-start items-center w-full'
                          : ' h-full px-4 flex gap-4 justify-start items-center w-full'
                      }>
                      <IconButton sx={{ transitionDuration: '0ms' }}>
                        <div className={router.href === location.pathname ? ' text-white ' : ' text-primary-text '}>
                          <Icon />
                        </div>
                      </IconButton>

                      <IconButton sx={{ borderRadius: '24px' }}>
                        <h1
                          className={
                            router.href === location.pathname
                              ? ' text-white font-semibold text-sm'
                              : ' text-primary-text font-semibold text-sm'
                          }>
                          {/* {t(`sidebar.${router.title}`)} */}
                          {t(`sidebar.${router.title}`)}
                        </h1>
                      </IconButton>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className={` pt-2 w-60  ${isExpand === false && '!w-20'} bg-primary-color sticky top-[var(--headerHeight)] left-0 h-[var(--sidebarHeight)] col-span-1 `}>
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
                    <Tooltip title={router.title} placement="right">
                      <IconButton>
                        <div className={router.href === location.pathname ? ' text-active ' : ' text-primary-text '}>
                          <Icon />
                        </div>
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};
