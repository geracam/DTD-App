/**
 * @author Gerardo Camarena Gomez
 */
dtd.ui.homeWindow={};
dtd.ui.homeWindow.createhomeWindow= function(){
	dtd.ui.homeWindow.win=Titanium.UI.createWindow({
		title:"DTD App",
		backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [ { color: '#ffd700', offset: 0.0}, { color: 'white', offset: 0.2 } ],
   },
		orientationModes: [ Ti.UI.PORTRAIT ]
		
	
	});

	
	dtd.ui.homeWindow.titleView= Titanium.UI.createImageView({
		
		image:"/Images/deltslogo.png",
		top: dtd.len.longerDim.p1,
		width: dtd.len.shorterDim.p1000
		
	})
	dtd.ui.homeWindow.menuButton=Titanium.UI.createButton({
		title: "Menu",
		left: dtd.len.shorterDim.p100,
		top:dtd.len.longerDim.p300,
		width: dtd.len.shorterDim.p300,
		height: dtd.len.longerDim.p100
	})
	dtd.ui.homeWindow.calendarButton=Titanium.UI.createButton({
		title: "Calendar",
		left: dtd.len.shorterDim.p600,
		top:dtd.len.longerDim.p300,
		width: dtd.len.shorterDim.p300,
		height: dtd.len.longerDim.p100


	})
	dtd.ui.homeWindow.dutySheetButton=Titanium.UI.createButton({
		title: "Duty Sheet",
		left: dtd.len.shorterDim.p100,
		top:dtd.len.longerDim.p500,
		width: dtd.len.shorterDim.p300,
		height: dtd.len.longerDim.p100


	})
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.titleView);
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.menuButton);
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.calendarButton);
	dtd.ui.homeWindow.win.add(dtd.ui.homeWindow.dutySheetButton);
	
}
