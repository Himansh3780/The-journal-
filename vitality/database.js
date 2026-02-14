// VITALITY DATABASE
const vitalityArticles = [
    {
        title: "Energy Management",
        description: "You don't need more time; you need more energy. Optimize your biological performance.",
        url: "energy-management.html"
    },
    {
        title: "The Science of Sleep",
        description: "Why 8 hours isn't enough if the quality is low. Deep sleep protocols for recovery.",
        url: "sleep-science.html"
    },
    {
        title: "Dopamine Detox",
        description: "Resetting your brain's reward system to find joy in hard work again.",
        url: "dopamine-detox.html"
    },
    {
        title: "Movement as Medicine",
        description: "How daily movement impacts cognitive function more than you think.",
        url: "movement.html"
    }
];

// --- AUTO RENDERER ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('article-container');
    if (container && typeof vitalityArticles !== 'undefined') {
        vitalityArticles.forEach(article => {
            container.innerHTML += `
                <article class="post-card">
                    <span class="cat-tag">Vitality</span>
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
                        <a href="${article.url}" class="btn-read">Read Article →</a>
                        <button class="fav-btn" data-url="${article.url}" onclick="toggleFavorite('${article.url}', '${article.title}')">🤍</button>
                    </div>
                </article>
            `;
        });
    }
});
