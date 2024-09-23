// api/deleteProduct.js
async function deleteProduct(productId) {
    const response = await fetch(`http://164.68.107.70:6060/api/v1/DeleteProduct/${productId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.status === 200;
  }
  