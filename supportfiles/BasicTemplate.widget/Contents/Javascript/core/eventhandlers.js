/**
 * @author jstone
 */

var EventHandlers = {
	onApplicationStartup: function(event) {
		// Put any code you need to run on application startup here
	},
	
	onLoadProfile: function(event) {
		// Put any code here you need run when the logged in TV profile changes
		// This happens on TVs where the user has configured multiple users on the TV in the settings widget
		// You would need to handle anything user configuration specific in this method
	}
};