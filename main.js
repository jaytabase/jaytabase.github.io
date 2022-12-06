document.querySelector(".mobile_nav").click(function () {
  var mm = document.querySelector(".mobile_menu"),
    mn = document.querySelector(".mobile_nav"),
    a = "active";

  if (mm.classList.contains(a) && mn.classList.contains(a)) {
    mm.classList.remove(a).fadeOut(200);
    mn.classList.remove(a);
    document.querySelector(".mobile_menu li").each(function () {
      document.querySelector(this).classList.remove("slide");
    });
  } else {
    mm.classList.add(a).fadeIn(200);
    mn.classList.add(a);
    document.querySelector(".mobile_menu li").each(function (i) {
      var t = document.querySelector(this);
      setTimeout(function () {
        t.classList.add("slide");
      }, (i + 1) * 100);
    });
  }
});
