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
function init_ad() {
	init_elements();
	firstrun_setup();
	ad_begin();
}
// step 1: wait for window.onLoad, check if EB is initialized
window.onload = function() {
	init_ad();
  if (Enabler.isInitialized()) {
    // init_ad();
  } else {
    //Enabler.addEventListener(studio.events.StudioEvent.INIT, init_ad);
  }
}

// step 2: setup page elms and wait for external modules to load


// step 3: continue after async loading verified ...
// function init_continue() {
	
// }

//// first run

function init_elements() {	
	ad = getElm("banner");

	clickthru = getElm("clickthru");	
	clickthru.addEventListener("mouseover", clickthru_over);
	clickthru.addEventListener("mouseout", clickthru_out);
	clickthru.addEventListener("click", clickthrough);
}


//// FUNCTIONS

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
		custom_clickthru_over(); // in animation.js
	}
}
function clickthru_out() {
	if (atEndframe==true) {
	    custom_clickthru_out();
	}
}

function clickthrough() {
	//jump_to_endframe();
  Enabler.exit("ClickThrough");
	window.open(window.clickTag);
}


function getElm(id) { 
	var returnElm;
	if (document.getElementById(id)) { returnElm=document.getElementById(id); }
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

