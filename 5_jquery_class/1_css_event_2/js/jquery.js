$(function(){
 // let src = $('img').attr('src');
 
 $('img').hover(function(){ //마우스를 올렸을 때
	let src = $(this).attr('src'); //이미지 주소값 불러와서
	$(this).attr('src',src.replace('off','on'));}, //off를 on으로 바꿔줌
	
	function(){ //마우스를 내렸을 때
		let src = $(this).attr('src'); //이미지 주소값 불러와서
		$(this).attr('src', src.replace('on','off')); //on을 off로 바꿔줌
	})
})

