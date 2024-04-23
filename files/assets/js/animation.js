gsap.registerPlugin(ScrollTrigger);


gsap.from( ".map-tree #karte-tree .tooltip-item img",{
    duration: 4,
    scale: 0.1,
    scrollTrigger: {
        trigger: ".map-tree #karte-tree .tooltip-item img",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart pause restart restart",
    }
})

/*gsap.to(".map-tree #karte-tree .tooltip-item img", {
    width: 100,
    duration: 3,
    scrollTrigger: {
        trigger: ".map-tree #karte-tree .tooltip-item img"",
      /!*  start: "top bottom",
        end: "bottom bottom",*!/
        toggleActions: "restart none none restart"
    }
});*/
