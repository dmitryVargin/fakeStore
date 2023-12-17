import React, { FC, useContext } from 'react';
import style from './Header.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import burgerImg from '../../images/burger-menu.svg';
import crossImg from '../../images/cross.svg';
import useToggle from '../../utils/hooks/useToggle';
import { ThemeContext } from '../../context/ThemeContext';
import cn from 'classnames';

const Header: FC = () => {
  const { isThemeBlack, toggleTheme } = useContext(ThemeContext);
  const [menuOpened, toggleMenu] = useToggle(false);
  const [filtersOpened, toggleFilters] = useToggle(false);
  const buttonSign = !isThemeBlack ? '☀' : '🌑';

  return (
    <div className={cn(style.wrap, { [style.black]: isThemeBlack })}>
      <div className={style['inner-wrap']}>
        <div className={style['row-1']}>
          <div className={` ${style['logo-wrap']}`}>
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
          <div className={style['search-wrap']}>
            <input className={style.input} type="text" name="search" placeholder="Поиск" />
          </div>
          <div className={style['nav-wrap']}>
            <div className={style['desktop-wrap']}>
              <Link to="/profile">Профиль</Link>
              <Link to="/saved">Сохраненные</Link>
              <Link to="/cart">Корзина</Link>
            </div>
            <div className={style['menu-toggler-wrap']} onClick={toggleMenu}>
              <img src={menuOpened ? crossImg : burgerImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className={style['row-2']}>
          <Breadcrumbs />
          <div className={style['theme-filter-wrap']}>
            <span className={style['theme-toggler']} onClick={toggleTheme}>
              {buttonSign}
            </span>
            <div
              className={style['filter-btn']}
              onClick={() => {
                toggleFilters();
                if (menuOpened) {
                  toggleMenu();
                }
              }}>
              Фильтровать
            </div>
          </div>
        </div>
        <div className={`${style['mobile-nav']} ${menuOpened && style['mobile-nav-opened']}`}>
          <Link to="/profile">Профиль</Link>
          <Link to="/saved">Сохраненные</Link>
          <Link to="/cart">Корзина</Link>
        </div>
        <div className={`${style.filters} ${filtersOpened && style['filters-opened']}`}>
          {/* Вызов апи на onChange и смена состояния списка через какой-нибудь ReactQuery/ReduxToolkitQuery */}
          <label>
            Цена до
            <input type="number" className={style.input} />
          </label>
          <label>
            Цена от
            <input type="number" className={style.input} />
          </label>
        </div>
      </div>
    </div>
  );
};
export default Header;
