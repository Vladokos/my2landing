const header = $("header");
const sidebar = $("#sidebar");

$(document).ready(() => {
  $("#reviews-items").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    adaptiveHeight: true,
  });
});

$("#burger").on("click", () => {
  if (sidebar.hasClass("active"))
    return sidebar.removeClass("active").addClass("disable");

  sidebar.removeClass("disable").addClass("active");
});

$("#close").on("click", () => {
  sidebar.removeClass("active").addClass("disable");
});

$(document).on("scroll", () => {
  if ($(document).scrollTop() > 0 && !header.hasClass("active")) {
    header.addClass("active");
  } else if ($(document).scrollTop() === 0) {
    header.removeClass("active");
  }
});

$("#individual").on("click", () => {
  if (!$("#switch").hasClass("individual")) {
    $("#switch").removeClass("company");

    $("#plan").removeClass("company");
    setTimeout(() => {
      $("#plan").addClass("individual");
    }, 100);
  }
});

$("#company").on("click", () => {
  if (!$("#switch").hasClass("company")) {
    $("#switch").removeClass("individual");

    $("#switch").addClass("company");

    $("#plan").removeClass("individual");
    setTimeout(() => {
      $("#plan").addClass("company");
    }, 100);
  }
});
