const lazyLoading = () => {
  // Select all lazy loading images on the page
  const lazyImgs = document.querySelectorAll(".lazy");

  // Create a new IntersectionObserver instance
  const observer = new IntersectionObserver((entries) => {
    // For each entry in the observer, check if it is intersecting
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the entry is intersecting, load the image and stop observing it
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("loading");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  // Observe all lazy loading images on the page
  lazyImgs.forEach((img) => {
    observer.observe(img);
  });
};

export default lazyLoading;
