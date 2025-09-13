let map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
  [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1],
  [1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
  [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1],
  [1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1],
  [1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];


const canvas = document.getElementById('gameCanvas'); 
const ctx = canvas.getContext('2d');

const TILE_SIZE = 66;
const ROWS = map.length;       // 自动根据地图行数
const COLS = map[0].length;    // 自动根据地图列数

// 设置 canvas 尺寸刚好等于地图占用像素
canvas.width = COLS * TILE_SIZE;
canvas.height = ROWS * TILE_SIZE;


// 加载游戏图片资源
const images = {
  player: {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
  },
  enemy: {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
  },
  wall: new Image(),
  exit: new Image(),
  floor: new Image(),
  playerAttack: {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
  },
  enemyAttack: {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
  }
};

// 设置图片源
images.player.up.src = 'assets/images/player_up.png';
images.player.down.src = 'assets/images/player_down.png';
images.player.left.src = 'assets/images/player_left.png';
images.player.right.src = 'assets/images/player_right.png';

images.enemy.up.src = 'assets/images/enemy_up.png';
images.enemy.down.src = 'assets/images/enemy_down.png';
images.enemy.left.src = 'assets/images/enemy_left.png';
images.enemy.right.src = 'assets/images/enemy_right.png';

images.playerAttack.up.src = 'assets/images/player_attack_up.png';
images.playerAttack.down.src = 'assets/images/player_attack_down.png';
images.playerAttack.left.src = 'assets/images/player_attack_left.png';
images.playerAttack.right.src = 'assets/images/player_attack_right.png';
images.enemyAttack.up.src = 'assets/images/enemy_attack_up.png';
images.enemyAttack.down.src = 'assets/images/enemy_attack_down.png';
images.enemyAttack.left.src = 'assets/images/enemy_attack_left.png';
images.enemyAttack.right.src = 'assets/images/enemy_attack_right.png';

// 地图图片
images.wall.src = 'assets/images/wall.png';
images.exit.src = 'assets/images/exit.png';
images.floor.src = 'assets/images/floor.png';


// 游戏加载状态
let gameLoaded = false;
let loadedImages = 0;
const totalImages = 19;

// 时间管理变量
let lastTime = 0;
const TARGET_FPS = 120;
const FRAME_TIME = 1000 / TARGET_FPS; // 每帧目标时间（毫秒）

// 图片加载完成事件
for (const key in images) {
  const image = images[key];
  if (image instanceof Image) {
    image.onload = function() {
      loadedImages++;
      if (loadedImages === totalImages) {
        gameLoaded = true;
        console.log('所有图片加载完成');
      }
    };
    image.onerror = function() {
      console.error(`图片 ${key} 加载失败`);
    };
  } else if (typeof image === 'object') {
    for (const subKey in image) {
      const subImage = image[subKey];
      subImage.onload = function() {
        loadedImages++;
        if (loadedImages === totalImages) {
          gameLoaded = true;
          console.log('所有图片加载完成');
        }
      };
      subImage.onerror = function() {
        console.error(`图片 ${key}.${subKey} 加载失败`);
      };
    }
  }
}

// ===== 地图 (0=空地,1=墙,2=出口) =====


// 游戏状态
let gameState = {
  isGameOver: false,
  isWin: false,
  messageSent: false
};
let screenFlashAlpha = 0; // 新增：屏幕闪红效果

// ===== 玩家 =====
let player = {
  x: TILE_SIZE*1.3,
  y: TILE_SIZE*1.3,
  size: TILE_SIZE*0.8,
  color: 'yellow',
  speed: 240, // 像素/秒 (原来2像素/帧 * 120fps)
  health: 3,
  attacking: false,
  direction: 'down',
  attackDir: null,
  attackProgress: 0
};

// ===== 敌人 =====
// 根据地图手动选择空地作为敌人刷新点
let enemySpawnPoints = [
  {x: TILE_SIZE*5, y: TILE_SIZE*1},  // 左上角附近
  {x: TILE_SIZE*23, y: TILE_SIZE*1}, // 右上角
  {x: TILE_SIZE*1, y: TILE_SIZE*13}, // 左下角
  {x: TILE_SIZE*23, y: TILE_SIZE*13},// 右下角
  {x: TILE_SIZE*11, y: TILE_SIZE*3}, // 中上
  {x: TILE_SIZE*3, y: TILE_SIZE*7},  // 左中
  {x: TILE_SIZE*19, y: TILE_SIZE*7}, // 右中
  {x: TILE_SIZE*11, y: TILE_SIZE*10} // 中下
];


function spawnEnemy(spawnPoint, patrolPath){
  return {
    x: spawnPoint.x,
    y: spawnPoint.y,
    size: TILE_SIZE*0.8,
    alive: true,
    health: 2,
    speed: 180, // 像素/秒 (原来1.5像素/帧 * 120fps)
    patrolPath: patrolPath,
    patrolStep: 0,
    patrolProgress: 0,
    attackTimer: 0,
    attackInterval: Math.floor(Math.random() * 60) + 60,
    attacking: false,
    direction: 'down',
    attackDir: 'down',
    attackProgress: 0,
    lastHitTime: 0
  };
}

// 定义每个敌人的巡逻轨迹（都在空地内且不撞墙）
let enemyPatrolPaths = [
  [ // 敌人1 左上角
    {dx: 1, dy: 0, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}, 
    {dx: -1, dy: 0, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}
  ],
  [ // 敌人2 右上角
    {dx: -1, dy: 0, steps: TILE_SIZE*5}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}, 
    {dx: 1, dy: 0, steps: TILE_SIZE*5}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}
  ],
  [ // 敌人3 左下角
    {dx: 0, dy: 0, steps: TILE_SIZE*4}, 
    {dx: 0, dy: -1, steps: TILE_SIZE*4}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*4}, 
    {dx: 0, dy: 1, steps: TILE_SIZE*4}
  ],
  [ // 敌人4 右下角
    {dx: -1, dy: 0, steps: TILE_SIZE*4}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}, 
    {dx: 1, dy: 0, steps: TILE_SIZE*4}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}
  ],
  [ // 敌人5 中上
    {dx: 0, dy: 1, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}, 
    {dx: 0, dy: -1, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}
  ],
  [ // 敌人6 左中
    {dx: 0, dy: 0, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 1, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*3}, 
    {dx: 0, dy: -1, steps: TILE_SIZE*3}
  ],
  [ // 敌人7 右中
    {dx: -1, dy: 0, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 1, steps: TILE_SIZE*3}, 
    {dx: 1, dy: 0, steps: TILE_SIZE*3}, 
    {dx: 0, dy: -1, steps: TILE_SIZE*3}
  ],
  [ // 敌人8 中下
    {dx: 0, dy: 1, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}, 
    {dx: 0, dy: -1, steps: TILE_SIZE*3}, 
    {dx: 0, dy: 0, steps: TILE_SIZE*2}
  ]
];

// 初始化敌人
let enemies = [];
for(let i=0;i<8;i++){
  enemies.push(spawnEnemy(enemySpawnPoints[i], enemyPatrolPaths[i]));
}


// ===== 键盘控制 =====
const keys = {};
document.addEventListener('keydown', e=>{ keys[e.key.toLowerCase()] = true; });
document.addEventListener('keyup', e=>{ keys[e.key.toLowerCase()] = false; });

// ===== 碰撞检测 =====
function getTileType(x, y) {
  const col = Math.floor(x/TILE_SIZE);
  const row = Math.floor(y/TILE_SIZE);
  if (row < 0 || row >= ROWS || col < 0 || col >= COLS) {
    return 1; // 超出地图边界视为墙
  }
  return map[row][col];
}

function isWall(x, y) {
  return getTileType(x, y) === 1;
}

function isExit(x, y) {
  return getTileType(x, y) === 2;
}

// ===== 玩家更新 =====
function updatePlayer(deltaTime){
  // 如果游戏已结束，不再更新玩家
  if (gameState.isGameOver) return;
  
  let dx=0,dy=0;
  const moveSpeed = player.speed * deltaTime; // 基于时间的移动距离

  if(keys['w']) {
    dy-=moveSpeed;
    player.direction = 'up';
  }
  if(keys['s']) {
    dy+=moveSpeed;
    player.direction = 'down';
  }
  if(keys['a']) {
    dx-=moveSpeed;
    player.direction = 'left';
  }
  if(keys['d']) {
    dx+=moveSpeed;
    player.direction = 'right';
  }

  // 更精确的碰撞检测
  let newX = player.x + dx;
  let newY = player.y + dy;
  
  // 检测中心点和四个角的碰撞
  // 为了避免卡住，我们使用更宽松的碰撞检测，只检查中心点和四个角的中点
  let margin = 2; // 添加一个小边距，避免卡墙
  
  // X方向移动检测
  let canMoveX = true;
  if (dx !== 0) {
    // 检测前方中心点
    let frontX = dx > 0 ? newX + player.size : newX;
    let centerY = player.y + player.size / 2;
    if (isWall(frontX, centerY)) {
      canMoveX = false;
    }
  }
  
  // Y方向移动检测
  let canMoveY = true;
  if (dy !== 0) {
    // 检测前方中心点
    let frontY = dy > 0 ? newY + player.size : newY;
    let centerX = player.x + player.size / 2;
    if (isWall(centerX, frontY)) {
      canMoveY = false;
    }
  }
  
  if(canMoveX) player.x = newX;
  if(canMoveY) player.y = newY;

  // 保存最后移动方向
  if(dx !== 0 || dy !== 0) {
    player.attackDir = player.direction;
  }

  // 使用j键攻击，攻击方向与移动方向一致
  if(keys['j']) attack(player.attackDir);
  
  // 检测是否到达出口
  let playerCenterX = player.x + player.size / 2;
  let playerCenterY = player.y + player.size / 2;
  if (isExit(playerCenterX, playerCenterY)) {
    gameState.isGameOver = true;
    gameState.isWin = true;
    return;
  }

  // 检查玩家是否死亡
  if (player.health <= 0) {
    gameState.isGameOver = true;
    gameState.isWin = false;
    return;
  }

  // 检测攻击敌人
  if(player.attacking){
    enemies.forEach((e)=>{
      if(!e.alive) return;
      let attackX = player.x;
      let attackY = player.y;
      let attackWidth = TILE_SIZE;
      let attackHeight = player.size/2;
      
      // 根据攻击方向调整攻击区域
      if(player.attackDir === 'right') {
        attackX += player.size;
      } else if(player.attackDir === 'left') {
        attackX -= TILE_SIZE;
      } else if(player.attackDir === 'up') {
        attackY -= TILE_SIZE;
        attackWidth = player.size/2;
        attackHeight = TILE_SIZE;
      } else if(player.attackDir === 'down') {
        attackY += player.size;
        attackWidth = player.size/2;
        attackHeight = TILE_SIZE;
      }
      
      // 检测攻击是否命中敌人
      if(attackX < e.x+e.size && attackX+attackWidth > e.x &&
         attackY < e.y+e.size && attackY+attackHeight > e.y){
         // 获取当前时间
         const currentTime = Date.now();
         // 检查是否在无敌时间内
         if (currentTime - e.lastHitTime > 500) { // 0.5秒无敌时间
           // 减少敌人血量
           e.health--;
           // 更新最后被击中时间
           e.lastHitTime = currentTime;
           
           // 敌人受击后退
           const knockbackDistance = 15;
           if(player.attackDir === 'right') {
             e.x += knockbackDistance;
           } else if(player.attackDir === 'left') {
             e.x -= knockbackDistance;
           } else if(player.attackDir === 'up') {
             e.y -= knockbackDistance;
           } else if(player.attackDir === 'down') {
             e.y += knockbackDistance;
           }
           
           // 检查敌人是否死亡
           if(e.health <= 0){
             e.alive = false;
           }
         }
      }
    });
  }
}

// ===== 攻击 =====
function attack(dir){
  if(!player.attacking){
    player.attacking=true;
    player.attackDir=dir;
    player.attackProgress=0;
  }
}



function updateEnemies(deltaTime){
  if (gameState.isGameOver) return;

  enemies.forEach(e=>{
    if(!e.alive) return;

    // ===== 巡逻移动 =====
    if(e.patrolPath && e.patrolPath.length > 0){
      let step = e.patrolPath[e.patrolStep];
      const enemyMoveSpeed = e.speed * deltaTime; // 基于时间的移动距离
      let moveX = step.dx * enemyMoveSpeed;
      let moveY = step.dy * enemyMoveSpeed;

      if (moveX > 0) e.direction = 'right';
      else if (moveX < 0) e.direction = 'left';
      else if (moveY > 0) e.direction = 'down';
      else if (moveY < 0) e.direction = 'up';

      let newX = e.x + moveX;
      let newY = e.y + moveY;
      let centerX = newX + e.size/2;
      let centerY = newY + e.size/2;

      if(!isWall(centerX, centerY)){
        e.x = newX;
        e.y = newY;
      }

      e.patrolProgress += enemyMoveSpeed;
      if(e.patrolProgress >= step.steps){
        e.patrolProgress = 0;
        e.patrolStep = (e.patrolStep + 1) % e.patrolPath.length;
      }
    }

    // ===== 攻击计时器 =====
    e.attackTimer += deltaTime * TARGET_FPS; // 转换为帧数等效
    if(e.attackTimer >= e.attackInterval){
      const distanceToPlayer = Math.sqrt(
        Math.pow(player.x + player.size/2 - (e.x + e.size/2), 2) +
        Math.pow(player.y + player.size/2 - (e.y + e.size/2), 2)
      );
      if(distanceToPlayer < TILE_SIZE*2){
        e.attacking = true;
        e.attackProgress = 0;
        
        // 计算攻击方向
        const dx = player.x - e.x;
        const dy = player.y - e.y;
        if (Math.abs(dx) > Math.abs(dy)) {
          e.attackDir = dx > 0 ? 'right' : 'left';
        } else {
          e.attackDir = dy > 0 ? 'down' : 'up';
        }
      }
      e.attackTimer = 0;
    }

    // ===== 攻击逻辑 =====
    if (e.attacking) {
      e.attackProgress++;
      
      // 检测攻击是否命中玩家
      if (e.attackProgress === 3) {
        let attackX = e.x;
        let attackY = e.y;
        let attackWidth = TILE_SIZE;
        let attackHeight = e.size/2;

        if (e.attackDir === 'right') {
          attackX += e.size;
        } else if (e.attackDir === 'left') {
          attackX -= TILE_SIZE;
        } else if (e.attackDir === 'up') {
          attackY -= TILE_SIZE;
          attackWidth = e.size/2;
          attackHeight = TILE_SIZE;
        } else if (e.attackDir === 'down') {
          attackY += e.size;
          attackWidth = e.size/2;
          attackHeight = TILE_SIZE;
        }

        let canAttack = !(isWall(attackX, attackY) ||
                          isWall(attackX + attackWidth, attackY) ||
                          isWall(attackX, attackY + attackHeight) ||
                          isWall(attackX + attackWidth, attackY + attackHeight));

        if(canAttack &&
           attackX < player.x + player.size && 
           attackX + attackWidth > player.x &&
           attackY < player.y + player.size &&
           attackY + attackHeight > player.y){
          player.health = Math.max(0, player.health - 1);
          screenFlashAlpha = 0.5; // 新增：触发闪红
          if(player.health <= 0){
            gameState.isGameOver = true;
            gameState.isWin = false;
          }
        }
      }

      if(e.attackProgress > 10){
        e.attacking = false;
      }
    }
  });
}


// ===== 绘制 =====
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // 如果游戏尚未加载完成
  if (!gameLoaded) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('加载中...', canvas.width / 2, canvas.height / 2);
    return;
  }

  // 绘制地图
  for(let r=0;r<ROWS;r++){
    for(let c=0;c<COLS;c++){
      let tile = map[r][c];
      let x=c*TILE_SIZE, y=r*TILE_SIZE;
      if (tile === 1) {
        ctx.drawImage(images.wall, x, y, TILE_SIZE, TILE_SIZE);
      } else if (tile === 2) {
        ctx.drawImage(images.exit, x, y, TILE_SIZE, TILE_SIZE);
      } else {
      // 绘制地板图片而不是灰色矩形
      if (images.floor && images.floor.complete) {
        ctx.drawImage(images.floor, x, y, TILE_SIZE, TILE_SIZE);
      } else {
        // 如果地板图片未加载完成，保留原来的灰色矩形作为回退
        ctx.fillStyle = '#808080';
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      }
    }
    }
  }

  // 绘制敌人
  enemies.forEach(e=>{
    if(!e.alive) return;

    // 敌人本体
    ctx.drawImage(images.enemy[e.direction], e.x, e.y, e.size, e.size);

    // 敌人攻击
    if(e.attacking){
      let attackX = e.x;
      let attackY = e.y;
      let attackWidth = TILE_SIZE;
      let attackHeight = e.size/2;

      if (e.attackDir === 'right') {
        attackX += e.size;
      } else if (e.attackDir === 'left') {
        attackX -= TILE_SIZE;
      } else if (e.attackDir === 'up') {
        attackY -= TILE_SIZE;
        attackWidth = e.size/2;
        attackHeight = TILE_SIZE;
      } else if (e.attackDir === 'down') {
        attackY += e.size;
        attackWidth = e.size/2;
        attackHeight = TILE_SIZE;
      }

      let enemyAttackImg = images.enemyAttack[e.attackDir];

      if (enemyAttackImg && enemyAttackImg.complete) {
        ctx.drawImage(enemyAttackImg, attackX, attackY, attackWidth, attackHeight);
      } else {
        ctx.fillStyle = 'orange';
        ctx.fillRect(attackX, attackY, attackWidth, attackHeight);
      }
    }
  });

  // 绘制玩家
  ctx.drawImage(images.player[player.direction], player.x, player.y, player.size, player.size);

  // 玩家攻击
  if(player.attacking){
    let attackX = player.x;
    let attackY = player.y;
    let attackWidth = TILE_SIZE;
    let attackHeight = player.size/2;

    if(player.attackDir === 'right') {
      attackX += player.size;
    } else if(player.attackDir === 'left') {
      attackX -= TILE_SIZE;
    } else if(player.attackDir === 'up') {
      attackY -= TILE_SIZE;
      attackWidth = player.size/2;
      attackHeight = TILE_SIZE;
    } else if(player.attackDir === 'down') {
      attackY += player.size;
      attackWidth = player.size/2;
      attackHeight = TILE_SIZE;
    }

    let attackImg = images.playerAttack[player.attackDir];
    if (attackImg && attackImg.complete) {
      ctx.drawImage(attackImg, attackX, attackY, attackWidth, attackHeight);
    } else {
      ctx.fillStyle='orange';
      ctx.fillRect(attackX, attackY, attackWidth, attackHeight);
    }

    player.attackProgress++;
    if(player.attackProgress > 5) player.attacking = false;
  }

  // 绘制血量
  for(let i=0;i<player.health;i++){
    ctx.fillStyle='red';
    ctx.beginPath();
    let heartX=30+i*35, heartY=35; // 修改：调整血量显示位置
    ctx.moveTo(heartX,heartY);
    ctx.arc(heartX,heartY,10,Math.PI,0);
    ctx.arc(heartX+20,heartY,10,Math.PI,0);
    ctx.lineTo(heartX+10,heartY+20);
    ctx.closePath();
    ctx.fill();
  }

  // 游戏结束信息
  if (gameState.isGameOver) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '48px \'Source Han Serif CN\', serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = gameState.isWin ? 'brown' : 'red';

    let message = gameState.isWin ? '你抵达了密室的藏宝库...' : '你被卫兵打败了...';
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);

    if (!gameState.messageSent) {
        if (window.parent) {
            const message = gameState.isWin ? 'win_game2' : 'lose_game2';
            window.parent.postMessage(message, '*');
        }
        gameState.messageSent = true;
    }
  }

  // 新增：绘制屏幕闪红
  if (screenFlashAlpha > 0) {
    ctx.fillStyle = `rgba(255, 0, 0, ${screenFlashAlpha})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    screenFlashAlpha = Math.max(0, screenFlashAlpha - 0.05); // 逐渐减弱
  }
}


function resetGame() {
  // 重置玩家
  player.x = TILE_SIZE*1.3;
  player.y = TILE_SIZE*1.3;
  player.health = 4;
  player.attacking = false;
  player.direction = 'down'; // 重置方向
  player.attackDir = 'right';
  player.attackProgress = 0;

  // 重置敌人
  enemies = [];
  for(let i=0;i<enemySpawnPoints.length;i++){
    enemies.push(spawnEnemy(enemySpawnPoints[i], enemyPatrolPaths[i]));
  }

  // 重置游戏状态
  gameState.isGameOver = false;
  gameState.isWin = false;
  gameState.messageSent = false;
}


// ===== 键盘事件处理 =====
document.addEventListener('keydown', e => {
  keys[e.key.toLowerCase()] = true;
});

// ===== 游戏循环 =====
function gameLoop(currentTime){
  // 检查图片是否已加载完成
  if (!gameLoaded) {
    // 显示加载中提示
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('加载中...', canvas.width/2, canvas.height/2);
    
    // 显示加载进度
    ctx.fillText(`${loadedImages}/${totalImages}`, canvas.width/2, canvas.height/2 + 40);
    
    requestAnimationFrame(gameLoop);
    return;
  }
  
  // 计算时间差
  if (lastTime === 0) lastTime = currentTime;
  const deltaTime = (currentTime - lastTime) / 1000; // 转换为秒
  lastTime = currentTime;
  
  // 屏幕闪红效果减弱
  if (screenFlashAlpha > 0) {
    screenFlashAlpha -= deltaTime * 2; // 每秒减少2
    if (screenFlashAlpha < 0) screenFlashAlpha = 0;
  }
  
  updatePlayer(deltaTime);
  updateEnemies(deltaTime);
  draw();
  requestAnimationFrame(gameLoop);
}

// 开始游戏
lastTime = 0;
requestAnimationFrame(gameLoop);
