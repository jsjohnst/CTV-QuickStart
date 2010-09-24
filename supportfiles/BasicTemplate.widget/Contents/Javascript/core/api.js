/**
 * @author jstone
 */

$API = function() {
	function callAPI(url, callback) {
		var u = new URL();
		u.location = url;
		u.done_cb = callback;
		
		log("[" + widget.name + "]  > Fetching data [get] :: " + u.location);
		
		KONtx.utility.WaitIndicator.up();
		u.fetchAsync( callFinish );
	}
	
	function callFinish(u) {
		KONtx.utility.WaitIndicator.down();
		
		if ( u.response == 200 ) {
			KONtx.application.setNetworkRequestFailed(false);
			u.done_cb( u.result );
		} else {
			KONtx.application.setNetworkRequestFailed(true);
			log("[" + widget.name + "]  > Fetching data [" + u.response + "] :: " + u.location + "- " + u.result);
		}
	}
	
	return {
		
		//
		// These functions are mearly samples. Replace them with relevant API queries for your application
		//
		
		getCategories: function() {
			callAPI('http://api.your-website.com/query?get=categories', function(response) {
				try {
					var json = JSON.parse(response);
				} catch (e) {
					log("Error parsing json: " + response);
					return;
				}
				
				KONtx.messages.store("category_list", json);
			});
		},
		
		getCategoryData: function(category_id) {
			callAPI('http://api.your-website.com/query?get=category&id=' + category_id, function(response) {
				try {
					var json = JSON.parse(response);
				} catch (e) {
					log("Error parsing json: " + response);
					return;
				}
				
				KONtx.messages.store("category_data." + category_id, json);
			});
		}
	};
};