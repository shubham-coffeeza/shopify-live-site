console.log("Prod Live");
document.addEventListener("DOMContentLoaded", function() {
  
  //Loading overlay start
  function hideLoadingOverlay() {
      setTimeout(function() {
            loadingOverlay.style.display = 'none';
        }, 800);
      loadingOverlay.style.opacity = '0';
      loadingOverlay.style.backgroundColor = 'transparent';
  }
  hideLoadingOverlay();
  //Loading overlay End

  //Custom page marking start
  if (window.location.pathname === '/') {
    document.body.classList.add('custom-homepage');
  }

  if (window.location.pathname === '/collections/coffee-capsules' || window.location.pathname.includes('/collections/coffee-capsules') && !(window.location.pathname.includes('/products'))) {
    document.body.classList.add('custom-capsules');
  }

  if (window.location.pathname === '/collections/ground-coffee' || window.location.pathname.includes('/collections/ground-coffee') && !(window.location.pathname.includes('/products')) && !(window.location.pathname.includes('/ground-coffee-'))) {
    document.body.classList.add('custom-ground-coffee');
  }

  if (window.location.pathname === '/collections/pour-over-coffee-bags' || window.location.pathname.includes('/collections/pour-over-coffee-bags') && !(window.location.pathname.includes('/products'))) {
    document.body.classList.add('custom-pour-overs');
  }

  if (window.location.pathname === '/collections/coffee-machines' || window.location.pathname.includes('/collections/coffee-machines') && !(window.location.pathname.includes('/products'))) {
    document.body.classList.add('custom-machines');
  }

  if (window.location.pathname === '/collections/all-accessories' || window.location.pathname.includes('/collections/all-accessories') && !(window.location.pathname.includes('/products'))) {
    document.body.classList.add('custom-accessories');
  }

  if (window.location.pathname === '/collections/whole-coffee-beans' || window.location.pathname.includes('/collections/whole-coffee-beans') && !(window.location.pathname.includes('/products'))) {
    document.body.classList.add('custom-whole-beans');
  }

  if (window.location.pathname.includes('/products')) {
    document.body.classList.add('custom-accessories-desc');
  }
  
  if (window.location.pathname === '/collections/best-sellers' || window.location.pathname.includes('/collections/best-sellers') && !(window.location.pathname.includes('/products')) && !(window.location.pathname.includes('/best-sellers-'))) {
    document.body.classList.add('custom-bestsellers');
  }

  if (window.location.pathname === '/cart') {
    document.body.classList.add('custom-cart');
  }

  if (window.location.pathname === '/blogs') {
    document.body.classList.add('custom-blog');
  }

  if (window.location.pathname === '/search') {
    document.body.classList.add('custom-search');
  }
  
  if (window.location.pathname.includes('/collections') && !(window.location.pathname.includes('/products'))) {
    document.body.classList.add('generic-collection-pages');
  }

  if (window.location.pathname.includes('/products')) {
    document.body.classList.add('generic-products-details');
  }

  if (window.location.pathname.includes('/policies') || (window.location.pathname === '/pages/warranty-policy') || (window.location.pathname === '/pages/shipping-policy')) {
    document.body.classList.add('custom-policy-page');
  }

  if (window.location.pathname.includes('/one-day-delivery-in-delhi-ncr')) {
    document.body.classList.add('one-day-delivery');
  }

  if (window.location.pathname.includes('/orders')) {
    document.body.classList.add('custom-orders');
  }

  //Custom page marking End

  // Window Scroll start
  window.addEventListener('scroll', function() {
      var targetElement = document.querySelector('.site-header');
      var currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 0) {
          targetElement.classList.add('scrolled');
      } else {
          targetElement.classList.remove('scrolled');
      }
  });
  // Window Scroll End

  //Hamburger start
  const hamburgerWrapper = document.querySelector(".docked-mobile-navigation-container__inner");
  const hamburger = document.querySelector(".docked-mobile-navigation-container__inner .burger-icon");
  const hamburgerClose = document.querySelector(".docked-mobile-navigation-container__inner .close-mobile-menu");
  var hamburgerClicked = false;
  
  hamburger.addEventListener("click", function(){
      hamburgerWrapper.classList.add("clicked");
  })

  hamburgerClose.addEventListener("click", function(){
      hamburgerWrapper.classList.remove("clicked");
  })
  //Hamburger End

  //Navbar Hover Start
  var navs = document.querySelectorAll(".site-nav__item");
  navs.forEach(function(nav, index) {
    var relatedDiv = document.getElementById("show-nav-" + (index + 1));
    var parentDiv = document.getElementById("navbar-wrapper-" + (index + 1));
    var timeout;
    nav.addEventListener('mouseenter', function() {
        timeout = setTimeout(function() {
            relatedDiv.classList.add('hovered');
            parentDiv.classList.add('hovered');
        }, 100); // 1 second delay
    });
    nav.addEventListener('mouseleave', function() {
        clearTimeout(timeout); // Clear the timeout if mouse leaves before 2 seconds
        relatedDiv.classList.remove('hovered');
        parentDiv.classList.remove('hovered');
    });
  });

  var navWrappers = document.querySelectorAll(".navbar-dropdown-wrapper");
  navWrappers.forEach(function(navWrapper, index) {
    var relatedDiv = document.getElementById("show-nav-" + (index + 1));
    var relatedNavbar = document.getElementById("navbar-hover-" + (index + 1));
    var parentDiv = document.getElementById("navbar-wrapper-" + (index + 1));
    navWrapper.addEventListener('mouseenter', function() {
        relatedDiv.classList.add('hovered');
            relatedNavbar.classList.add('active');
        parentDiv.classList.add('hovered');
    });
    navWrapper.addEventListener('mouseleave', function() {
        relatedDiv.classList.remove('hovered');
        relatedNavbar.classList.remove('active');
        parentDiv.classList.remove('hovered');
    });
  });
  //Navbar Hover End

  // navbar variety hover start
  var varities = document.querySelectorAll(".our-coffee-wrapper .variety");
  varities.forEach(function(variety, index) {
    var relatedDiv = document.getElementById("flavour-display-" + (index + 1));
    var firstRelatedDiv = document.getElementById("flavour-display-1");
    var keepDisplays = document.querySelectorAll(".flavours");
    variety.addEventListener('mouseenter', function() {
        keepDisplays.forEach(function(keepDisplay, index) {
          keepDisplay.classList.remove("keep-displaying");
        });
        relatedDiv.classList.add('hovered');
        (index != 0) && firstRelatedDiv.classList.add('others-hovered');
    });
    variety.addEventListener('mouseleave', function() {
        relatedDiv.classList.remove('hovered');
        relatedDiv.classList.add('keep-displaying');
        // (index != 0) && firstRelatedDiv.classList.remove('others-hovered');
    });
  });
  // navbar variety hover end
  
  //Must try wrapper start
  if (window.location.pathname === '/') {
    var divs = document.querySelectorAll(".collection-click");
    divs.forEach(function(div, index) {
      div.addEventListener("click", function() {
        var relatedDiv = document.getElementById("show-" + (index + 1));
        var allRelatedDivs = document.querySelectorAll('.collection-show');
        divs.forEach(function(d) {
          d.classList.remove('active');
        });
  
        div.classList.add('active');
        
        allRelatedDivs.forEach(function(element) {
          if (element === relatedDiv) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
          } else {
            element.classList.remove("d-block");
            element.classList.add("d-none");
          }
        });
        if (window.matchMedia("(max-width: 450px)").matches) {
          window.scrollTo({top: 550, behavior: 'smooth'});
        } else {
          window.scrollTo({top: 1000, behavior: 'smooth'});
        }
      });
    });
    
    document.addEventListener('scroll', function() {
        const target = document.querySelector('.multi-tabs');
        const stickyCCFilters = document.querySelector('.multi-tabs .tabs-primary');
        const targetPosition = target.getBoundingClientRect().top;
    
        if (targetPosition <= 0) {
            stickyCCFilters.classList.add('scrolled-past-must-try');
        } else {
            stickyCCFilters.classList.remove('scrolled-past-must-try');
        }
    });
  }
  //Must try wrapper end

  //Add to cart
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-to-cart-form');
    const submitButton = form.querySelector('button[type="submit"]');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Product added to cart:', data);
        showCartPopup();
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
      function showCartPopup() {
        const cartPopup = document.querySelector('.cart-summary');
        if (cartPopup) {
          cartPopup.style.opacity = '1';
          cartPopup.style.visibility = 'visible';
        }
      }
    });
  });
  //Add to cart
  
  //coffee capsule collection filter wrapper start
  if ((window.location.pathname === '/collections/coffee-capsules' || window.location.pathname.includes('/collections/coffee-capsules') || window.location.pathname.includes('/one-day-delivery-in-delhi-ncr')) && !(window.location.pathname.includes('/products'))) {
  
    var filters = document.querySelectorAll(".coffee-capsule-everything-wrapper .inner");
    filters.forEach(function(filter, index) {
      filter.addEventListener("click", function() {
        var relatedFilter = document.getElementById("display-filter-category-" + (index + 1));
        var allRelatedFilters = document.querySelectorAll('.category-wise-filter');
        filters.forEach(function(d) {
          d.classList.remove('active');
        });
  
        filter.classList.add('active');
        
        allRelatedFilters.forEach(function(element) {
          if (element === relatedFilter) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
          } else {
            element.classList.remove("d-block");
            element.classList.add("d-none");
          }
        });
        if((window.location.pathname.includes('/collections/coffee-capsules') || window.location.pathname === '/collections/coffee-capsules')){
          window.scrollTo({top: 450, behavior: 'smooth'});
        }
        else{
          window.scrollTo({top: 50, behavior: 'smooth'});
        }
        
      });
    });
  
    document.addEventListener('scroll', function() {
        const target = document.querySelector('.everything-wrapper');
        const stickyCCFilters = document.querySelector('.everything-wrapper .main-div-inside');
        const targetPosition = target.getBoundingClientRect().top;
    
        if (targetPosition <= 0) {
            stickyCCFilters.classList.add('sticky-coffee-capsule-everything');
        } else {
            stickyCCFilters.classList.remove('sticky-coffee-capsule-everything');
        }
    });
  }
  //coffee capsule collection filter wrapper end

  //Ground coffee collection filter wrapper start
  if (window.location.pathname === '/collections/ground-coffee' || window.location.pathname.includes('/collections/ground-coffee') && !(window.location.pathname.includes('/products'))) {
    var groundFilters = document.querySelectorAll(".ground-coffee-everything-wrapper .inner");
    groundFilters.forEach(function(filter, index) {
      filter.addEventListener("click", function() {
        var relatedGroundCoffeeFilter = document.getElementById("display-GCoffee-filter-category-" + (index + 1));
        var allRelatedGroundFilters = document.querySelectorAll('.category-wise-GCoffee-filter');
        groundFilters.forEach(function(d) {
          d.classList.remove('active');
        });
  
        filter.classList.add('active');
        
        allRelatedGroundFilters.forEach(function(element) {
          if (element === relatedGroundCoffeeFilter) {
            element.classList.remove("d-none");
            element.classList.add("d-block");
          } else {
            element.classList.remove("d-block");
            element.classList.add("d-none");
          }
        });
        window.scrollTo({top: 450, behavior: 'smooth'});
      });
    });

    document.addEventListener('scroll', function() {
        const target = document.querySelector('.everything-wrapper');
        const stickyCCFilters = document.querySelector('.everything-wrapper .main-div-inside');
        const targetPosition = target.getBoundingClientRect().top;
    
        if (targetPosition <= 0) {
            stickyCCFilters.classList.add('sticky-coffee-capsule-everything');
        } else {
            stickyCCFilters.classList.remove('sticky-coffee-capsule-everything');
        }
    });
  }
  
  // Example of event listener for swatch change
  // document.querySelectorAll('.custom-swatches').forEach(function(swatch) {
  //   swatch.addEventListener('click', function() {
      // Fetch the new variant prices
      // const newOriginalPrice = parseFloat(swatch.getAttribute('data-compare-price'));
      // const newDiscountedPrice = parseFloat(swatch.getAttribute('data-product-price'));
      // Update the percentage off
      // updatePercentageOff(newOriginalPrice, newDiscountedPrice);
    // });
  // });
  //Percent off in product desc
  
  //Machine Demo
  if (!(window.location.pathname === '/collections/coffee-machines') && window.location.pathname.includes('/collections/coffee-machines') && (window.location.pathname.includes('/products'))) {
    document.querySelector(".requedtvideo_demo").addEventListener("click", function() {
      document.querySelector(".request_popup").style.display = "block";
    });
  
    document.querySelector(".modal-header a.close").addEventListener("click", function() {
      document.querySelector(".request_popup").style.display = "none";
    });
  }
  //Machine Demo

  if (window.location.pathname.includes('/products')) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    let intervalId;
    
    function showSlide(index) {
      currentIndex = index;
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
      updateDots();
    }
    
    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
    
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }
    
    dots.forEach(dot => {
      dot.addEventListener('click', (event) => {
        clearInterval(intervalId); // Stop autoplay when a dot is clicked
        const slideIndex = parseInt(event.target.getAttribute('data-slide'));
        showSlide(slideIndex);
        intervalId = setInterval(showNextSlide, 3000); // Restart autoplay
      });
    });
    
    intervalId = setInterval(showNextSlide, 3000); // Start autoplay
  }

    //Grind Guide
  const grindGuideBtn = document.querySelector(".grind_guide_btn_new");
  const grindGuideWrapper = document.querySelector("div#shopify-section-grind-guid-popup");
  const grindGuideClose = document.querySelector(".guide_closs_btn");
  grindGuideBtn.addEventListener("click", function(){
      grindGuideWrapper.style.display = "block";
  })
  grindGuideClose.addEventListener("click", function(){
      grindGuideWrapper.style.display = "none";
  })
  //Grind Guide
  //Ground coffee collection filter wrapper end

  
});

var loadingOverlay = document.getElementById('loading-overlay');
function showLoadingOverlay() {
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.opacity = '1';
}
showLoadingOverlay();

document.addEventListener("DOMContentLoaded", function() {
    let lazyDiv = document.getElementById('lazyDiv');
    let lazyDivInside = document.querySelector('#lazyDiv .main-div-inside');
    let options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && lazyDiv.getAttribute('data-loaded') === 'false') {
                lazyDivInside.style.display = 'block';
                lazyDiv.setAttribute('data-loaded', 'true');
                observer.unobserve(lazyDiv);
            }
        });
    }, options);
    observer.observe(lazyDiv);
});