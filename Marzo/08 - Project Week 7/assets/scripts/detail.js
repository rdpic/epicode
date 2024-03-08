const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDUyMTJkN2IxMTAwMTkwZTZkY2IiLCJpYXQiOjE3MDk4ODg4MDEsImV4cCI6MTcxMTA5ODQwMX0.4R_Jz4qehQmEGF-nz1pbf8yW4oFMdnTZmo3vCHfV0s4';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('productId');

const loadProductDetails = async () => {
    try {
        if (!productId) {
            showAlert('Product ID is missing.', 'warning');
            return;
        }
        
        const response = await fetch(`${apiUrl}${productId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error:', error);
        showAlert('Failed to load product details.', 'danger');
    }
}

const displayProductDetails = (product) => {
    const productDetailContainer = document.getElementById('productDetailContainer');
   /*  const createdAt = new Date(product.createdAt).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const updatedAt = new Date(product.updatedAt).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }); */
    productDetailContainer.innerHTML = `
        <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <ul>
                    <li>Price: $${product.price}</li>
                    <li>Brand: ${product.brand}</li>
                    <li>Description: ${product.description}</li>
                </ul>
            </div>
        </div>
    `;
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

document.addEventListener('DOMContentLoaded', loadProductDetails);