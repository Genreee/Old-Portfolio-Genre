const mobileNav = () => {
  // Get the elements needed for the mobile nav
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = mobileNav.querySelectorAll(".mobile-nav__link");

  // State variable to track whether the mobile nav is open or not
  let isMobileNavOpen = false;

  // Toggle the mobile nav when the header button is clicked
  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    mobileNav.style.display = isMobileNavOpen ? "flex" : "none";
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "auto";
  });

  // Close the mobile nav when a link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
