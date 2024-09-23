// Importing the API services
import { createProduct } from '/api/createProduct.js';
import { getProductList } from '/api/getProductList.js';
import { deleteProduct } from '/api/deleteProduct.js';

document.addEventListener('DOMContentLoaded', () => {
  const productListContainer = document.getElementById('product-list-container');
  const addProductForm = document.getElementById('add-product-form');
  const newProductForm = document.getElementById('new-product-form');
  const addProductButton = document.getElementById('add-product-button');

  // Fetch and display product list
  async function displayProductList() {
    try {
      const productList = await getProductList();
      productListContainer.innerHTML = '';
      productList.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.ProductName} - ${product.UnitPrice}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteProductHandler(product.id));
        li.appendChild(deleteButton);
        productListContainer.appendChild(li);
      });
    } catch (error) {
      alert('Failed to load product list');
    }
  }

  async function deleteProductHandler(productId) {
    const success = await deleteProduct(productId);
    if (success) {
      displayProductList(); // Refresh after deletion
    } else {
      alert('Failed to delete product');
    }
  }

  // Show add product form
  addProductButton.addEventListener('click', () => {
    addProductForm.style.display = 'block';
  });

  // Handle product addition
  newProductForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const productData = {
      Img: document.getElementById('image').value,
      ProductCode: document.getElementById('code').value,
      ProductName: document.getElementById('product-name').value,
      Qty: document.getElementById('quantity').value,
      TotalPrice: document.getElementById('total-price').value,
      UnitPrice: document.getElementById('unit-price').value,
    };
    const success = await createProduct(productData);
    if (success) {
      alert('Product added successfully');
      addProductForm.style.display = 'none';
      displayProductList(); // Refresh after addition
    } else {
      alert('Failed to add product');
    }
  });

  // Initial fetch of product list
  displayProductList();
});
