document.getElementById('load-images').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetchImages(query);
});

document.getElementById('load-secondary-images').addEventListener('click', () => {
    const primaryQuery = document.getElementById('search-input').value;
    const secondaryQuery = getSecondaryQuery(primaryQuery);
    fetchImages(secondaryQuery);
});

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    fetchImages(query);
});

const fetchImages = async (query) => {
    const url = `https://api.pexels.com/v1/search?query=${query}`;
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'YnKLHxnQIF48g9DOm7dHAyOTd8jrFzR7VzxRCtgjfIhlFz9MEQeyzWG2',
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const gallery = document.getElementById('image-gallery');
        gallery.innerHTML = '';
        data.photos.forEach(photo => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6 mb-4';
            col.innerHTML = `
                <div class="card">
                    <img src="${photo.src.medium}" class="card-img-top" alt="${photo.photographer}">
                    <div class="card-body">
                        <h5 class="card-title">${photo.photographer}</h5>
                        <p class="card-text">Photo ID: ${photo.id}</p>
                        <button onclick="hideCard(this)" class="btn btn-primary">Hide</button>
                        <a href="detail.html?photo_id=${photo.id}" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            `;
            gallery.appendChild(col);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

const getSecondaryQuery = (primaryQuery) => {
    return 'white ' + primaryQuery;
}

const hideCard = (button) => {
    button.closest('.col-lg-4').style.display = 'none';
}