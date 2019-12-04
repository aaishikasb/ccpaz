function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i]; } } }

function getUrlArgs(varname) {
	var url = window.location.href;
	var qparts = url.split("?");
	if (qparts.length == 1) {
  		return ""; }
	var query = qparts[1];
	var vars = query.split("&");
	var value = "";
	for (i=0;i<vars.length;i++) {
		var parts = vars[i].split("=");
		if (parts[0] == varname) {
     		value = parts[1];
		break; } }	
	value = unescape(value);
	value.replace(/\+/g," ");
	return value; }

function resizeDivs() {
	// read cookie, slide down menu of cookie value if present
	var menu = readCookie("menu");
	if(menu) { expandNoSlide("faq"+menu); }
	var size = document.getElementById("content").scrollHeight-10;
	//document.getElementById("ifrm").style.height=10+size+"px";
	document.getElementById("sidebar").style.height=size+"px";
	//document.getElementById("content").style.height=10+size+"px";
	 }

function calcHeight(elem) {
	var hght=500;
	var pad=30; //to avoid the scroll bar
	try {
		if( elem.contentWindow && elem.contentWindow.document) {
			hght=elem.contentWindow.document.body.scrollHeight; } }
	catch(e) {}
	elem.height=hght + pad; }
	
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function openindex() { 
	var OpenWindow=window.open("", "newwin","location=no,menubar=no,scrollbars=no,status=no,titlebar=no,resizable=no,innerHeight=318,innerWidth=402"); 
	OpenWindow.document.write("<img src='img/prod/auto/ca_auto1.jpg'> < />");
	 OpenWindow.document.write("<br>");
	OpenWindow.document.write("<center><a href='javascript:self.close()' target='_self'>Close</a></center>");
	
}

function goImgWin(myImage,myWidth,myHeight,origLeft,origTop) {
myHeight += 24;
myWidth += 24;
TheImgWin = window.open(myImage,'image','height=' +
myHeight + ',width=' + myWidth + ',toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no');
TheImgWin.resizeTo(myWidth+2,myHeight+30);
TheImgWin.moveTo(origLeft,origTop);
TheImgWin.focus();
}