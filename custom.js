document.addEventListener("DOMContentLoaded", function() {
  
  //Loading overlay start
  function hideLoadingOverlay() {
      setTimeout(function() {
            loadingOverlay.style.display = 'none';
        }, 800);
      loadingOverlay.style.opacity = '0';
      loadingOverlay.style.backgroundColor = 'transparent';
  }
  hideLoadingOverlay()
  //Loading overlay End

  //Custom page marking start
  if (window.location.pathname === '/') {
    document.body.classList.add('custom-homepage');
  }
  // if (window.location.pathname.includes('/pages') && window.location.pathname !== '/pages/about') {
  //   document.body.classList.add('different-pages');
  // }
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
    var parentDiv = document.getElementById("navbar-wrapper-" + (index + 1));
    navWrapper.addEventListener('mouseenter', function() {
        relatedDiv.classList.add('hovered');
        parentDiv.classList.add('hovered');
    });
    navWrapper.addEventListener('mouseleave', function() {
        relatedDiv.classList.remove('hovered');
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
  
});

var loadingOverlay = document.getElementById('loading-overlay');
function showLoadingOverlay() {
    loadingOverlay.style.display = 'block';
    loadingOverlay.style.opacity = '1';
}
showLoadingOverlay();