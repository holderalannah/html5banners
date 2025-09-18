// standard_banner.js
// core functions for polite Sizmek banners

//// init vars 
var trackOnce = true;
var script = {name:"standard_banner", version:"1.1", date:"2016-07-31", author:"Chris Graves"};
var ad, banner;
var clickthru;
var buttonReplay;
var loadingTimer;
var loadingTimerCount=0;
var gsapLoaded=false;
var animLoaded=false;
var atEndframe=false;
var timesUp;
var skipped=false;

//// INIT

// step 1: wait for window.onLoad, check if EB is initialized
window.onload = function() {
  if (Enabler.isInitialized()) {
    init_ad();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init_ad);
  }
}

// step 2: setup page elms and wait for external modules to load
function init_ad() {
	init_elements();
	wait_for_async_loading();
}

// step 3: continue after async loading verified ...
function init_continue() {
	firstrun_setup();
	ad_begin();
}

//// first run

function init_elements() {	
	ad = getElm("ad");
	//ad.style.visibility="visible";
	//banner = getElm("banner");
	//clickthru
	clickthru = getElm("clickthru");	
	clickthru.addEventListener("mouseover", clickthru_over);
	clickthru.addEventListener("mouseout", clickthru_out);
	clickthru.addEventListener("click", clickthrough);
	/*reply
	buttonReplay = getElm("replayButton");
	buttonReplay.addEventListener("mouseover", replay_over);
	buttonReplay.addEventListener("mouseout", replay_out);
	buttonReplay.addEventListener("click", replay_clicked);
	*/
	//
	//isIE = /*@cc_on!@*/false || !!document.documentMode;
	//if (isIE===true || isIEedge===true) { document.getElementById("ibmLogoImage").src = "../images/ibmlogo.png"; }
}

function wait_for_async_loading() {
	loadingTimerCount++;
	if (loadingTimerCount < 20) { // 10 seconds total, check every 0.5/sec	
		if (gsapLoaded===true && animLoaded===true) {
			init_continue();
		}		
		else {			
			if (window.TweenLite && window.CSSPlugin && window.TimelineLite) {
				gsapLoaded=true;			
			} 
			if (!animLoaded) {
				try { animLoaded = is_anim_loaded(); } catch(e) { }
			}
			loadingTimer = setTimeout(wait_for_async_loading, 500);
		}
	} else {
		//show_endframe_manually();
	}
}

//window.addEventListener("load", initEB);


//// FUNCTIONS

function tracking_start_play() {
	//EB.automaticEventCounter("Ad Played 0% (start)");
}

function tracking_half_played() {
	//EB.automaticEventCounter("Ad Played 50%");
}

function tracking_fully_played() {
	//EB.automaticEventCounter("Ad Played 100%");
}

function ad_times_up() {
	clearTimeout(adTimer);
	timesUp=true;
	if (!skipped) { 
		//EB.automaticEventCounter("Ad Played 100%"); 
	}
}


//// INTERACTION

function clickthru_over() {
	//console.log("atEndframe = " + atEndframe)
	//console.log("arrowTL.isActive = " + !arrowTL.isActive())
	if (atEndframe==true) {
		//play_arrow();
		custom_clickthru_over(); // in animation.js
	}
}
function clickthru_out() {
	if (atEndframe==true) {
	    custom_clickthru_out();
	}
	//arrowTL.pause();
	//TweenLite.to("#ctaArrow", 0.2, {x:0, ease:"Power2.easeOut"} );
}

function clickthrough() {
	//jump_to_endframe();
  Enabler.exit("ClickThrough");
	window.open(window.clickTag);
}

//replay
/*
function replay_over() {
	//transformOrigin:"50% 50%", 
	TweenLite.to("#replayButton", 0.5, {rotation:360, ease:"Power2.easeInOut"});
}
function replay_out() {
	TweenLite.to("#replayButton", 0.5, {rotation:0, ease:"Power2.easeInOut"});
}
function replay_clicked() {
	ad_begin();
}
*/
//// MISC

function getElm(id) { 
	var returnElm;
	if (document.getElementById(id)) { returnElm=document.getElementById(id); }
	//else { returnElm=document.getElementById(id).childNodes[0]; }
	//else { returnElm = document.getElementsByClassName(id)[0]; } // only the 1st
	return returnElm;
}

function trace(msg) {
	//console.log(msg);	
}

/////////////////////////////////////////////////
// browser detect

var isIOS = ((/iPhone|iPad|iPod/i).test(navigator.userAgent));// && !window.MSStream);
var isAndroid = (/android/i.test(navigator.userAgent));
var isIphone = (/iPhone/i).test(navigator.userAgent);
var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
var isSafari = (/^((?!chrome|android).)*safari/i).test(navigator.userAgent);
var isSafari7 = (!!navigator.userAgent.match(' Safari/') && !navigator.userAgent.match(' Chrom') && !!navigator.userAgent.match(' Version/7.') );
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isChrome=false;
var isIOSChrome=false;
var isChromium = window.chrome;
var isOpera = window.navigator.userAgent.indexOf("OPR") > -1;
var isIEedge = window.navigator.userAgent.indexOf("Edge") > -1;
if(window.navigator.userAgent.match("CriOS")) { isIOSChrome=true; } 
else if(isChromium !== null && isChromium !== undefined && window.navigator.vendor === "Google Inc." && isOpera === false && isIEedge === false) { isChrome=true; }
var isFirefox=false; if (navigator.userAgent.indexOf("Firefox") !== -1 ) { isFirefox=true; }
//
if (isMobile || isAndroid || isIphone) { var isMobileVersion=true; } else { isMobileVersion=false; }

