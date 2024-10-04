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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  // Loop through all slides
  for (i = 0; i < x.length; i++) {
    var iframe = x[i].querySelector("iframe");
    if (iframe) {
      // Pause the video
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
    x[i].style.display = "none";
  }

  // Show the current slide
  x[slideIndex - 1].style.display = "block";
}

document.querySelectorAll(".menu-items li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    const menuItems = document.querySelectorAll(".menu-items li");
    const menuFooter = document.querySelector(".menu-footer");
    const isActive = this.parentElement.classList.contains("active");

    // If the clicked item is active, show all items
    if (isActive) {
      // Show all menu items
      menuItems.forEach((item) => {
        item.classList.remove("hidden");
        item.classList.remove("active"); // Remove active state from all
      });
      menuFooter.style.display = "block"; // Show the footer
      document.getElementById("logoBeach").classList.remove("active"); // Reset the logo's active state
    } else {
      // Hide all menu items
      menuItems.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("active"); // Remove active state from others
      });
      this.parentElement.classList.remove("hidden"); // Show only the clicked item
      this.parentElement.classList.add("active"); // Set clicked item as active
      menuFooter.style.display = "none"; // Hide the footer
    }
  });
});
