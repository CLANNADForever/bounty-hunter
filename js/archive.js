var usr=localStorage.getItem('Hound_'+'CurrentPlayer');


// 这个函数用于根据传入的 num 参数加载并显示不同的线索。


// save 函数接受两个参数：archive_num 和 time_num，分别用于标识存档编号和时间戳编号。
function save(archive_num,time_num){
    hero = document.querySelector('.hero');
    hero_x = hero.style.left;
    hero_y = hero.style.top;
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'hero_x', hero_x);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'hero_y', hero_y);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'obj', obj);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'person', person);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'trans', trans);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'last_phase', last_phase);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'now_phase', now_phase);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'self', self);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'init_dialog_at_home', init_dialog_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'paper_at_home', paper_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'clock_at_home', clock_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'cabinet_at_home', cabinet_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'flower_at_home', flower_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'interact_at_home', interact_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'villager_01', villager_01);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'villager_02', villager_02);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'villager_03', villager_03);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'init_dialog_at_bar', init_dialog_at_bar);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'mercenary_01', mercenary_01);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'mercenary_02', mercenary_02);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'barman', barman);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'student_01', student_01);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'old_knight', old_knight);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'old_knight_gem', old_knight_gem);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'paper_at_home', paper_at_home);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'gem', gem);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'old_knight_na_street', old_knight_na_street);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'resident_man', resident_man);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'resident_woman', resident_woman);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'newspaper_boy', newspaper_boy);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'vina', vina);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'our_three', our_three);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'vina_log', vina_log);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'record', record);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'reveal', reveal);
    localStorage.setItem('Hound_' + usr + '_' + archive_num + 'finalchoice', finalchoice);
    // 安全保存HUD状态
    safeHUDCall(() => {
        if (hudController && hudController.ignoreTips) {
            localStorage.setItem('Hound_' + usr + '_' + archive_num + 'ignoreTips', JSON.stringify(hudController.ignoreTips));
        } else {
            localStorage.setItem('Hound_' + usr + '_' + archive_num + 'ignoreTips', JSON.stringify({}));
        }
    });


    


    // for(var i=0;i<50;i++){
    //     localStorage.setItem('Hound_'+usr+'_'+archive_num+'_backpack'+i,backpack[i]);
    //     localStorage.setItem('Hound_'+usr+'_'+archive_num+'_pos_on_board'+i,pos_on_board[i]);
    // }
	var date = new Date();
	localStorage.setItem('Hound_'+usr+'_time'+time_num,date.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }));
}
//加载存档
function reload(archive_num){
    hero = document.querySelector('.hero');
    obj = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'obj');
    person = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'person');
    trans = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'trans');
    last_phase = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'last_phase');
    now_phase = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'now_phase');
    
    example = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'example'));
    self = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'self'));
    init_dialog_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'init_dialog_at_home'));
    paper_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'paper_at_home'));
    clock_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'clock_at_home'));
    cabinet_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'cabinet_at_home'));
    flower_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'flower_at_home'));
    interact_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'interact_at_home'));
    villager_01 = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'villager_01'));
    villager_02 = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'villager_02'));
    villager_03 = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'villager_03'));
    init_dialog_at_bar = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'init_dialog_at_bar'));
    mercenary_01 = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'mercenary_01'));
    mercenary_02 = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'mercenary_02'));
    barman = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'barman'));
    student_01 = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'student_01'));
    old_knight = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'old_knight'));
    old_knight_gem = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'old_knight_gem'));
    paper_at_home = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'paper_at_home'));
    gem = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'gem'));
    old_knight_na_street = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'old_knight_na_street'));
    resident_man = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'resident_man'));
    resident_woman = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'resident_woman'));
    newspaper_boy = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'newspaper_boy'));
    vina = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'vina'));
    our_three = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'our_three'));
    vina_log = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'vina_log'));
    record = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'record'));
    reveal = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'reveal'));
    finalchoice = Number(localStorage.getItem('Hound_' + usr + '_' + archive_num + 'finalchoice'));

    // 安全恢复HUD状态
    const ignoreTipsJSON = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'ignoreTips');
    if (ignoreTipsJSON) {
        safeHUDCall(() => {
            if (hudController) {
                hudController.ignoreTips = JSON.parse(ignoreTipsJSON);
            }
        });
    } else {
        // 如果没有保存的HUD状态，重置HUD
        safeHUDCall(() => {
            resetHUD();
        });
    }



    hero_x = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'hero_x');
    hero_y = localStorage.getItem('Hound_' + usr + '_' + archive_num + 'hero_y');
    transform(now_phase);
    setTimeout(() => {
        hero.style.left = hero_x;
        hero.style.top = hero_y;
    }, 600);
    person = 'none';
    obj = 'none';
    trans = 'none';
    option_now = 0;
    var tim1=setInterval(function(){
	    if(now_phase=='bar'&&dis(hero.offsetLeft,hero.offsetTop,404,616)<=200&&old_knight>=15&&old_knight<=19){
            person='old_knight';
            old_knight=15;
            dialog(person);
            clearInterval(tim1);
        }
    },50);
    
}

