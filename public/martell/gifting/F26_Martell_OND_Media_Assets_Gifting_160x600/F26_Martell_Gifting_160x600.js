var width = 160;
var height = 600;
var movedisX = 160;
var movedisY = 600;
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

	.to("#bg", {duration: 0, opacity: 1, ease:"power0.out"}, "fr1+=0")
	.to("#border", {duration: 0, opacity: 1, ease:"power0.out"}, "fr1+=0")

	

	.from("#bird",{x: -100, y: 100, opacity: 0, delay: 0.1, duration: .85, stagger: 1, ease: "power2.out" },"start")

	.fromTo("#medal", {opacity: 0, y: -18}, {y: 0, opacity: 1, duration: .75, stagger: 1, ease: "slow(0.9, 0.1, false)" } ,"start")
	.fromTo("#bottle", {opacity: 0, y: 60}, {y: 0, opacity: 1, duration: .75, stagger: 1, ease: "slow(0.9, 0.1, false)" } ,"start")

	.fromTo("#headline", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.08, duration: 0.3, stagger: 1, ease: "power1.out" })
	.fromTo("#cta", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.08, duration: 0.3, stagger: 1, ease: "power1.out" })

	.fromTo("#glow",  {opacity: 0}, {opacity: 1, duration: 2, backgroundPosition: "-297px 0", ease: "power1.out"}, "-=1")
	
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