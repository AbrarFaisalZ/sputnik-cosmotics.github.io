// navbar.js
export function renderNavbar() {
  const navHTML = `
    <nav style="background:#0d1b2a;color:#00ffcc;padding:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">
      <div style="font-weight:bold;font-size:1.2rem;">🚀 Sputnik Cosmotics</div>
      <div style="display:flex;gap:1rem;flex-wrap:wrap;">
        <a href="index.html" style="color:#00ffcc;text-decoration:none;">Home</a>
        <a href="about.html" style="color:#00ffcc;text-decoration:none;">About</a>
        <a href="blog.html" style="color:#00ffcc;text-decoration:none;">Blog</a>
        <a href="journal.html" style="color:#00ffcc;text-decoration:none;">Journal</a>
        <a id="profile-link" href="profile.html" style="color:#00ffcc;text-decoration:none;">Profile</a>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navHTML);
}
