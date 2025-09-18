var width = 320;
var height = 50;
var movedisX = 320;
var movedisY = 50;
var mainTL;
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
	mainTL.play(0);
}

function ad_reset() {
	atEndframe=false;
	timesUp=false;
	skipped=false;
}

function build_timelines() {	
	mainTL = gsap.timeline({ paused:true });	
	mainTL	   

	.to("#bg", {duration:0, opacity:1, ease:"power0.out"})
	.fromTo("#border", {opacity: 0 }, { duration: 0, opacity: 1, ease:"power0.out"})
	.fromTo("#bottle", {x: 0 }, {duration: 1, y: -94, transformOrigin: "0% 0%", ease:"power2.out" })

	.fromTo("#headline1 img", {x:0, opacity:0 },{x: 0, opacity: 1, duration: 0.3, stagger: 1, ease: "power1.out" })
	.fromTo("#headline2 img", {x:0, opacity:0 },{x: 0, opacity: 1, duration: 0.3, stagger: 1, ease: "power1.out" })

	.to("#headline1 img", {x: 0, opacity: 0, delay: .4, duration: 0.2, stagger: 1, ease: "power1.out" })
	.to("#headline2 img", {x: 0, opacity: 0, delay: .4, duration: 0.2, stagger: 1, ease: "power1.out" })

	.fromTo("#cta img", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.5, duration: 0.3, stagger: 1, ease: "power1.out" })
	
	.call(function(){console.log('Animation Duration: ' + mainTL.time() + 's');})
	.call(at_endframe);
}

function custom_clickthru_over() {
    gsap.to("#cta", {duration:0.2, scale: 1.1, transformOrigin: "50% 50%", ease: "sine.inOut"});
}

function custom_clickthru_out() {
	gsap.to("#cta", {duration:0.2, scale: 1, transformOrigin: "50% 50%", ease: "sine.inOut"});
}

//// ENDFRAME
function at_endframe() {
	atEndframe=true;
}

function jump_to_endframe() {
	atEndframe=true;
	skipped=true;
}