import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';

import PageTitle from 'components/PageTitle';

const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <PageTitle title="Home page" />
      <Card>{t('Page 1')}</Card>
    </div>
  );
};

export default Page;
