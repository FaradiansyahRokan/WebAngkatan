var flag = 0;
var menu = document.querySelector('#menu');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
menu.addEventListener('click', () => {
  if (flag === 0) {
    document.getElementById('topmenu').style.transform = `translateY(0)`
    line1.style.backgroundColor = `#232025`;
    line2.style.backgroundColor = `#232025`;
    line1.style.transform = `rotate(40deg)`;
    line1.style.width = `70%`;
    line2.style.transform = `rotate(-40deg)`;
    line2.style.backgroundColor = `#232025`;
    document.getElementById('nav').style.color = `#232025`;
    flag = 1;
  }
  else {
    document.getElementById('topmenu').style.transform = `translateY(-100%)`
    line1.style.backgroundColor = `#cecece`;
    line2.style.backgroundColor = `#cecece`;
    line1.style.transform = `rotate(00deg)`;
    line1.style.width = `100%`;
    line2.style.transform = `rotate(-0deg)`;
    line2.style.backgroundColor = `#cecece`;
    document.getElementById('nav').style.color = `#cecece`;
    flag = 0;
  }
}) 


function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

// var customCursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", function(event) {
//     customCursor.style.left = event.clientX + "px";
//     customCursor.style.top = event.clientY + "px";
// });

gsap.from(".page1 h1", {
    x: 100,
    rotate: 0,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
gsap.from(".page1 h2", {
    x: -100,
    rotate: 0,
    opacity: 0,
    delay: 1.7,
    duration: 1.0
})

gsap.registerPlugin(ScrollTrigger);

// Definisikan efek ScrollTrigger untuk efek blur
gsap.to(".rokan", {
    backdropFilter: "blur(500px)", // Ubah nilai blur sesuai keinginan Anda
    scrollTrigger: {
        trigger: ".rokan",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page2 h1", {
    y: -40,
}, "anim")
tl.to(".page2 h2", {
    x: 50,
}, "anim")
tl.to(".page2-right", {
    y: 40,
}, "anim")


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 img", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})

gsap.to('#finish', {
    scrollTrigger: {
      trigger: '#finish',
      scroller: '.main',
      // markers: true,
      start: 'top 35%',
    },
    opacity: 1,
    duration:1,
    onStart: function () {
      $(document).ready(function () {
        $('#finish h1').textillate({ in: { effect: 'fadeInUp' } });
      })
    },
  })
  gsap.to('.page4 #line', {
    scrollTrigger: {
      trigger: '.page4',
      scroller: '.main',
      scrub: 2,
      end: 'bottom 90%',
      // markers:true,
      start: 'top 80%',
    },
    width: '100%',
  })
  
  var slide1h1 = document.querySelectorAll('#page8 .slide1h1 h1');
slide1h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(-96%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page8',
      scroller: '.main',
      // markers: true,
      scrub: 3
    }
  })
})
var slide2h1 = document.querySelectorAll('#page8 .slide2h1 h1');
slide2h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(0%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page8',
      scroller: '.main',
      // markers: true,
      scrub: 3
    }
  })
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var a = document.querySelectorAll("#nav a")
var purple = document.querySelector("#purple")
a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})

const myText = new SplitType('#my-text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .7
})
var textElement = document.getElementById("more");

// Daftar teks yang akan ditampilkan secara bergantian
var texts = ["RPL", "TKJ"];

// Indeks saat ini dari teks yang ditampilkan
var currentIndex = 1;

// Fungsi untuk mengubah teks dengan animasi
function changeText() {
  // Fade out animasi
  gsap.to(textElement, { opacity: 0, duration: 0.5, onComplete: function() {
    // Ubah teks dan fade in animasi
    textElement.textContent = texts[currentIndex];
    gsap.to(textElement, { opacity: 1, duration: 0.5 });
    
    currentIndex = (currentIndex + 1) % texts.length;
  }});
}

// Tambahkan event listener ke elemen teks
textElement.addEventListener("click", changeText);