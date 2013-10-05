/**
 * @author Gerardo Camarena Gomez
 */
dtd.ui.homeWindow={};
dtd.ui.homeWindow.createhomeWindow= function(){
	dtd.ui.homeWindow.win=Titanium.UI.createWindow({
		title:"DTD App",
		backgroundColor:"white",
		orientationModes: [ Ti.UI.PORTRAIT ]
		
	
	});
	var titleLogo= Titanium.UI.createView({
		
		top:dtd.len.longerDim.p1,
		width: dtd.len.shorterDim.p100,
		height: dtd.len.longerDim.p10,
		backgroundColor:"black"
	})
	
	var titleView= Titanium.UI.createImageView({
		
		image:"/Images/deltslogo.png",
		top: dtd.len.longerDim.p1,
		width: dtd.len.shorterDim.p100
		
	})
	dtd.ui.homeWindow.win.add(titleLogo);
	dtd.ui.homeWindow.win.add(titleView);
	
	
}
