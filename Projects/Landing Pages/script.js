let tl = gsap.timeline()

tl.from('#nav img, #nav h3, #nav h4, #nav button',{
    y: -100,
    // x: -100,
    duration: 1,
    delay: .35,
    opacity: 0,
    stagger: 0.2
})


tl.from('#main h1',{
    y:100,
    opacity: 0,
    stagger: 0.3
})

tl.from('#main>img',{
    scale: 0,
    opacity: 0,
    stagger: 0.25,
})

tl.to('#main>img, #main>h1>span',{
    scale: 0.95,
    // stagger: 0.25,
    repeat:-1,
    duration: 2,
    yoyo: true
})

tl.from('h5',{
    scale: 0,
    opacity: 0
})

tl.to('h5',{
    y: 30,
    repeat: -1,
    duration: 1.5,
    yoyo: true
})