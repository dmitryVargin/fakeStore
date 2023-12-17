import React, { FC, useContext, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import style from './Breadcrumbs.module.scss';
import capitalizeFirstLetter from '../../../utils/functions/capitalizeFirstLetter';
import { Categories } from '../../../utils/types/products';
import { getAllCategoires } from '../../../services/api/product';
import { ThemeContext } from '../../../context/ThemeContext';
import cn from 'classnames';
import logToMyCustomService from '../../../utils/functions/logToMyCustomService';

const Breadcrumbs: FC = () => {
  const { isThemeBlack } = useContext(ThemeContext);
  const [categories, setCategories] = useState<Categories[]>([]);
  const { pathname } = useLocation();
  const splitted = pathname.split('/')[2];
  const category = splitted && capitalizeFirstLetter(pathname.split('/')[2]);

  const history = useHistory();

  useEffect(() => {
    getAllCategoires()
      .then(setCategories)
      .catch(() => {
        logToMyCustomService();
        history.push('/error');
      });
  }, []);

  return (
    <div className={cn(style.wrap, { [style.black]: isThemeBlack })}>
      {category ? (
        <>
          Категория {'->'}&nbsp;{' '}
          <span className={style['breadcrumb-choose']} id="breadcrumb-choose">
            {category}
          </span>
        </>
      ) : (
        <span className={style['breadcrumb-choose']} id="breadcrumb-choose">
          Выбрать категорию
        </span>
      )}

      <Tooltip
        clickable
        anchorSelect="#breadcrumb-choose"
        place="bottom"
        className={cn(style['breadcrumb-tip'], { [style.black]: isThemeBlack })}>
        {categories.map((category) => (
          <div key={category}>
            <Link to={`/category/${category}`}>{capitalizeFirstLetter(category)}</Link>
          </div>
        ))}
      </Tooltip>
    </div>
  );
};
export default Breadcrumbs;
