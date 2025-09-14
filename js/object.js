function interact(object){
	// 以下完全复用对话框
    $('.container').css('margin-top','15px');
	$('.container').css('margin-left','0');
	let text=document.querySelector('.text');
	let picture=document.querySelector('.picture');
	let title=document.querySelector('.title');
	let texture=document.querySelector('.texture');
    // 与物品交互
    if(object=='paper_at_home'){ //object是物品名字符串
        text.style.display='block';
        switch(paper_at_home){ //这里是全局变量，值是数字
            case 0:
                picture.innerHTML='<img src="./img/object/parchment-texture.png">';
                title.innerHTML='一封信';
				texture.innerHTML='信：“勇敢的赏金猎人，如果你愿意去到纳安城找到这个人，你将会收到...”'; 
                paper_at_home++;
                break; 
            case 1:
                picture.innerHTML='<img src="./img/object/parchment-texture.png">';
                title.innerHTML='一封信';
				texture.innerHTML='(把信纸拿了出来，信封里还放着一张地图。地图上在莱茵城上标注了密室和钥匙，似乎是想让你去寻找)';  //_4_检查文字
                paper_at_home++;
                break; //这张纸只写了一个内容，所以不用++，每次都是这个文字
            case 2: // 用同一接口的好处，这里虽然是对话，但是直接顺手糊弄过去了，不放dialog了，因为没本质区别
                picture.innerHTML='<img src="./img/avatar/jane.png">';
                title.innerHTML='杰恩';
				texture.innerHTML='莱茵城的密室，还有纳安城？没听说过的地方，不过这报酬真是诱人。';
                paper_at_home++;
                break;
            case 3:
                picture.innerHTML='<img src="./img/avatar/jane.png">';
                title.innerHTML='杰恩';
				texture.innerHTML='报酬足够，没什么困难是英勇无畏的赏金猎人克服不了的。'; //_1_检查一下文字
                paper_at_home++;
                obj = 'end';
                break;
            case 4:
                picture.innerHTML='<img src="./img/object/parchment-texture.png">';
                title.innerHTML='一封信';
				texture.innerHTML='信：“勇敢的赏金猎人，如果你愿意去到纳安城找到这个人，你将会收到一笔丰厚的报酬”'; 
                paper_at_home++;
                break; 
            case 5:
                picture.innerHTML='<img src="./img/object/parchment-texture.png">';
                title.innerHTML='一封信';
				texture.innerHTML='(把信纸拿了出来，信封里还放着一张地图。地图上在莱茵城上标注了密室和钥匙，似乎是想让你去寻找)';  //_4_检查文字
                paper_at_home=4;
                obj = 'end';
                break;

        }
    } 
    else if(object=='clock_at_home'){
        text.style.display='block';
        switch(clock_at_home){
            case 0:{
                picture.innerHTML='';
				title.innerHTML='钟表';
				texture.innerHTML='（一个普通的挂钟，指针正一格一格地走着。滴答，滴答...）';
				clock_at_home++;
				break;
            }
            case 1:{
                picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='时间对我来说，似乎没什么意义。无论是过去，还是未来。';
                interact_at_home++;
                clock_at_home++;
                obj='end';
				break;
            }
            default:{
                picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='时间对我来说没什么意义。无论是过去，还是未来。';
                obj='end';
            }
        }
    }
    else if(object=='cabinet_at_home'){
        text.style.display='block';
        switch(cabinet_at_home){
            case 0:{
                picture.innerHTML='';
				title.innerHTML='柜子';
				texture.innerHTML='（一个结实的木柜，里面放着你所有的家当——一些换洗衣物，保养武器的油膏，还有半瓶劣质的酒。）';
                cabinet_at_home++;
				break;
            }
            case 1:{
                picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='作为赏金猎人，家当越少越好。方便随时上路，也方便随时消失。';
                interact_at_home++;
                cabinet_at_home++;
                obj='end';
				break;
            }
            default:{
                picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='作为赏金猎人，家当越少越好。方便随时上路，也方便随时消失。';
                obj='end';
            }
        }
    }
    else if(object=='flower_at_home'){
        text.style.display='block';
        switch(flower_at_home){
            case 0:{
                picture.innerHTML='';
				title.innerHTML='花盆';
				texture.innerHTML='（花盆里面是一株早已枯萎的植物，不知被遗忘了多久。）';
				flower_at_home++;
                interact_at_home++;
				break;
            }
            case 1:{
                picture.innerHTML='<img src="./img/avatar/jane.png">';
				title.innerHTML='杰恩';
				texture.innerHTML='（这盆花为什么会有一种莫名的熟悉感？好像...曾经有人很珍视它。）';
                flower_at_home++;
                obj='end';
                break;
            }
            default:{
                picture.innerHTML='';
				title.innerHTML='花盆';
				texture.innerHTML='（花盆里面是一株早已枯萎的植物，不知被遗忘了多久。）';
                flower_at_home++;
                obj='end';
                break;
            }
        }
    }

    else if(object=='gem'){
        text.style.display='block';
        switch(gem){ 
            case 0:{
                picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（获得道具：宝石钥匙）';
                addachievement(3);
				gem++;
				break;
            }
            case 1:{
                picture.innerHTML='';
                title.innerHTML='';
				texture.innerHTML='在你拿起宝石的瞬间，整个密室的地面开始轻微震动，墙壁上的符文闪烁起危险的红光。';
                gem++;
                break; 
            }
            case 2:{
                picture.innerHTML='<img src="./img/avatar/old_knight.png">'; 
                title.innerHTML='韦斯';
				texture.innerHTML='不好，是静默警报！我们已经被发现了，必须马上离开！';
                gem++;
                break;              
            }
            case 3:{
				text.style.display='none'; // 对话结束后关闭对话框
				obj = 'none';
                obj=[]
                cg(1);
                break;
			}
        }
    }
    else if(object == 'treasure'){
        text.style.display='block';
        switch(treasure){
            case 0:{
                picture.innerHTML='';
				title.innerHTML='';
				texture.innerHTML='（金币和珠宝堆积如山，在灯光下闪耀着贪婪的光芒。但你们眼下的目标只有一个。）';
				treasure++;
                obj='end';
				break;
            }
            default:{
                picture.innerHTML='';
                title.innerHTML='';
				texture.innerHTML='（金币和珠宝堆积如山，在灯光下闪耀着贪婪的光芒。但你们眼下的目标只有一个。）';
                obj='end';
                break; 
            }
        }
    }
    else if(object=='record'){
        text.style.display='block';
        switch(record){ 
            case 0:{
                picture.innerHTML='';  
                title.innerHTML='';
				texture.innerHTML='你们走到一台布满灰尘的核心终端前。屏幕突然亮起，显示出一行字..';
                record++;
                break;
            }
            case 1:{
                obj='none';
                text.style.display='none';
                npc = [];
                obj = [];
                cg(8);
                record++;
                break;
            }
            default:{
                obj='none';
                text.style.display='none';
                break;
            }
        }
    }
}
// 为了方便看，定时监测都放npc里，不要放在这