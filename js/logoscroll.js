
  document.addEventListener("DOMContentLoaded", function() {
    const logosList = document.querySelector('.logos ul');

    // Clone the logos to create a continuous effect
    const originalLogos = logosList.innerHTML;
    logosList.innerHTML += originalLogos; // Duplicate the list

    const totalWidth = logosList.scrollWidth / 2; // Total width of the original logos

    let scrollAmount = 0;
    const scrollStep = 1; // Adjust for speed

    function autoScroll() {
      scrollAmount += scrollStep; // Increment scroll amount
      logosList.style.transform = `translateX(-${scrollAmount}px)`; // Move the list

      // Reset scroll when the end of the original logos is reached
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0; // Reset for continuous scrolling
      }

      requestAnimationFrame(autoScroll); // Repeat the function
    }

    autoScroll(); // Start the auto scroll
  });

