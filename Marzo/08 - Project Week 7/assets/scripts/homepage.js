const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDUyMTJkN2IxMTAwMTkwZTZkY2IiLCJpYXQiOjE3MDk4ODg4MDEsImV4cCI6MTcxMTA5ODQwMX0.4R_Jz4qehQmEGF-nz1pbf8yW4oFMdnTZmo3vCHfV0s4';

const loadProducts = async () => {
    try {
        document.getElementById('loadingIndicator').style.display = 'inline-block';
        
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const products = await handleResponse(response);
        document.getElementById('loadingIndicator').style.display = 'none';
        displayProducts(products);
        console.log(products)
        
    } catch (error) {
        document.getElementById('loadingIndicator').style.display = 'none';
        console.error('Error:', error);
        showAlert('Failed to load products.', 'danger');
    }
}

const displayProducts = (products) => {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col mb-2';
        productCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="detail.html?productId=${product._id}" class="btn btn-primary">More Details</a>
                    <a href="backoffice.html?edit=true&productId=${product._id}" <button onclick="editProduct('${product._id}')" class="btn btn-warning">Edit</button></a>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

const editProduct = (productId) => {
    window.location.href = `backoffice.html?edit=true&productId=${productId}`;
}

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

const showAlert = (message, type) => {
    const alertPlaceholder = document.createElement('div');
    alertPlaceholder.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    document.body.prepend(alertPlaceholder);
}

document.addEventListener('DOMContentLoaded', loadProducts);