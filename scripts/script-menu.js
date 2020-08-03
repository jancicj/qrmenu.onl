const tl = new TimelineMax();

tl.fromTo('.logo', 2, {opacity: "0"}, {opacity: '1', ease: Power2.easeInOut}, "-=0")
.fromTo('.menuleft', 1, {x: "-150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1.8")
.fromTo('.menuright', 1, {x: "150%"}, {x: '0%', ease: Power2.easeInOut}, "-=1.8")
.fromTo('.centertext h2', 1, {opacity: "0"}, {opacity: '1', ease: Power2.easeInOut}, "-=1.5")