const tl = new TimelineMax();

tl.fromTo('.nav-links a', 1, { opacity: "0" }, {opacity: "1", ease: Power2.easeInOut})
.fromTo('.logo', 1, {x: "-150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.left', 1, {x: "-150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.right', 1, {x: "150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")
.fromTo('.centertext h2', 1, {x: "150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1")

