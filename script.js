Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

const bar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");

bar.addEventListener("click", function () {
  // Toggle the visibility of the menu
  if (nav.style.display === "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});

