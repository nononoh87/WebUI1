$(function() {
   $('#signup>form').validate({ // 해당하는 폼태그의 유효성 검사
      rules: {
         name: {required: true},
         email: {required: true,
         		  email:true
         },
         website: {url:true},
         password: {minlength: 6,
         			maxlength: 12},
         			passconf: {equalTo:'#password'}
      },
      success: function(label) {
         label.addClass('valid');
         label.text('success!')
      }
   });
   
   // -----------------------------------
	
	$(".check-all").click(function() {
		if($(".check-all").is(":checked")) $("input[name=agreed]").prop("checked", true);
		else $("input[name=agreed]").prop("checked", false);
	});
	
	/* $('.check-all').click(function(){
      $('.checked').prop('checked',$('.check-all').is(':checked'));   
   }); */
   
   // 하나만 체크 해제하도 전체가 풀림
   $("input[name=agreed]").click(function() {
		var total = $("input[name=agreed]").length;
		var checked = $("input[name=agreed]:checked").length;

		if(total != checked) $(".check-all").prop("checked", false);
		else $(".check-all").prop("checked", true); 
	});
      
});