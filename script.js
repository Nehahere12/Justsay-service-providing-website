// locomotive js code
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();
// page1 animation
function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(30%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1,#page1 p,#page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

function navAnimation() {
  var nav = document.querySelector("nav .navpart2");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#navbottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".navpart2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".navpart2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".navpart2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".navpart2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#navbottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
navAnimation();
// page2
//
function page2animation() {
  var rightelems = document.querySelectorAll(".rightelem");
  rightelems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 190,
      });
    });
  });
}
page2animation();
// video
function videohere() {
  var page3center = document.querySelector(".page3center");
  var video = document.querySelector("#page3 video");
  page3center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1)scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause(),
      gsap.to(video, {
        transform: "scaleX(0.7)scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
      });
  });
}
videohere();
// apge5
var sections = document.querySelectorAll(".secright");
sections.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // console.log("video");
    elem.childNodes[3].style.opacity = 1;
    elem.childNodes[3].play();
  });
  elem.addEventListener("mouseleave", function () {
    // console.log("video");
    elem.childNodes[3].style.opacity = 0;
    elem.childNodes[3].pause();
    elem.childNodes[3].load();
  });
});
// var visual = document.querySelectorAll(".visual");
// visual.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     // console.log("video");
//     elem.childNodes[2].style.opacity = 1;
//     elem.childNodes[2].play();
//   });
//   elem.addEventListener("mouseleave", function () {
//     // console.log("video");
//     elem.childNodes[3].style.opacity = 0;
//     elem.childNodes[3].pause();
//     elem.childNodes[3].load();
//   });
// });
document.querySelectorAll(".visual, .visual1").forEach(function (container) {
  const img = container.querySelector("img");
  const video = container.querySelector("video");

  container.addEventListener("mouseenter", function () {
    video.style.opacity = 1;
    video.play();
  });

  container.addEventListener("mouseleave", function () {
    video.style.opacity = 0;
    video.pause();
  });
});
// for page10third

gsap.from(".page103second .ones", {
  x: 0,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".page103second",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from(".page103third .ones", {
  x: 0,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".page103second",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from(".page103fourth .ones", {
  x: 0,
  duration: 0.5,

  scrollTrigger: {
    trigger: ".page103second",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
loadingAnimation();
// for Cases.html
document.addEventListener("DOMContentLoaded", function () {
  const cases = document.querySelectorAll(".cases");
  const areas = document.querySelectorAll(".areas");
  const therapi = document.querySelectorAll(".therapi");
  const Donate = document.querySelectorAll(".Donate");
  const Book = document.querySelectorAll(".Book");
  const us = document.querySelectorAll(".us");

  cases.forEach(function (caseElement) {
    caseElement.addEventListener("click", function () {
      window.location.href = "cases.html";
    });
  });
  areas.forEach(function (caseElement) {
    caseElement.addEventListener("click", function () {
      window.location.href = "Areas.html";
    });
  });
  therapi.forEach(function (caseElement) {
    caseElement.addEventListener("click", function () {
      window.location.href = "Therapy.html";
    });
  });
  Donate.forEach(function (caseElement) {
    caseElement.addEventListener("click", function () {
      window.location.href = "Donate.html";
    });
  });
  Book.forEach(function (caseElement) {
    caseElement.addEventListener("click", function () {
      window.location.href = "Book.html";
    });
  });
  us.forEach(function (caseElement) {
    caseElement.addEventListener("click", function () {
      window.location.href = "us.html";
    });
  });
});
