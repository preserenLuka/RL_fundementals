document.addEventListener("DOMContentLoaded", () => {
  // Hide all sections initially
  document.querySelectorAll(".content section").forEach((section) => {
    section.style.display = "none";
  });

  // Show the first section by default
  const firstSection = document.querySelector(".content section");
  if (firstSection) {
    firstSection.style.display = "block";
  }

  // Add click event listeners to menu links
  document.querySelectorAll(".menu-items a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide all sections
      document.querySelectorAll(".content section").forEach((section) => {
        section.style.display = "none";
      });

      // Show the target section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.style.display = "block";
      }
    });
  });
});
