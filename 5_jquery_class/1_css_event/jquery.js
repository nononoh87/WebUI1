$(function(){
	$('#hideButton').click(function(){
		$('#intro').hide();
		$('#navigation').hide();
	});
	
		$('#showButton').click(function(){
		$('#intro').show();
		$('#navigation').show();
	});
	
		$('#toggleButton').click(function(){
		$('#intro').toggle(); //fadeToggle도 가능
		$('#navigation').toggle();
	});
	
	// 테이블의 내용중 홀수행을 배경색으로 지정
	// $('#celebs table.data > tbody > tr:even').css({'background':'lightblue'});
	// 0번째부터 읽기 때문에 홀수여도 even이라고 표기해야 됨
	
	// css에 작성된 클래스를 사용 (addClass)
	$('#celebs table.data > tbody > tr:even').addClass('table_striping');
	
	// 마우스가 올라갔을 때, 배경색 변경
	//$('#celebs table.data > tbody > tr:even').tr.hover('td_mouseover');
	
	$('#celebs tr').hover(function(){
		$(this).addClass('td_mouseover');},function(){
		$(this).removeClass('td_mouseover');
	})
})
	