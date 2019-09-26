import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import { Flag } from 'components/Icons';

const { Option } = Select;
// const { Flag } = Icons;

const LanguageSwitcher = ({ language }) => {
  const { i18n } = useTranslation();
  return (
    <Select
      defaultValue={language}
      style={{ width: '64px', margin: '0 16px' }}
      onChange={lang => i18n.changeLanguage(lang)}
    >
      <Option value="en">
        <Flag code="gb" />
      </Option>
      <Option value="es">
        <Flag code="es" />
      </Option>
    </Select>
  );
};

LanguageSwitcher.propTypes = {
  language: PropTypes.oneOf(['en', 'es']),
};

LanguageSwitcher.defaultProps = {
  language: 'en',
};

export default LanguageSwitcher;
