/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
var dtd={};
var SERVER="http://dtd.scripts.mit.edu/mobile/index.php";
dtd.ctr = {};
dtd.ui = {};
dtd.len={};

if (Titanium.Platform.displayCaps.platformWidth > Titanium.Platform.displayCaps.platformHeight) {
    shorterDim = Titanium.Platform.displayCaps.platformHeight;
    longerDim = Titanium.Platform.displayCaps.platformWidth;
} else {
    shorterDim = Titanium.Platform.displayCaps.platformWidth;
    longerDim = Titanium.Platform.displayCaps.platformHeight;
}

dtd.len.shorterDim = {};

dtd.len.longerDim = {};

for (var i = 1; 1000 >= i; i++) {
    dtd.len.shorterDim["p" + i] = shorterDim * i / 1000;
    dtd.len.longerDim["p" + i] = longerDim * i / 1000;
}


Titanium.include("app/controllers/homeWindowController.js");
Titanium.include("app/views/homeWindow.js");
Titanium.include("app/controllers/loginController.js");
Titanium.include("app/views/login.js")
Titanium.include("app/controllers/menuWindowController.js");
Titanium.include("app/views/menuWindow.js");





//dtd.ctr.homeWindow.setupHomeWindow();

dtd.ctr.loginController.setuploginWindow();
