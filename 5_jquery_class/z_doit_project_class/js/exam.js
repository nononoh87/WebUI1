$(function() {

	//(1) 오늘 날짜 출력 (10점)
	var mydate = new Date();
	$('.year').html(mydate.getFullYear());
	$('.month').html(mydate.getMonth() + 1);
	$('.date').html(mydate.getDate());

	//(2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
	$('#keyword').focus(function() {
		$('#keyword').css("background-position", "0 -500px");
	});
	$('#keyword').blur(function() {
		$('#keyword').css("background-position", "0 0")
	});

	//(3) 탭팬 구현 (10점)
	$('#tabmenu dt').click(function() {

		$('#tabmenu dd').hide();
		$(this).next('dd').show();

		var src = $('#tabmenu dt a img');
		for (var i = 0; i < src.length; i++) {
			let eq = src.eq(i)
			eq.attr('src', eq.attr('src').replace('over', 'out'));
		}
		var img = $(this).find('img')
		img.attr('src', img.attr('src').replace('out', 'over'));

	});



//(4) 이미지슬라이드 구현 (10점)
var slider = $('#best_bg ul').bxSlider({ // 클래스명 주의!
	minSlides: 5,
	maxSlides: 5,
	speed: 1000,  // 애니메이션 속도,
	slideWidth: 150,
	auto: true, // 자동으로 애니메이션 시작
	mode: 'horizontal', // 슬라이드 모드 ('fade', 'horizontal', 'vertical' 이 있음)
	captions: true // 이미지 위에 텍스트를 넣을 수 있음
});


$('.prev_btn img').on('click', function() {
	slider.goToPrevSlide();
	return false;
});

$('.next_btn img').click(function() {
	slider.goToNextSlide();
	return false;
});
$('#best_bg').css(
	{
		'padding-left': '105px',
		'padding-right': '25px',
		'width': '843px'
	});

//(5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)

//열림버튼
$(".login_wrap img").click(function(e) {
	$('#login_f').css('top', '18px');
});
//닫힘버튼
$(".login_close_btn img").click(function(e) {
	$('.login_wrap').css('top', '-220px');
});

//(6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
$('#total_btn > a > img').click(function() {
	$('#total_menu').show();
})
//[Close] 누르면 다시 안 보임
$('#total_close > a > img').click(function() {
	$('#total_menu').hide();
})

//(7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)	

//프린트
$('.print_btn').click(function(){
	window.print();
})

});