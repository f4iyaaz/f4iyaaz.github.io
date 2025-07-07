document.addEventListener("DOMContentLoaded", function () {
  const locationEl = document.getElementById("location");
  const lastModified = document.getElementById("last-modified");

  if (locationEl && lastModified) {
    locationEl.textContent = `Page location: ${window.location.href}`;
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }

  // Scroll-to-top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
