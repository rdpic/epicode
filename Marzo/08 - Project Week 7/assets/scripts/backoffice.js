const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDUyMTJkN2IxMTAwMTkwZTZkY2IiLCJpYXQiOjE3MDk4ODg4MDEsImV4cCI6MTcxMTA5ODQwMX0.4R_Jz4qehQmEGF-nz1pbf8yW4oFMdnTZmo3vCHfV0s4';

const createProduct = async () => {
    try {
        const productData = {
            name: document.getElementById('productName').value,
            description: document.getElementById('productDescription').value,
            brand: document.getElementById('productBrand').value,
            imageUrl: document.getElementById('productImageUrl').value,
            price: document.getElementById('productPrice').value
        };
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });

        const product = await handleResponse(response);
        console.log('Product created:', product);
        showAlert('Product created successfully!', 'success');
    } catch (error) {
        console.error('Error:', error);
        showAlert('Failed to create product.', 'danger');
    };  
}

const updateProduct = async () => {
    try {
        const productId = document.getElementById('productId').value;
        const productData = {
            name: document.getElementById('productName').value,
            description: document.getElementById('productDescription').value,
            brand: document.getElementById('productBrand').value,
            imageUrl: document.getElementById('productImageUrl').value,
            price: document.getElementById('productPrice').value
        };
        
        const response = await fetch(`${apiUrl}${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(productData)
        });

        const product = await handleResponse(response);
        console.log('Product updated:', product);
        showAlert('Product updated successfully!', 'success');
    } catch (error) {
        console.error('Error:', error);
        showAlert('Failed to update product.', 'danger');
    };
}

const deleteProduct = async () => {
    try {
        const productId = document.getElementById('productId').value;
        
        const response = await fetch(`${apiUrl}${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const product = await handleResponse(response);
        console.log('Product deleted:', product);
        showAlert('Product deleted successfully!', 'success');
    } catch (error) {
        console.error('Error:', error);
        showAlert('Failed to delete product.', 'danger');
    };
}

const resetForm = (event) => {
    const confirmReset = confirm("Are you sure you want to reset the form?");
    if (!confirmReset) {
        event.preventDefault();
    }
}

const showEditDeleteButtonsIfEditMode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const isEdit = urlParams.get('edit');
    const productId = urlParams.get('productId');
    
    if (isEdit && productId) {
        document.getElementById('editProductBtn').style.display = 'inline-block';
        document.getElementById('deleteProductBtn').style.display = 'inline-block';
        document.getElementById('saveProductBtn').style.display = 'none';
        loadProductDetails(productId);
    }
};

const loadProductDetails = async (productId) => {
    try {
        const response = await fetch(`${apiUrl}${productId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const product = await handleResponse(response);
        
        document.getElementById('productName').value = product.name || '';
        document.getElementById('productDescription').value = product.description || '';
        document.getElementById('productBrand').value = product.brand || '';
        document.getElementById('productImageUrl').value = product.imageUrl || '';
        document.getElementById('productPrice').value = product.price || '';
        document.getElementById('productId').value = product._id || '';
    } catch (error) {
        console.error('Error loading product details:', error);
        showAlert('Failed to load product details.', 'danger');
    }
};

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
            <button type="button" class="close" id="close-btn" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;

    document.body.prepend(alertPlaceholder);
}

document.getElementById('saveProductBtn').addEventListener('click', createProduct);
document.getElementById('editProductBtn').addEventListener('click', updateProduct);
document.getElementById('deleteProductBtn').addEventListener('click', (event) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) {
        event.preventDefault();
    } else {
        deleteProduct();
    }
});
document.getElementById('resetProductBtn').addEventListener('click', resetForm);

document.addEventListener('DOMContentLoaded', () => {
    showEditDeleteButtonsIfEditMode();
});