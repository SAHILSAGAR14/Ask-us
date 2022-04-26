$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .navbar-nav li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  //scroll activeness

  $(document).ready(function () {
    $("a[href*=#]").bind("click", function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          600,
          function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
          }
        );

      return false;
    });
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      // Assign active class to nav links while scolling
      $(".scroll-active").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".navbar a.active").removeClass("active");
          $(".navbar-nav a").eq(i).addClass("active");
        }
      });
    })
    .scroll();

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Covid Essentials",
      "Personal Care",
      "Ayurvedic Care",
      "Baby Care",
      "Mom Care",
      "Skin Care",
      "Diabetic Care",
      "Sexual wellness",
      "Home care",
      "Women Care",
      "Ortho Care",
      "Fitness Supplements",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Covid Essentials",
      "Personal Care",
      "Ayurvedic Care",
      "Baby Care",
      "Mom Care",
      "Skin Care",
      "Diabetic Care",
      "Sexual wellness",
      "Home care",
      "Women Care",
      "Ortho Care",
      "Fitness Supplements",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// FAQ Section
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
