window.onload = function(){
	
	let adul = document.getElementById('adult').value;
	let children = document.getElementById('children').value;
	let baby = document.getElementById('baby').value;
	
   adult.onchange = sum;
   child.onchange = sum;
   baby.onchange = sum;
	
	function sum(){
	
	frm.total.value = (adult.value*39000 + child.value*29000 + baby.value*19000)+'원';
	
	}
	
	
}
