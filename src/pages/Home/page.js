import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';

import PageTitle from 'components/PageTitle';

const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageTitle title={t('home.title')} />
      <Card>{t('home.content')}</Card>
    </div>
  );
};

export default Page;
