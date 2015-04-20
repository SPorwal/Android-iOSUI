var nsIndex = {};

nsIndex.setLayout = function(){
	if (Titanium.Platform.displayCaps.platformHeight > Titanium.Platform.displayCaps.platformWidth) {
		var vwHeight = $.vwMain.rect.height - Alloy.Globals.theme.sizes.headerbar;
		console.debug("vwHeight", vwHeight);

		var indexViewHeight = vwHeight / 5;
		$.vwOne.setHeight(indexViewHeight);
		$.vwTwo.setHeight(indexViewHeight);
		$.vwThree.setHeight(indexViewHeight);
		$.vwFour.setHeight(indexViewHeight);
		$.vwFive.setHeight(indexViewHeight);
	}
	$.winIndex.removeEventListener('postlayout', nsIndex.setLayout);
};

nsIndex.init = function(){
	
	// Setting layouts for all type of screen resolutions
	$.winIndex.addEventListener('postlayout', nsIndex.setLayout);
};

nsIndex.init();

$.winIndex.open();
