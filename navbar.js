// navbar.js
export function renderNavbar() {
  const navHTML = `
    <nav style="background:#0a0a23;color:white;padding:1rem;display:flex;justify-content:space-between;align-items:center;">
      <div style="font-weight:bold;font-size:1.2rem;">🚀 Sputnik Cosmotics</div>
      <div style="display:flex;gap:1rem;">
        <a href="index.html" style="color:white;text-decoration:none;">Home</a>
        <a href="about.html" style="color:gold;text-decoration:none;">About</a>
        <a href="blog.html" style="color:maroon;text-decoration:none;">Blog</a>
        <a href="journal.html" style="color:green;text-decoration:none;>Journal</a>
        <a id="profile-link" href="profile.html" style="color:orange;text-decoration:none;">Profile</a>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navHTML);
}
