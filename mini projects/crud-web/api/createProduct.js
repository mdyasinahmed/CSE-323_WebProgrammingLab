// api/createProduct.js
async function createProduct(requestBody) {
    const response = await fetch('http://164.68.107.70:6060/api/v1/CreateProduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });
    return response.status === 200;
  }
  