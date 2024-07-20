// Ensure Firebase is initialized
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase Authentication
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("#side-menu a");
  const sections = document.querySelectorAll(".section");
  const loginContainer = document.getElementById("login-container");
  const welcomeContainer = document.getElementById("welcome-container");

  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Hide the login container and show the welcome container
      loginContainer.style.display = "none";
      welcomeContainer.style.display = "block";
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert("Invalid email or password.");
    }
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
