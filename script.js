

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
        }), 25 )
    }
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
})




