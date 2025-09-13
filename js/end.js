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
		$('#cg-container').css('display', 'flex');

		setTimeout(function(){
			$('.caption').html('在纳安城的生活开始了。').fadeIn(500);
		},2000);
		setTimeout("$('.caption').fadeOut(500)",6000);

		setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/end/end3_1.jpg)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('这里没有催命的订单，也没有危险的敌人。每天，你和韦斯都在酒馆里畅饮，听着吟游诗人歌唱永不重复的英雄史诗。');
			$('.caption').fadeIn(1000);
		},8000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(500)",13000);

		setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/end/end3_2.jpg)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('这里的日子过得很快，又很慢。你不再需要思考明天要去哪里，下一个任务是什么。你只需要...享受今天。');
			$('.caption').fadeIn(1000);
		},15000);
		setTimeout("$('.caption').fadeOut(500)",20000);
		setTimeout(function(){
			$('.caption').html('那份来自神秘雇主的信，不知什么时候不见了。你背包里的地图，也好像从未存在过。').fadeIn(500);
		},22000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(500)",27000);
		
		setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/end/end3_3.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('韦斯不再谈论他当骑士的过去，你也不再想起自己为何漂泊。你们的脸上，渐渐有了和这里所有人一样的、平和的笑容。');
			$('.caption').fadeIn(1000);
		},29000);
		setTimeout("$('.caption').fadeOut(500),$('.background_board').fadeOut(500)",34000);

		setTimeout(function(){
			$('.caption').html('达成结局：幻想乌托邦').fadeIn(1000);
		},36000);
		setTimeout(function(){
			$('.caption').fadeOut(1000);
		},40000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},42000);
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		},41900);
	}
	else if(id==4){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');
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
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 6900);
	}
	else if(id==5){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');
		setTimeout(function(){
			$('.caption').html('达成结局：沽名钓誉');
			$('.caption').fadeIn(1000);
		},2000);
		setTimeout("$('.caption').fadeOut(500)",5000);
		
		setTimeout(function(){
			window.location.href = './home/home.html';
		},7000);
		setTimeout(function(){
			window.parent.postMessage('showMusicPlayer', '*')
		}, 6900);
	}
	else if(id==6){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');

		setTimeout(function(){
			$('.caption').html('达成结局：兜兜转转');
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
	else if(id==7){
		$('.background_board').css('display','none');
		$('.caption').css('display','none');
		$('.curtain').css('display','block');
		$('#cg-container').css('display', 'flex');
		setTimeout(function(){
			$('.caption').html('达成结局：新的开始');
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