/**
 * @author Gerardo Camarena Gomez
 */
dtd.ui.menuWindow={};
dtd.ui.menuWindow.createmenuWindow=function(){
	dtd.ui.menuWindow.win=Titanium.UI.createWindow({
		title:"Menu",
		backgroundColor:"white"
	});
	dtd.ui.menuWindow.menuWindowScrollView=Titanium.UI.createScrollView({
		top: dtd.len.longerDim.p1,
		height:dtd.len.longerDim.p500,
		backgroundColor:"black"
	});
	dtd.ui.menuWindow.win.add(dtd.ui.menuWindow.menuWindowScrollView);
	
}
