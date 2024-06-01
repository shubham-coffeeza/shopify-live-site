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

  if (window.location.pathname === '/collections/coffee-capsules') {
    document.body.classList.add('custom-capsules');
  }

  if (window.location.pathname === '/collections/ground-coffee') {
    document.body.classList.add('custom-ground-coffee');
  }

  if (window.location.pathname === '/collections/pour-over-coffee-bags') {
    document.body.classList.add('custom-pour-overs');
  }

  if (window.location.pathname === '/collections/coffee-machines') {
    document.body.classList.add('custom-machines');
  }

  if (window.location.pathname === '/collections/all-accessories') {
    document.body.classList.add('custom-accessories');
  }
  
  if (window.location.pathname === '/collections/best-sellers') {
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
    });
  });
//Must try wrapper end


//Add to cart
  function addToCartAndShowPopup(productId, quantity) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: productId,
        quantity: quantity
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product added to cart:', data);
      showCartPopup();
    })
    .catch((error) => {
      console.error('Error adding product to cart:', error);
    });
  }
  
  function showCartPopup() {
    const cartPopup = document.querySelector('.cart-summary');
    if (cartPopup) {
      cartPopup.style.opacity = '1';
      cartPopup.style.visibility = 'visible';
    }
  }
//Add to cart

  
//coffee capsule collection filter wrapper start
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
    });
  });
//coffee capsule collection filter wrapper end

//Ground coffee collection filter wrapper start
  var groundFilters = document.querySelectorAll(".ground-coffee-everything-wrapper .inner");
  groundFilters.forEach(function(filter, index) {
    console.log("1");
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
    });
  });
//Ground coffee collection filter wrapper end

//Swatches price change dynamically
  const swatches = document.querySelectorAll('.product-swatch');
  const discountElement = document.getElementById('discount-percentage');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      const variantId = this.getAttribute('data-variant-id');

      const variant = getVariantById(variantId); 
      
      if (variant && variant.compare_at_price && variant.price) {
        const originalPrice = variant.compare_at_price;
        const discountedPrice = variant.price;
        const percentageOff = Math.round((originalPrice - discountedPrice) * 100 / originalPrice);
        
        discountElement.textContent = `${percentageOff}% off`;
      } else {
        discountElement.textContent = '';
      }
    });
  });

  function getVariantById(id) {
    const variants = [
      {id: '1', compare_at_price: 100, price: 80},
      {id: '2', compare_at_price: 120, price: 90},
    ];
    return variants.find(variant => variant.id === id);
  }
//Swatches price change dynamically


//Read more description
  var clicked = false;
  document.querySelector(".product-description-custom+.read-more-btn").addEventListener("click", function() {
    
    var divs = document.querySelector(".product-description-custom");
    if(!clicked){
      divs.classList.add("read-more");
      document.querySelector(".product-description-custom+ .read-more-btn").innerHTML = "Read Less";
      
      clicked = true;
    }
    else{
      divs.classList.remove("read-more");
      document.querySelector(".product-description-custom+ .read-more-btn").innerHTML = "Read More";
      clicked = false;
    }
  });
//Read more description

//Frequently Bought Together
  document.querySelector('main .cbb-frequently-bought-container').classList.add("o");
//Frequently Bought Together

  
//Machine Demo
  document.querySelector(".requedtvideo_demo").addEventListener("click", function() {
    document.querySelector(".request_popup").style.display = "block";
  });

  document.querySelector(".modal-header a.close").addEventListener("click", function() {
    document.querySelector(".request_popup").style.display = "none";
  });
//Machine Demo

});

var loadingOverlay = document.getElementById('loading-overlay');
function showLoadingOverlay() {
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.opacity = '1';
}
showLoadingOverlay();

//Aria-label
  var dialogElement = document.querySelector('.banner-custom .slick-track');
console.log(dialogElement); // Should log the element or null
if (dialogElement) {
    dialogElement.setAttribute('aria-label', 'Descriptive Coffeeza Banner');
} else {
    console.error('Element not found');
}
//Aria-label