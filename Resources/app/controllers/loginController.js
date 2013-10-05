/**
 * @author Gerardo Camarena Gomez
 */
dtd.ctr.loginController={};
dtd.ctr.loginController.setuploginWindow=function(){
	dtd.ui.login.win && dtd.ui.login.win.close();
	dtd.ui.login.createloginWindow();
	dtd.ui.login.win.open();
	dtd.ui.login.goButton.addEventListener("click", function() {
		
		var username_e = escape(dtd.ui.login.userNameTextField.value);
        var password_e = escape(dtd.ui.login.passwordTextField.value);
        var success = dtd.ui.login.sendLoginInformation(username_e,password_e);
        Ti.App.Properties.setString("dtduser", username_e);
	    Ti.App.Properties.setString("dtdpass", password_e);
    });
    
    dtd.ui.login.sendLoginInformation=function(username_e, password_e){
    	dtd.ui.login.goButton.enabled= false;
		var auth=SERVER+"?q=auth";
        
        var http = Titanium.Network.createHTTPClient();
        var loginError = function() {
        	alert("Login error.");
        	dtd.ui.login.goButton.enabled = true;
        }
        http.setTimeout(2e4);
        http.onerror = function() {
            return loginError();
        };
        http.onload = function() {
            try {
                var userObject = JSON.parse(this.responseText);
            } catch (e) {
            	return loginError();
            }
            if (userObject.error) {
            	return loginError();
            }
            Titanium.App.Properties.setString("username", userObject.user);
            dtd.ctr.homeWindow.setupHomeWindow();
            dtd.ui.login.win.close();
        };
        http.open("POST", auth);
        http.send({
            user: username_e,
            pass: password_e,
        });
        Titanium.API.info("POST request made");
    };

	if (Ti.App.Properties.hasProperty('dtduser') && (Ti.App.Properties.hasProperty('dtdpass'))) {
		dtd.ui.login.sendLoginInformation(Ti.App.Properties.getString('dtduser'), Ti.App.Properties.getString('dtdpass'));
	}
}

