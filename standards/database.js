// STANDARDS DATABASE
const standardsArticles = [
    {
        title: "The Art of Discipline",
        description: "Raising your personal baseline. Why your standards dictate your long-term success.",
        url: "discipline.html"
    },
    {
        title: "Atomic Habits",
        description: "Small changes lead to massive results. Analyzing the compound effect of daily choices.",
        url: "atomic-habits.html"
    },
    {
        title: "Why Motivation Fails",
        description: "Motivation is a feeling; discipline is a system. Build systems that don't rely on mood.",
        url: "motivation-fails.html"
    },
    {
        title: "Personal Non-Negotiables",
        description: "How to define the rules you live by to protect your time and energy.",
        url: "non-negotiables.html"
    }
];

// --- AUTO RENDERER ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('article-container');
    if (container && typeof standardsArticles !== 'undefined') {
        standardsArticles.forEach(article => {
            container.innerHTML += `
                <article class="post-card">
                    <span class="cat-tag">Standards</span>
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
