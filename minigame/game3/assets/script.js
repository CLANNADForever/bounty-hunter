document.addEventListener('DOMContentLoaded', () => {
    // 游戏元素获取
    const startScreen = document.getElementById('start-screen');
    const enemyArea = document.getElementById('enemy-area');
    const player = document.getElementById('player');
    const battleBox = document.getElementById('battle-box');
    const dialogueBox = document.getElementById('dialogue-box');
    const dialogueText = document.getElementById('dialogue-text');
    const enemy = document.getElementById('enemy');
    const hud = document.getElementById('hud');

    // 重置函数：恢复所有状态和UI
    function resetGame() {
        // 恢复变量
        playerX = 90;
        playerY = 90;
        playerHp = maxHp;
        isInvincible = false;
        revivedOnce = false;
        currentDialogue = [];
        dialogueIndex = 0;
        currentAttackRound = 0;
        inDialogue = true;
        inAttack = false;
        forcedMove = false;
        forcedDir = null;
        forcedSpeed = 0;
        for (let k in keys) delete keys[k];

        // 清理所有攻击元素
        const attacks = document.querySelectorAll('.bullet, .laser-warning, .laser-beam, .missile-warning, .missile-impact, .gather-ball, .gather-center, .border-laser, .tracking-laser');
        attacks.forEach(a => a.remove());

        // 恢复UI
        startScreen.classList.add('hidden');
        enemyArea.classList.remove('hidden');
        battleBox.classList.add('hidden');
        dialogueBox.classList.remove('hidden');
        hud.classList.remove('hidden');
        player.classList.remove('invincible');

        // 重新设置血条
        setupHpBar();
        updateHpDisplay();

        // 重新绑定按键
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // 重新显示对话
        showDialogue();
    }

    // 挂载到window，便于外部按钮调用
    window.resetGame = resetGame;

    // 玩家状态
    let playerX = 90;
    let playerY = 90;
    const playerSpeed = 5;
    let playerHp = 5;
    const maxHp = 5;
    let isInvincible = false;
    const keys = {};

    // 游戏流程控制
    let currentDialogue = [];
    let dialogueIndex = 0;
    let currentAttackRound = 0;
    let inDialogue = true;
    let inAttack = false;

    // 对话内容库
    const dialogues = [
  // 第1轮前
        [
            { text:"* （入侵者）原来在另一个地方，我竟然沦落为这样的人。", avatar:"assets/imgs/jane_3.png" },
            { text:"* （委托人）我们在同一条时间线上成长，我知道他心里真正追求的是什么。", avatar:"assets/imgs/jane_01.png" },
            { text:"* （维娜）不同的经历，却同样的名字，这真是讽刺。", avatar:"assets/imgs/vina.png" }
        ],
        // 第2轮前
        [
            { text:"* （入侵者）我早已摆脱了束缚，力量才是真正的信条。", avatar:"assets/imgs/jane_3.png" },
            { text:"* （杰恩）可我还记得自己曾经的信念，不是掠夺，而是守护。", avatar:"assets/imgs/jane.png" },
            { text:"* 时空封锁已完成10%" }
        ],
        // 第3轮前
        [
            { text:"* （维娜）看着他就像看着镜子，镜子里却映出陌生的影子。", avatar:"assets/imgs/vina.png" },
            { text:"* （委托人）杰恩，你现在的选择，决定着我们这一条时间线的未来。", avatar:"assets/imgs/jane_01.png" },
            { text:"* 时空封锁已完成20%" }
        ],
        // 第4轮前
        [
            { text:"* （入侵者）我早就明白，文明没有感情，只有存续。", avatar:"assets/imgs/jane_3.png" },
            { text:"* （杰恩）你的存续，是建立在别人的世界被牺牲之上。", avatar:"assets/imgs/jane.png" },
            { text:"* 时空封锁已完成30%" }
        ],
        // 第5轮前
        [
            { text:"* （维娜）我曾以为所有的你都一样温柔而固执……原来不。", avatar:"assets/imgs/vina.png" },
            { text:"* （入侵者）我们本是同一粒种子，只是落在不同的土壤罢了。", avatar:"assets/imgs/jane_3.png" },
            { text:"* 时空封锁已完成40%" }
        ],
        // 第6轮前
        [
            { text:"* （委托人）杰恩，你不必像他那样，我们还可以用自己的方式改变。", avatar:"assets/imgs/jane_01.png" },
            { text:"* （入侵者）改变？环境从不等人，它吞噬一切犹豫。", avatar:"assets/imgs/jane_3.png" },
            { text:"* 时空封锁已完成50%" } // 如果你要严格按提示要求，也可以写60%或你想的百分比
        ],
        // 第7轮前
        [
            { text:"* （维娜）不论经历怎样，我相信总有一个你会坚持初心。", avatar:"assets/imgs/vina.png" },
            { text:"* （入侵者）初心？那只是别处的奢侈幻想。", avatar:"assets/imgs/jane_3.png" },
            { text:"* 时空封锁已完成70%" }
        ],
        // 胜利后
        [
            { text:"* （入侵者）……也许我只是另一个被环境塑造出的“杰恩”。", avatar:"assets/imgs/jane_3.png" },
            { text:"* （委托人）每条路都有选择，这才是人而非工具的意义。", avatar:"assets/imgs/jane_01.png" },
            { text:"* （维娜）记忆归来之时，选择也回到你手里。", avatar:"assets/imgs/vina.png" },
            { text:"* 时空封锁已完成" }
        ]
    ];

    const gameOverDialogue = ["* 你倒下了..."];
    
    // 初始化HP显示条
    function setupHpBar() {
        hud.innerHTML = '';
        for (let i = 0; i < maxHp; i++) {
            const segment = document.createElement('div');
            segment.classList.add('hp-segment');
            hud.appendChild(segment);
        }
    }


    // 更新HP显示
    function updateHpDisplay() {
        const segments = document.querySelectorAll('#hud .hp-segment');
        segments.forEach((segment, index) => {
            if (index < playerHp) {
                segment.classList.add('filled');
            } else {
                segment.classList.remove('filled');
            }
        });
    }


    // 玩家受伤逻辑
    let revivedOnce = false;

    function takeDamage() {
        if (isInvincible) return;

        playerHp--;
        updateHpDisplay();

        if (playerHp <= 0) {
            if (!revivedOnce) {
                // revivedOnce = true;
                playerHp = maxHp;
                updateHpDisplay();
                // 仅显示提示，不暂停或中断战斗
                let reviveTip = document.createElement('div');
                reviveTip.textContent = '储存的时间能量消耗!';
                reviveTip.style.position = 'absolute';
                reviveTip.style.left = (battleBox.offsetLeft + battleBox.offsetWidth + 20) + 'px';
                reviveTip.style.top = (battleBox.offsetTop + 40) + 'px';
                reviveTip.style.background = 'rgba(0,0,0,0.7)';
                reviveTip.style.color = '#fff';
                reviveTip.style.fontSize = '20px';
                reviveTip.style.padding = '10px 24px';
                reviveTip.style.borderRadius = '12px';
                reviveTip.style.zIndex = 2000;
                reviveTip.style.pointerEvents = 'none';
                reviveTip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                document.body.appendChild(reviveTip);
                isInvincible = true;
                player.classList.add('invincible');
                
                setTimeout(() => {
                    isInvincible = false;
                    player.classList.remove('invincible');
                }, 3000); // 3秒无敌时间
                setTimeout(() => { reviveTip.remove(); },5000);
                
                return;
            } else {
                gameOver();
                return;
            }
        }

        isInvincible = true;
        player.classList.add('invincible');
        setTimeout(() => {
            isInvincible = false;
            player.classList.remove('invincible');
        }, 1200); // 1.2秒无敌时间
    }
    
    // 游戏结束
    function gameOver() {
        inAttack = false;
        inDialogue = true; // 阻止移动
        // 清除所有攻击元素
        const attacks = document.querySelectorAll('.bullet, .laser-warning, .laser-beam, .missile-warning, .missile-impact');
        attacks.forEach(attack => attack.remove());
        
        battleBox.classList.add('hidden');
        hud.classList.add('hidden');
        dialogueBox.classList.remove('hidden');
        dialogueText.textContent = gameOverDialogue[0];
        // 禁用对话推进和按键监听
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }



    // 对话系统（支持头像）
    function showDialogue() {
        inDialogue = true;
        inAttack = false;
        dialogueBox.classList.remove('hidden');
        battleBox.classList.add('hidden');
        hud.classList.remove('hidden');
        currentDialogue = dialogues[currentAttackRound];
        dialogueIndex = 0;
        renderDialogue(currentDialogue[dialogueIndex]);
    }

    function nextDialogue() {
        dialogueIndex++;
        if (dialogueIndex < currentDialogue.length) {
            renderDialogue(currentDialogue[dialogueIndex]);
        } else {
            inDialogue = false;
            dialogueBox.classList.add('hidden');
            // 攻击轮次与对话轮次同步，最后一组对话为胜利
            if (currentAttackRound < dialogues.length - 1) {
                startAttack();
            } else {
                // 游戏胜利
                renderDialogue(dialogues[dialogues.length-1][0]);
                dialogueBox.classList.remove('hidden');
                hud.classList.add('hidden'); // 胜利后隐藏血条
                window.parent.postMessage('win_game3','*');
            }
        }
    }

    // 渲染对话内容和头像
    function renderDialogue(dialogue) {
        // 兼容字符串和对象
        dialogueText.innerHTML = '';
        // 移除旧头像
        const oldAvatar = dialogueBox.querySelector('img.dialogue-avatar');
        if (oldAvatar) oldAvatar.remove();
        if (typeof dialogue === 'string') {
            dialogueText.textContent = dialogue;
        } else if (dialogue && typeof dialogue === 'object') {
            if (dialogue.avatar) {
                const avatarImg = document.createElement('img');
                avatarImg.src = dialogue.avatar;
                avatarImg.alt = 'avatar';
                avatarImg.className = 'dialogue-avatar';
                avatarImg.style.width = '128px';
                avatarImg.style.height = '128px';
                avatarImg.style.objectFit = 'cover';
                avatarImg.style.marginRight = '16px';
                dialogueBox.insertBefore(avatarImg, dialogueText);
            }
            dialogueText.textContent = dialogue.text || '';
        }
    }
    
    // 碰撞检测函数
    function checkCollision(rect1, rect2) {
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }
    
    // 攻击回合管理

    // --- 强制移动相关变量 ---
    let forcedMove = false;
    let forcedDir = null; // 'up' | 'down' | 'left' | 'right'
    let forcedSpeed = 0;

    function startAttack() {
        inAttack = true;
        battleBox.classList.remove('hidden');
        hud.classList.remove('hidden');
        playerX = 90; playerY = 90;
        player.style.left = playerX + 'px';
        player.style.top = playerY + 'px';

        // 随机一个方向并加速
        const dirs = ['up','down','left','right'];
        forcedDir = dirs[Math.floor(Math.random()*4)];
        forcedSpeed = 10; // 初始强制速度
        forcedMove = true;

        switch (currentAttackRound) {
            case 0: attackRound1(); break; //  Vertical Drop
            case 1: attackRound2(); break; //  Horizontal Fly In
            case 2: attackRound3(); break;  //  Mixed Attack
            case 3: attackRound4(); break; //  Missile Attack
            case 4: attackRound5(); break; //  Combined Attack
            case 5: attackRound6(); break; //  聚拢圆球爆炸
            case 6: attackRound7(); break; //  边框激光+导弹+追踪激光
        }
    }


    // --- 攻击模式 ---

    // 第1轮：垂直掉落
    function attackRound1() {
        let bulletCount = 0;
        const attackInterval = setInterval(() => {
            if (!inAttack) { clearInterval(attackInterval); return; }
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            bullet.style.left = (Math.random() * 185) + 'px';
            bullet.style.top = '-15px';
            battleBox.appendChild(bullet);

            const moveBullet = setInterval(() => {
                if(!inAttack || !bullet.parentElement) { clearInterval(moveBullet); return; }
                bullet.style.top = (parseInt(bullet.style.top) + 5) + 'px';
                if (checkCollision(player.getBoundingClientRect(), bullet.getBoundingClientRect())) takeDamage();
                if (parseInt(bullet.style.top) > 200) { bullet.remove(); clearInterval(moveBullet); }
            }, 50);

            bulletCount++;
            if (bulletCount >= 10) { clearInterval(attackInterval); setTimeout(endAttack, 2000); }
        }, 500);
    }

    // 第2轮：水平飞入
    function attackRound2() {
        let bulletCount = 0;
        const attackInterval = setInterval(() => {
            if (!inAttack) { clearInterval(attackInterval); return; }
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            const fromLeft = Math.random() < 0.5;
            bullet.style.top = (Math.random() * 185) + 'px';
            bullet.style.left = fromLeft ? '-15px' : '200px';
            battleBox.appendChild(bullet);
            
            const moveBullet = setInterval(() => {
                if(!inAttack || !bullet.parentElement) { clearInterval(moveBullet); return; }
                bullet.style.left = (parseInt(bullet.style.left) + (fromLeft ? 7 : -7)) + 'px';
                if (checkCollision(player.getBoundingClientRect(), bullet.getBoundingClientRect())) takeDamage();
                if (parseInt(bullet.style.left) < -15 || parseInt(bullet.style.left) > 200) { bullet.remove(); clearInterval(moveBullet); }
            }, 50);

            bulletCount++;
            if (bulletCount >= 15) { clearInterval(attackInterval); setTimeout(endAttack, 2000); }
        }, 300);
    }
    
    // 第3轮：混合攻击
    function attackRound3() {
        let bulletCount = 0;
        const attackInterval = setInterval(() => {
            if (!inAttack) { clearInterval(attackInterval); return; }
             if (Math.random() < 0.5) {
                 const bullet = document.createElement('div'); bullet.className = 'bullet'; bullet.style.left = (Math.random() * 185) + 'px'; bullet.style.top = '-15px'; battleBox.appendChild(bullet);
                 const moveBullet = setInterval(() => { if(!inAttack || !bullet.parentElement) { clearInterval(moveBullet); return; } bullet.style.top = (parseInt(bullet.style.top) + 6) + 'px'; if (checkCollision(player.getBoundingClientRect(), bullet.getBoundingClientRect())) takeDamage(); if (parseInt(bullet.style.top) > 200) { bullet.remove(); clearInterval(moveBullet); } }, 50);
            } else {
                const bullet = document.createElement('div'); bullet.className = 'bullet'; const fromLeft = Math.random() < 0.5; bullet.style.top = (Math.random() * 185) + 'px'; bullet.style.left = fromLeft ? '-15px' : '200px'; battleBox.appendChild(bullet);
                 const moveBullet = setInterval(() => { if(!inAttack || !bullet.parentElement) { clearInterval(moveBullet); return; } bullet.style.left = (parseInt(bullet.style.left) + (fromLeft ? 8 : -8)) + 'px'; if (checkCollision(player.getBoundingClientRect(), bullet.getBoundingClientRect())) takeDamage(); if (parseInt(bullet.style.left) < -15 || parseInt(bullet.style.left) > 200) { bullet.remove(); clearInterval(moveBullet); } }, 50);
            }
            bulletCount++;
            if (bulletCount >= 20) { clearInterval(attackInterval); setTimeout(endAttack, 2000); }
        }, 250);
    }
    
    // 第4轮：导弹攻击
    function attackRound4() {
        const waves = [2, 3, 5, 7]; 
        let currentWave = 0;

        function launchWave() {
            if (!inAttack || currentWave >= waves.length) {
                if(inAttack) setTimeout(endAttack, 1000);
                return;
            }

            const missileCount = waves[currentWave];
            let warningsPlaced = 0;
            let warningElements = [];

            function placeWarning() {
                if (warningsPlaced >= missileCount) {
                    setTimeout(fireMissiles, 200); // 预警结束到爆炸为0.2秒
                    return;
                }
                const warning = document.createElement('div');
                warning.className = 'missile-warning';
                warning.style.left = (playerX + 10) + 'px';
                warning.style.top = (playerY + 10) + 'px';
                battleBox.appendChild(warning);
                warningElements.push(warning);

                warningsPlaced++;
                setTimeout(placeWarning, 300); 
            }
            
            function fireMissiles() {
                let impacts = [];
                warningElements.forEach(w => {
                    const impact = document.createElement('div');
                    impact.className = 'missile-impact';
                    impact.style.left = w.style.left;
                    impact.style.top = w.style.top;
                    battleBox.appendChild(impact);
                    impacts.push(impact);
                    w.remove();
                });
                
                let hasBeenHitThisWave = false;

                impacts.forEach(impact => {
                    if(!hasBeenHitThisWave && checkCollision(player.getBoundingClientRect(), impact.getBoundingClientRect())){
                        takeDamage();
                        hasBeenHitThisWave = true;
                    }
                });


                setTimeout(() => {
                    impacts.forEach(i => i.remove());
                    currentWave++;
                    setTimeout(launchWave, 1000); 
                }, 300);
            }
            placeWarning();
        }
        launchWave();
    }

    // 第5轮：激光与导弹混合攻击
    function attackRound5() {
        let attackCount = 0;
        const totalAttacks = 5; // 总共进行5次混合攻击

        function fireCombinedAttack() {
            if (!inAttack || attackCount >= totalAttacks) {
                if(inAttack) setTimeout(endAttack, 1000); // 攻击序列结束后，等待2秒结束回合
                return;
            }

            // --- 激光预警（两条） ---
            const laserWarnings = [];
            for (let i = 0; i < 2; i++) {
                const side = Math.floor(Math.random() * 2); // 0: 垂直, 1: 水平
                const laserWarning = document.createElement('div');
                laserWarning.className = 'laser-warning';
                if (side === 0) { // 垂直
                    laserWarning.style.width = '24px';
                    laserWarning.style.height = '100%';
                    laserWarning.style.left = (Math.random() * 188) + 'px';
                    laserWarning.style.top = '0';
                } else { // 水平
                    laserWarning.style.width = '100%';
                    laserWarning.style.height = '24px';
                    laserWarning.style.left = '0';
                    laserWarning.style.top = (Math.random() * 188) + 'px';
                }
                battleBox.appendChild(laserWarning);
                laserWarnings.push(laserWarning);
            }

            // --- 导弹预警（与第4轮相同，每次4个，分批出现，预警与爆炸间隔0.2秒） ---
            const missileCount = 4;
            let warningsPlaced = 0;
            let warningElements = [];

            function placeWarning() {
                if (warningsPlaced >= missileCount) {
                    setTimeout(fireMissiles, 200); // 0.2秒后爆炸
                    return;
                }
                const warning = document.createElement('div');
                warning.className = 'missile-warning';
                warning.style.left = (playerX + 10) + 'px';
                warning.style.top = (playerY + 10) + 'px';
                battleBox.appendChild(warning);
                warningElements.push(warning);

                warningsPlaced++;
                setTimeout(placeWarning, 300); 
            }

            function fireMissiles() {
                let impacts = [];
                warningElements.forEach(w => {
                    const impact = document.createElement('div');
                    impact.className = 'missile-impact';
                    impact.style.left = w.style.left;
                    impact.style.top = w.style.top;
                    battleBox.appendChild(impact);
                    impacts.push(impact);
                    w.remove();
                });

                // --- 激光攻击实体（两条） ---
                const beams = [];
                laserWarnings.forEach(laserWarning => {
                    const beam = document.createElement('div');
                    beam.className = 'laser-beam';
                    beam.style.width = laserWarning.style.width;
                    beam.style.height = laserWarning.style.height;
                    beam.style.left = laserWarning.style.left;
                    beam.style.top = laserWarning.style.top;
                    laserWarning.remove();
                    battleBox.appendChild(beam);
                    beams.push(beam);
                });

                // --- 检测伤害 ---
                let hasBeenHitThisShot = false;
                // 检查是否被任意一条激光击中
                for (let i = 0; i < beams.length; i++) {
                    if (checkCollision(player.getBoundingClientRect(), beams[i].getBoundingClientRect())) {
                        takeDamage();
                        hasBeenHitThisShot = true;
                        break;
                    }
                }
                // 如果没被激光打中，再检测是否被导弹打中
                if (!hasBeenHitThisShot) {
                    for (let i = 0; i < impacts.length; i++) {
                        if (checkCollision(player.getBoundingClientRect(), impacts[i].getBoundingClientRect())) {
                            takeDamage();
                            break;
                        }
                    }
                }
                
                // --- 清理攻击实体并准备下一次攻击 ---
                setTimeout(() => {
                    beams.forEach(beam => { if (beam.parentElement) beam.remove(); });
                    impacts.forEach(impact => { if (impact.parentElement) impact.remove(); });

                    attackCount++;
                    setTimeout(fireCombinedAttack, 800); 
                }, 400); // 激光束持续时间
            }

            placeWarning();
        }

        fireCombinedAttack(); // 开始第一次混合攻击
    }

        // 新增第6轮：边框小球向中心聚拢，中心圆区扩大，最后爆炸

    function attackRound6() {
        let centerX = 100, centerY = 100;
        let centerRadius = 0;
        let balls = [];
        let ballsToSpawn = 36;
        let ballsArrived = 0;
        let explosionCount = 0;
        let anglesUsed = [];
        // 随机生成小球
        function spawnBall() {
            if (balls.length >= ballsToSpawn) return;
            let angle;
            // 保证角度均匀分布
            if (anglesUsed.length < ballsToSpawn) {
                angle = (2 * Math.PI / ballsToSpawn) * anglesUsed.length;
                anglesUsed.push(angle);
            } else {
                angle = Math.random() * 2 * Math.PI;
            }
            let bx = centerX + 100 * Math.cos(angle);
            let by = centerY + 100 * Math.sin(angle);
            let ball = document.createElement('div');
            ball.className = 'gather-ball';
            ball.style.position = 'absolute';
            ball.style.width = '16px';
            ball.style.height = '16px';
            ball.style.borderRadius = '50%';
            ball.style.background = 'cyan';
            ball.style.left = (bx-8) + 'px';
            ball.style.top = (by-8) + 'px';
            battleBox.appendChild(ball);
            balls.push({el: ball, angle});
            // 下一个球延迟生成
            if (balls.length < ballsToSpawn) {
                setTimeout(spawnBall, 180 + Math.random()*120);
            }
        }
        spawnBall();
        // 中心圆
        let centerCircle = document.createElement('div');
        centerCircle.className = 'gather-center';
        centerCircle.style.position = 'absolute';
        centerCircle.style.left = (centerX) + 'px';
        centerCircle.style.top = (centerY) + 'px';
        centerCircle.style.width = '0px';
        centerCircle.style.height = '0px';
        centerCircle.style.borderRadius = '50%';
        centerCircle.style.background = 'rgba(255,0,0,0.3)';
        centerCircle.style.transform = 'translate(-50%,-50%)';
        battleBox.appendChild(centerCircle);

        function moveBalls() {
            balls.forEach((b, idx) => {
                if (!b.arrived) {
                    let bx = parseFloat(b.el.style.left) + 8;
                    let by = parseFloat(b.el.style.top) + 8;
                    let dx = centerX - bx;
                    let dy = centerY - by;
                    let dist = Math.sqrt(dx*dx+dy*dy);
                    if (dist < centerRadius+10) {
                        b.arrived = true;
                        ballsArrived++;
                        // 扩大中心圆（减慢速度，每次只加5）
                        centerRadius += 2.5;
                        centerCircle.style.width = centerRadius*2 + 'px';
                        centerCircle.style.height = centerRadius*2 + 'px';
                        centerCircle.style.left = centerX + 'px';
                        centerCircle.style.top = centerY + 'px';
                        b.el.remove();
                    } else {
                        b.el.style.left = (bx + dx/dist*2 - 8) + 'px'; // 移动速度减慢
                        b.el.style.top = (by + dy/dist*2 - 8) + 'px';
                    }
                }
            });
            // 检查玩家是否碰到中心圆
            let cRect = centerCircle.getBoundingClientRect();
            let pRect = player.getBoundingClientRect();
            let cX = cRect.left + cRect.width/2;
            let cY = cRect.top + cRect.height/2;
            let pX = pRect.left + pRect.width/2;
            let pY = pRect.top + pRect.height/2;
            let dist = Math.sqrt((cX-pX)*(cX-pX)+(cY-pY)*(cY-pY));
            if (dist < centerRadius) takeDamage();
            if (ballsArrived < ballsToSpawn) {
                requestAnimationFrame(moveBalls);
            } else if (explosionCount < 2) {
                // 所有小球到达后延迟0.2秒再爆炸
                setTimeout(()=>{
                    // 爆炸动画
                    let explosion = document.createElement('div');
                    explosion.className = 'missile-impact';
                    explosion.style.position = 'absolute';
                    explosion.style.left = centerX + 'px';
                    explosion.style.top = centerY + 'px';
                    explosion.style.width = (centerRadius*2) + 'px';
                    explosion.style.height = (centerRadius*2) + 'px';
                    explosion.style.transform = 'translate(-50%,-50%)';
                    explosion.style.borderRadius = '50%';
                    explosion.style.background = 'rgba(255,128,0,0.7)';
                    explosion.style.zIndex = 10;
                    battleBox.appendChild(explosion);
                    centerCircle.style.background = 'rgba(255,0,0,0.7)';
                    setTimeout(() => {
                        // 检查爆炸伤害
                        let cRect = centerCircle.getBoundingClientRect();
                        let pRect = player.getBoundingClientRect();
                        let cX = cRect.left + cRect.width/2;
                        let cY = cRect.top + cRect.height/2;
                        let pX = pRect.left + pRect.width/2;
                        let pY = pRect.top + pRect.height/2;
                        let dist = Math.sqrt((cX-pX)*(cX-pX)+(cY-pY)*(cY-pY));
                        if (dist < centerRadius) takeDamage();
                        explosionCount++;
                        centerCircle.style.background = 'rgba(255,0,0,0.3)';
                        explosion.style.transition = 'opacity 0.2s';
                        explosion.style.opacity = 0;
                        setTimeout(()=>{explosion.remove();}, 200);
                        if (explosionCount < 2) setTimeout(moveBalls, 600);
                        else {
                            centerCircle.remove();
                            setTimeout(endAttack, 1200);
                        }
                    }, 400);
                }, 200);
            }
        }
        moveBalls();
    }

    // 新增第7轮：边框激光+导弹+追踪激光
    function attackRound7() {
        // 1. 边框激光预警（淡色）
        let borderLasers = [];
        let borderWidth = 40; // 20% of 200px
        // 上
        let topLaser = document.createElement('div');
        topLaser.className = 'border-laser';
        topLaser.style.position = 'absolute';
        topLaser.style.left = '0px';
        topLaser.style.top = '0px';
        topLaser.style.width = '200px';
        topLaser.style.height = borderWidth+'px';
        topLaser.style.background = 'rgba(255,0,0,0.3)';
        battleBox.appendChild(topLaser);
        borderLasers.push(topLaser);
        // 下
        let bottomLaser = document.createElement('div');
        bottomLaser.className = 'border-laser';
        bottomLaser.style.position = 'absolute';
        bottomLaser.style.left = '0px';
        bottomLaser.style.top = (200-borderWidth)+'px';
        bottomLaser.style.width = '200px';
        bottomLaser.style.height = borderWidth+'px';
        bottomLaser.style.background = 'rgba(255,0,0,0.3)';
        battleBox.appendChild(bottomLaser);
        borderLasers.push(bottomLaser);
        // 左
        let leftLaser = document.createElement('div');
        leftLaser.className = 'border-laser';
        leftLaser.style.position = 'absolute';
        leftLaser.style.left = '0px';
        leftLaser.style.top = '0px';
        leftLaser.style.width = borderWidth+'px';
        leftLaser.style.height = '200px';
        leftLaser.style.background = 'rgba(255,0,0,0.3)';
        battleBox.appendChild(leftLaser);
        borderLasers.push(leftLaser);
        // 右
        let rightLaser = document.createElement('div');
        rightLaser.className = 'border-laser';
        rightLaser.style.position = 'absolute';
        rightLaser.style.left = (200-borderWidth)+'px';
        rightLaser.style.top = '0px';
        rightLaser.style.width = borderWidth+'px';
        rightLaser.style.height = '200px';
        rightLaser.style.background = 'rgba(255,0,0,0.3)';
        battleBox.appendChild(rightLaser);
        borderLasers.push(rightLaser);

        // 1.2秒后激光变为实色并开始伤害判定和导弹攻击
        setTimeout(() => {
            borderLasers.forEach(l => l.style.background = 'rgba(255,0,0,0.7)');

            // 检查玩家是否碰到边框激光
            function checkBorderLaserDamage() {
                let pRect = player.getBoundingClientRect();
                for (let laser of borderLasers) {
                    let lRect = laser.getBoundingClientRect();
                    if (checkCollision(pRect, lRect)) {
                        takeDamage();
                        break;
                    }
                }
            }

            // 5轮导弹+5轮激光循环
            let round = 0;
            function doRound() {
                if (round >= 5) {
                    // 结束后移除边框激光
                    borderLasers.forEach(l=>l.remove());
                    setTimeout(endAttack, 800);
                    return;
                }
                // 1. 导弹一行/一列连续排列预警
                let isRow = Math.random() < 0.5;
                let missileCount = 8;
                let warnings = [];
                for (let i = 0; i < missileCount; i++) {
                    let warning = document.createElement('div');
                    warning.className = 'missile-warning';
                    warning.style.width = '16px';
                    warning.style.height = '16px';
                    warning.style.borderRadius = '50%';
                    if (isRow) {
                        warning.style.left = (20 + i*20) + 'px';
                        warning.style.top = (Math.floor(Math.random()*10)*18+10) + 'px';
                    } else {
                        warning.style.left = (Math.floor(Math.random()*10)*18+10) + 'px';
                        warning.style.top = (20 + i*20) + 'px';
                    }
                    battleBox.appendChild(warning);
                    warnings.push(warning);
                }
                // 0.3秒后全部爆炸
                setTimeout(()=>{
                    let impacts = [];
                    warnings.forEach(warning => {
                        let impact = document.createElement('div');
                        impact.className = 'missile-impact';
                        impact.style.width = '16px';
                        impact.style.height = '16px';
                        impact.style.borderRadius = '50%';
                        impact.style.left = warning.style.left;
                        impact.style.top = warning.style.top;
                        battleBox.appendChild(impact);
                        warning.remove();
                        impacts.push(impact);
                    });
                    // 检查伤害
                    let pRect = player.getBoundingClientRect();
                    impacts.forEach(impact => {
                        let iRect = impact.getBoundingClientRect();
                        if (checkCollision(pRect, iRect)) takeDamage();
                    });
                    setTimeout(()=>{impacts.forEach(i=>i.remove());}, 200);
                    // 0.5秒后激光预警
                    setTimeout(()=>{
                        // 激光预警
                        let isVert = Math.random()<0.5;
                        let laserWarn1 = document.createElement('div');
                        let laserWarn2 = document.createElement('div');
                        laserWarn1.className = 'laser-warning';
                        laserWarn2.className = 'laser-warning';
                        if (isVert) {
                            // 两道垂直激光
                            laserWarn1.style.left = (Math.floor(Math.random()*10)*18+10) + 'px';
                            laserWarn1.style.top = '0px';
                            laserWarn1.style.width = '16px';
                            laserWarn1.style.height = '200px';
                            laserWarn2.style.left = (Math.floor(Math.random()*10)*18+10) + 'px';
                            laserWarn2.style.top = '0px';
                            laserWarn2.style.width = '16px';
                            laserWarn2.style.height = '200px';
                        } else {
                            // 两道水平激光
                            laserWarn1.style.left = '0px';
                            laserWarn1.style.top = (Math.floor(Math.random()*10)*18+10) + 'px';
                            laserWarn1.style.width = '200px';
                            laserWarn1.style.height = '16px';
                            laserWarn2.style.left = '0px';
                            laserWarn2.style.top = (Math.floor(Math.random()*10)*18+10) + 'px';
                            laserWarn2.style.width = '200px';
                            laserWarn2.style.height = '16px';
                        }
                        battleBox.appendChild(laserWarn1);
                        battleBox.appendChild(laserWarn2);
                        // 0.5秒后激光发射
                        setTimeout(()=>{
                            let laser1 = document.createElement('div');
                            let laser2 = document.createElement('div');
                            laser1.className = 'laser-beam';
                            laser2.className = 'laser-beam';
                            laser1.style.left = laserWarn1.style.left;
                            laser1.style.top = laserWarn1.style.top;
                            laser1.style.width = laserWarn1.style.width;
                            laser1.style.height = laserWarn1.style.height;
                            laser2.style.left = laserWarn2.style.left;
                            laser2.style.top = laserWarn2.style.top;
                            laser2.style.width = laserWarn2.style.width;
                            laser2.style.height = laserWarn2.style.height;
                            battleBox.appendChild(laser1);
                            battleBox.appendChild(laser2);
                            laserWarn1.remove();
                            laserWarn2.remove();
                            // 检查伤害
                            let pRect = player.getBoundingClientRect();
                            if (checkCollision(pRect, laser1.getBoundingClientRect()) || checkCollision(pRect, laser2.getBoundingClientRect())) {
                                takeDamage();
                            }
                            setTimeout(()=>{
                                laser1.remove();
                                laser2.remove();
                                round++;
                                setTimeout(doRound, 400);
                            }, 300);
                        }, 500);
                    }, 500);
                }, 300);
            }
            // 激光伤害检测定时器
            let borderLaserTimer = setInterval(checkBorderLaserDamage, 100);
            doRound();
        }, 1200);
    }


    function endAttack() {
        if(playerHp <= 0) return; // 如果在攻击中死亡，不进入下一对话
        inAttack = false;
        forcedMove = false;
        // 清除所有子弹
        const bullets = document.querySelectorAll('.bullet, .laser-warning, .laser-beam, .missile-warning, .missile-impact, .gather-ball, .gather-center, .border-laser, .tracking-laser');
        bullets.forEach(bullet => bullet.remove());
        
        currentAttackRound++;
        showDialogue();
    }

    // 按键处理
    const handleKeyDown = (e) => {
        if (inDialogue && (e.key === 'e' || e.key === 'E' || e.code === 'Space')) {
            nextDialogue();
        } else if (inAttack) {
            keys[e.key] = true;
        }
    };

    const handleKeyUp = (e) => {
        if (inAttack) {
            keys[e.key] = false;
        }
    };
    
    // 游戏主循环

    function gameLoop() {
        if (inAttack) {
            let newX = playerX;
            let newY = playerY;

            // 玩家主动操作
            if (keys['ArrowUp'] || keys['w'] || keys['W']) newY = Math.max(0, newY - playerSpeed);
            if (keys['ArrowDown'] || keys['s'] || keys['S']) newY = Math.min(180, newY + playerSpeed);
            if (keys['ArrowLeft'] || keys['a'] || keys['A']) newX = Math.max(0, newX - playerSpeed);
            if (keys['ArrowRight'] || keys['d'] || keys['D']) newX = Math.min(180, newX + playerSpeed);

            // 强制移动逻辑
            if (forcedMove) {
                var bounced = false;
                switch (forcedDir) {
                    case 'up': newY -= forcedSpeed; break;
                    case 'down': newY += forcedSpeed; break;
                    case 'left': newX -= forcedSpeed; break;
                    case 'right': newX += forcedSpeed; break;
                }
                // 强制速度递减，模拟加速后逐渐减缓
                if (forcedSpeed > 2) forcedSpeed -= 0.15;
            }


            // 边界检测和弹起
            
            if(!bounced){    
                if (newX < 0) { newX = 0 + 20; bounced = true; }
                if (newX > 180) { newX = 180 - 20; bounced = true; }
                if (newY < 0) { newY = 0 + 20; bounced = true; }
                if (newY > 180) { newY = 180 - 20; bounced = true; }
            }
            if (bounced && forcedMove) {
                forcedMove = false;
                forcedDir = null;
                forcedSpeed = 0;
            }

            playerX = newX;
            playerY = newY;
            player.style.top = playerY + 'px';
            player.style.left = playerX + 'px';
        }
        requestAnimationFrame(gameLoop);
    }
    
    // 游戏启动函数
    function initGame() {
        // 隐藏开始界面
        startScreen.classList.add('hidden');
        
        // 显示游戏元素
        enemyArea.classList.remove('hidden');
        dialogueBox.classList.remove('hidden');
        hud.classList.remove('hidden');

        // 设置并开始游戏
        setupHpBar();
        updateHpDisplay();
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        showDialogue();
        gameLoop();
    }

    // 为开始界面添加一次性的点击监听器
    startScreen.addEventListener('click', initGame, { once: true });
    // 可选：页面加载时自动挂载重置（已在window上）
});