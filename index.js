document.addEventListener("DOMContentLoaded", () => {
  // Hide all sections initially
  const sections = document.querySelectorAll(".content section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the first section by default
  const firstSection = document.querySelector(".content section");
  if (firstSection) {
    firstSection.style.display = "block";
  }

  // Function to update active menu item
  function updateActiveMenuItem() {
    const links = document.querySelectorAll(".menu-items a");
    links.forEach((link) => {
      link.parentElement.classList.remove("active");
    });

    const activeLink = document.querySelector(
      `.menu-items a[href="${window.location.hash}"]`
    );
    if (activeLink) {
      activeLink.parentElement.classList.add("active");
    }
  }

  // Add click event listeners to menu links
  document.querySelectorAll(".menu-items a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide all sections
      sections.forEach((section) => {
        section.style.display = "none";
      });

      // Show the target section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.style.display = "block";
      }

      // Update the URL hash
      history.pushState(null, null, this.getAttribute("href"));

      // Update the active menu item
      updateActiveMenuItem();
    });
  });

  // Handle initial load with URL hash
  if (window.location.hash) {
    const targetSection = document.querySelector(window.location.hash);
    if (targetSection) {
      sections.forEach((section) => {
        section.style.display = "none";
      });
      targetSection.style.display = "block";
      updateActiveMenuItem();
    }
  }

  // Handle the case where the user navigates back to a previously visited section
  window.addEventListener("popstate", () => {
    if (window.location.hash) {
      const targetSection = document.querySelector(window.location.hash);
      if (targetSection) {
        sections.forEach((section) => {
          section.style.display = "none";
        });
        targetSection.style.display = "block";
        updateActiveMenuItem();
      }
    }
  });
});
