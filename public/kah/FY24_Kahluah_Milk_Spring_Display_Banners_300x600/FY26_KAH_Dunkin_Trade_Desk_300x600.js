var width = 300;
var height = 600;
var movedisX = 300;
var movedisY = 600;
var mainTL;
var atEndframe;
var animLoaded=true;

function is_anim_loaded() {
	animLoaded=true;
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
	//fr1
	.add("fr1")
	//.set("#cta", {x:80, y:512, width:141, height:32, opacity:0, transformOrigin: "50% 50%"}, "fr1+=0")
    .set("#badge", {x:136, y:206, width:100, height:100, opacity:0, transformOrigin: "50% 50%"}, "fr1+=0")
	.to("#bg", {duration:0, opacity:1, ease:"power0.out"}, "fr1+=0")
	.to("#border", {duration:0, opacity:1, ease:"power0.out"}, "fr1+=0")

	.fromTo("#liqor", {x:0},{duration:0.2, x:0, transformOrigin: "0% 0%", ease:"circ.out"}, "fr1+=0")
	//.fromTo("#cta", {scale:1, opacity:0},{duration:0.35, opacity:1, scale:1, transformOrigin: "50% 50%", ease:"circ.out"}, "fr1+=0")
	.fromTo("#pour", {clip:"rect(0px, 71px, 0px, 0px)", opacity:0}, {duration:0.2, clip:"rect(0px, 710px, 283px, 0px)", opacity:1, transformOrigin: "100% 0%", ease:"sine.out"}, "fr1+=0.5")
	.fromTo("#pour", {rotation:0}, {duration: 2, rotation: 3, transformOrigin: "100% 0%", ease:"sine.out"}, "fr1+=0.75")
	.fromTo(".headline", {y:30, opacity:0},{duration:0.35, y:0, opacity:1, stagger:0.75, ease: "slow(0.5, 0.4, false)"}, "fr1+=1")
	.to("#pour", {duration:1.5, rotation: 0.9, transformOrigin: "100% 0%", ease:"sine.out"}, "fr1+=2.75")
	//.to("#pour", {duration:0.5, opacity:0, transformOrigin: "100% 0%", ease:"slow(0.5,0.7,false)"}, "fr1+=4")
	.fromTo("#badge", {scale:0.5, opacity:0},{duration:0.35, opacity:1, scale:1.1, transformOrigin: "50% 50%", ease:"power2.out"}, "fr1+=2.75")
	.to("#badge", {duration:0.2, scale: 1, transformOrigin: "50% 50%", ease: "power2.inOut"})

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