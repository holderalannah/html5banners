var width = 728;
var height = 90;
var movedisX = 728;
var movedisY = 90;
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

	.fromTo("#headline", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.2, duration: 0.3, stagger: 1, ease: "power1.out" })
	.fromTo("#headline2", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.2, duration: 0.3, stagger: 1, ease: "power1.out" })
	.fromTo("#headline3", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.2, duration: 0.3, stagger: 1, ease: "power1.out" })

	.fromTo("#cta", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.4, duration: 0.3, stagger: 1, ease: "power1.out" },"start")
	.fromTo("#logo", {x:0, opacity:0 },{x: 0, opacity: 1, delay: 0.4, duration: 0.3, stagger: 1, ease: "power1.out" },"start")
	
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