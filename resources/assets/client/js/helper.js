/**
 * [fetchSupport description]
 * https://developer.mozilla.org/en/docs/Web/API/GlobalFetch/fetch
 */
var HelperInit = function(){}


HelperInit.prototype.fetchSupport = function(){
	return (window.fetch)?true:false;
};

HelperInit.prototype.ifExist = function(element){
	return (element.length)?true:false;
};

HelperInit.prototype.isUndefined = function(key){
	return (key == null)?true:false;
};

HelperInit.prototype.validateKeyPress = function(keyCode){
	return (keyCode == 40 || keyCode == 38 || keyCode == 13)?true:false;
};
HelperInit.prototype.browserDetection = function(argument){
	    // Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	    // Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';
	    // Safari <= 9 "[object HTMLElementConstructor]" 
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	    // Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	    // Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;
	    // Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	    // Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;
};

exports.HelperInit = HelperInit;