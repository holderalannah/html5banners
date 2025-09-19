var width = 300;
var height = 250;
var movedisX = 300;
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

	.to("#bg", {duration: 0, opacity: 1, ease:"power0.out"})
	.to("#border", {duration: 0, opacity: 1, ease:"power0.out"})


	.from("#bird",{x: -100, y: 100, opacity: 0, delay: 0.1, duration: .85, stagger: 1, ease: "power2.out" }, "start")
	.fromTo("#bottle", {opacity: 0, y: 50}, {y: -114, opacity: 1, duration: .75, stagger: 1, ease: "slow(0.9, 0.1, false)" },"start")

	.fromTo("#headline", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.1, duration: 0.3, stagger: 1, ease: "power1.out" })
	.fromTo("#cta", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.1, duration: 0.3, stagger: 1, ease: "power1.out" })

	.fromTo("#glow",  {opacity: 0}, {opacity: 1, duration: 2, backgroundPosition: "-301px 0", ease: "power1.out"}, "-=1")

	
	.call(function(){console.log('Animation Duration: ' + tl.time() + 's');})
	.call(at_endframe);
}

function custom_clickthru_over() {
    gsap.to("#cta-hover", { duration:0, opacity: 1, ease: "power1.inOut"});
    gsap.to("#cta-regular", { duration:0, opacity: 0, ease: "power1.inOut"});
}

function custom_clickthru_out() {
	gsap.to("#cta-hover", { duration: 0, opacity: 0, ease: "power1.inOut"});
    gsap.to("#cta-regular", { duration:0, opacity: 1, ease: "power1.inOut"});
}

function at_endframe() {
	atEndframe=true;
}

function jump_to_endframe() {
	atEndframe=true;
	skipped=true;
}