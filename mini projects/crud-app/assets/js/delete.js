async function deleteProduct(id) {
    const response = await fetch(`http://152.42.163.176:2008/api/v1/DeleteProduct/${id}`, {
        method: 'GET'
    });

    if (response.ok) {
        readProducts(); // Refresh product list
    }
}
