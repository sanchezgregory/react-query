import { getAllProducts, getAllUsers, getProductById, getAllProductsByJsonServer } from './api';

export const fetchConfig = {
  products: getAllProducts,
  users: getAllUsers,
  product: getProductById,
  getAllProductsByJsonServer
};