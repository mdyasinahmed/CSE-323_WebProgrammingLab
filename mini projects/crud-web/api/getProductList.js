// api/getProductList.js
async function getProductList() {
    const response = await fetch('http://164.68.107.70:6060/api/v1/ReadProduct', {
      method: 'GET',
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.data; // Assuming the product list is in 'data'
    } else {
      throw new Error('Failed to fetch products');
    }
  }
  