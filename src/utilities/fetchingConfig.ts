import { getAllProducts, getAllUsers, getProductById } from './api';

export const fetchConfig = {
  products: getAllProducts,
  users: getAllUsers,
  product: getProductById,
};