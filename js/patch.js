setInterval(function(){
	var hero=document.querySelector('.hero');
	for(var i=0;i<npc.length;i++){
		if(dis(hero.offsetLeft,hero.offsetTop,npc[i][0],npc[i][1])<96){
			if(hero.offsetTop<npc[i][1]) $('.hero').css('z-index','8');
			else $('.hero').css('z-index','10');
		}
	}
},50);

// 以下用于播放cg， 

let cgTimeouts = []; // 存储所有CG相关的定时器ID

function clearCgTimeouts() {
    cgTimeouts.forEach(timerId => clearTimeout(timerId));
    cgTimeouts = []; // 清空数组
}

function skipCurrentCg(cgId) {
    clearCgTimeouts();

    // 隐藏所有CG相关的元素
    $('.curtain').hide();
    $('#cg-container').hide();
    $('#skipCgButton').hide(); // 隐藏跳过按钮

    // 根据当前CG的ID，直接执行其结束时的逻辑
    if (cgId === 0) {
        transform('home');
    }
	else if(cgId === 1){
		transform('na_street');
	}
	else if(cgId === 2){
		transform('na_street_02');
	}
	else if(cgId === 3){
		transform('lab3');
	}
	else if(cgId === 4){
		addachievement(6)
		end(5)
	}
	
	else if(cgId === 5){
		addachievement(7);
		end(6);
	}
	else if(cgId === 6){
		addachievement(8);
		end(7);
	}
	else if(cgId === 7){
		$('.game2').css('display','block');
	}
	
}

function cg(id){
    // 显示跳过按钮
    $('#skipCgButton').css('display','block');

    // 为跳过按钮绑定点击事件
    $('#skipCgButton').off('click').on('click', function() {
        skipCurrentCg(id);
    });
	if(id==0) {//开场cg
		// 第一阶段：初始化显示状态
		loadSong('gate of steiner.mp3');
		playSong();
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('杰恩是一个没有过去的人'); // 设置文字内容为"杰恩是一个没有过去的人" //_2_断句
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",5000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('在这个世界上，他没有家人，没有朋友，没有记忆'); // 设置文字内容为"在这个世界上，他没有家人，没有朋友，没有记忆"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},7000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",12000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('直到某次机缘巧合成为赏金猎人，他漂泊无依的生活才有了一点方向……'); // 设置文字内容为"直到某次机缘巧合成为赏金猎人，他漂泊无依的生活才有了一点方向……"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},14000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",19000)); // 4秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
			transform('home');
            $('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
		},21000));
	}
	else if(id==1) {//逃离密室CG
		// 第一阶段：初始化显示状态
		
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000
		
		cgTimeouts.push(setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/cg/to_naan1.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('在韦斯的带领下，你们避开了卫兵，又一次遁入了莱茵城古老的地下暗道...').fadeIn(1000);
		}, 2000));

		cgTimeouts.push(setTimeout(function(){
			$('.caption').fadeOut(1000);
			$('.background_board').fadeOut(1000);
		},7000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('穿过城市的脉络，你们终于在天亮前抵达了废弃的码头。').fadeIn(1000); 
			$('.background_board').css({
				'background-image': 'url(./img/cg/to_naan2.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);

		},9000));
		
		cgTimeouts.push(setTimeout(function(){
			$('.caption').fadeOut(1000);
			$('.background_board').fadeOut(1000);
		},14000)); // 4秒后文字用0.5秒淡出

		cgTimeouts.push(setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/cg/to_naan3.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
		},15000));

		cgTimeouts.push(setTimeout(function(){
			pauseSong();
			$('.caption').html('不知在海上漂泊了多久...'); // 设置文字内容为"直到某次机缘巧合成为赏金猎人，他漂泊无依的生活才有了一点方向……"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},15000));

		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",17000)); // 8秒后文字用0.5秒淡出
		cgTimeouts.push(setTimeout(function(){
			$('.background_board').fadeOut(1000);
		},20000));

		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('...直到那座传说中的城市，出现在海的尽头。'); // 设置文字内容为"在这个世界上，他没有家人，没有朋友，没有记忆"
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
			loadSong('sea you and me.mp3');
			playSong();
		},18000));
		cgTimeouts.push(setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url(./img/cg/to_naan4.png)',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
		},21000));

		cgTimeouts.push(setTimeout(function(){
			$('.caption').fadeOut(1000);
			$('.background_board').fadeOut(1000);
		},28000));
		
		cgTimeouts.push(setTimeout(function(){
            transform('na_street');
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
		},30000));
	}
	else if(id==2) {//前往高塔CG
		// 第一阶段：初始化显示状态
		loadSong('gate of steiner.mp3');
		playSong();
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// --- Scene 1 ---
		cgTimeouts.push(setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url("./img/cg/to_tower1.png")',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('你在纳安城打听了很久，但是这里的人都是这样一问三不知，言语间充满了诡异的重复和矛盾。').fadeIn(1000);
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",6000)); // 1s + 1s fadeIn + 4s duration
		cgTimeouts.push(setTimeout("$('.background_board').fadeOut(500)",6000))
		// --- Transition to Scene 2 ---

		cgTimeouts.push(setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url("./img/cg/to_tower2.png")',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('一筹莫展之际，你想起了那个居民提到的建议。你抬起头，视线被城中央那座高耸入云的建筑吸引了。').fadeIn(1000);
		}, 8500)); // 6.5s + 1s fadeOut + 1s fadeIn
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",13500)); // 8.5s + 1s fadeIn + 4s duration
		cgTimeouts.push(setTimeout("$('.background_board').fadeOut(500)",13500))


		cgTimeouts.push(setTimeout(function(){
			$('.background_board').css({
				'background-image': 'url("./img/cg/to_tower3.png")',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('当宝石钥匙嵌入高塔大门的孔洞时，门缓缓打开').fadeIn(1000);
		}, 15000)); // 14s + 1s fadeOut + 1s fadeIn
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",20000)); // 16s + 1s fadeIn + 4s duration
		cgTimeouts.push(setTimeout("$('.background_board').fadeOut(500)",20000))
		
		// --- End CG ---
		cgTimeouts.push(setTimeout(function(){
			transform('na_street_02');
			$('#skipCgButton').hide();
			$('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts();
		}, 22000));
	}
	
	else if(id==3) {//封锁掠夺者CG
		// 第一阶段：初始化显示状态
		
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000
		
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你与来自过去的自己合作，将掠夺者驱逐回他们的时空，并将他们封锁在那个时空，防止他们再去掠夺其他低科技水平时空的资源，这场跨越时空的灾难，落下帷幕'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
			loadSong('sea you and me.mp3');
			playSong();
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",9000)); // 8秒后文字用0.5秒淡出
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('尘埃落定后，那些丢失的记忆被归还于每个人，遭受重创的纳安城开始慢慢恢复，经讨论后，时光机项目被暂时终止，在时光机彻底关闭前，来自过去的杰恩回到了过去，现在，轮到你做选择了。'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},10000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",18000)); // 8秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
            transform('lab3');
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
		},19000));
	}

	else if(id==4) {//加入掠夺者CG
		// 第一阶段：初始化显示状态
		
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000
		
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你成为了高科技水平时空的一员，在他们的帮助下，你实现了很多自己曾经设想过但是没有机会实现的研究，名誉双收，而低科技水平时空沦为养料，在资源被榨干后分崩离析，从时间的长河里陨落。'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
			loadSong('sea you and me.mp3');
			playSong();
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",9000)); // 8秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
			addachievement(6);
			end(5)
		},10000));
	}

	

	else if(id==5) {//研究员结局CG
		// 第一阶段：初始化显示状态
		
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000
		
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你留在了你的故土，时光机被彻底关闭，你和维娜重新做回了实验室的研究员，和昔日同事们开启了新的研究项目。'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
			loadSong('sea you and me.mp3');
			playSong();
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",7000)); // 6秒后文字用0.5秒淡出
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('扭转实验室在纳安城人民心里的形象，把被掠夺者破坏的生态恢复……'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},8000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",12000)); // 4秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你们的生活充实又有趣，只是偶尔，你也会想到当赏金猎人时认识的那些朋友……'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},8000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",12000)); // 4秒后文字用0.5秒淡出
		cgTimeouts.push(setTimeout(function(){
			addachievement(7);
			end(6);
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
		},19000));
	}

	else if(id==6) {//赏金猎人结局CG
		// 第一阶段：初始化显示状态
		
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000
		
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('你与来自过去的自己合作，将掠夺者驱逐回他们的时空，并将他们封锁在那个时空，防止他们再去掠夺其他低科技水平时空的资源，这场跨越时空的灾难，落下帷幕'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
			loadSong('sea you and me.mp3');
			playSong();
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",9000)); // 8秒后文字用0.5秒淡出
		cgTimeouts.push(setTimeout(function(){
			$('.caption').html('尘埃落定后，那些丢失的记忆被归还于每个人，遭受重创的纳安城开始慢慢恢复，经讨论后，时光机项目被暂时终止，在时光机彻底关闭前，来自过去的杰恩回到了过去，现在，轮到你做选择了。'); 
			$('.caption').fadeIn(1000); // 文字用1秒时间淡入显示
		},10000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",18000)); // 8秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
            addachievement(8);
			end(7);
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
		},19000));
	}

	else if(id==7){
		$('.background_board').css('display','none'); // 背景板隐藏
		$('.caption').css('display','none'); // 字幕隐藏
		$('.curtain').css('display','block'); // 幕布显示
        $('#cg-container').css('display', 'flex');

		// setTimeout是异步的，不阻塞其他代码执行
		// 如果想在在显示后4秒消失，应该在setTimeout写上开始时间+4000，而不是4000
		loadSong('backroom.mp3');
		playSong();
		cgTimeouts.push(setTimeout(function(){
			
			$('.background_board').css({
				'background-image': 'url("./img/cg/with_old_knight.png")',
				'background-size': 'cover',
				'background-position': 'center',
				'background-repeat': 'no-repeat'
			}).fadeIn(1000);
			$('.caption').html('韦斯对德莱伯爵密室的守卫和机关轻车熟路，你们很快到达了密室的深处...').fadeIn(1000);
		},1000));
		cgTimeouts.push(setTimeout("$('.caption').fadeOut(500)",5000)); // 8秒后文字用0.5秒淡出
		
		cgTimeouts.push(setTimeout(function(){
			$('#skipCgButton').hide(); // CG结束后隐藏按钮
            $('.curtain').hide();
            $('#cg-container').hide();
            clearCgTimeouts(); // 清除所有定时器
		},7000));

		cgTimeouts.push(setTimeout(function(){
			$('.game2').css('display','block');
		},6900));
		
	}
}