import { getAllProducts, getAllUsers, getProductById, getAllProductsByJsonServer, getPostById, updateProdById } from './api';

export const fetchConfig = {
  products: getAllProducts,
  users: getAllUsers,
  product: getProductById,
  getAllProductsByJsonServer,
  getPostById,
  updateProd: updateProdById
};