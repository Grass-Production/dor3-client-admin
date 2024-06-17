import { useTranslation } from 'react-i18next';

const CloudDinary = (): JSX.Element => {
  const { t } = useTranslation('mainLayout');

  return (
    <>
      <h1 className=" text-primary-text text-3xl font-bold">{t('sidebar.CloudDinary')}</h1>
    </>
  );
};

export default CloudDinary;
