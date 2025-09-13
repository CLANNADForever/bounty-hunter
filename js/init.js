// 角色和地图尺寸
var herowidth=48,heroheight=48;
var mapwidth=1000,mapheight=800;

// 碰撞检测系统
var wallx=[];
var wally=[];

// 交互系统
var object=[];
var npc=[];
var obj='none',person='none',trans='none'; 


// // 背包系统
// var backpack=new Array(50).fill(0);
// var pos_on_board=new Array(50).fill(0),total=50;


// 场景管理
var last_phase='',now_phase=''; // 记住名字
// var map=0;
var option_now=0; // 用于判断角色是否可以移动


var achievement=new Array(50).fill(0);
function max(x,y){
	return (x>y)?x:y;
}
function min(x,y){
	return (x<y)?x:y;
}
function abs(x){
	return (x>0)?x:-x;
}
function dis(x,y,x1,y1){
	return abs(x-x1)+abs(y-y1);
}

// npc对话和旁白对话，旁白全部分别用变量，避免莫名bug
var self = 0; // 自言自语，用于提示玩家

// home
var init_dialog_at_home=0; // 出生点初始对话
var paper_at_home=0;
var clock_at_home=0;
var cabinet_at_home=0;
var flower_at_home=0;
var interact_at_home=0; // 有意思的小设计

// street_from_home_to_bar
var villager_01=0;
var villager_02=0;
var villager_03=0;

// bar
var init_dialog_at_bar=0;
var barman=0;
var student_01=0;
var old_knight=0;
var mercenary_01=0;
var mercenary_02=0;

// gem_room
var old_knight_gem=0;
var gem=0;	
var treasure=0;
//na_street
var init_dialog_at_naan=0;
var old_knight_na_street=0;
var fisherman=0;
var villager_04=0;
var villager_05=0;

//na_street_01
var init_dialog_at_naan_01=0;
var resident_man=0;
var resident_woman=0;

//na_street_02
var newspaper_boy=0;
var vina=0;

//na_street_03
var our_three=0;

//lab
var vina_log=0;
var record=0;
var reveal=0;
var finalchoice=0;



