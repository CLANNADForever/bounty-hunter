

function addachievement(id){
	if(id==0) $('#achieve').html('test');
	else if(id==1){
		$('#achieve').html('化敌为友');
	}
	else if(id==2){
		$('#achieve').html('武功过人');
	}
	else if(id==3){
		$('#achieve').html('机智过人');
	}
	else if(id==4){
		$('#achieve').html('遗失自我');
	}
	else if(id==5){
		$('#achieve').html('守信的赏金猎人');
	}
	
	$('.achievement').css('animation-name','achievement');
	setTimeout("$('.achievement').css('animation-name','counter_achievement')",2000);
	localStorage.setItem('Hound_'+usr+'_achievement'+id,1);
}