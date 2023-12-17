import React, { FC, ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import cn from 'classnames';
import style from './Wrap.module.scss';

const Wrap: FC<{ children: ReactNode }> = ({ children }) => {
  const { isThemeBlack } = useContext(ThemeContext);
  return <div className={cn(style['main-wrap'], { [style.black]: isThemeBlack })}>{children}</div>;
};

export default Wrap;
