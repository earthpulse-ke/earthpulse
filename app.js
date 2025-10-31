// const images = document.querySelectorAll(".image");

// images.forEach((image) => {
//   image.addEventListener("click", () => {
//     const active = document.querySelector(".image.active");

//     // Only switch if a different one is clicked
//     if (image !== active) {
//       active?.classList.remove("active");
//       image.classList.add("active");
//     }
//   });
// });


// Share Code
const share = document.getElementById("share");
const notification = document.getElementById("notify");

share.addEventListener("click", () => {
  const link = "www.w3schools.com";
  navigator.clipboard.writeText(link);
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
})

// Scrolling Loads Effect
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.block-reveal');

  // Set up the options for the observer
  const observerOptions = {
    root: null, // use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
  };

  // Create the observer callback function
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Check if the element is intersecting (visible)
      if (entry.isIntersecting) {
        // Add the class to start the CSS animation
        entry.target.classList.add('animate-in');
        
        // Stop observing the element since the animation only needs to run once
        observer.unobserve(entry.target);
      }
    });
  };

  // Create and start the observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  elements.forEach(element => {
    observer.observe(element);
  });
});

// Team Tab Changing Code
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active2"));
    tabPanels.forEach((panel) => panel.classList.remove("active2"));

    btn.classList.add("active2");
    document.getElementById(btn.dataset.tab).classList.add("active2");
  });
});

// Navigation Bar Disappearance
let lastScroll = 0;
const navbar = document.querySelector('nav');

navbar.classList.remove('show');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Always visible when at top
  if (currentScroll <= 0) {
    navbar.classList.remove('hide');
    navbar.classList.add('show');
    return;
  }

  // Hide when scrolling down, show when scrolling up
  if (currentScroll > lastScroll && currentScroll > navbar.offsetHeight) {
    navbar.classList.add('hide');
    navbar.classList.remove('show');
  } else {
    navbar.classList.remove('hide');
    navbar.classList.add('show');
  }

  lastScroll = currentScroll;
});
