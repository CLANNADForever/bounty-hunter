var man_now='none';

function dialog(man){
	$('.container').css('margin-top','15px');
	$('.container').css('margin-left','0');
	let text=document.querySelector('.text');
	let picture=document.querySelector('.picture');
	let title=document.querySelector('.title');
	let texture=document.querySelector('.texture');
	let choice1=document.querySelector('#choice1');
	let choice2=document.querySelector('#choice2');
	let choice_zone=document.querySelector('.choice_zone');
	man_now=man;

	// 添加示例NPC对话逻辑
	if(man == 'init_dialog_at_home'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		// man_now='init_dialog_at_home';
		title.innerHTML='';
		picture.innerHTML='';
		switch(init_dialog_at_home){
			case -1:{
				//不应该触发对话
				break;
			}
			case 0:{
				texture.innerHTML='1783年7月17日.';
				init_dialog_at_home++;
				break;
			}
			case 1:{
				texture.innerHTML='上一个任务结束后，杰恩一直在莱茵城的街上游荡，借酒打发时间，今天已经是第三天了.';
				init_dialog_at_home++;
				break;
			}
			case 2:{
				texture.innerHTML='但在今天，杰恩接到了一份神秘的委托……';
				init_dialog_at_home=-1;
				person='end';
				break;
			}
		}
	}
	if(man == 'villager_01'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		// man_now='villager_01';
		switch(villager_01){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/villager_01.png">';
				title.innerHTML='卫兵';
				texture.innerHTML='外乡人，看你的样子是长途跋涉而来吧？去街尾的‘雄狮之心’酒馆歇歇脚，那里的麦酒是城里最好的。';
				villager_01++;
				person='end';
				break;
			}
			default:{ //_6_ 游戏的小设计
				picture.innerHTML='<img src="./img/avatar/villager_01.png">';
				title.innerHTML='卫兵';
				texture.innerHTML='外乡人，看你的样子是长途跋涉而来吧？去街尾的‘雄狮之心’酒馆歇歇脚，那里的麦酒是城里最好的。';
				person='end'; 
				break;
			}
		}
	}
	else if (man == 'villager_02'){
		text.style.display='block';
		switch(villager_02){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（两个年轻人正兴奋地交谈着。）';
				villager_02++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/villager_02.png">';
				title.innerHTML='充满幻想的青年';
				texture.innerHTML='你听说了吗？吟游诗人昨天唱的歌，又是关于纳安城的！';
				villager_02++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/villager_03.png">';
				title.innerHTML='憧憬的少女';
				texture.innerHTML='当然听说了！歌里说，那里是海上升起的天堂，黄金铺地，宝石做窗，每个人脸上都挂着笑容！';
				villager_02++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/villager_02.png">';
				title.innerHTML='充满幻想的青年';
				texture.innerHTML='是啊！据说只要能抵达那里，就再也没有烦恼和忧伤了。要是我能找到去那里的路就好了...';
				villager_02++;
				villager_03=4;
				person='end'
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/villager_03.png">';
				title.innerHTML='憧憬的少女';
				texture.innerHTML='如果你想打听什么传说故事，最好还是去酒馆。那里的冒险家最多，知道的秘密也最多。';
				person='end';
				break;
			}
		}
	}
	else if (man == 'villager_03'){
		text.style.display='block';
		switch(villager_03){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（两个年轻人正兴奋地交谈着。）';
				villager_03++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/villager_02.png">';
				title.innerHTML='充满幻想的青年';
				texture.innerHTML='你听说了吗？吟游诗人昨天唱的歌，又是关于纳安城的！';
				villager_03++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/villager_03.png">';
				title.innerHTML='憧憬的少女';
				texture.innerHTML='当然听说了！歌里说，那里是海上升起的天堂，黄金铺地，宝石做窗，每个人脸上都挂着笑容！';
				villager_03++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/villager_02.png">';
				title.innerHTML='充满幻想的青年';
				texture.innerHTML='是啊！据说只要能抵达那里，就再也没有烦恼和忧伤了。要是我能找到去那里的路就好了...';
				villager_03++;
				person='end'
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/villager_03.png">';
				title.innerHTML='憧憬的少女';
				texture.innerHTML='如果你想打听什么传说故事，最好还是去酒馆。那里的冒险家和水手最多，知道的秘密也最多。';
				villager_02=4;
				person='end';
				break;
			}
		}
	}
	else if (man == 'init_dialog_at_bar'){
		text.style.display='block';
		switch(init_dialog_at_bar){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='“雄狮之心”酒馆，莱茵城的消息中转站。冒险者吹嘘着功绩，商人们交换着情报，而阴影里，则藏着这座城市的秘密。';
				init_dialog_at_bar++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				break;
			}
		}
	}
	else if (man == 'student_01'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		switch(student_01){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='小学徒';
				texture.innerHTML='先生，您是要打听消息吗？我...我没什么见识。'; //_10_还是具体程度，或者说什么样子的内容是直接可用的
				student_01++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（向她展示地图）你见过这个吗？';
				student_01++;
				break;
			}
			case 2:{ //_12_ 按理来讲如果直接去问后面了，应该跳进default，一点游戏设计
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='小学徒';
				texture.innerHTML='这个...我没见过。不过，也许调酒师先生知道。您去问问他吧，他人很好的。' // _11_ 做成这种程度，1个人不够
				student_01++;
				person='end'
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/student_01.png">';
				title.innerHTML='小学徒';
				texture.innerHTML='（小声）先生，您...最好别去招惹角落里那个喝酒的老爷爷。他今天心情好像特别差。';
				person='end';
				break;
			}
		}
	}
	else if (man == 'barman') {
		text.style.display='block'; 
		student_01 = 3;
		switch(barman){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='你好，旅人。想喝点什么，还是想买点什么消息？';
				barman++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='我不是来买酒的。（把手头地图递了过去）';
				barman++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='这东西...我好像有点印象，但记不清了。不过，有个人肯定知道。';
				barman++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='看到角落里的韦斯爵士了吗？他年轻时是伯爵的首席骑士，对伯爵府的收藏了如指掌。';
				barman++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='唉...只是，他自从上次任务失败后，就一直这样消沉。你跟他说话小心点，别提起那件事，他现在很执拗。';
				barman++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='去问问韦斯吧，他也是我的老顾客了。';
				person='end';
				break;
			}
		}
	}
	else if (man == 'mercenary_01'){
		text.style.display='block'; 
		mercenary_02 = 3;
		switch(mercenary_01){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（你听到两个看起来身手不凡的佣兵正在压低声音交谈。）';
				mercenary_01++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/mercenary_01.png">';
				title.innerHTML='佣兵';
				texture.innerHTML='听说了吗？德莱伯爵最近又在招人了，赏金很高，但任务是去那个地方...';
				mercenary_01++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/mercenary_02.png">';
				title.innerHTML='老练的佣兵';
				texture.innerHTML='哼，再多钱我也不去。那鬼地方，就算是当年的‘雄狮’韦斯带队，也折损了一半人手。现在就他一个老酒鬼，谁敢去？';
				mercenary_01++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（两个佣兵不再交谈，只是闷头喝酒）';
				person='end'
				break;
			}
		}
	}
	else if (man == 'mercenary_02'){
		text.style.display='block'; 
		mercenary_01 = 3;
		switch(mercenary_02){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（你听到两个看起来身手不凡的佣兵正在压低声音交谈。）';
				mercenary_02++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/mercenary_01.png">';
				title.innerHTML='佣兵';
				texture.innerHTML='听说了吗？德莱伯爵最近又在招人了，赏金很高，但任务是去那个地方...';
				mercenary_02++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/mercenary_02.png">';
				title.innerHTML='老练的佣兵';
				texture.innerHTML='哼，再多钱我也不去。那鬼地方，就算是当年的‘雄狮’韦斯带队，也折损了一半人手。现在就他一个老酒鬼，谁敢去？';
				mercenary_02++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（两个佣兵不再交谈，只是闷头喝酒）';
				person='end'
				break;
			}
		}
	}
	else if (man == 'old_knight'){
		text.style.display='block'; 
		// man_now='old_knight';
		switch(old_knight){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（一个上了年纪的男人在自言自语，桌上放着一枚褪色的骑士勋章。他紧紧攥着酒杯，眼神在追忆与不甘中摇曳。）';
				old_knight++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='老骑士韦斯';
				texture.innerHTML='又一个任务失败了...不...我没有失败！是他们...是他们太弱了！';
				old_knight++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='(向他展示地图)';
				old_knight++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='老骑士韦斯';
				texture.innerHTML='（他抬起浑浊的眼睛，但看到地图的瞬间，瞳孔骤然收缩） 德莱的密室和宝石钥匙！你要...你要去纳安城？';
				old_knight++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='老骑士韦斯';
				texture.innerHTML='年轻人，我知道它在哪。我可以带你去，甚至可以帮你拿到。但你必须答应我，与我同行！让我亲眼看看，那个地方...究竟是不是传说中的乌托邦！';
				old_knight++;
				break;
			}
			case 5:{ 
				// 开始分岔  
				// 这里应该不用做处理，即使再E，也会来到case5，只是重复设置这些元素而已，不会跳出（因为没++）
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='......';
				choice_zone.style.display='block';
				choice1.innerHTML='我同意你的条件';
				choice2.innerHTML='我需要自己考虑';
				// 这里不应该++，否则不点按钮，e一下就过去了
				break;
			}
			//这里不是从5++继续的，而是一个跳变
			case 6:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='老骑士韦斯';
				texture.innerHTML='考虑？不！没有时间考虑了！这是我最后的机会！你不带我去，就休想从我这里得到任何消息！';
				old_knight++;
				break;
			}
			case 7:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='韦斯的情绪突然激动起来，他视这次旅行为最后的救赎，任何阻碍他的人，都是敌人。他拔出了腰间的旧剑！';
				old_knight++;
				break;
			}
			case 8:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（与老骑士韦斯战斗！）';
				loadSong('game1.mp3');
				playSong();
				old_knight++;
				break;
			}
			case 9:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='(战斗结束了)';
				$('.game1').css('display','block');
				// old_knight++; // HACK 很变态的写法，为了退出能直接赢，而如果你玩了游戏，结束后会设置值，这个++就无所谓了
				break;
			}
			case 10:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='最后一击...韦斯沉重地倒下了。他的旧剑脱手而出，在木地板上发出空洞的声响。';
				addachievement(2);
				old_knight++;
				break;
			}
			case 11:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='他躺在地上，大口喘着气，浑浊的眼睛望着天花板，仿佛看到了什么。';
				old_knight++;
				break;
			}
			case 12:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='老骑士韦斯';
				texture.innerHTML='（气若游丝）...这样啊...我终究...还是没能再出发一次......';
				old_knight++;
				break;
			}
			case 13:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='他最后看了一眼桌上的骑士勋章，眼神中的光芒彻底熄灭了。';
				old_knight++;
				break;
			}
			case 14:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='你从他身上搜出了一张德莱伯爵密室的陈旧地图。酒馆里所有人的目光都聚焦在你身上，充满了敌意。必须快点离开！';
				old_knight++;
				person='end';
				npc=[]; // 清空npc
				break;
			}
			case 15:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='外乡人，在我们这儿，有我们这儿的规矩。';
				old_knight++;
				break;
			}
			case 16:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='韦斯爵士...是我们看着他从英雄变成酒鬼的。他可以死在战场上，可以死在酒桌上，但不该死在一个不知来路的赏金猎人手上。';
				old_knight++;
				break;
			}
			case 17:{
				picture.innerHTML='<img src="./img/avatar/barman.png">';
				title.innerHTML='调酒师';
				texture.innerHTML='放下你该放下的，然后离开。永远别再回来。';
				old_knight++;
				break;
			}
			case 18:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='你看着周围一双双充满敌意的眼睛，知道自己没有选择。你放下了那份密室的地图，在沉默的注视下，离开了酒馆。';
				old_knight++;
				break;
			}
			case 19:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				end(2);
				break;
			}



			case 25:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='你的尸体被悄无声息地处理掉，就像从未出现在这个酒馆一样。而老骑士的故事，仍将继续。';
				old_knight++;
				break;
			}
			case 26:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				end(1);
				break;
			}

			case 30:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（老骑士韦斯长舒一口气，仿佛卸下了千斤重担，浑浊的眼中闪过一丝光芒）';
				old_knight++;
				break;
			}
			case 31:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='...很好。我们...我们终于可以再次出发了。';
				addachievement(1);
				old_knight++;
				break;
			}
			case 32:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				text.style.display='none'; // 对话结束后关闭对话框
				choice_zone.style.display='none';
				person = 'none';
				cg(7);
				break;
			}


			

			// case 24:{
			// 	picture.innerHTML='';
			// 	title.innerHTML='';
			// 	texture.innerHTML='密室的入口是一段迷宫（即将进入迷宫）';
			// 	old_knight++;
			// 	break;
			// }
			// case 25:{
			// 	picture.innerHTML='';
			// 	title.innerHTML='';
			// 	texture.innerHTML='（从迷宫出来之后，你们到达了密室的深处）';
			// 	$('.game2').css('display','block');
			// 	old_knight++;
			// }
			// case 26:{
			// 	text.style.display='none'; // 对话结束后关闭对话框
			// 	choice_zone.style.display='none';
			// 	person = 'none';
			// 	transform('gem_room');
			// 	break;
			// }
		}
	}
	else if (man=='old_knight_gem'){
		text.style.display='block'; // 在switch case前面开启显示，播完之后在interact自动关，不用在这里关
		//man_now='old_knight_gem';
		switch(old_knight_gem){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='嘿杰恩，看到那里的宝石了吗？那就是你要找的钥匙，去拿吧。';
				old_knight_gem++;
				person='end';
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='你去拿宝石吧，我在这儿替你守着';
				old_knight_gem++;
				person='end';
				break;
			}
			default:{ 
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='哦杰恩，需要思考的事我没法帮你，但我会替你守好门的';
				person='end';
				break;
			}
		}
	}
	else if (man=='init_dialog_at_naan'){
		text.style.display='block';
		switch(init_dialog_at_naan){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='你们的船靠岸了。这就是传说中的纳安城——人群熙熙攘攘，街道两侧商品琳琅满目，空气中却闻不到一丝海风的咸味。';
				init_dialog_at_naan++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='杰恩...你看到了吗？这里...这里比传说中还要美好!';
				init_dialog_at_naan++;
				person='end';
				break;
			}
		}
	}
	else if (man=='villager_04'){
		villager_05=2;
		text.style.display='block';
		switch(villager_04){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/villager_04.png">';
				title.innerHTML='居民';
				texture.innerHTML='你好，外乡人。今天天气真好。';
				villager_04++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/villager_04.png">';
				title.innerHTML='居民';
				texture.innerHTML='祝你在这里度过美好的一天。';
				person='end';
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/villager_04.png">';
				title.innerHTML='居民';
				texture.innerHTML='你好，外乡人。今天天气真好。';
				villager_04++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/villager_04.png">';
				title.innerHTML='居民';
				texture.innerHTML='祝你在这里度过美好的一天。';
				villager_04++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（嗯？）';
				person='end';
				villager_04=2;
				break;
			}
		}
	}
	else if (man=='villager_05'){
		villager_04=2;
		text.style.display='block';
		switch(villager_05){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/villager_05.png">';
				title.innerHTML='居民';
				texture.innerHTML='你好，外乡人。今天天气真好。';
				villager_05++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/villager_05.png">';
				title.innerHTML='居民';
				texture.innerHTML='祝你在这里度过美好的一天。';
				villager_05++;
				person='end';
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/villager_05.png">';
				title.innerHTML='居民';
				texture.innerHTML='你好，外乡人。今天天气真好。';
				villager_05++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/villager_05.png">';
				title.innerHTML='居民';
				texture.innerHTML='祝你在这里度过美好的一天。';
				villager_05++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（嗯？）';
				person='end';
				villager_05=2;
				break;
			}
		}
	}
	

	else if (man=='fisherman'){
		text.style.display='block';
		switch(fisherman){
			case 0:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='一个鱼贩的摊位，上面摆满了...风干的蘑菇和内陆出产的香料。没有一条鱼。';
				fisherman++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/fisherman.png">';
				title.innerHTML='“鱼”贩';
				texture.innerHTML='新鲜的货物！先生，要来点高原上最好的蘑菇吗？';
				fisherman++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='这里不是卖鱼的摊位吗？';
				fisherman++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/fisherman.png">';
				title.innerHTML='“鱼”贩';
				texture.innerHTML='鱼？...鱼是什么？我一直都是卖蘑菇的啊。我的记性...一向很好。';
				fisherman++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/fisherman.png">';
				title.innerHTML='“鱼”贩';
				texture.innerHTML='鱼？...鱼是什么？我一直都是卖蘑菇的啊。我的记性...一向很好。';
				person='end';
				break;
			}
		}
	}
	else if (man=='old_knight_na_street'){
		text.style.display='block';
		switch(old_knight_na_street){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='杰恩，这里真的太美好了，我要留在这里，你呢？';
				old_knight_na_street++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='还要去做你的委托吗？你都有那么多酬金了，为什么不和我留在这里享受生活的乐趣？';
				old_knight_na_street++;
				break;
			}
			case 2:{ 
				// 开始分岔  
				// 这里应该不用做处理，即使再E，也会来到case4，只是重复设置这些元素而已，不会跳出（因为没++）
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='......';
				choice_zone.style.display='block';
				choice1.innerHTML='我也留下';
				choice2.innerHTML='我得继续任务';
				// 这里不应该++，否则不点按钮，e一下就过去了
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='很聪明的决定。走吧，我看到了一家看起来很不错的酒馆，为我们的新生活喝一杯!';
				old_knight_na_street++;
				break;
			}
			case 4:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='在纳安城的生活美好而虚无，这里的人们过着固定规律节奏的生活，时间长了，你与韦斯逐渐被这里同化，渐渐遗忘了你们的过去......';
				pauseSong();
				addachievement(4);
				old_knight_na_street++;
				break;
			}
			case 5:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				end(3);
				break;
			}
			case 10:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='好吧朋友，你可真是一个守信的赏金猎人';
				old_knight_na_street++;
				break;
			}
			case 11:{
				picture.innerHTML='<img src="./img/avatar/old_knight.png">';
				title.innerHTML='韦斯';
				texture.innerHTML='那我把我的骑士勋章给你吧，让它代替我与你同行';
				old_knight_na_street++;
				break;
			}
			case 12:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（获得道具：骑士勋章）';
				old_knight_na_street++;
				break;
			}
			case 13:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（收下骑士勋章）我会的，等我完成这份委托我就回来找你';
				old_knight_na_street++;
				addachievement(5);
				break;
			}
			default:{
				old_knight_na_street++;
				person='none';
				text.style.display='none';
				transform('na_street_01')
				break;
			}
		}
	}
	else if (man=='init_dialog_at_naan_01'){
		text.style.display='block';
		switch(init_dialog_at_naan_01){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='韦斯...希望他在这里能找到安宁。现在，该办正事了。';
				init_dialog_at_naan_01++;
				person='end';
				break;
			}
		}
	}
	else if (man=='resident_man'){
		text.style.display='block';
		switch(resident_man){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（把信件和地图展示给男居民）打扰一下，你听说过这个人吗？';
				resident_man++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/resident_man.png">';
				title.innerHTML='男居民';
				texture.innerHTML='...不认识。城里所有人的面孔，我都记得。';
				resident_man++;
				person='end';
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/resident_man.png">';
				title.innerHTML='男居民';
				texture.innerHTML='找人？你不是在找人，你是在找你自己。';
				resident_man++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/resident_man.png">';
				title.innerHTML='男居民';
				texture.innerHTML='如果你想找人，或许应该去城里最高的地方看看，那里视野好。';
				if(resident_woman === 0 || resident_man === 3){
					resident_man++;
					person='end';
					break;
				}
				else{
					text.style.display='none'; // 对话结束后关闭对话框
					person = 'none';
					cg(2);
					break;
				}
			}
			
		}
	}
	else if (man=='resident_woman'){
		text.style.display='block';
		switch(resident_woman){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（把信件和地图展示给女居民）请问你见过这个人吗';
				resident_woman++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/resident_woman.png">';
				title.innerHTML='女居民';
				texture.innerHTML='或许见过吧，不过我不记得了。到底见过没有？我不知道，我并不记得太多的事情';
				resident_woman++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/resident_woman.png">';
				title.innerHTML='女居民';
				texture.innerHTML='如果你想找人，或许应该去城里最高的地方看看。';
				if(resident_man === 0 || resident_woman === 2){
					resident_woman++;
					person='end';
					break;
				}
				else{
					text.style.display='none'; // 对话结束后关闭对话框
					person = 'none';
					cg(2);
				}	
			}
		}
	}
	else if (man=='newspaper_boy'){
		text.style.display='block';
		switch(newspaper_boy){

			case 0:{
				picture.innerHTML='<img src="./img/avatar/newspaper_boy.png">';
				title.innerHTML='报童';
				texture.innerHTML='买一份报纸吗先生';
				newspaper_boy++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩（看到报纸）';
				texture.innerHTML='1773年......哦，我居然回到了十年前的纳安城！真是神奇！';
				newspaper_boy++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='难道我要找的人是来自过去的人？那可真是有趣';
				newspaper_boy++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/newspaper_boy.png">';
				title.innerHTML='报童';
				texture.innerHTML='先生，报纸有什么问题吗？';
				person='end';
				break;
			}
		}
	}
	else if (man=='vina'){
		text.style.display='block';
		switch(vina){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='你好美丽的小姐，请问我是否在哪儿见过你？';
				vina++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='这位先生，我觉得我可能见过你，你很眼熟，不过抱歉我不记得你是谁了。';
				vina++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='我叫杰恩，这位美丽的小姐。';
				vina++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='我叫维娜，杰恩先生，你这是要去做什么吗？';
				vina++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（将信件和地图展示给维娜）我接了一份委托，要找一个人';
				vina++;
				break;
			}
			case 5:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='人在纳安城？很不幸的是我不认识这个人，但我想我可以和你一起找';
				vina++;
				break;
			}
			case 6:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='但...不知为何，我感觉你的事对我很重要。如果不介意的话，我想我可以和你一起找。';
				vina++;
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='那真是再好不过了。';
				vina++;
				break;
			}
			case 8:{
				text.style.display='none';
				person='none';
				transform('na_street_03');
			}
		}
	}
	else if (man=='our_three'){
		text.style.display='block'; 
		man_now='our_three';
		switch(our_three){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（展示信件和地图）你好,老婆婆，您见过这个人吗？';
				our_three++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老人家';
				texture.innerHTML='年纪大了，记不清了';
				our_three++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='哦婆婆，这对我们来说很重要，您可以想一想吗？';
				our_three++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/young_man.png">';
				title.innerHTML='年轻人';
				texture.innerHTML='嘿奶奶，这个人很像实验室那位博士！我想你们可以去实验室找找。';
				our_three++;
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老人家';
				texture.innerHTML='坏孩子，实验室是一个会吃人的地方。';
				our_three++;
				break;
			}
			case 5:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='维娜，我想我们该去实验室看看。';
				our_three++;
				break;
			}
			case 6:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='我也赞同。';
				our_three++;
				person='end';
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老婆婆';
				texture.innerHTML='孩子们，去实验室可不是一个明智的选择。';
				our_three++;
				break;
			}
			case 8:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='谢谢婆婆的提醒，不过我们确实有很重要的事要找他。';
				our_three++;
				break;
			}
			case 9:{
				picture.innerHTML='<img src="./img/avatar/young_man.png">';
				title.innerHTML='年轻人';
				texture.innerHTML='但是我也不确定那个人是不是博士，我只是随口一提。';
				our_three++;
				break;
			}
			case 10:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='没关系，我们去看看就好了。';
				our_three++;
				person='end';
				break;
			}
			case 11:{
				picture.innerHTML='<img src="./img/avatar/old_woman.png">';
				title.innerHTML='老婆婆';
				texture.innerHTML='在到实验室之前，你们还有后悔的机会，现在的实验室可不是一个好地方。';
				our_three++;
				break;
			}
			case 12:{
				picture.innerHTML='<img src="./img/avatar/young_man.png">';
				title.innerHTML='年轻人';
				texture.innerHTML='奶奶说的没错，你们真的要去实验室吗？';
				our_three++;
				break;
			}
			case 13:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='没错，我们要去看看。';
				our_three++;
				break;
			}
			default:{ 
				text.style.display='none';
				person = 'none';
				transform('lab');
				break;
			}
		}
	}
	else if (man=='vina_log'){
		text.style.display='block';
		switch(vina_log){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='嘿维娜，这有一本实验日志';
				vina_log++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='哦杰恩，你看，这上面有我们的名字！';
				vina_log++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='这是一项关于时光机的研究。';
				vina_log++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='快让我看看，我真的很好奇自己的过去！';
				vina_log++;
				break;
			}case 4:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='杰恩你看！我们以前都是实验室的研究员！';
				vina_log++;
				break;
			}case 5:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='但是我对这件事真的一点印象都没有。';
				vina_log++;
				break;
			}case 6:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='而且在你来这里之前，我从没听说过实验室。';
				vina_log++;
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='这真是一件奇怪的事。';
				vina_log++;
				break;
			}case 8:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='维娜小姐，你看这儿，时光机的实验成功了，但是我们失败了，他们来到了这个世界……';
				vina_log++;
				break;
			}
			case 9:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='这是什么意思？';
				vina_log++;
				break;
			}
			case 10:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='实验成功了，为什么又说我们失败了？';
				vina_log++;
				break;
			}case 11:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='他们又是谁？';
				vina_log++;
				break;
			}
			case 12:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='不知道，日志到这里就结束了，我想我们可以找找其他线索。';
				vina_log++;
				person='end';
				break;
			}
			default:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='你找到线索了吗？我这里什么都没有。';
				person='end';
				break;
			}
		}
	}
	else if (man=='reveal'){
		text.style.display='block';
		switch(reveal){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='你就是我要找的委托对象？';
				reveal++;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane_01.png">';
				title.innerHTML='杰恩1';
				texture.innerHTML='是的，也是我给你下的委托。';
				reveal++;
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane_01.png">';
				title.innerHTML='杰恩1';
				texture.innerHTML='如你所见，他们的科技比我们发达，已经修复了时光机';
				reveal++;
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/jane_01.png">';
				title.innerHTML='杰恩1';
				texture.innerHTML='这个时空的资源已经快被榨干了，他们这群掠夺者将目光投向了其他科技落后的时空';
				reveal++;
				break;
			}case 4:{
				picture.innerHTML='<img src="./img/avatar/jane_01.png">';
				title.innerHTML='杰恩1';
				texture.innerHTML='而我已经找到了办法，只要你我联手，就能把他们这群掠夺者锁在他们的时空。';
				reveal++;
				break;
			}case 5:{
				picture.innerHTML='<img src="./img/avatar/jane_3.png">';
				title.innerHTML='杰恩3';
				texture.innerHTML='怎么能叫掠夺者呢？';
				reveal++;
				break;
			}case 6:{
				picture.innerHTML='<img src="./img/avatar/jane_3.png">';
				title.innerHTML='杰恩3';
				texture.innerHTML='这是为了文明的发展与留存做出的必要牺牲，';
				reveal++;
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/jane_3.png">';
				title.innerHTML='杰恩3';
				texture.innerHTML='资源是有限的，总有火种要熄灭，才能让其他火种延续下去。';
				reveal++;
				break;
			}case 8:{
				picture.innerHTML='<img src="./img/avatar/jane_3.png">';
				title.innerHTML='杰恩3';
				texture.innerHTML='杰恩博士，你很聪明，如果愿意加入我们，我们会给你更好的一切。';
				reveal++;
				break;
			}
			case 9:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='要选择哪边（你的选择会影响到你的未来）';
				choice_zone.style.display='block';
				choice1.innerHTML='封锁掠夺者';
				choice2.innerHTML='加入高科技时空阵营';
				// 这里不应该++，否则不点按钮，e一下就过去了
				break;
			}
			case 100:{
				picture.innerHTML='<img src="./img/avatar/jane_3.png">';
				title.innerHTML='杰恩3';
				texture.innerHTML='为什么？加入我们，你会得到更好的未来！那些高尖端科技或许是你们一生也无法企及的高度！';
				reveal++;
				break;
			}case 101:{
				picture.innerHTML='<img src="./img/avatar/vina_2.png">';
				title.innerHTML='维娜1';
				texture.innerHTML='再见了，你们这群高傲的侵略者';
				reveal++;
				break;
			}
			case 102:{
				text.style.display='none';
				person='none';
				cg(3);
				break;
			}
			case 1000:{
				picture.innerHTML='<img src="./img/avatar/jane_01.png">';
				title.innerHTML='杰恩1';
				texture.innerHTML='我以为将你找回来会是破局的机会';
				reveal++;
				break;
			}
			case 1001:{
				picture.innerHTML='<img src="./img/avatar/vina_2.png">';
				title.innerHTML='维娜1';
				texture.innerHTML='杰恩......我们不是朋友吗……';
				reveal++;
				break;
			}
			case 1002:{
				text.style.display='none';
				person='none';
				cg(4);
				break;
			}
		}
	}
	else if (man=='finalchoice'){
		text.style.display='block';
		switch(finalchoice){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/vina.png">';
				title.innerHTML='维娜';
				texture.innerHTML='杰恩，你要留在这里，还是回到那个时空';
				finalchoice++;
				break;
			}
			case 1:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='要选择哪边（你的选择会影响到你的未来）';
				choice_zone.style.display='block';
				choice1.innerHTML='留在自己做研究员的时空';
				choice2.innerHTML='回到自己做赏金猎人的时空';
				// 这里不应该++，否则不点按钮，e一下就过去了
				break;
			}
		}
	}

	else if (man=='self'){
		text.style.display='block';
		switch(self){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='这个方向人比较少，还是去那边问问吧。';
				person='end';
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='优秀的赏金猎人要对目的地了如指掌，还是去酒馆里问问吧。';
				person='end';
				break;
			}
			case 2:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='还不到离开的时候。再打理一下家里吧。';
				person='end';
				break;
			}
			case 3:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='既然这么早就出门了，就多问问委托里提到的事吧。';
				interact_at_home = 3;
				person='end';
				break;
			}
			case 4:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='家里的委托书写着什么来着，回去看看吧。';
				interact_at_home = 3;
				paper_at_home=4;
				self++;
				break;
			}
			case 5:{
				picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='';
				self = 4;
				transform('home');
				person='none';
				text.style.display='none'; // 对话结束后关闭对话框
				$('.choice_zone').css('display','none'); 
				break;
			}
			case 6:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='这边只有他们两个人，还是再问问吧。';
				person='end';
				break;
			}
			case 7:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='老婆婆看起来知道些什么，还是再问问吧。';
				person='end';
				break;
			}
		}
	}
}

// 点击按钮会触发对应的choice(0)或choice(1),在dialog要做的是：
// 1.把问题写出来
// 2.把按钮写上文本
function choice(num){ 
	console.log(man_now);
	$('.choice_zone').css('display','none');
	let text=document.querySelector('.text');
	let picture=document.querySelector('.picture');
	let title=document.querySelector('.title');
	let texture=document.querySelector('.texture');
	if (man_now=='old_knight'){
		switch(num){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">'; // 旁白
				title.innerHTML='杰恩';
				texture.innerHTML='我同意你的条件。';
				old_knight=30;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='我需要自己考虑。';
				// 这里也不应调用dialog，而是让玩家E一下，自然就进入新对话了
				// 因为old_knight变化了，person没变，所以会回到骑士的case5
				old_knight=6; 
				break;
			}
		}
	}
	else if(man_now=='old_knight_na_street'){
		switch(num){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='你说的很有道理韦斯，我已经有那么多报酬了，何必纠结这份委托';
				old_knight_na_street++;//3
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='哦韦斯，谢谢你的好意，不过我已经接了这份委托，还是打算将它做完';
				old_knight_na_street = 10;
				break;
			}
			
			
		}
	}
	else if(man_now=='reveal'){
		switch(num){
			case 0:{
				picture.innerHTML='<img src="./img/avatar/jane_01.png">';
				title.innerHTML='杰恩1';
				texture.innerHTML='很庆幸过去那么多年你没有改变，我们将会完成一件伟大的事';
				reveal = 100;
				break;
			}
			case 1:{
				picture.innerHTML='<img src="./img/avatar/jane_3.png">';
				title.innerHTML='杰恩3';
				texture.innerHTML='你做出了一个聪明的决定，我们会合作的很愉快的';
				reveal = 1000;
				break;
			}
		}
	}
	else if(man_now=='finalchoice'){
		switch(num){
			case 0:{
				cg(5);//研究员结局
				text.style.display='none'; // 对话结束后关闭对话框
				person = 'none';
				break;
			}
			case 1:{
				cg(6);//赏金猎人结局
				text.style.display='none'; // 对话结束后关闭对话框
				person = 'none';
				break;
			}
		}
	}
}


var tim1=setInterval(function(){ // 老骑士的结局
	if(now_phase=='bar'&&dis(hero.offsetLeft,hero.offsetTop,404,616)<=200&&old_knight>=15&&old_knight<=19){
		person='old_knight';
		old_knight=15;
		dialog(person);
		clearInterval(tim1);
	}
},50);

let guideTriggered2 = false;
var tim2=setInterval(function(){ // 街道左边提示
	const inGuideZone = now_phase == 'street_from_home_to_bar' && dis(hero.offsetLeft, hero.offsetTop, 1, 594) <= 100;

	if (inGuideZone && !guideTriggered2 && person === 'none') {
		guideTriggered2 = true; // Lock
		person='self';
		self = 0;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered2 = false; // Unlock when player leaves the zone
	}
},50);

let guideTriggered3 = false;
var tim3=setInterval(function(){ // 街道右边提示
	const inGuideZone = now_phase == 'street_from_home_to_bar' && dis(hero.offsetLeft, hero.offsetTop, 1000, 588) <= 150;

	if (inGuideZone && !guideTriggered3 && person === 'none') {
		guideTriggered3 = true; // Lock
		person='self';
		self = 1;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered3 = false; // Unlock when player leaves the zone
	}
},50);

let guideTriggered4 = false;
var tim4=setInterval(function(){ // 家里提示
	const inGuideZone = now_phase == 'home' && dis(hero.offsetLeft, hero.offsetTop, 500, 628) <= 110 && (interact_at_home <= 1 || paper_at_home<=3);

	if (inGuideZone && !guideTriggered4 && person === 'none') {
		guideTriggered4 = true; // Lock
		person='self';
		self = 2;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered4 = false; // Unlock when player leaves the zone
	}
},50);

let guideTriggered5 = false;
var tim5=setInterval(function(){ // 家里提示
	const inGuideZone = now_phase == 'na_street_01' && dis(hero.offsetLeft, hero.offsetTop, 953, 531) <= 100;

	if (inGuideZone && !guideTriggered5 && person === 'none') {
		guideTriggered5 = true; // Lock
		person='self';
		self = 6;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered5 = false; // Unlock when player leaves the zone
	}
},50);

let guideTriggered6 = false;
var tim5=setInterval(function(){ // 家里提示
	const inGuideZone = now_phase == 'na_street_03' && dis(hero.offsetLeft, hero.offsetTop,253, 559) <= 100;

	if (inGuideZone && !guideTriggered6 && person === 'none') {
		guideTriggered6 = true; // Lock
		person='self';
		self = 7;
		dialog(person);
	} else if (!inGuideZone) {
		guideTriggered6 = false; // Unlock when player leaves the zone
	}
},50);


