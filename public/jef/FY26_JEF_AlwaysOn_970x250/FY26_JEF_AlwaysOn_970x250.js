var width = 970;
var height = 250;
var movedisX = 970;
var movedisY = 250;
var tl;
var atEndframe;
var animLoaded = true;

function is_anim_loaded() {
	animLoaded = true;
	return true;
}

function firstrun_setup() { 
	TweenLite.defaultOverwrite = 3;
	build_timelines();
}

function ad_begin() {
	clearTimeout(loadingTimer);
	ad.style.visibility="visible";
	ad_reset();
	tl.play(0);
}

function ad_reset() {
	atEndframe=false;
	timesUp=false;
	skipped=false;
}
// Animation timeline
function build_timelines() {
tl = gsap.timeline({ paused:true });
tl

    .to("#bg", {duration:0.01, opacity:1, ease:"power0.out"})
	.fromTo("#border", {opacity: 0 }, { duration: 0, opacity: 1, ease:"power0.out"})

	.fromTo("#headline_a", {y: 40 }, { y: 0, delay:0.25, duration: 0.2, stagger: 1, ease: "slow(0.9, 0.1, false)" })
	.fromTo("#headline_bourbon", {y: -40 }, { y: 0, duration: 0.2, stagger: 1, ease: "slow(0.9, 0.1, false)" }, "<")

	.fromTo("#headline", {opacity:0 },{opacity: 1, delay: 0.2, duration: 0.25, stagger: 1, ease: "slow(0.9, 0.1, false)" })
	.to("#headline", {opacity: 0, delay: 0.2, stagger: 0.75, ease: "power1.out"})

	.fromTo("#headline2", {opacity:0 },{ opacity: 1, delay: 0.25, duration: 0.25, stagger: 1, ease: "slow(0.9, 0.1, false)" })
	.to("#headline2", {opacity: 0, delay: 0.2, stagger: 0.75, ease: "power1.out"})

	.fromTo("#headline3", { opacity:0 },{ opacity: 1, delay: 0.2, duration: 0.25, stagger: 1, ease: "slow(0.9, 0.1, false)" })

	.to("#firstGroup", {opacity: 0, delay: 0.2, stagger: 0.75, ease: "power1.out"})

	.fromTo("#headline4", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.05, duration: 0.25, stagger: 1, ease: "power1.out" })
	.fromTo("#headline5", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.05, duration: 0.25, stagger: 1, ease: "power1.out" })
	.fromTo("#headline6", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.05, duration: 0.25, stagger: 1, ease: "power1.out" })

	.fromTo("#cta", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.05, duration: 0.25, stagger: 1, ease: "power1.out" }, "start")
	.fromTo("#logo", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.05, duration: 0.25, stagger: 1, ease: "power1.out" }, "start")

	// --------

	// .fromTo("#headline", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.5, duration: 0.3, stagger: 1, ease: "power1.out" })
	// .fromTo("#headline2", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.2, duration: 0.3, stagger: 1, ease: "power1.out" })
	// .fromTo("#headline3", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.2, duration: 0.3, stagger: 1, ease: "power1.out" })

	// .fromTo("#cta", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.3, duration: 0.3, stagger: 1, ease: "power1.out" },"start")
	// .fromTo("#logo", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.3, duration: 0.3, stagger: 1, ease: "power1.out" },"start")
	
	.call(function(){console.log('Animation Duration: ' + tl.time() + 's');})
	.call(at_endframe);
}

function custom_clickthru_over() {
    gsap.to("#cta", {duration:0.2, scale: 1.1, transformOrigin: "50% 50%", ease: "sine.inOut"});
}

function custom_clickthru_out() {
	gsap.to("#cta", {duration:0.2, scale: 1, transformOrigin: "50% 50%", ease: "sine.inOut"});
}

function at_endframe() {
	atEndframe=true;
}

function jump_to_endframe() {
	atEndframe=true;
	skipped=true;
}