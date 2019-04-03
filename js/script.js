//Animate page navigation

  $(document).ready(function () {  
    $(".page-link").click(function () {  
      var section = $(this).attr("href");
      var pos = $(section).position().top;

      $("html").animate({
        scrollTop: pos
      }, 700);
    });
  });