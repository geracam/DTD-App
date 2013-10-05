/**
 * @author Gerardo Camarena Gomez
 */
dtd.ui.login={};

dtd.ui.login.createloginWindow=function(){
	dtd.ui.login.win=Titanium.UI.createWindow({
		backgroundColor: "black",
		title: "Login"
	});
	dtd.ui.login.userNameTextField=Titanium.UI.createTextField({
		hintText:"Username",
		borderColor:"White",
		backgroundColor:"White",
		top: dtd.len.longerDim.p300,
		height: dtd.len.longerDim.p100,
		width: dtd.len.shorterDim.p400
	});
	dtd.ui.login.passwordTextField=Titanium.UI.createTextField({
		hintText:"Password",
		borderColor:"White",
		backgroundColor:"White",
		top: dtd.len.longerDim.p450,
		height: dtd.len.longerDim.p100,
		width: dtd.len.shorterDim.p400
	});
	dtd.ui.login.goButton=Titanium.UI.createButton({
		top:dtd.len.longerDim.p600,
		height: dtd.len.longerDim.p100,
		title:"Go!"
		
	});
	dtd.ui.login.win.add(dtd.ui.login.userNameTextField);
	dtd.ui.login.win.add(dtd.ui.login.passwordTextField);
	dtd.ui.login.win.add(dtd.ui.login.goButton);
}
