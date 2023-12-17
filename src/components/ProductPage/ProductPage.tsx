import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ProductType } from '../../utils/types/products';
import { useHistory, useParams } from 'react-router-dom';
import { getProduct } from '../../services/api/product';
import cn from 'classnames';
import style from './ProductPage.module.scss';
import logToMyCustomService from '../../utils/functions/logToMyCustomService';
import Loader from '../Loader/Loader';

const ProductPage = () => {
  const { isThemeBlack } = useContext(ThemeContext);
  const [product, setProduct] = useState<ProductType | null>(null);
  const { productId } = useParams<{ productId: string }>();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    getProduct(productId)
      .then(setProduct)
      .catch(() => {
        logToMyCustomService();
        history.push('/error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (!product) {
    return null;
  }
  const { image, title, price, description } = product;

  return (
    <div className={cn(style.wrap, { [style.black]: isThemeBlack })}>
      <div className={style['inner-wrap']}>
        {loading && <Loader />}
        {!loading && (
          <>
            <div className={style['img-wrap']}>
              <img className="img-fluid" src={image} alt={title} />
            </div>
            <h2 className={style.title}>{title}</h2>
            <p className={cn(style.price)}>{price}</p>
            <p>{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
