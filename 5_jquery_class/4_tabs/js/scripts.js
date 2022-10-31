$(function() {
	var topDiv = $('.tabSet');
	var anchors = topDiv.find('ul.tabs a'); 
	var panelDivs = topDiv.find('div.panels>div.panel');
	
	anchors.show();
	panelDivs.hide();
	
	var lastAnchor = anchors.filter('.on');
	var lastPanel = $(lastAnchor.attr('href'));
	lastPanel.show();
	
	anchors.click(function(){
		var currentAchor = $(this); //활성화 됐을 때 클래스(current)
		var currentPanel = $(currentAchor.attr('href'));
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor.removeClass('on');
		currentAchor.addClass('on');
		
		lastAnchor = currentAchor;
		lastPanel = currentPanel;
		
	})
});