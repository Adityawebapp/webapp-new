var $menuTrigger = $(".js-menuToggle");
var $topNav = $(".js-topPushNav");
var $openLevel = $(".js-openLevel");
var $closeLevel = $(".js-closeLevel");
var $closeLevelTop = $(".js-closeLevelTop");
var $navLevel = $(".js-pushNavLevel");



function openPushNav() {
  $topNav.addClass("isOpen");
  $("body").addClass("pushNavIsOpen");
  // $("body").css({"margin-right":"250px"});
  $("html").css({"overflow":"hidden"});
  
}

function closePushNav() {
  $topNav.removeClass("isOpen");
  $openLevel.siblings().removeClass("isOpen");
  $("body").removeClass("pushNavIsOpen");
  $("html").removeAttr("style");

}

$menuTrigger.on("click touchstart", function (e) {
  e.preventDefault();
  if ($topNav.hasClass("isOpen")) {
    closePushNav();
  } else {
    openPushNav();
  }
});

$openLevel.on("click touchstart", function () {
  $(this).next(".js-pushNavLevel").addClass("isOpen");
});

$closeLevel.on("click touchstart", function () {
  $(this).closest($navLevel).removeClass("isOpen");
});

$closeLevelTop.on("click touchstart", function () {
  closePushNav();
});

$("").click(function () {
  closePushNav();
});

$(document).ready(function () {
  $(".pushNav li a").click(function () {
    $("nav ul").removeClass("isOpen");
  $("html").removeAttr("style");

  });
});
