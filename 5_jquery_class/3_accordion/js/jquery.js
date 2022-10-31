$(function() {
// html내 클래스를 따로따로 관리 : each사용
	$('.accordion').each(function(){
		var allDt = $(this).find('dt');
		var allDd = $(this).find('dd');
		
		allDd.hide();
		//allDd.first().show();
		
		allDt.css({'cursor':'pointer'});
		allDt.click(function(){ // 클릭시 함수와 연결
			allDd.hide();
			$(this).next().show();
			
		}); 
		
	});
});