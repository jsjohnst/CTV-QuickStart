/**
 * @author jstone
 */

include("Framework/kontx/1.3/src/all.js");

include("Javascript/core/eventhandlers.js");

// encapsulate all your API access into this file
include("Javascript/core/api.js");

// If you need any of these sample JS libs, include them and/or add your own.
/*
include("Javascript/lib/lib.date.js");
include("Javascript/lib/lib.advancedimage.js");
include("Javascript/lib/lib.numberformat.js");
*/

include("Javascript/view/view.main.js");
include("Javascript/view/view.snippet.js");

KONtx.application.init({
	views: [
		{ id: 'view-Main', viewClass: MainView },
		{ id: 'view-Settings', viewClass: KONtx.views.AboutBox },
		{ id: 'snippet-main', viewClass: SnippetView },
	],
	defaultViewId: 'view-Main',
	settingsViewId: 'view-Settings',
});

EventHandlers.onApplicationStartup.subscribeTo(KONtx.application, ['onApplicationStartup'], EventHandlers);
EventHandlers.onLoadProfile.subscribeTo(KONtx.application, ['onLoadProfile'], EventHandlers);

