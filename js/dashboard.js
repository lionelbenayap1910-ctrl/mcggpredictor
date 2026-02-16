// Toggle Mobile Menu
function toggleMobileMenu() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Featured Content
const featuredContent = [
    {
        type: 'anime',
        title: 'One Piece',
        image: 'https://via.placeholder.com/300x150/ff6b1a/ffffff?text=One+Piece',
        category: 'Anime'
    },
    {
        type: 'anime',
        title: 'Jujutsu Kaisen',
        image: 'https://via.placeholder.com/300x150/ff6b1a/ffffff?text=JJK',
        category: 'Anime'
    },
    {
        type: 'comic',
        title: 'Solo Leveling',
        image: 'https://via.placeholder.com/300x150/ff6b1a/ffffff?text=Solo+Leveling',
        category: 'Comic'
    },
    {
        type: 'novel',
        title: 'Overlord',
        image: 'https://via.placeholder.com/300x150/ff6b1a/ffffff?text=Overlord',
        category: 'Novel'
    }
];

function loadFeatured() {
    const container = document.getElementById('featuredContent');
    
    featuredContent.forEach(item => {
        const card = `
            <div class="featured-card" onclick="window.location.href='/${item.type}/'">
                <img src="${item.image}" alt="${item.title}">
                <div class="featured-info">
                    <h4>${item.title}</h4>
                    <p>${item.category}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Search functionality
document.querySelector('.search-box i').addEventListener('click', function() {
    const query = document.querySelector('.search-box input').value;
    if (query) {
        // Cari di semua kategori
        window.location.href = `/search?q=${query}`;
    }
});

// Load featured content on page load
window.addEventListener('load', loadFeatured);
