const feedUrl = 'https://ultimateclassicrock.com/feed/';
const feedContainer = document.getElementById('rock-feed');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadLessBtn = document.getElementById('load-less-btn');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

let currentPage = 1;
const itemsPerPage = 5;
let totalPages = 1;
let feedItems = [];

// Fetch and parse RSS feed, then render
async function fetchFeed(page = 1) {
    try {
        // Use rss2json public API as a proxy for RSS to JSON conversion
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        feedItems = data.items || [];
        totalPages = Math.ceil(feedItems.length / itemsPerPage);
        renderFeed(page);
        updatePagination();
    } catch (error) {
        feedContainer.innerHTML = '<p>Failed to load feed.</p>';
    }
}

function renderFeed(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = feedItems.slice(start, end);

    feedContainer.innerHTML = itemsToShow.map(item => `
        <div class="feed-item">
            <img src="${item.thumbnail}" alt="${item.title}" class="feed-thumbnail">
            <div class="feed-content">
                <h5 class="feed-source">${item.author || 'Unknown Source'}</h5>
                <h3 class="feed-title"><a href="${item.link}" target="_blank">${item.title}</a></h3>
                <p>${item.pubDate}</p>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
}

function updatePagination() {
    currentPageSpan.textContent = `Page ${currentPage}`;
    totalPagesSpan.textContent = `of ${totalPages}`;
    loadLessBtn.disabled = currentPage <= 1;
    loadMoreBtn.disabled = currentPage >= totalPages;
}

loadMoreBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderFeed(currentPage);
        updatePagination();
    }
});

loadLessBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderFeed(currentPage);
        updatePagination();
    }
});

// Initial load
fetchFeed(currentPage);