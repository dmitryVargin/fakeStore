import React, { FC, useContext } from 'react';
import style from './Product.module.scss';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import cn from 'classnames';

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  // eslint-disable-next-line react/no-unused-prop-types
  description: string;
  image: string;
};

export const Product: FC<Product> = ({ id, image, title, price, category }) => {
  const { isThemeBlack } = useContext(ThemeContext);

  return (
    <Link
      className={cn(style.wrap, { [style.black]: isThemeBlack })}
      to={`/category/${category}/${id}`}>
      <div className={style['img-wrap']}>
        <img className="img-fluid" src={image} alt={title} />
      </div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.price}>{price}</p>
    </Link>
  );
};
