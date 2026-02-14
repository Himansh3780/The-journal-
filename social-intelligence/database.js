// SOCIAL INTELLIGENCE DATABASE
const socialArticles = [
    {
        title: "Reading the Room",
        description: "Understanding the unspoken dynamics of a group is a superpower. Learn to spot hidden hierarchies.",
        url: "reading-room.html"
    },
    {
        title: "The Ben Franklin Effect",
        description: "How to make people like you more by asking them for a small favor. A psychological paradox.",
        url: "ben-franklin.html"
    },
    {
        title: "Body Language Basics",
        description: "Three simple cues to tell if someone is actually listening or just waiting for their turn to speak.",
        url: "body-language.html"
    },
    {
        title: "Tactical Empathy",
        description: "How to diffuse high-tension conversations without losing your cool using active listening.",
        url: "tactical-empathy.html"
    }
];

// --- AUTO RENDERER ---
// This part injects the cards into your HTML automatically
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('article-container');
    if (container && typeof socialArticles !== 'undefined') {
        socialArticles.forEach(article => {
            container.innerHTML += `
                <article class="post-card">
                    <span class="cat-tag">Social Intelligence</span>
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
