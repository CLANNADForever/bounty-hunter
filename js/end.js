function end(id){ 
	if(id==1){
		// --- Initialization ---
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');

		// --- Show Image ---
		setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/end/end1.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
		},2000);

		// --- Show Caption ---
		setTimeout(function(){
			$('.caption').html('达成结局：无人问津').fadeIn(1000);
		},3500);

		// --- Fade Out ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
			$('.background_board').fadeOut(1000);
		},6000);
		
		// --- Cleanup & Redirect ---
		setTimeout(function(){
			$('#cg-container').hide();
			$('.curtain').hide();
			window.location.href = './home/home.html';
		},7500);
		// 为音乐播放器发送消息
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 7400);
	}
	else if(id==2){
		// --- Initialization ---
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');

		// --- Scene 1: Text ---
		setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/end/end2.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('由于没有密室的地图，你在寻找钥匙时，被闻讯赶来的卫兵团团围住。你寡不敌众...').fadeIn(1000);
		}, 2000);

		// --- Hide Text 1 ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
		}, 6000);

		// --- Scene 2: Ending Title ---
		setTimeout(function(){
			$('.caption').html('达成结局：中道崩殂').fadeIn(1000);
		}, 7500);

		// --- Fade Out ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
			$('.background_board').fadeOut(1000);
		}, 10000);
		
		// --- Cleanup & Redirect ---
		setTimeout(function(){
			$('#cg-container').hide();
			$('.curtain').hide();
			window.location.href = './home/home.html';
		}, 11500);
		// 为音乐播放器发送消息
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 11400);
	}
	else if(id==3){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：幻想乌托邦');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==4){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：迷失旅人');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==5){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：沽名钓誉');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==6){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：兜兜转转');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==7){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.background_board').css({
				'background-size': 'cover', // 使背景图片铺满窗口
				'background-position': 'center', // 使背景图片居中
				'background-repeat': 'no-repeat' // 防止背景图片重复
			});
			$('.background_board').fadeIn(1000);
			$('.caption').html('达成结局：新的开始');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
	}
	else if(id==8){
		// --- Initialization ---
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');

		// --- Scene 1: Text ---
		setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/end/end2.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('你在探索密室时，被卫兵团团围住。你寡不敌众...').fadeIn(1000);
		}, 2000);

		// --- Hide Text 1 ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
		}, 6000);

		// --- Scene 2: Ending Title ---
		setTimeout(function(){
			$('.caption').html('达成结局：中道崩殂').fadeIn(1000);
		}, 7500);

		// --- Fade Out ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
			$('.background_board').fadeOut(1000);
		}, 10000);
		
		// --- Cleanup & Redirect ---
		setTimeout(function(){
			$('#cg-container').hide();
			$('.curtain').hide();
			window.location.href = './home/home.html';
		}, 11500);
		// 为音乐播放器发送消息
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 11400);
	}




	
}