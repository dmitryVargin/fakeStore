import React, { useContext } from 'react';
import ReactLoading from 'react-loading';
import style from './Loader.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const Loader = () => {
  const { isThemeBlack } = useContext(ThemeContext);
  return (
    <ReactLoading className={style.loader} type="spin" color={isThemeBlack ? 'white' : '#242526'} />
  );
};

export default Loader;
