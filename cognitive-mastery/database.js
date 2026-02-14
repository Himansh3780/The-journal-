// COGNITIVE MASTERY DATABASE
const cognitiveArticles = [
    {
        title: "Thinking in Models",
        description: "Upgrade your operating system. Using mental models to make faster, smarter decisions.",
        url: "thinking-models.html"
    },
    {
        title: "First Principles Thinking",
        description: "Break down complicated problems into basic elements and reassemble them from scratch.",
        url: "first-principles.html"
    },
    {
        title: "The Art of Inversion",
        description: "Thinking backward. Instead of asking how to succeed, ask how to avoid failure.",
        url: "inversion.html"
    },
    {
        title: "Second-Order Thinking",
        description: "Asking 'And then what?' to predict the long-term consequences of your decisions.",
        url: "second-order.html"
    }
];

// --- AUTO RENDERER ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('article-container');
    if (container && typeof cognitiveArticles !== 'undefined') {
        cognitiveArticles.forEach(article => {
            container.innerHTML += `
                <article class="post-card">
                    <span class="cat-tag">Cognitive Mastery</span>
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
