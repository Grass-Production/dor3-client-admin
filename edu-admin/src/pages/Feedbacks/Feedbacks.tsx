import { useTranslation } from 'react-i18next';

const Feedbacks = (): JSX.Element => {
  const { t } = useTranslation('mainLayout');

  return (
    <>
      <h1 className=" text-primary-text text-3xl font-bold">{t('sidebar.Feedbacks')}</h1>
    </>
  );
};

export default Feedbacks;
