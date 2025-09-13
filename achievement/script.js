var usr=localStorage.getItem('Hound_'+"CurrentPlayer");
function openarchive(){
    window.open("../archive/archive.html","_self");
}
function backToHome(){
    window.open("../home/home.html", "_self")
}
function openabout(){
    window.open("../aboutus/introduction.html","_self");
}
function showachieve(){
    if('Hound_'+usr+'_achievement1' in localStorage){
        $('#achievename1').html('化敌为友');
        $('#achievedetail1').html('与一句话不合就拼命的老骑士成为了朋友');
        $('#picture1').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement2' in localStorage){
        $('#achievename2').html('武功过人');
        $('#achievedetail2').html('在战斗中击败了老骑士');
        $('#picture2').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement3' in localStorage){
        $('#achievename3').html('机智过人');
        $('#achievedetail3').html('成功通关密室，拿到宝石');
        $('#picture3').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement4' in localStorage){
        $('#achievename4').html('遗失过往');
        $('#achievedetail4').html('和韦斯一起在纳安城定居，放弃委托');
        $('#picture4').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement5' in localStorage){
        $('#achievename5').html('守信的赏金猎人');
        $('#achievedetail5').html('拒绝韦斯的提议，坚持完成委托');
        $('#picture5').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement6' in localStorage){
        $('#achievename6').html('铁石心肠');
        $('#achievedetail6').html('加入高科技时空的侵略者');
        $('#picture6').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement7' in localStorage){
        $('#achievename7').html('落叶归根');
        $('#achievedetail7').html('找回记忆，回到自己原本的时空');
        $('#picture7').attr('src','不知道');
    }
    if('Hound_'+usr+'_achievement8' in localStorage){
        $('#achievename8').html('逍遥四方');
        $('#achievedetail8').html('选择继续当赏金猎人');
        $('#picture8').attr('src','不知道');
    }
}
$(document).ready(showachieve);