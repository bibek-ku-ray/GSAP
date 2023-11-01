
let tl = gsap.timeline();

tl.from('#nav',{
    opacity:0,
    delay: 0.3
})

tl.from('#nav h3, #nav p, #nav button',{
    y:-80,
    opacity: 0,
    duration: .75,
    stagger: 0.3
})

tl.from('.left h1',{
    x: -500, 
    opacity:0,
    duration:0.5,
    stagger: 0.3
})


tl.from('.right img', {
    scale: 0,
    opacity: 0,
    duration: 0.5
})

gsap.from('#page2 .box',{
    scale: 0,
    opacity: 0,
    stagger: .5,
    scrollTrigger: {
        trigger: '#page2 .box',
        scroller:"body",
        start: 'top 70%',
        markers: true
    }
})