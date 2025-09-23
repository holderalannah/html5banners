var width = 160;
var height = 600;
var movedisX = 160;
var movedisY = 600;
var mainTL;
var atEndframe;
var animLoaded=true;

function is_anim_loaded() {
	animLoaded=true;
	return true;
}

function firstrun_setup() { 
	TweenLite.defaultOverwrite = 1;
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
	//fr1
	.add("fr1")
	.to("#bg", {duration:0, opacity:1, ease:"power0.out"}, "fr1+=0")
	.to("#border", {duration:0, opacity:1, ease:"power0.out"}, "fr1+=0")

	.fromTo("#badge", {scale:0.5, opacity:0},{delay:.5, duration:0.25, opacity:1, scale:1, transformOrigin: "50% 50%", ease:"power2.out"})

	.add("ef1", "+=0")
	.call(function(){console.log('Animation Duration: ' + mainTL.time() + 's');})
	.call(at_endframe);
}

function custom_clickthru_over() {
    gsap.to("#cta", {duration:0.2, scale: 1.1, transformOrigin: "50% 50%", ease: "Sine.easeInOut"});
}

function custom_clickthru_out() {
	gsap.to("#cta", {duration:0.2, scale: 1, transformOrigin: "50% 50%", ease: "Sine.easeInOut"});
}

function at_endframe() {
	atEndframe=true;
}

function jump_to_endframe() {
	atEndframe=true;
	skipped=true;
}