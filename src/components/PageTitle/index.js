import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const PageTitle = ({ title }) => <Title level={3}>{title}</Title>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
