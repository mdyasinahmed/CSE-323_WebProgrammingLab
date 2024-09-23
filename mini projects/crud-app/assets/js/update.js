async function editProduct(id) {
    // Fetch product details and populate the form for editing
    const response = await fetch(`http://152.42.163.176:2008/api/v1/ReadProductById/${id}`);
    const product = await response.json();
    
    document.getElementById('productName').value = product.ProductName;
    document.getElementById('productCode').value = product.ProductCode;
    document.getElementById('img').value = product.Img;
    document.getElementById('qty').value = product.Qty;
    document.getElementById('unitPrice').value = product.UnitPrice;
    document.getElementById('totalPrice').value = product.TotalPrice;

    document.getElementById('product-form').onsubmit = async function (e) {
        e.preventDefault();
        await updateProduct(id);
    };
    
    $('#addProductModal').modal('show');
}

async function updateProduct(id) {
    const productName = document.getElementById('productName').value;
    const productCode = document.getElementById('productCode').value;
    const img = document.getElementById('img').value;
    const qty = document.getElementById('qty').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const totalPrice = document.getElementById('totalPrice').value;

    const response = await fetch(`http://152.42.163.176:2008/api/v1/UpdateProduct/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ProductName: productName,
            ProductCode: productCode,
            Img: img,
            Qty: qty,
            UnitPrice: unitPrice,
            TotalPrice: totalPrice
        })
    });

    if (response.ok) {
        $('#addProductModal').modal('hide');
        readProducts(); // Refresh product list
    }
}
