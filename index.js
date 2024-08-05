document.querySelectorAll(".sidebar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".content section")
      .forEach((section) => (section.style.display = "none"));
    document.querySelector(this.getAttribute("href")).style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".content section")
    .forEach((section) => (section.style.display = "none"));
  document.querySelector("#Welcome").style.display = "block";
});
