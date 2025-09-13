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
		$('#achieve').html('遗失过往');
	}
	else if(id==5){
		$('#achieve').html('守信的赏金猎人');
	}
	else if(id==6){
		$('#achieve').html('铁石心肠');
	}
	else if(id==7){
		$('#achieve').html('落叶归根');
	}
	else if(id==8){
		$('#achieve').html('逍遥四方');
	}
	
	$('.achievement').css('animation-name','achievement');
	setTimeout("$('.achievement').css('animation-name','counter_achievement')",2000);
	localStorage.setItem('Hound_'+usr+'_achievement'+id,1);
}