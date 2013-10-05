/**
 * @author Gerardo Camarena Gomez
 */
dtd.ctr.homeWindow={};
dtd.ctr.homeWindow.setupHomeWindow = function(){
	dtd.ui.homeWindow.createhomeWindow();
	dtd.ui.homeWindow.win.open();
	
	dtd.ui.homeWindow.menuButton.addEventListener("click", function() {
        dtd.ctr.menuWindow.setupmenuWindow();
        dtd.ui.homeWindow.win.close();
    });
}

