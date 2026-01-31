function locomotiveanimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

function loadingAnimation() {


    var tl = gsap.timeline()

    tl.from(".line h1, .line h2", {
        y: 150,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5
    })

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5timer = document.querySelector('#line1-part1 h5')
            var grow = 0
            var ani = setInterval((function () {
                if (grow === 100) {
                    clearInterval(ani)
                    gsap.to("#loader", {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: function () {
                            document.querySelector("#loader").style.display = "none"
                        }
                    })
                }
                h5timer.innerHTML = grow++
            }), 35)
        }
    })

    tl.from("#page1", {
        delay: 0.8,
        y: 1600,
        opacity: 0,
        ease: Power4,
    })
    tl.from("#nav", {
        opacity: 0,
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2,#hero4 h1", {
        y: 140,
        stagger: 0.2
    })
    tl.from("#hero1,#page2", {
        opacity: 0,
    }, "-=1.2")

}

function cursoranimation() {
    //custom cursor

    document.addEventListener('mousemove', function (dets) {
        gsap.to('#crsr', {
            left: dets.x,
            top: dets.y,
        })
    })

    //magnet effect
    //core concept of magnet effect is to get the offset of mouse pointer from the center of the element and move the element by that offset value
    //and on mouse leave bring back the element to its original position

    const magnets = document.querySelectorAll("#nav-part2 h4");

    magnets.forEach((ele) => {

        ele.addEventListener("mousemove", (e) => {
            const rect = ele.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(ele, {
                x: x * 0.35,
                y: y * 0.35,
                ease: "power3.out"
            });
        });

        ele.addEventListener("mouseleave", () => {
            gsap.to(ele, {
                x: 0,
                y: 0,
                ease: "power3.out"
            });
        });

    });


    //Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/,);

}

function sheryanimation() {
    Shery.imageEffect('.img-div', {
        style: 5,
        config: { "a": { "value": 1.6, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.2270408297428699 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.35, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true,
    })
}

function videocursor() {
    var videocontainer = document.querySelector("#videocontainer")
    videocontainer.addEventListener("mouseenter", function () {
        videocontainer.addEventListener("mousemove", function (dets) {
            gsap.to("#crsr", {
                opacity: 0,
            })
            gsap.to("#video-cursor", {
                left: dets.x - 500,
                top: dets.y - 300,
            })
        })
        videocontainer.addEventListener("mouseleave", function () {
            gsap.to("#video-cursor", {
                left: 66 + "%",
                top: -10 + "%",
            })
            gsap.to("#crsr", {
                opacity: 1,
            })
        })
    })

}

function videoplay() {
    var videocontainer = document.querySelector("#videocontainer")
    var image = document.querySelector("#videocontainer img")
    var cursor = document.querySelector("#video-cursor")
    var video = document.querySelector("#videocontainer video")
    var isTouch = window.matchMedia('(pointer:coarse)').matches

    function playUI() {
        video.play();
        gsap.to('#videocontainer', {
            width: '100vw',
            left: '0vw',
        })
        image.style.opacity = 0;
        if (cursor) {
            cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="rgba(255,255,255,1)"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>`
            gsap.to("#video-cursor", { scale: 0.5 })
        }
    }

    function pauseUI() {
        video.pause();
        gsap.to('#videocontainer', {
            width: isTouch ? '100vw' : '70vw',
            left: isTouch ? '0vw' : '30vw',
        })
        image.style.opacity = 1;
        if (cursor) {
            cursor.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"30\" height=\"30\" fill=\"rgba(255,255,255,1)\"><path d=\"M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z\"></path></svg>`
            gsap.to("#video-cursor", { scale: 1 })
        }
    }

    if (isTouch) {
        videocontainer.addEventListener("click", function () {
            if (video.paused) {
                playUI()
            } else {
                pauseUI()
            }
        })
    } else {
        videocontainer.addEventListener("click", playUI)
        videocontainer.addEventListener("dblclick", pauseUI)
    }

}

document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
        left: dets.x,
        top: dets.y,
    })
})
function flag() {
    var flag = document.querySelector("#flag")
    var hero3 = document.querySelector("#hero3")
    hero3.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1,
        })
    })
    hero3.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0,
        })
    })
}
// Interactive mobile menu
function mobileMenu() {
    var btn = document.querySelector('#menu-toggle')
    var panel = document.querySelector('#mobile-menu')
    if (!btn || !panel) return

    btn.addEventListener('click', function () {
        var open = panel.classList.toggle('open')
        document.body.classList.toggle('menu-open', open)
        btn.setAttribute('aria-expanded', open ? 'true' : 'false')
        panel.setAttribute('aria-hidden', open ? 'false' : 'true')
        gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.3 })
    })
}

// Tap-to-toggle project images on mobile
function mobileProjectImages() {
    var isTouch = window.matchMedia('(pointer:coarse)').matches
    if (!isTouch) return
    document.querySelectorAll('#image-container .img-div').forEach(function (div) {
        var imgs = div.querySelectorAll('img')
        if (imgs.length < 2) return
        var showingFirst = true
        // initialize states
        gsap.set(imgs[0], { opacity: 1 })
        gsap.set(imgs[1], { opacity: 0 })
        div.addEventListener('click', function () {
            showingFirst = !showingFirst
            gsap.to(imgs[0], { opacity: showingFirst ? 1 : 0, duration: 0.4 })
            gsap.to(imgs[1], { opacity: showingFirst ? 0 : 1, duration: 0.4 })
        })
    })
}

// Awards accordion
function mobileAwardsAccordion() {
    var isTouch = window.matchMedia('(pointer:coarse)').matches
    if (!isTouch) return
    document.querySelectorAll('#page4-blue .blue-div-elem').forEach(function (el) {
        el.addEventListener('click', function () {
            var open = el.classList.toggle('open')
            var p = el.querySelector('p')
            if (!p) return
            gsap.to(p, { opacity: open ? 1 : 0.6, duration: 0.3 })
        })
    })
}
function textillateanimation() {
    var footerh1 = document.querySelector("#footer h1");

footerh1.addEventListener("mouseenter", function () {
    $('#footer h1').textillate({
    autoStart: false,
    in: { effect: 'fadeIn' },
});


    gsap.to(footerh1, {
        webkitTextStroke: "1px white",
        webkitTextFillColor: "transparent",
        fontStyle:"Italic",
        duration: 0.3,
        ease: "power2.out"
    });

    // Force restart animation
    $('#footer h1').textillate('in');
});

footerh1.addEventListener("mouseleave", function () {
    $('#footer h1').textillate({
    autoStart: false,
    in: { effect: 'fadeIn' },
});

    gsap.to(footerh1, {
        webkitTextStroke: "1px white",
        webkitTextFillColor: "white",
        fontStyle:"normal",
        duration: 0.3,
        ease: "power2.out"
    });
    $('#footer h1').textillate('in');
});
}

locomotiveanimation()
loadingAnimation()
cursoranimation()
sheryanimation()
videocursor()
videoplay()
flag()
textillateanimation();
mobileMenu()
mobileProjectImages()
mobileAwardsAccordion()

var title = document.querySelector(".img-title");
var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");

title.addEventListener("mouseenter", function () {
    console.log("hovered");

    gsap.killTweensOf([text1, text2]);

    gsap.to(text1, {
        y: -100,
        duration: 0.4,
        ease: "power3.out"
    });

    gsap.to(text2, {
        y: -100,
        duration: 0.4,
        ease: "power3.out"
    });
});

title.addEventListener("mouseleave", function () {
    console.log("hovered out");

    gsap.killTweensOf([text1, text2]);//chatgpt ki jai ho instantly kills the previous animation in stack the problem was that the unhover happend without any movement so this cleared it 

    gsap.to(text1, {
        y: 0,
        duration: 0.4,
        ease: "power3.out"
    });

    gsap.to(text2, {
        y: 0,
        duration: 0.4,
        ease: "power3.out"
    });
});









