document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("#side-menu a");
  const sections = document.querySelectorAll(".section");
  const loginContainer = document.getElementById("login-container");
  const welcomeContainer = document.getElementById("welcome-container");

  // Show the welcome container and hide the login container after login
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform login logic here...

    // Hide the login container and show the welcome container
    loginContainer.style.display = "none";
    welcomeContainer.style.display = "block";
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all links
      menuLinks.forEach((link) => link.classList.remove("active"));

      // Hide all sections
      sections.forEach((section) => (section.style.display = "none"));

      // Show the selected section
      const sectionId = link.getAttribute("data-section");
      document.getElementById(sectionId).style.display = "block";

      // Set the clicked link as active
      link.classList.add("active");
    });
  });

  // Set the default active section
  document.querySelector("#side-menu a.active").click();
});
