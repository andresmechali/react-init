import React from 'react';
import Loadable from 'react-loadable';

import Loading from '@components/Loading';

import Page from './page';

const LoadablePage = Loadable({
  loader: () => import('./page'),
  loading: <Loading />,
});

export default Page;
