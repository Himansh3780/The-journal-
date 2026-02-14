/* --- GLOBAL CONFIGURATION --- */
const CONFIG = {
    siteTitle: "The Journal.",
    // Your Adsense or Banner Code
    adCode: `<div class="ad-box">
                <span style="font-size:0.7rem; color:#999; letter-spacing:1px;">ADVERTISEMENT</span>
                <div style="background:#eee; height:100px; display:flex; align-items:center; justify-content:center; border:1px dashed #ccc; margin-top:5px;">
                    Google Ad Slot
                </div>
             </div>`,
    
    navLinks: [
        { folder: "social-intelligence", label: "Social Int." },
        { folder: "vitality", label: "Vitality" },
        { folder: "standards", label: "Standards" },
        { folder: "cognitive-mastery", label: "Cognitive" }
    ],

    lang: {
        en: { back: "← Home", theme: "Theme", favs: "Favorites", read: "Read Article →", time: "min read" },
        es: { back: "← Inicio", theme: "Tema", favs: "Favoritos", read: "Leer Artículo →", time: "min lectura" },
        hi: { back: "← मुख्य", theme: "थीम", favs: "पसंदीदा", read: "लेख पढ़ें →", time: "मिनट पढ़ें" }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CLEAN URLS (Removes .html)
    if (window.location.pathname.endsWith(".html")) {
        let newUrl = window.location.pathname.replace(".html", "");
        window.history.replaceState(null, "", newUrl);
    }

    // 2. SETUP PATHS
    const isRoot = (typeof IS_ROOT !== 'undefined' && IS_ROOT);
    const prefix = isRoot ? "" : "../";

    // 3. INJECT NAV & FOOTER
    const nav = document.getElementById("app-nav");
    const footer = document.getElementById("app-footer");
    
    if (nav) {
        nav.innerHTML = `
            <nav style="display:flex; justify-content:space-between; align-items:center; padding:20px 0; border-bottom:1px solid var(--border); margin-bottom:40px;">
                <a href="${prefix}index.html" class="brand" style="font-family:'Lora',serif; font-weight:700; font-size:1.2rem;">
                    ${CONFIG.siteTitle}
                </a>
                <div style="display:flex; gap:10px; align-items:center;">
                    <a href="${prefix}favorites.html" style="font-size:1.2rem; cursor:pointer;" title="View Favorites">❤️</a>
                    <select id="lang-select" onchange="changeLanguage(this.value)" style="border:1px solid var(--border); background:var(--bg); color:var(--text-main); padding:5px; border-radius:4px;">
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                        <option value="hi">HI</option>
                    </select>
                    <button onclick="toggleTheme()" style="background:var(--bg); border:1px solid var(--border); color:var(--text-main); padding:5px 10px; border-radius:4px; cursor:pointer;">
                        ◑
                    </button>
                </div>
            </nav>
        `;
    }

    if (footer) {
        let linksHTML = CONFIG.navLinks.map(l => `<a href="${prefix}${l.folder}/index.html" style="margin:0 10px;">${l.label}</a>`).join("");
        footer.innerHTML = `
            <div style="text-align:center; padding:50px 0; color:var(--text-light); font-size:0.9rem; border-top:1px solid var(--border); margin-top:50px;">
                <div style="margin-bottom:20px;">${linksHTML}</div>
                &copy; 2026 ${CONFIG.siteTitle}
            </div>
        `;
    }

    // 4. INJECT ADS
    document.querySelectorAll("#ad-slot").forEach(slot => slot.innerHTML = CONFIG.adCode);

    // 5. READ TIME CALCULATOR (Finds word count of body)
    const text = document.body.innerText;
    const wpm = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.querySelectorAll(".read-time").forEach(el => el.innerText = `${time} min read`);

    // 6. RESTORE SETTINGS
    const savedTheme = localStorage.getItem('site_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const savedLang = localStorage.getItem('site_lang') || 'en';
    const langSelect = document.getElementById('lang-select');
    if (langSelect) { langSelect.value = savedLang; changeLanguage(savedLang); }

    // 7. HIGHLIGHT FAVORITES
    updateFavoriteIcons();
});

/* --- FUNCTIONS --- */

function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('site_theme', newTheme);
}

function changeLanguage(lang) {
    localStorage.setItem('site_lang', lang);
    const t = CONFIG.lang[lang];
    // Update simple text elements if they exist
    document.querySelectorAll(".btn-read").forEach(b => b.innerText = t.read);
}

/* --- FAVORITES SYSTEM --- */
function toggleFavorite(url, title) {
    let favs = JSON.parse(localStorage.getItem('my_favorites') || "[]");
    
    // Check if already exists
    const index = favs.findIndex(f => f.url === url);
    
    if (index > -1) {
        favs.splice(index, 1); // Remove
        alert("Removed from Favorites");
    } else {
        favs.push({ url, title }); // Add
        alert("Added to Favorites ❤️");
    }
    
    localStorage.setItem('my_favorites', JSON.stringify(favs));
    updateFavoriteIcons();
}

function updateFavoriteIcons() {
    let favs = JSON.parse(localStorage.getItem('my_favorites') || "[]");
    // Find all heart buttons and check if their URL is in the list
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const url = btn.getAttribute('data-url');
        const isFav = favs.some(f => f.url === url);
        btn.innerText = isFav ? "❤️" : "🤍"; // Filled heart vs Empty heart
    });
}
