document.addEventListener('DOMContentLoaded', () => {

    fetchBooks();
    displayCart();

});

const fetchBooks = async () => {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

const displayBooks = (books) => {
    const bookRow = document.getElementById('book-row');

    bookRow.innerHTML = '';

    books.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card h-100';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = book.img;
        img.alt = book.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = book.title;

        const price = document.createElement('p');
        price.className = 'card-text';
        price.textContent = `Price: ${book.price}`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => { 
            removeFromCart(book.asin); 
        };

        const addToCartBtn = document.createElement('button');
        addToCartBtn.className = 'btn btn-primary';
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.onclick = () => { 
            addToCart(book); 
        };

        cardBody.appendChild(title);
        cardBody.appendChild(price);
        cardBody.appendChild(removeBtn);
        cardBody.appendChild(addToCartBtn);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        bookRow.appendChild(col);
    });
}

const addToCart = (book) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.some(item => item.asin === book.asin)) {
        cart.push(book);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    } else {
        alert(`${book.title} is already in the cart.`);
    }
}

const removeFromCart = (asin) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(book => book.asin !== asin);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const displayCart = () => {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(book => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${book.title} - ${book.price}`;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() { removeFromCart(book.asin); };

        listItem.appendChild(removeBtn);
        cartList.appendChild(listItem);
    });
}