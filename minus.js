chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	jQuery('#glbi_content .grid_items_container > div').each(function(i) {
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("click");
		
		jQuery('<a>', {
			href : 'http://i.minus.com/i' + jQuery(this).attr('item_id') + '.jpg',
			download : 'minus-' + i
		})[0].dispatchEvent(evt);
	});
});
