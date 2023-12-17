import fakestoreapi from './index';
import { Categories, ProductType } from '../../utils/types/products';

export function getAllProducts(category: string) {
  return fakestoreapi.get<ProductType[]>(`/products/category/${category}`).then((res) => res.data);
}
export function getProduct(id: string) {
  return fakestoreapi.get<ProductType>(`/products/${id}`).then((res) => res.data);
}
export function getAllCategoires() {
  return fakestoreapi.get<Categories[]>(`/products/categories`).then((res) => res.data);
}
