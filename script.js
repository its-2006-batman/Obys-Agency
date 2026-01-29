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