$('.Videos').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    margin: 10,
    autoplayHoverPause: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1.6,
        dots: false,
      },
      576: {
        items: 1.2,
        dots: false,
      },
      768: {
        items: 5
      },
      1024: {
        items: 6
      },
      1200: {
        items: 6
      }
    }
  });


  $('.Center-slider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    smartSpeed: 2000,
    margin: 10,
    autoplayHoverPause: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1.6,
        dots: false,
      },
      576: {
        items: 1.2,
        dots: false,
      },
      768: {
        items: 6.1
      },
      1024: {
        items: 6.1
      },
      1200: {
        items: 6.1
      }
    }
  });


  $('.Our-process').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    margin: 40,
    autoplayHoverPause: false,
    autoplay: false,
    responsive: {
      0: {
        items: 4.1,
        dots: false,
      },
      576: {
        items: 1.2,
        dots: false,
      },
      768: {
        items: 4.3
      },
      1024: {
        items: 4.3
      },
      1200: {
        items: 4.3
      }
    }
  });


  var tabLink = document.querySelectorAll(".tab-link"),
      tabPane = document.querySelectorAll(".tab-pane");

    tabLink.forEach(function (item) {
      item.addEventListener(
        "click",
        function (e) {
          // ADDS AND REMOVES ACTIVE CLASS ON TABLINKS
          tabLink.forEach(function (item) {
            item.classList.remove("active");
          });
          item.classList.add("active");

          // SOMEHOW EQUATE TAB LINKS TO TAB PANES
          console.log(e.target);
        },
        false
      );
    });

    $(document).ready(function(){
      $(".map").click(function(){
          $(".flot").toggleClass("main");
      });
  });


  $(document).ready(function(){
    $(".map").click(function(){
        $(".weeks_list").toggleClass("main");
    });
});