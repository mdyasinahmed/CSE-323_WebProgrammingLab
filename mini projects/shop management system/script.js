document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const addProductForm = document.getElementById('addProductForm');
    const searchProductForm = document.getElementById('searchProductForm');
    const sellProductForm = document.getElementById('sellProductForm');
    const showHistoryBtn = document.getElementById('showHistoryBtn');

    const mainSection = document.getElementById('main-section');
    const loginSection = document.getElementById('login-section');
    const loginError = document.getElementById('login-error');

    const products = [];
    const salesHistory = [];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'pass') {
            loginSection.classList.add('d-none');
            mainSection.classList.remove('d-none');
        } else {
            loginError.style.display = 'block';
        }
    });

    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const stock = document.getElementById('productStock').value;

        const product = { name, price: parseFloat(price), stock: parseInt(stock) };
        products.push(product);
        alert('Product added successfully!');
        addProductForm.reset();
    });

    searchProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchName = document.getElementById('searchProductName').value.toLowerCase();
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = '';

        const foundProducts = products.filter(product => product.name.toLowerCase().includes(searchName));

        if (foundProducts.length > 0) {
            foundProducts.forEach(product => {
                resultsDiv.innerHTML += `<div>Product: ${product.name}, Price: $${product.price}, Stock: ${product.stock}</div>`;
            });
        } else {
            resultsDiv.innerHTML = '<div class="text-danger">No products found.</div>';
        }
    });

    sellProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const soldName = document.getElementById('soldProductName').value.toLowerCase();
        const quantity = parseInt(document.getElementById('soldProductQuantity').value);
        const product = products.find(product => product.name.toLowerCase() === soldName);

        if (product && product.stock >= quantity) {
            product.stock -= quantity;
            salesHistory.push({ name: product.name, quantity, date: new Date() });
            alert('Product sold successfully!');
        } else {
            alert('Product not available or insufficient stock.');
        }

        sellProductForm.reset();
    });

    showHistoryBtn.addEventListener('click', () => {
        const historyDiv = document.getElementById('historyResults');
        historyDiv.innerHTML = '';

        if (salesHistory.length > 0) {
            salesHistory.forEach(sale => {
                historyDiv.innerHTML += `<div>Product: ${sale.name}, Quantity: ${sale.quantity}, Date: ${sale.date.toLocaleString()}</div>`;
            });
        } else {
            historyDiv.innerHTML = '<div class="text-danger">No sales history available.</div>';
        }
    });
});