import api from './api';

export const productService = {
  // Get all products
  getAll: () => api.get('/products'),
  
  // Get product by ID
  getById: (id) => api.get(`/products/${id}`),
  
  // Create new product
  create: (data) => api.post('/products', data),
  
  // Update product
  update: (id, data) => api.put(`/products/${id}`, data),
  
  // Delete product
  delete: (id) => api.delete(`/products/${id}`),
  
  // Get low stock products
  getLowStock: () => api.get('/products/low-stock'),
  
  // Search products
  search: (query) => api.get(`/products/search?q=${query}`),
};