// gsap.to("#box", {
//     x: 1000,
//     rotate : 360,
//     duration: 10,
//     deley : 2,
//     backgroundColor : "black"

// })
// gsap.from("#box", {
//     x: 1000,
//     rotate : 360,
//     duration: 2,
//     deley : 1,
//     backgroundColor : "black"

// })
var tl = gsap.timeline();
tl.to("#box1" , {
    x : 1200,
    rotate : 360,
    scale : 0.5,
    duration : 2,
    delay : 1
})
tl.to("#box2" , {
    x : 1200,
    rotate : 360,
    scale : 0.5,
    duration : 2,
    
})
tl.to("#box3" , {
    x : 1200,
    rotate : 360,
    scale : 0.5,
    duration : 2,
    
})