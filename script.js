function locomotiveanimation(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveanimation()

function loadingAnimation(){
    

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
                    onComplete:function(){
                        document.querySelector("#loader").style.display="none"
                    }
                })
            }
            h5timer.innerHTML = grow++
        }), 1)
    }
})

tl.from("#page1",{
    delay:0.8,
    y:1600,
    opacity:0,
    ease:Power4,
})
tl.from("#nav",{
    opacity:0,
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2,#hero4 h1",{
    y:140,
    stagger:0.2
})
tl.from("#hero1,#page2",{
    opacity:0,
},"-=1.2")

}
loadingAnimation() 

function cursoranimation(){
    //custom cursor

document.addEventListener('mousemove',function(dets){
    gsap.to('#crsr',{
        left:dets.x,
        top:dets.y,
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

cursoranimation()

function sheryanimation(){
    Shery.imageEffect('.img-div',{
        style:5,
        config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.2270408297428699},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
    })
}

sheryanimation()    