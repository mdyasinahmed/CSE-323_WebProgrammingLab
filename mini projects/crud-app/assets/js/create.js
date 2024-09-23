async function createProduct() {
    const productName = document.getElementById('productName').value;
    const productCode = document.getElementById('productCode').value;
    const img = document.getElementById('img').value;
    const qty = document.getElementById('qty').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const totalPrice = document.getElementById('totalPrice').value;

    const response = await fetch('http://152.42.163.176:2008/api/v1/CreateProduct', {
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
