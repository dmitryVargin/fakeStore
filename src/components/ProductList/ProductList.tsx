import React, { FC, useContext, useEffect, useState } from 'react';
import { Product } from '../Product/Product';
import style from './ProductList.module.scss';
import { useHistory, useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/api/product';
import { ProductType } from '../../utils/types/products';
import { ThemeContext } from '../../context/ThemeContext';
import cn from 'classnames';
import logToMyCustomService from '../../utils/functions/logToMyCustomService';
import Loader from '../Loader/Loader';

const ProductList: FC = () => {
  const { isThemeBlack } = useContext(ThemeContext);
  const [products, setProducts] = useState<ProductType[]>([]);
  const { category } = useParams<{ category: string }>();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    getAllProducts(category)
      .then(setProducts)
      .catch(() => {
        logToMyCustomService();
        history.push('/error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <div className={cn(style.wrap, { [style.black]: isThemeBlack })}>
      <div className={style['inner-wrap']}>
        {!loading && products.map((product) => <Product key={product.id} {...product} />)}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ProductList;
