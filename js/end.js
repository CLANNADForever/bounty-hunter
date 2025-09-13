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
			$('.caption').html('你失去了唯一的线索。莱茵城不再欢迎你，而关于纳安城的传说，也终将与你无关。').fadeIn(1000);
		}, 2000);

		// --- Hide Text 1 ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
		}, 6000);

		// --- Scene 2: Ending Title ---
		setTimeout(function(){
			$('.caption').html('你再次变回了那个漫无目的、不知归处的赏金猎人。').fadeIn(1000);
		}, 7500);

		// --- Fade Out ---
		setTimeout(function(){
			$('.caption').fadeOut(1000);
		}, 10000);

		setTimeout(function(){
			$('.caption').html('达成结局: 被驱逐者').fadeIn(1000);
		}, 11500);

		setTimeout(function(){
			$('.caption').fadeOut(1000);
		}, 14000);
		
		// --- Cleanup & Redirect ---
		setTimeout(function(){
			$('#cg-container').hide();
			$('.curtain').hide();
			window.location.href = './home/home.html';
		}, 15500);
		// 为音乐播放器发送消息
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 15400);
	}
	else if(id==3){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');

		setTimeout(function(){
			$('.caption').html('达成结局：幻想乌托邦');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(1000)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 6900);
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