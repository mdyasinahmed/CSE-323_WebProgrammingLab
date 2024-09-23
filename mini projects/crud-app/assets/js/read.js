async function readProducts() {
    const response = await fetch('http://152.42.163.176:2008/api/v1/ReadProduct');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        productList.innerHTML += `
            <tr>
                <td>${product.ProductName}</td>
                <td>${product.ProductCode}</td>
                <td>${product.Qty}</td>
                <td>${product.UnitPrice}</td>
                <td>${product.TotalPrice}</td>
                <td>
                    <button class="btn btn-warning" onclick="editProduct('${product.id}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">Delete</button>
                </td>
            </tr>
        `;
    });
}
