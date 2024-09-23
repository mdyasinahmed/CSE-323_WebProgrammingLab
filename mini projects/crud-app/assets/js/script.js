document.addEventListener('DOMContentLoaded', function () {
    readProducts();
    
    document.getElementById('product-form').addEventListener('submit', function (e) {
        e.preventDefault();
        createProduct();
    });
});
