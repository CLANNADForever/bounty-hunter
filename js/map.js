// 这行代码通过选择器 .window 获取文档中第一个匹配的元素，并将其赋值给变量 scene。
let scene=document.querySelector('.window');
var highlightTimer = null; // 用于存储高亮检测定时器

// 计算两个点之间的距离
function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// 检查玩家与可交互对象的距离，并控制高亮显示
function checkObjectProximity() {
    var hero = $('.hero');
    var heroX = parseInt(hero.css('left'));
    var heroY = parseInt(hero.css('top'));

    // 隐藏所有高亮
    $('.object-highlight').removeClass('show');

    if (typeof object !== 'undefined' && Array.isArray(object)) {
        for (var i = 0; i < object.length; i++) {
            if (i < 5) { // 确保我们不会超出预定义的5个高亮元素
                var objX = object[i][0];
                var objY = object[i][1];
                var distance = getDistance(heroX, heroY, objX, objY);

                var highlightEl = $('#highlight-' + (i + 1));
                if (distance < 50) { // 50px的接近阈值
                    highlightEl.css({
                        left: (objX-20) + 'px', // 调整以使高亮居中
                        top: (objY-20) + 'px'
                    }).addClass('show');
                } else {
                    highlightEl.removeClass('show');
                }
            }
        }
    }
}

function loadmap(phase){
	// 清理旧的高亮检测定时器
	if (highlightTimer) {
		clearInterval(highlightTimer);
		highlightTimer = null;
	}

	// 更新场景状态，从抽象逻辑来讲，这部分应该放在切换地图的函数，但是loadmap用太多了，懒得改了
	// 这段代码检查当前场景状态 now_phase 是否与传入的 phase 不同，
	// 或者当前场景状态是 bedroom 且传入的 phase 也是 bedroom。
	// 如果是，则更新 last_phase 为 now_phase，并将 now_phase 更新为 phase。
	if(now_phase!=phase){
		last_phase=now_phase;
		now_phase=phase;
	}
	obj=person=trans='none';
	// 如果 phase 为 'test'，则设置场景的背景图像为 ./img/bedroom1.png，
	// 并初始化 wallx、wally、object 和 npc 数组，这些数组分别定义了墙壁、物体和 NPC 的位置和属性。
	//下面的逻辑类似
	if(phase=='home'){
		var audio = document.getElementById('audio');
		if (audio && (!audio.src.includes('bar') || audio.paused)){
			loadSong('home and bar.mp3');
			playSong();
		}
		$('.hero').css('display','block'); //显示玩家
		scene.style.backgroundImage = "url(./img/map/home.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示

		if(init_dialog_at_home == 0) {
			person='init_dialog_at_home'; // 这种没有实体npc的对话要人工设置person，否则没办法进入对话逻辑
			dialog('init_dialog_at_home');
		}

		// 墙壁内圈不要突出，外面可以随便往外延长，有时候计算比试来的快一点，
		// 比如横向往右接纵向往下的转角，纵向的起始点就用横向的起始点和长度算出来
		wallx = [ // 左右方向的墙,起始点是(309,256),长度是200
			[309,256,200],  [409, 211, 375],[584,236, 125],[614,386,10],[309, 346, 30], [339, 541, 110], [514, 541, 300], [449,576, 300],[429,356,95],[429, 436, 95]
		]
		
		wally = [ // 上下方向的墙，起始点是(304,261),长度是580
			[304,261,580], [509, 116, 140],[584, 211, 25],[614,236,150], [624, 381, 350] ,[339, 346, 400],[449, 541, 100], [514, 541, 200],[429, 356, 80],[524,356,80]
		]
		
		if (last_phase == 0){ // 很特殊的设定，只有刚开始游戏的时候last_phase是0，出生在床上
			$('.hero').css('left','557px');
			$('.hero').css('top','264px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		} else if (true){ // 家里只有一个门
			$('.hero').css('left','479px');
			$('.hero').css('top','531px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}

		npc = []; // 必须要留空数组，不然会导致没定义,这时候按两次e才能正常对话
		$('#npc1').css('display','none'); // _8_必须全部隐藏，不然会导致上个场景的npc还在
		$('#npc2').css('display','none');
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');

		// 物品
		object=[[619,321,40,'paper_at_home'], [631, 247, 40, 'clock_at_home'], [478, 272, 40, 'cabinet_at_home'], [333, 493,40, 'flower_at_home']]; //物品都是底图里有的，就不用css单独显示了
		
		// 传送点
		door=[[479, 581, 40, 'street_from_home_to_bar']]; 
		
	}
	
	else if (phase=='street_from_home_to_bar'){
		var audio = document.getElementById('audio');
		if (audio && (!audio.src.includes('bar') || audio.paused)){
			loadSong('home and bar.mp3');
			playSong();
		}
		$('.hero').css('display','block'); //显示玩家
		scene.style.backgroundImage = "url(./img/map/street_from_home_to_bar.jpg), url(./img/black_background.jpg)"; // _5_图片缩放好
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示


		wallx = [[0, 615, 1000], [0, 515, 165], [215, 515, 475], [740, 515, 260], [0, 410, 1000], [0, 440, 400]
		];

		wally = [[165, 0, 515], [215, 0, 515], [690, 0, 515], [740, 0, 515], [0, 965, 800]
		];

		if (last_phase == 'home'){
			$('.hero').css('left','190px');
			$('.hero').css('top','495px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
			if (interact_at_home <= 1 && paper_at_home > 3){
				self = 3;
				person='self'
				dialog(person);
			} else if(paper_at_home <= 3){
				self = 4;
				person='self';
				dialog(person);
			}
		} else if (last_phase == 'bar'){
			$('.hero').css('left','715px');
			$('.hero').css('top','440px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}
		
		npc = [[425, 525, 50, 'villager_01'], [527, 605, 50, 'villager_03'],[590, 605, 50, 'villager_02'] ];
		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/villager_01.png")');
		$('#npc1').css('left','425px');
		$('#npc1').css('top','525px');
		$('#npc1').attr('data-orientation', 'down');

		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/villager_03.png")');
		$('#npc2').css('left','527px');
		$('#npc2').css('top','605px');
		$('#npc2').attr('data-orientation', 'right');

		$('#npc3').css('display','block');
		$('#npc3').css('background-image','url("./img/character/villager_02.png")');
		$('#npc3').css('left','590px');
		$('#npc3').css('top','605px');
		$('#npc3').attr('data-orientation', 'left');

		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');

		object = [];
		// door = [[190, 435, 40, 'home'], [715, 405, 40, 'bar']];
		door = [[190, 435, 50, 'home'], [715, 405, 50, 'bar']]
	}
	else if(phase=='bar'){
		var audio = document.getElementById('audio');
		if (audio && (!audio.src.includes('bar') || audio.paused)){
			loadSong('home and bar.mp3');
			playSong();
		}
		if (init_dialog_at_bar == 0){
			person='init_dialog_at_bar';
			dialog(person);
		}
		
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/bar.png), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示

		wallx = [
			[159,201,635],[159,326,245],[454,326,350],[379,431,25],[454,431,320],[159,516,215],[159,581,245],[454,581,350],[404,611,50],
			[164,226,85],[289,226,85],[484,226,85],[639,226,85],[164,296,85],[289,296,85],[484,296,85],[639,296,85],[479,451,85],[644,451,85],[479,521,85],[644,521,85]
		];
		
		wally = [
			[154,206,400],[799,206,400],[404,326,105],[454,326,105],[374,406,110],[154,521,55],[769,436,140],[404,581,40],[454,581,40],
			[164,226,70],[249,226,70],[289,226,70],[374,226,70],[484,226,70],[569,226,70],[639,226,70],[724,226,70],[479,451,70],[564,451,70],[644,451,70],[729,451,70]
		];

		if (true){ // _7_ 想好逻辑和位置
			$('.hero').css('left','429px');
			$('.hero').css('top','601px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}
		
		npc=[[240,475, 70, 'barman'], [525, 448, 50, 'student_01'], [691, 221, 55, 'old_knight'], [330, 221, 50, 'mercenary_01'] ,[385, 265, 50, 'mercenary_02']]; 
		object=[];
		door=[[404,616,50,'street_from_home_to_bar']]; 

		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/barman.png")');
		$('#npc1').css('left','240px');
		$('#npc1').css('top','475px'); 
		$('#npc1').attr('data-orientation', 'down');

		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/student_01.png")');
		$('#npc2').css('left','525px');
		$('#npc2').css('top','448px');
		$('#npc2').attr('data-orientation', 'down');

		$('#npc3').css('display','block');
		$('#npc3').css('background-image','url("./img/character/old_knight.png")');
		$('#npc3').css('left','691px');
		$('#npc3').css('top','221px');
		$('#npc3').attr('data-orientation', 'down');

		$('#npc4').css('display','block');
		$('#npc4').css('background-image','url("./img/character/mercenary_01.png")');
		$('#npc4').css('left','330px');
		$('#npc4').css('top','221px');
		$('#npc4').attr('data-orientation', 'down');
		
		$('#npc5').css('display','block');
		$('#npc5').css('background-image','url("./img/character/mercenary_02.png")');
		$('#npc5').css('left','385px');
		$('#npc5').css('top','265px');
		$('#npc5').attr('data-orientation', 'left');
		
		$('#npc6').css('display','none');
		
	
	}

	else if(phase=='gem_room'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/gem_room.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示

		wallx = [[402,521,65],[402,623,151],[488,521,65],[467,232,21]];

		wally = [[402,521,102],[467,232,289],[553,521,102],[488,232,289]];

		if (true){ 
			$('.hero').css('left','480px');
			$('.hero').css('top','620px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}
		
		npc=[[550,525, 70,'old_knight_gem']]; 
		object=[[480,200,80,'gem']];
		// door=[[400,620,155,'bar']]; 
		door=[];

		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/old_knight.png")');
		$('#npc1').css('left','550px');
		$('#npc1').css('top','525px'); 
		$('#npc2').css('display','none');
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');
	
	}

	else if(phase=='na_street'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/na_street.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; 
		scene.style.backgroundRepeat = "no-repeat, repeat"; 
		scene.style.backgroundPosition = "center, center";

		if(true){
			$('.hero').css('left','20px');
			$('.hero').css('top','540px');
			$('.hero').css('background-position-y','0');
		}

		wallx = [[6,607,941],[873,402,74],[726,502,147],[548,404,178],[406,508,142],[277,412,129],[166,496,111],[6,411,160]];
		wally = [[947,402,205],[873,402,100],[726,404,98],[548,404,104],[406,412,96],[277,412,84],[166,411,85],[6,411,196]];

		npc=[[100,460,50,'old_knight_na_street']];
		object=[];
		door=[];

		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/old_knight.png")');
		$('#npc1').css('left','100px');
		$('#npc1').css('top','460px');
		$('#npc2').css('display','none');
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');
	}

	else if(phase=='na_street_01'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/na_street.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; 
		scene.style.backgroundRepeat = "no-repeat, repeat"; 
		scene.style.backgroundPosition = "center, center";

		if(true){
			$('.hero').css('left','100px');
			$('.hero').css('top','480px');
			$('.hero').css('background-position-y','0');
		}

		wallx = [[6,607,941],[873,402,74],[726,502,147],[548,404,178],[406,508,142],[277,412,129],[166,496,111],[6,411,160]];
		wally = [[947,402,205],[873,402,100],[726,404,98],[548,404,104],[406,412,96],[277,412,84],[166,411,85],[6,411,196]];

		npc=[[470,540,40,'resident_man'],[810,530,40,'resident_woman']];
		object=[];
		door=[];


		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/resident_man.png")');
		$('#npc1').css('left','470px');
		$('#npc1').css('top','540px'); 
		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/resident_woman.png")');
		$('#npc2').css('left','810px');
		$('#npc2').css('top','530px'); 
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');

	}
	else if(phase=='na_street_02'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/na_street.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; 
		scene.style.backgroundRepeat = "no-repeat, repeat"; 
		scene.style.backgroundPosition = "center, center";

		if(true){
			$('.hero').css('left','20px');
			$('.hero').css('top','540px');
			$('.hero').css('background-position-y','0');

		}

		if(newspaper_boy === 0) {
			person='newspaper_boy'; // 这种没有实体npc的对话要人工设置person，否则没办法进入对话逻辑
			dialog('newspaper_boy');
		}

		wallx = [[6,607,941],[873,402,74],[726,502,147],[548,404,178],[406,508,142],[277,412,129],[166,496,111],[6,411,160]];
		wally = [[947,402,205],[873,402,100],[726,404,98],[548,404,104],[406,412,96],[277,412,84],[166,411,85],[6,411,196]];

		npc=[[60,470,40,'newspaper_boy'],[300,540,40,'vina']];
		object=[];
		door=[];


		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/newspaper_boy.png")');
		$('#npc1').css('left','60px');
		$('#npc1').css('top','470px'); 
		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/vina.png")');
		$('#npc2').css('left','300px');
		$('#npc2').css('top','540px');
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');

	}
	else if(phase=='na_street_03'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/na_street.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; 
		scene.style.backgroundRepeat = "no-repeat, repeat"; 
		scene.style.backgroundPosition = "center, center";

		if(true){
			$('.hero').css('left','20px');
			$('.hero').css('top','540px');
			$('.hero').css('background-position-y','0');
		}

		wallx = [[6,607,941],[873,402,74],[726,502,147],[548,404,178],[406,508,142],[277,412,129],[166,496,111],[6,411,160]];
		wally = [[947,402,205],[873,402,100],[726,404,98],[548,404,104],[406,412,96],[277,412,84],[166,411,85],[6,411,196]];

		npc=[[100,460, 40, 'our_three'],[50,460, 40, 'our_three'],[150,460, 40, 'our_three']];
		object=[];
		door=[];

		
		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/old_woman.png")');
		$('#npc1').css('left','50px');
		$('#npc1').css('top','460px');
		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/young_man.png")');
		$('#npc2').css('left','100px');
		$('#npc2').css('top','460px');
		$('#npc3').css('display','block');
		$('#npc3').css('background-image','url("./img/character/vina.png")');
		$('#npc3').css('left','150px');
		$('#npc3').css('top','460px');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');

	}
	else if(phase=='lab'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/lab.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示

		wallx = [[465,512,22],[352,484,113],[487,484,117],[352,357,252]];

		wally = [[465,484,38],[487,484,38],[604,357,127],[352,357,127]];

		if (true){ 
			$('.hero').css('left','480px');
			$('.hero').css('top','500px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}
		
		npc=[[440,370,40,'vina_log'],[490,350,40,'vina_log']]; 
		object=[[560,360,40,'record']]; 
		door=[];

		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/vina.png")');
		$('#npc1').css('left','440px');
		$('#npc1').css('top','370px'); 
		$('#npc2').css('display','none');
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');
	
	}

	else if(phase=='lab2'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/lab.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示

		if(reveal == 0) {
			person='reveal'; // 这种没有实体npc的对话要人工设置person，否则没办法进入对话逻辑
			dialog('reveal');
		}
		
		wallx = [[465,512,22],[352,484,113],[487,484,117],[352,357,252]];

		wally = [[465,484,38],[487,484,38],[604,357,127],[352,357,127]];


		if (true){ 
			$('.hero').css('left','540');
			$('.hero').css('top','370px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}

		npc=[];
		object=[];
		door=[];

		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/vina.png")');
		$('#npc1').css('left','440px');
		$('#npc1').css('top','370px'); 
		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/jane_01.png")');
		$('#npc2').css('left','370px');
		$('#npc2').css('top','400px'); 
		$('#npc3').css('display','block');
		$('#npc3').css('background-image','url("./img/character/jane_3.png")');
		$('#npc3').css('left','480px');
		$('#npc3').css('top','490px');
		$('#npc3').css('background-position-y','-144px')
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');
	}

	else if(phase=='lab3'){
		$('.hero').css('display','block');
		scene.style.backgroundImage = "url(./img/map/lab.jpg), url(./img/black_background.jpg)";
		scene.style.backgroundSize = "auto, cover"; // 根据需要调整大小
		scene.style.backgroundRepeat = "no-repeat, repeat"; // 防止图片重复
		scene.style.backgroundPosition = "center, center"; // 将图片居中显示

		if(finalchoice == 0) {
			person='finalchoice'; // 这种没有实体npc的对话要人工设置person，否则没办法进入对话逻辑
			dialog('finalchoice');
		}
		
		wallx = [[465,512,22],[352,484,113],[487,484,117],[352,357,252]];

		wally = [[465,484,38],[487,484,38],[604,357,127],[352,357,127]];


		if (true){ 
			$('.hero').css('left','540');
			$('.hero').css('top','370px');
			$('.hero').css('background-position-y','0'); // 将背景图片居中显示
		}

		npc=[];
		object=[];
		door=[];

		$('#npc1').css('display','block');
		$('#npc1').css('background-image','url("./img/character/vina.png")');
		$('#npc1').css('left','440px');
		$('#npc1').css('top','370px'); 
		$('#npc2').css('display','block');
		$('#npc2').css('background-image','url("./img/character/jane_01.png")');
		$('#npc2').css('left','370px');
		$('#npc2').css('top','400px'); 
		$('#npc3').css('display','none');
		$('#npc4').css('display','none');
		$('#npc5').css('display','none');
		$('#npc6').css('display','none');
		
	}
	highlightTimer = setInterval(checkObjectProximity, 100);
	

}
//这段代码的主要功能是处理地图转换的过渡效果，包括背景图切换、人物移动、NPC出现、对话显示等。
// 具体步骤如下：

// 输出传入的地图名称到控制台。
// 初始化几个变量为 'none'。
// 如果传入的地图名称为 'shenyuan'，则执行以下操作：
// 清除背景板的背景图像并隐藏背景板。
// 清除字幕内容并隐藏字幕。
// 淡入幕布，延迟 1.5 秒后加载指定地图，再延迟 1 秒后淡出幕布。
function transform(map_name){
	console.log(map_name);
	person=obj=trans='none';
	// last_phase=phase; //用于记录上一个地图以确定正确的出生点
	// now_phase=map_name;
	
	{
		$('.caption').html('');
		$(".curtain").fadeIn(500);
		setTimeout(function(){loadmap(map_name)},500);
		setTimeout("$('.curtain').fadeOut(500)",1000);
	}
	trans='none';
}