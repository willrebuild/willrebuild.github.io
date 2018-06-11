var GAME_MANIFEST = {
    id: "clickbattle_madness",
    name: "Clickbattle: Madness",
    fps: 60,
    landscape: !0,
    moreGames: "http://www.gotvg.com"
}, GAME_CONFIG = {
    colors: {red: "255,0,0", green: "0,255,0", blue: "0,0,255", yellow: "255,255,0"},
    castle: {maxSkill: 50, hp: 20, towerColumns: 5}
};
GAME_CONFIG.castle.field = {
    cols: 8,
    rows: 10,
    initialColumns: 4,
    left: 287,
    top: 43,
    cell: {width: 24, height: 24},
    respawnTimeout: 2,
    unitSpeed: 400,
    powerTimeout: 2,
    maxPower: 8
};
GAME_CONFIG.castle.field.unit = {};
GAME_CONFIG.castle.field.unit.types = [{
    type: "red",
    x: -4,
    y: -1,
    bullet: {damage: 1, speed: 400},
    color: "255,0,0"
}, {type: "yellow", x: -1, y: 1, bullet: {damage: 1, speed: 400}, color: "255,255,0"}, {
    type: "green",
    x: -1,
    y: 0,
    bullet: {damage: 1, speed: 400},
    color: "0,255,0"
}, {type: "blue", x: -4, y: -2, bullet: {damage: 1, speed: 400}, color: "0,0,255"}];
GAME_CONFIG.castle.cannon = {damage: 50, reload: 10};
GAME_CONFIG.castle.tower = {hp: 5, damage: 1, reload: 2, range: 100, radius: 30};
var DEFAULT_COST_RATIO = .08;
GAME_CONFIG.castle.upgrade = {
    power: {cost: 1800, costRatio: DEFAULT_COST_RATIO, maxLevel: 50},
    goldPerViking: {cost: 1050, costRatio: DEFAULT_COST_RATIO, maxLevel: 15},
    skillReload: {cost: 450, costRatio: DEFAULT_COST_RATIO, maxLevel: 25},
    towersCount: {cost: 3000, costRatio: DEFAULT_COST_RATIO, maxLevel: 30},
    towersLevel: {cost: 1500, costRatio: DEFAULT_COST_RATIO, maxLevel: 30},
    skillComet: {cost: 1200, costRatio: DEFAULT_COST_RATIO, maxLevel: 20},
    skillBugs: {cost: 1200, costRatio: DEFAULT_COST_RATIO, maxLevel: 20},
    skillPalm: {
        cost: 1200, costRatio: DEFAULT_COST_RATIO,
        maxLevel: 20
    },
    skillGold: {cost: 1200, costRatio: DEFAULT_COST_RATIO, maxLevel: 20},
    cannons: {cost: 750, costRatio: DEFAULT_COST_RATIO, maxLevel: 25},
    attack: {cost: 1500, costRatio: DEFAULT_COST_RATIO, maxLevel: 30},
    armor: {cost: 900, costRatio: DEFAULT_COST_RATIO, maxLevel: 30}
};
GAME_CONFIG.enemy = {};
GAME_CONFIG.enemy.field = {};
GAME_CONFIG.enemy.field.width = GAME_CONFIG.castle.field.left - 60;
GAME_CONFIG.enemy.field.height = GAME_CONFIG.castle.field.rows * GAME_CONFIG.castle.field.cell.height;
GAME_CONFIG.enemy.field.x = 30;
GAME_CONFIG.enemy.field.y = GAME_CONFIG.castle.field.top;
GAME_CONFIG.enemy.field.skillArea = GAME_CONFIG.enemy.field.width - 65;
GAME_CONFIG.enemy.speed = {slow: 10, medium: 20, fast: 30};
var ENEMY_ATTACK_RATIO = .046875;
GAME_CONFIG.enemy.types = [];
GAME_CONFIG.enemy.types.push({
    type: "1",
    x: 0,
    y: 0,
    damage: 1,
    hp: 14,
    gold: 10,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "2",
    x: 0,
    y: 0,
    damage: 1,
    hp: 15,
    gold: 20,
    speed: GAME_CONFIG.enemy.speed.fast,
    attackTimeout: 21 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "3",
    x: 0,
    y: 0,
    damage: 1,
    hp: 17,
    gold: 30,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 29 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "4",
    x: 0,
    y: 0,
    damage: 1,
    hp: 19,
    gold: 50,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 36 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "5",
    x: 0,
    y: 0,
    damage: 1,
    hp: 22,
    gold: 60,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 36 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "6",
    x: 0,
    y: 0,
    damage: 2,
    hp: 25,
    gold: 70,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "7",
    x: 0,
    y: 0,
    damage: 2,
    hp: 29,
    gold: 80,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "8",
    x: 0,
    y: 0,
    damage: 2,
    hp: 33,
    gold: 90,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "9",
    x: 0,
    y: 0,
    damage: 3,
    hp: 40,
    gold: 100,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "10",
    x: 0,
    y: 0,
    damage: 3,
    hp: 44,
    gold: 110,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "11",
    x: 0,
    y: 0,
    damage: 3,
    hp: 48,
    gold: 120,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "12",
    x: 0,
    y: 0,
    damage: 5,
    hp: 52,
    gold: 130,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 24 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "13",
    x: 0,
    y: 0,
    damage: 3,
    hp: 59,
    gold: 140,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "14",
    x: 0,
    y: 0,
    damage: 3,
    hp: 65,
    gold: 150,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 20 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "15",
    x: 0,
    y: 0,
    damage: 3,
    hp: 74,
    gold: 160,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 21 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "16",
    x: 0,
    y: 0,
    damage: 4,
    hp: 83,
    gold: 170,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 23 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "17",
    x: 0,
    y: 0,
    damage: 4,
    hp: 92,
    gold: 180,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 107 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "18",
    x: 0,
    y: 0,
    damage: 4,
    hp: 102,
    gold: 190,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 35 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "19",
    x: 0,
    y: 0,
    damage: 4,
    hp: 114,
    gold: 200,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 33 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "20",
    x: 0,
    y: 0,
    damage: 4,
    hp: 120,
    gold: 250,
    speed: GAME_CONFIG.enemy.speed.medium,
    attackTimeout: 37 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.types.push({
    type: "21",
    x: 0,
    y: 0,
    damage: 4,
    hp: 130,
    gold: 300,
    speed: GAME_CONFIG.enemy.speed.slow,
    attackTimeout: 32 * ENEMY_ATTACK_RATIO
});
GAME_CONFIG.enemy.boat = {
    types: [{type: 1, hp: 500, gold: 300, timeout: 16, units: [1, 1, 1, 2, 2, 3, 3]}, {
        type: 2,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [1, 1, 1, 2, 2, 3, 3, 4]
    }, {type: 3, hp: 500, gold: 300, timeout: 16, units: [1, 1, 2, 3, 3, 4, 5, 4, 5]}, {
        type: 4,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [3, 4, 5, 4, 5, 4, 5, 9, 9, 10]
    }, {type: 5, hp: 500, gold: 300, timeout: 16, units: [4, 5, 4, 5, 4, 5, 9, 9, 10, 10, 11]}, {
        type: 6,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [4, 5, 9, 9, 10, 10, 11, 11]
    }, {type: 7, hp: 500, gold: 300, timeout: 16, units: [5, 9, 10, 10, 11, 11, 12, 10, 11, 12]}, {
        type: 8, hp: 500, gold: 300,
        timeout: 16, units: [9, 10, 10, 11, 11, 12, 10, 11, 12, 12, 13, 12, 11]
    }, {
        type: 9,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [10, 11, 11, 12, 10, 11, 12, 12, 13, 13, 12, 11, 14, 13]
    }, {type: 10, hp: 500, gold: 300, timeout: 16, units: [10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14]}, {
        type: 11,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [10, 11, 12, 12, 13, 13, 13, 14, 14, 14]
    }, {type: 12, hp: 500, gold: 300, timeout: 16, units: [10, 11, 12, 13, 13, 13, 14, 14, 14, 15]}, {
        type: 13,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [11, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17]
    }, {
        type: 14, hp: 500, gold: 300, timeout: 16, units: [12, 13,
            13, 13, 14, 14, 14, 15, 15, 17, 17]
    }, {
        type: 15,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [13, 13, 13, 14, 14, 14, 15, 15, 17, 17, 17, 18, 19]
    }, {
        type: 16,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [13, 13, 14, 14, 15, 15, 15, 17, 17, 17, 17, 18, 18, 19, 20, 21]
    }, {
        type: 17,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [15, 15, 15, 17, 17, 17, 17, 18, 19, 19, 19, 20, 21, 20, 21]
    }, {
        type: 18,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [15, 17, 17, 17, 17, 18, 18, 19, 19, 20, 21, 20, 21, 20, 21, 20, 21]
    }, {
        type: 19,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 1, 2, 3, 4, 5, 9, 10, 11, 12,
            13]
    }, {
        type: 20,
        hp: 500,
        gold: 300,
        timeout: 16,
        units: [1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13]
    }]
};
GAME_CONFIG.enemy.wave = [[1], [2], [2, 2, 3], [2, 2, 2, 3], [2, 2, 2, 3, 3], [2, 2, 2, 2, 3, 3, 3], [2, 2, 3, 3, 4], [3, 3, 3, 4, 4, 5], [4, 4, 4, 5, 5], [5, 5, 6, 6], [4, 4, 4, 5, 5, 5, 6, 6], [6, 6, 7, 7, 7, 8, 8], [8, 8, 8, 9, 9, 9], [9, 9, 10, 10, 11, 12], [12, 12, 12, 13, 13], [13, 13, 13, 14, 14, 14, 14, 15], [13, 13, 14, 14, 15, 15, 16, 16], [13, 13, 14, 15, 16, 17, 18, 19], [17, 17, 17, 18, 18, 18, 19, 19], [19, 19, 19, 19, 20, 20, 20, 20]];
GAME_CONFIG.enemy.boss = {position: {x: 210, y: 100}, timeout: 1E4, hp: 1E4, damage: 10};
var ASSETS = {
        bitmaps: [{
            name: "background/intro",
            src: "background/intro.png",
            width: 480,
            height: 320
        }, {name: "background/game", src: "background/game.png", width: 480, height: 320}, {
            name: "background/shield",
            src: "background/shield.png",
            width: 53,
            height: 58
        }, {name: "background/upgrade", src: "background/upgrades.png", width: 480, height: 320}, {
            name: "font/black",
            src: "font/black.png",
            width: 16,
            height: 18,
            frames: 10
        }, {name: "background/upload", src: "background/upload.png", width: 480, height: 320}, {
            name: "font/black",
            src: "font/black.png",
            width: 16,
            height: 18,
            frames: 10
        }, {name: "font/red", src: "font/red.png", width: 20, height: 20, frames: 10}, {
            name: "font/yellow", src: "font/yellow.png", width: 20,
            height: 20, frames: 10
        }, {name: "font/power", src: "font/power.png", width: 36, height: 34, frames: 11}, {
            name: "button/close",
            src: "button/close.png",
            width: 36,
            height: 35
        }, {name: "button/menu", src: "button/menu.png", width: 23, height: 23}, {
            name: "button/next",
            src: "button/next.png",
            width: 23,
            height: 22
        }, {name: "button/no", src: "button/no.png", width: 28, height: 23}, {
            name: "button/ok",
            src: "button/ok.png",
            width: 35,
            height: 35
        }, {name: "button/pause", src: "button/pause.png", width: 26, height: 26}, {
            name: "button/play", src: "button/play.png",
            width: 35, height: 35
        }, {name: "button/sound", src: "button/sound.png", width: 26, height: 26}, {
            name: "button/yes",
            src: "button/yes.png",
            width: 28,
            height: 23
        }, {name: "button/call_more", src: "button/call_more.png", width: 49, height: 35}, {
            name: "button/menu/play",
            src: "button/play_menu.png",
            width: 95,
            height: 43
        }, {
            name: "button/menu/clear_data",
            src: "button/clear_data.png",
            width: 148,
            height: 43
        }, {name: "button/menu/more_games", src: "button/more_games.png", width: 172, height: 43}, {
            name: "castle/defeat", src: "castle/defeat_back.png", width: 132,
            height: 144
        }, {name: "castle/win", src: "castle/win.png", width: 211, height: 135}, {
            name: "castle/money/back",
            src: "castle/money_back.png",
            width: 87,
            height: 25
        }, {name: "castle/power/word", src: "castle/power.png", width: 119, height: 33}, {
            name: "castle/power/back",
            src: "castle/power_back.png",
            width: 95,
            height: 76
        }, {
            name: "castle/power/scale_empty",
            src: "castle/scale_empty.png",
            width: 159,
            height: 67
        }, {name: "castle/power/scale_full", src: "castle/scale_full.png", width: 159, height: 67}, {
            name: "castle/unit/red", src: "castle/unit/red.png",
            width: 26, height: 25
        }, {name: "castle/unit/yellow", src: "castle/unit/yellow.png", width: 20, height: 20}, {
            name: "castle/unit/green",
            src: "castle/unit/green.png",
            width: 20,
            height: 22
        }, {name: "castle/unit/blue", src: "castle/unit/blue.png", width: 25, height: 26}, {
            name: "castle/unit/blue/bullet",
            src: "castle/unit/bullet_blue.png",
            width: 22,
            height: 24
        }, {
            name: "castle/unit/green/bullet",
            src: "castle/unit/bullet_green.png",
            width: 29,
            height: 23
        }, {name: "castle/unit/red/bullet", src: "castle/unit/bullet_red.png", width: 35, height: 28}, {
            name: "castle/unit/yellow/bullet",
            src: "castle/unit/bullet_yellow.png", width: 23, height: 25
        }, {
            name: "castle/skill/red",
            src: "castle/skill/btn_red.png",
            width: 26,
            height: 28,
            frames: 3
        }, {
            name: "castle/skill/yellow",
            src: "castle/skill/btn_yellow.png",
            width: 24,
            height: 24,
            frames: 3
        }, {
            name: "castle/skill/green",
            src: "castle/skill/btn_green.png",
            width: 24,
            height: 24,
            frames: 3
        }, {
            name: "castle/skill/blue",
            src: "castle/skill/btn_blue.png",
            width: 24,
            height: 26,
            frames: 3
        }, {name: "castle/skill/fist", src: "castle/skill/fist.png", width: 118, height: 76, frames: 12}, {
            name: "castle/skill/bugs",
            src: "castle/skill/bugs.png", width: 36, height: 32, frames: 10
        }, {name: "castle/skill/comet", src: "castle/comet.png", width: 48, height: 67}, {
            name: "castle/skill/comet_bang",
            src: "castle/comet_bang.png",
            width: 64,
            height: 50,
            frames: 8,
            layers: 2
        }, {name: "castle/cannon", src: "castle/cannon.png", width: 35, height: 30}, {
            name: "castle/cannon/scale",
            src: "castle/cannon_scale_full.png",
            width: 19,
            height: 7
        }, {name: "castle/cannon/scale_ready", src: "castle/cannon_scale_ready.png", width: 19, height: 7}, {
            name: "castle/tower", src: "castle/tower.png",
            width: 30, height: 40, frames: 4
        }, {name: "castle/tower/bullet", src: "castle/bullet.png", width: 4, height: 4}, {
            name: "enemy/unit/1/attack",
            src: "enemy/viking/attack1.png",
            width: 26,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/10/attack",
            src: "enemy/viking/attack10.png",
            width: 42,
            height: 38,
            frames: 5
        }, {
            name: "enemy/unit/11/attack",
            src: "enemy/viking/attack11.png",
            width: 34,
            height: 36,
            frames: 5
        }, {name: "enemy/unit/12/attack", src: "enemy/viking/attack12.png", width: 38, height: 38, frames: 6}, {
            name: "enemy/unit/13/attack", src: "enemy/viking/attack13.png",
            width: 38, height: 36, frames: 6
        }, {
            name: "enemy/unit/14/attack",
            src: "enemy/viking/attack14.png",
            width: 30,
            height: 28,
            frames: 6
        }, {
            name: "enemy/unit/15/attack",
            src: "enemy/viking/attack15.png",
            width: 26,
            height: 22,
            frames: 6
        }, {
            name: "enemy/unit/16/attack",
            src: "enemy/viking/attack16.png",
            width: 30,
            height: 20,
            frames: 6
        }, {
            name: "enemy/unit/17/attack",
            src: "enemy/viking/attack17.png",
            width: 30,
            height: 26,
            frames: 6
        }, {name: "enemy/unit/18/attack", src: "enemy/viking/attack18.png", width: 24, height: 20, frames: 6}, {
            name: "enemy/unit/19/attack",
            src: "enemy/viking/attack19.png", width: 30, height: 20, frames: 6
        }, {
            name: "enemy/unit/2/attack",
            src: "enemy/viking/attack2.png",
            width: 22,
            height: 20,
            frames: 7
        }, {
            name: "enemy/unit/20/attack",
            src: "enemy/viking/attack20.png",
            width: 30,
            height: 24,
            frames: 6
        }, {
            name: "enemy/unit/21/attack",
            src: "enemy/viking/attack21.png",
            width: 36,
            height: 26,
            frames: 6
        }, {
            name: "enemy/unit/3/attack",
            src: "enemy/viking/attack3.png",
            width: 26,
            height: 26,
            frames: 5
        }, {name: "enemy/unit/4/attack", src: "enemy/viking/attack4.png", width: 28, height: 22, frames: 5},
            {
                name: "enemy/unit/5/attack",
                src: "enemy/viking/attack5.png",
                width: 22,
                height: 20,
                frames: 5
            }, {
                name: "enemy/unit/6/attack",
                src: "enemy/viking/attack6.png",
                width: 32,
                height: 22,
                frames: 4
            }, {
                name: "enemy/unit/7/attack",
                src: "enemy/viking/attack7.png",
                width: 38,
                height: 26,
                frames: 5
            }, {
                name: "enemy/unit/8/attack",
                src: "enemy/viking/attack8.png",
                width: 32,
                height: 24,
                frames: 5
            }, {name: "enemy/unit/9/attack", src: "enemy/viking/attack9.png", width: 32, height: 26, frames: 5}, {
                name: "enemy/unit/1/die", src: "enemy/viking/die1.png", width: 28,
                height: 22, frames: 5
            }, {
                name: "enemy/unit/10/die",
                src: "enemy/viking/die10.png",
                width: 36,
                height: 32,
                frames: 6
            }, {
                name: "enemy/unit/11/die",
                src: "enemy/viking/die11.png",
                width: 34,
                height: 26,
                frames: 6
            }, {
                name: "enemy/unit/12/die",
                src: "enemy/viking/die12.png",
                width: 36,
                height: 32,
                frames: 6
            }, {
                name: "enemy/unit/13/die",
                src: "enemy/viking/die13.png",
                width: 36,
                height: 32,
                frames: 6
            }, {name: "enemy/unit/14/die", src: "enemy/viking/die14.png", width: 42, height: 28, frames: 7}, {
                name: "enemy/unit/15/die", src: "enemy/viking/die15.png", width: 36,
                height: 26, frames: 7
            }, {
                name: "enemy/unit/16/die",
                src: "enemy/viking/die16.png",
                width: 36,
                height: 26,
                frames: 7
            }, {
                name: "enemy/unit/17/die",
                src: "enemy/viking/die17.png",
                width: 38,
                height: 26,
                frames: 6
            }, {
                name: "enemy/unit/18/die",
                src: "enemy/viking/die18.png",
                width: 30,
                height: 20,
                frames: 7
            }, {
                name: "enemy/unit/19/die",
                src: "enemy/viking/die19.png",
                width: 38,
                height: 20,
                frames: 7
            }, {name: "enemy/unit/2/die", src: "enemy/viking/die2.png", width: 34, height: 24, frames: 7}, {
                name: "enemy/unit/20/die", src: "enemy/viking/die20.png", width: 38,
                height: 24, frames: 6
            }, {
                name: "enemy/unit/21/die",
                src: "enemy/viking/die21.png",
                width: 30,
                height: 24,
                frames: 6
            }, {
                name: "enemy/unit/3/die",
                src: "enemy/viking/die3.png",
                width: 32,
                height: 20,
                frames: 6
            }, {
                name: "enemy/unit/4/die",
                src: "enemy/viking/die4.png",
                width: 34,
                height: 20,
                frames: 6
            }, {
                name: "enemy/unit/5/die",
                src: "enemy/viking/die5.png",
                width: 30,
                height: 18,
                frames: 6
            }, {name: "enemy/unit/6/die", src: "enemy/viking/die6.png", width: 30, height: 24, frames: 6}, {
                name: "enemy/unit/7/die", src: "enemy/viking/die7.png", width: 32, height: 26,
                frames: 6
            }, {
                name: "enemy/unit/8/die",
                src: "enemy/viking/die8.png",
                width: 28,
                height: 24,
                frames: 6
            }, {
                name: "enemy/unit/9/die",
                src: "enemy/viking/die9.png",
                width: 34,
                height: 26,
                frames: 6
            }, {
                name: "enemy/unit/1/walk",
                src: "enemy/viking/walk1.png",
                width: 16,
                height: 20,
                frames: 4
            }, {
                name: "enemy/unit/10/walk",
                src: "enemy/viking/walk10.png",
                width: 28,
                height: 24,
                frames: 4
            }, {name: "enemy/unit/11/walk", src: "enemy/viking/walk11.png", width: 24, height: 22, frames: 4}, {
                name: "enemy/unit/12/walk", src: "enemy/viking/walk12.png", width: 24, height: 24,
                frames: 4
            }, {
                name: "enemy/unit/13/walk",
                src: "enemy/viking/walk13.png",
                width: 26,
                height: 24,
                frames: 4
            }, {
                name: "enemy/unit/14/walk",
                src: "enemy/viking/walk14.png",
                width: 24,
                height: 22,
                frames: 4
            }, {
                name: "enemy/unit/15/walk",
                src: "enemy/viking/walk15.png",
                width: 18,
                height: 22,
                frames: 4
            }, {
                name: "enemy/unit/16/walk",
                src: "enemy/viking/walk16.png",
                width: 22,
                height: 22,
                frames: 4
            }, {name: "enemy/unit/17/walk", src: "enemy/viking/walk17.png", width: 22, height: 22, frames: 4}, {
                name: "enemy/unit/18/walk", src: "enemy/viking/walk18.png", width: 18,
                height: 20, frames: 4
            }, {
                name: "enemy/unit/19/walk",
                src: "enemy/viking/walk19.png",
                width: 24,
                height: 22,
                frames: 4
            }, {
                name: "enemy/unit/2/walk",
                src: "enemy/viking/walk2.png",
                width: 18,
                height: 20,
                frames: 4
            }, {
                name: "enemy/unit/20/walk",
                src: "enemy/viking/walk20.png",
                width: 22,
                height: 22,
                frames: 4
            }, {
                name: "enemy/unit/21/walk",
                src: "enemy/viking/walk21.png",
                width: 18,
                height: 18,
                frames: 4
            }, {name: "enemy/unit/3/walk", src: "enemy/viking/walk3.png", width: 20, height: 20, frames: 4}, {
                name: "enemy/unit/4/walk", src: "enemy/viking/walk4.png",
                width: 22, height: 20, frames: 4
            }, {
                name: "enemy/unit/5/walk",
                src: "enemy/viking/walk5.png",
                width: 18,
                height: 20,
                frames: 4
            }, {
                name: "enemy/unit/6/walk",
                src: "enemy/viking/walk6.png",
                width: 16,
                height: 20,
                frames: 4
            }, {
                name: "enemy/unit/7/walk",
                src: "enemy/viking/walk7.png",
                width: 18,
                height: 20,
                frames: 4
            }, {
                name: "enemy/unit/9/walk",
                src: "enemy/viking/walk9.png",
                width: 22,
                height: 18,
                frames: 4
            }, {name: "enemy/unit/1/gold", src: "enemy/viking/gold1.png", width: 13, height: 20}, {
                name: "enemy/unit/10/gold", src: "enemy/viking/gold10.png", width: 27,
                height: 23
            }, {
                name: "enemy/unit/11/gold",
                src: "enemy/viking/gold11.png",
                width: 22,
                height: 20
            }, {
                name: "enemy/unit/12/gold",
                src: "enemy/viking/gold12.png",
                width: 23,
                height: 24
            }, {
                name: "enemy/unit/13/gold",
                src: "enemy/viking/gold13.png",
                width: 25,
                height: 23
            }, {
                name: "enemy/unit/14/gold",
                src: "enemy/viking/gold14.png",
                width: 23,
                height: 23
            }, {
                name: "enemy/unit/15/gold",
                src: "enemy/viking/gold15.png",
                width: 20,
                height: 23
            }, {name: "enemy/unit/16/gold", src: "enemy/viking/gold16.png", width: 19, height: 26}, {
                name: "enemy/unit/17/gold", src: "enemy/viking/gold17.png",
                width: 22, height: 25
            }, {
                name: "enemy/unit/18/gold",
                src: "enemy/viking/gold18.png",
                width: 19,
                height: 20
            }, {
                name: "enemy/unit/19/gold",
                src: "enemy/viking/gold19.png",
                width: 21,
                height: 22
            }, {
                name: "enemy/unit/2/gold",
                src: "enemy/viking/gold2.png",
                width: 18,
                height: 20
            }, {
                name: "enemy/unit/20/gold",
                src: "enemy/viking/gold20.png",
                width: 23,
                height: 22
            }, {
                name: "enemy/unit/21/gold",
                src: "enemy/viking/gold21.png",
                width: 19,
                height: 19
            }, {name: "enemy/unit/3/gold", src: "enemy/viking/gold3.png", width: 19, height: 20}, {
                name: "enemy/unit/4/gold",
                src: "enemy/viking/gold4.png", width: 24, height: 20
            }, {
                name: "enemy/unit/5/gold",
                src: "enemy/viking/gold5.png",
                width: 16,
                height: 18
            }, {
                name: "enemy/unit/6/gold",
                src: "enemy/viking/gold6.png",
                width: 15,
                height: 20
            }, {
                name: "enemy/unit/7/gold",
                src: "enemy/viking/gold7.png",
                width: 17,
                height: 25
            }, {
                name: "enemy/unit/8/gold",
                src: "enemy/viking/gold8.png",
                width: 14,
                height: 21
            }, {
                name: "enemy/unit/9/gold",
                src: "enemy/viking/gold9.png",
                width: 24,
                height: 18
            }, {name: "enemy/unit/bones1", src: "enemy/viking/bones1.png", width: 38, height: 25, frames: 21},
            {
                name: "enemy/unit/bones2",
                src: "enemy/viking/bones2.png",
                width: 41,
                height: 22,
                frames: 21
            }, {
                name: "enemy/unit/bones3",
                src: "enemy/viking/bones3.png",
                width: 37,
                height: 27,
                frames: 21
            }, {
                name: "enemy/unit/bones4",
                src: "enemy/viking/bones4.png",
                width: 37,
                height: 27,
                frames: 21
            }, {
                name: "enemy/unit/bones5",
                src: "enemy/viking/bones5.png",
                width: 41,
                height: 22,
                frames: 21
            }, {name: "enemy/unit/bones6", src: "enemy/viking/bones6.png", width: 38, height: 25, frames: 21}, {
                name: "enemy/unit/bones7", src: "enemy/viking/bones7.png", width: 35, height: 33,
                frames: 21
            }, {name: "enemy/boat/1", src: "enemy/boat/1.png", width: 45, height: 38}, {
                name: "enemy/boat/2",
                src: "enemy/boat/2.png",
                width: 45,
                height: 38
            }, {name: "enemy/boat/3", src: "enemy/boat/3.png", width: 43, height: 38}, {
                name: "enemy/boat/4",
                src: "enemy/boat/4.png",
                width: 43,
                height: 38
            }, {name: "enemy/boat/5", src: "enemy/boat/5.png", width: 43, height: 38}, {
                name: "enemy/boat/6",
                src: "enemy/boat/6.png",
                width: 43,
                height: 38
            }, {name: "enemy/boat/7", src: "enemy/boat/7.png", width: 43, height: 38}, {
                name: "enemy/boat/8", src: "enemy/boat/8.png",
                width: 45, height: 38
            }, {name: "enemy/boat/9", src: "enemy/boat/9.png", width: 45, height: 38}, {
                name: "enemy/boat/10",
                src: "enemy/boat/10.png",
                width: 45,
                height: 38
            }, {name: "enemy/boat/11", src: "enemy/boat/11.png", width: 45, height: 38}, {
                name: "enemy/boat/12",
                src: "enemy/boat/12.png",
                width: 43,
                height: 38
            }, {name: "enemy/boat/13", src: "enemy/boat/13.png", width: 43, height: 38}, {
                name: "enemy/boat/14",
                src: "enemy/boat/14.png",
                width: 45,
                height: 38
            }, {name: "enemy/boat/15", src: "enemy/boat/15.png", width: 45, height: 38}, {
                name: "enemy/boat/16",
                src: "enemy/boat/16.png", width: 45, height: 39
            }, {name: "enemy/boat/17", src: "enemy/boat/17.png", width: 43, height: 39}, {
                name: "enemy/boat/18",
                src: "enemy/boat/18.png",
                width: 43,
                height: 39
            }, {name: "enemy/boat/19", src: "enemy/boat/19.png", width: 45, height: 38}, {
                name: "enemy/boat/20",
                src: "enemy/boat/20.png",
                width: 43,
                height: 40
            }, {name: "enemy/loki", src: "enemy/loki.png", width: 41, height: 40, frames: 11}, {
                name: "enemy/coin",
                src: "enemy/coin.png",
                width: 8,
                height: 8
            }, {
                name: "upgrade/image", src: "upgrade/upgrade.png", width: 46, height: 50,
                frames: 12
            }, {name: "upgrade/sign", src: "upgrade/upgrade_sign.png", width: 22, height: 21}, {
                name: "upgrade/slot",
                src: "upgrade/upgrade_slot.png",
                width: 93,
                height: 89
            }, {name: "upgrade/scale", src: "upgrade/upgrade_scale.png", width: 16, height: 55}],
        sounds: "sounds/attack_blue sounds/attack_green sounds/attack_magic sounds/attack_red sounds/attack_shot sounds/attack_yellow sounds/battle_lose sounds/battle_win sounds/boat_dead sounds/call sounds/click sounds/crash sounds/dead sounds/game sounds/gold sounds/hammer sounds/horn sounds/kick sounds/money sounds/music sounds/roar sounds/shield sounds/skill_blue sounds/skill_green sounds/skill_red sounds/skill_yellow sounds/slow_shot sounds/upgrades".split(" ")
    },
    CSSBack = new function () {
        var a, c;
        this.__defineGetter__("image", function () {
            return a
        });
        this.__defineSetter__("image", function (c) {
            a = c;
            document.body.style.backgroundImage = "url(" + a.src + ")";
            document.body.style.backgroundPosition = "center top";
            document.body.style.backgroundRepeat = "no-repeat";
            this.resize()
        });
        this.__defineGetter__("color", function () {
            return c
        });
        this.__defineSetter__("color", function (a) {
            c = a;
            document.body.style.backgroundColor = c || "transparent"
        });
        this.resize = function () {
            if (a) {
                var c = Utils.getWindowRect().height /
                    a.height;
                document.body.style.backgroundSize = Math.floor(a.width * c) + "px " + Math.floor(a.height * c) + "px"
            }
        }
    }, CRENDER_DEBUG = !1;
"undefined" == typeof window.console && (window.console = {
    log: function () {
    }
});
window.Utils || (window.Utils = {});
Utils.detectMobileBrowser = function () {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
Utils.getTouchStartEvent = function () {
    return Utils.isWindowsPhone() ? "mspointerdown" : "touchstart"
};
Utils.getTouchMoveEvent = function () {
    return Utils.isWindowsPhone() ? "mspointermove" : "touchmove"
};
Utils.getTouchEndEvent = function () {
    return Utils.isWindowsPhone() ? "mspointerup" : "touchend"
};
Utils.touchScreen = Utils.detectMobileBrowser();
Utils.globalScale = 1;
Utils.globalPixelScale = 1;
Utils.isWindowHidden = !1;
Utils.DOMMainContainerId = "main_container";
Utils.DOMProgressContainerId = "progress_container";
Utils.DOMProgressId = "progress";
Utils.DOMScreenBackgroundContainerId = "screen_background_container";
Utils.DOMScreenBackgroundWrapperId = "screen_background_wrapper";
Utils.DOMScreenBackgroundId = "screen_background";
Utils.DOMScreenContainerId = "screen_container";
Utils.DOMScreenWrapperId = "screen_wrapper";
Utils.DOMScreenId = "screen";
Utils.DOMP2lContainerId = "p2l_container";
Utils.DOMP2lId = "p2l";
Utils.DOMMarkId = "mark";
Utils.setCookie = function (a, c) {
    try {
        window.localStorage.setItem(a, c)
    } catch (d) {
        var e = new Date;
        e.setDate(e.getDate() + 3650);
        document.cookie = a + "=" + c + "; expires=" + e.toUTCString()
    }
};
Utils.getCookie = function (a) {
    var c;
    try {
        c = window.localStorage.getItem(a)
    } catch (d) {
        a += "=";
        c = document.cookie.indexOf(a);
        if (-1 == c) return null;
        var e = document.cookie.indexOf(";", c + a.length);
        -1 == e && (e = document.cookie.length);
        c = unescape(document.cookie.substring(c + a.length, e))
    }
    return c
};
Utils.bindEvent = function (a, c, d) {
    a.addEventListener ? a.addEventListener(c, d, !1) : a.attachEvent && a.attachEvent("on" + c, d)
};
Utils.getObjectLeft = function (a) {
    var c = a.offsetLeft;
    a.offsetParent && (c += Utils.getObjectLeft(a.offsetParent));
    return c
};
Utils.getObjectTop = function (a) {
    var c = a.offsetTop;
    a.offsetParent && (c += Utils.getObjectTop(a.offsetParent));
    return c
};
Utils.parseGet = function () {
    var a = {}, c = window.location.toString(), d = window.location.toString().indexOf("?");
    if (0 <= d) for (var c = c.substr(d + 1, c.length), d = c.split("&"), e = 0; e < d.length; e++) c = d[e].split("="), a[c[0]] = c[1];
    return a
};
Utils.getMouseCoord = function (a, c) {
    var d = a || window.event;
    d.touches && (d = d.touches[0]);
    if (!d) return {x: 0, y: 0};
    var e = 0, f = 0, g = 0, h = 0;
    c && (e = Utils.getObjectLeft(c), f = Utils.getObjectTop(c));
    if (d.pageX || d.pageY) g = d.pageX, h = d.pageY; else if (d.clientX || d.clientY) g = d.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft, h = d.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
    return {x: g - e, y: h - f}
};
Utils.removeFromArray = function (a, c) {
    for (var d = [], e = 0; e < a.length; e++) a[e] != c && d.push(a[e]);
    return d
};
Utils.showLoadProgress = function (a) {
    var c = Utils.globalScale, d;
    d = "Loading: " + a + "%<br><br>";
    d += '<div style="display: block; background: #000; width: ' + a * c * 2 + "px; height: " + 10 * c + 'px;">&nbsp;</div>';
    document.getElementById(Utils.DOMProgressId).innerHTML = d
};
Utils.hideAddressBarLock = !1;
Utils.mobileHideAddressBar = function () {
    Utils.hideAddressBarLock || window.scrollTo(0, 1)
};
Utils.mobileCheckIphone4 = function () {
    return Utils.touchScreen && 0 <= navigator.userAgent.indexOf("iPhone") && 2 == window.devicePixelRatio
};
Utils.mobileCheckBrokenAndroid = function () {
    return Utils.touchScreen && Utils.isAndroid() && !Utils.isChrome() && !Utils.isFirefox()
};
Utils.mobileCheckSlowDevice = function () {
    return Utils.mobileCheckBrokenAndroid() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310") || Utils.touchScreen && Utils.isAndroid() && Utils.isFirefox() && 0 <= navigator.userAgent.toLowerCase().indexOf("sm-t310")
};
Utils.isChrome = function () {
    var a = !1;
    0 <= navigator.userAgent.toLowerCase().indexOf("chrome") && (a = !0, Utils.isAndroid() && 22 > (parseInt((/Chrome\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || 0) && (a = !1));
    return a
};
Utils.isAndroid = function () {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("android")
};
Utils.isIOS = function () {
    return navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g) ? !0 : !1
};
Utils.isPlayFreeBrowser = function () {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("playfreebrowser")
};
Utils.isFirefox = function () {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("firefox")
};
Utils.isWindowsPhone = function () {
    return 0 <= navigator.userAgent.toLowerCase().indexOf("windows phone")
};
Utils.checkSpilgamesEnvironment = function () {
    return "undefined" != typeof window.ExternalAPI && "Spilgames" == ExternalAPI.type && ExternalAPI.check()
};
Utils.mobileCorrectPixelRatio = function () {
    for (var a = document.getElementsByTagName("head")[0].getElementsByTagName("meta"), c = !0, d = null, e = "", f = 0; f < a.length; f++) if ("viewport" == a[f].name) {
        d = a[f];
        e = d.content + ", ";
        c = !1;
        break
    }
    c && (d = document.createElement("meta"), d.name = "viewport");
    e += "target-densitydpi=device-dpi, user-scalable=0";
    Utils.isPlayFreeBrowser() && (e += ", width=device-width, height=device-height");
    a = 1 / (window.devicePixelRatio ? window.devicePixelRatio : 1);
    a = a.toFixed(2);
    d.content = e + (", initial-scale=" +
        a + ", maximum-scale=" + a + ", minimum-scale=" + a);
    c && document.getElementsByTagName("head")[0].appendChild(d)
};
Utils.getMobileScreenResolution = function (a) {
    var c = 1, d = window.innerWidth, e = window.innerHeight;
    d && e || (d = screen.width, e = screen.height);
    var f = [{scale: 1, width: 320, height: 480}, {scale: 1.5, width: 480, height: 720}, {
        scale: 2,
        width: 640,
        height: 960
    }], g = {width: 0, height: 0}, h = "";
    Utils.touchScreen ? (g.width = Math.min(d, e), g.height = Math.max(d, e)) : (a && (f = [{
        scale: 1,
        width: 480,
        height: 320
    }, {scale: 1.5, width: 720, height: 480}, {scale: 2, width: 960, height: 640}]), g.width = d, g.height = e);
    h = "height";
    d = Number.MAX_VALUE;
    for (e = 0; e < f.length; e++) {
        var k =
            Math.abs(g[h] - f[e][h]);
        d > k && (d = k, c = f[e].scale)
    }
    return Utils.getScaleScreenResolution(c, a)
};
Utils.getScaleScreenResolution = function (a, c) {
    var d = Math.round(320 * a), e = Math.round(480 * a);
    return {width: c ? e : d, height: c ? d : e, scale: a}
};
Utils.imagesRoot = "images";
Utils.initialResolution = {width: 320, height: 480, scale: 1};
Utils.ignoreMobileHeightCorrection = !1;
Utils.createLayout = function (a, c, d, e) {
    var f = Utils.globalScale;
    Utils.initialResolution = c;
    d = window.innerHeight;
    Utils.touchScreen && Utils.isFirefox() ? (d = 6144, document.body.style.height = d + "px") : document.body.style.overflow = "hidden";
    var g;
    g = "" + ('<div id="' + Utils.DOMProgressContainerId + '" align="center" style="width: 100%; height: ' + d + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">');
    g += '<table cellspacing="0" cellpadding="0" border="0"><tr><td id="' + Utils.DOMProgressId + '" align="center" valign="middle" style="width: ' +
        c.width + "px; height: " + c.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " + 12 * f + 'px; vertical-align: middle;"></td></tr></table>';
    g = g + "</div>" + ('<div id="' + Utils.DOMScreenBackgroundContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">');
    g += '<div id="' + Utils.DOMScreenBackgroundWrapperId + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    e || (g += '<canvas id="' + Utils.DOMScreenBackgroundId + '" width="' + c.width + '" height="' + c.height + '"></canvas>');
    g += "</div>";
    g += "</div>";
    g += '<div id="' + Utils.DOMScreenContainerId + '" style="width: 100%; height: ' + d + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
    g += '<div id="' + Utils.DOMScreenWrapperId + '" width="' + c.width + '" height="' + c.height + '" style="width: ' + c.width + "px; height: " + c.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    e || (g += '<canvas id="' + Utils.DOMScreenId +
        '" style="position: absolute; left: 0px; top: 0px;" width="' + c.width + '" height="' + c.height + '">You browser does not support this application :(</canvas>');
    g += "</div>";
    g += "</div>";
    a.innerHTML = g;
    a = document.createElement("div");
    a.setAttribute("id", Utils.DOMP2lContainerId);
    a.setAttribute("align", "center");
    c = c.width;
    a.setAttribute("style", "width: 100%; height: " + d + "px; position: absolute; left: 0px; top: 0px; visibility: hidden; z-index: 1000; background: #fff;");
    c = (c - 240) / 2;
    Utils.isPlayFreeBrowser() &&
    (c /= 8);
    a.innerHTML = '<img id="' + Utils.DOMP2lId + '" src="' + Utils.imagesRoot + '/p2l.jpg" style="padding-top: ' + Math.floor(c) + 'px" />';
    document.body.appendChild(a);
    c = document.createElement("div");
    c.setAttribute("id", Utils.DOMMarkId);
    c.style.position = "fixed";
    c.style.right = "0px";
    c.style.bottom = "0px";
    c.style.width = "1px";
    c.style.height = "1px";
    c.style.background = "";
    c.style.zIndex = "100000";
    document.body.appendChild(c);
    Utils.fitLayoutToScreen()
};
Utils.showMainLayoutContent = function () {
    document.getElementById(Utils.DOMProgressContainerId).style.display = "none";
    document.getElementById(Utils.DOMScreenContainerId).style.display = "block";
    document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block"
};
Utils.preventEvent = function (a) {
    a.preventDefault();
    a.stopPropagation();
    a.cancelBubble = !0;
    return a.returnValue = !1
};
Utils.addMobileListeners = function (a, c) {
    !c && navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i) || Utils.bindEvent(document.body, Utils.isWindowsPhone() ? "MSPointerDown" : "touchstart", Utils.preventEvent);
    Utils.isPlayFreeBrowser() || Utils.bindEvent(window, "scroll", function (a) {
        setTimeout(Utils.mobileHideAddressBar, 300)
    });
    document.addEventListener(Utils.getVisibiltyProps().visibilityChange, Utils.handleVisibilityChange, !1);
    setInterval("Utils.checkOrientation(" + (a ? "true" : "false") + ")", 500);
    setTimeout(Utils.mobileHideAddressBar,
        500)
};
Utils.handleVisibilityChange = function () {
    Utils.isWindowHidden = document[Utils.getVisibiltyProps().hidden];
    Utils.dispatchEvent(Utils.isWindowHidden ? "hidewindow" : "showwindow")
};
Utils.getVisibiltyProps = function () {
    var a, c;
    "undefined" !== typeof document.hidden ? (a = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (a = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (a = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (a = "webkitHidden", c = "webkitvisibilitychange");
    return {hidden: a, visibilityChange: c}
};
Utils.staticWindowRect = null;
Utils.setWindowRect = function (a, c) {
    Utils.staticWindowRect = {width: a, height: c}
};
Utils.getWindowRect = function () {
    var a = document.getElementById(Utils.DOMMarkId);
    return Utils.isAndroid() && a ? {width: window.innerWidth, height: a.offsetTop + 1} : {
        width: window.innerWidth,
        height: window.innerHeight
    }
};
Utils.storeOrient = null;
Utils.noCheckOrient = !1;
Utils.checkOrientation = function (a) {
    if (Utils.touchScreen && document.getElementById(Utils.DOMScreenContainerId) && !Utils.noCheckOrient && 1 != Utils.parseGet().nocheckorient) {
        var c = Utils.getWindowRect(), c = c.width > c.height;
        Utils.storeOrient !== c && (Utils.storeOrient = c, c != a ? (Utils.dispatchEvent("lockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "visible", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "none", document.getElementById(Utils.DOMScreenContainerId).style.display =
            "none") : (Utils.dispatchEvent("unlockscreen"), document.getElementById(Utils.DOMP2lContainerId).style.visibility = "hidden", document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block", document.getElementById(Utils.DOMScreenContainerId).style.display = "block"), Utils.checkSpilgamesEnvironment() && (document.getElementById(Utils.DOMP2lContainerId).style.display = "none"), setTimeout(Utils.mobileHideAddressBar, 900), setTimeout(Utils.fitLayoutToScreen, 1E3))
    }
};
Utils.fitLayoutTimer = null;
Utils.addFitLayoutListeners = function () {
    Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
};
Utils.removeFitLayoutListeners = function () {
    clearInterval(Utils.fitLayoutTimer)
};
Utils.fitLayoutLock = !1;
Utils.fitLayoutCorrectHeight = 0;
Utils.fitLayoutAlign = "center";
Utils.fitLayoutVerticalAlign = "top";
Utils.layoutMargin = {left: 0, right: 0, top: 0, bottom: 0};
Utils.fitLayoutToScreen = function (a) {
    if (!Utils.fitLayoutLock) {
        var c, d, e, f, g;
        g = Utils.getWindowRect();
        "object" == typeof a && a.width || (f = Utils.staticWindowRect ? Utils.staticWindowRect : g, d = f.width, e = f.height, Utils.checkSpilgamesEnvironment() && (e -= 25), e += Utils.fitLayoutCorrectHeight, e -= Utils.layoutMargin.top, e -= Utils.layoutMargin.bottom, d -= Utils.layoutMargin.left, d -= Utils.layoutMargin.right, a = {
            width: d,
            height: e
        });
        if (c = document.getElementById(Utils.DOMScreenWrapperId)) {
            c.initWidth || (c.initWidth = Utils.initialResolution.width,
                c.initHeight = Utils.initialResolution.height);
            d = c.initWidth;
            e = c.initHeight;
            var h = 1, h = a.width / d, k = a.height / e, h = h < k ? h : k;
            Utils.globalPixelScale = h;
            d = Math.floor(d * h);
            e = Math.floor(e * h);
            if (c.lastWidth != a.width || c.lastHeight != a.height || c.lastRealWidth != g.width || c.lastRealHeight != g.height) c.lastWidth = a.width, c.lastHeight = a.height, c.lastRealWidth = g.width, c.lastRealHeight = g.height, Utils.resizeElement(Utils.DOMScreenId, d, e), Utils.resizeElement(Utils.DOMScreenBackgroundId, d, e), Utils.resizeElement(Utils.DOMProgressContainerId,
                f.width, f.height), Utils.resizeElement(Utils.DOMProgressId, d, e), c = Utils.resizeElement(Utils.DOMScreenWrapperId, d, e), Utils.alignElement(c, g, d, e), c = Utils.resizeElement(Utils.DOMScreenBackgroundWrapperId, d, e), Utils.alignElement(c, g, d, e), Utils.resizeElement(Utils.DOMP2lContainerId, f.width, f.height), Utils.resizeElement(Utils.DOMScreenContainerId, f.width, f.height), Utils.resizeElement(Utils.DOMScreenBackgroundContainerId, f.width, f.height), Utils.dispatchEvent("fitlayout"), Utils.isPlayFreeBrowser() && window.scrollTo(1,
                2), setTimeout(Utils.mobileHideAddressBar, 10)
        }
    }
};
Utils.alignElement = function (a, c, d, e) {
    a && (a.style.left = "left" == Utils.fitLayoutAlign ? Utils.layoutMargin.left + "px" : "right" == Utils.fitLayoutAlign ? Math.floor(c.width - d - Utils.layoutMargin.right) + "px" : Math.floor((c.width - d - Utils.layoutMargin.left - Utils.layoutMargin.right) / 2) + "px", a.style.top = "top" == Utils.fitLayoutVerticalAlign ? Utils.layoutMargin.top + "px" : "bottom" == Utils.fitLayoutVerticalAlign ? Math.floor(c.height - e - Utils.layoutMargin.bottom) + "px" : Math.floor((c.height - e - Utils.layoutMargin.top - Utils.layoutMargin.bottom) /
        2) + "px")
};
Utils.resizeElement = function (a, c, d) {
    a = document.getElementById(a);
    if (!a) return null;
    a.style.width = Math.floor(c) + "px";
    a.style.height = Math.floor(d) + "px";
    return a
};
Utils.drawIphoneLimiter = function (a, c) {
    c ? a.drawRectangle(240, 295, 480, 54, "#f00", !0, .5, !0) : a.drawRectangle(160, 448, 320, 64, "#f00", !0, .5, !0)
};
Utils.drawGrid = function (a, c, d) {
    "undefined" == typeof c && (c = !1);
    "undefined" == typeof d && (d = "#FFF");
    var e = c ? 480 : 320;
    c = c ? 320 : 480;
    for (var f = 10; f < e; f += 10) {
        var g = .1 + (f - 10) / 10 % 10 * .1;
        a.drawLine(f, 0, f, c, 1, d, g)
    }
    for (f = 10; f < c; f += 10) g = .1 + (f - 10) / 10 % 10 * .1, a.drawLine(0, f, e, f, 1, d, g)
};
Utils.drawScaleFix = function (a, c) {
    .75 == Utils.globalScale && (c ? a.drawRectangle(507, 160, 54, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 507, 320, 54, "#000", !0, 1, !0));
    1.5 == Utils.globalScale && (c ? a.drawRectangle(510, 160, 60, 320, "#000", !0, 1, !0) : a.drawRectangle(160, 510, 320, 60, "#000", !0, 1, !0))
};
Utils.grad2radian = function (a) {
    return a / (180 / Math.PI)
};
Utils.radian2grad = function (a) {
    return 180 / Math.PI * a
};
Utils.eventsListeners = [];
Utils.onlockscreen = null;
Utils.onunlockscreen = null;
Utils.onhidewindow = null;
Utils.onshowwindow = null;
Utils.onfitlayout = null;
Utils.addEventListener = function (a, c) {
    EventsManager.addEvent(Utils, a, c)
};
Utils.removeEventListener = function (a, c) {
    EventsManager.removeEvent(Utils, a, c)
};
Utils.dispatchEvent = function (a, c) {
    return EventsManager.dispatchEvent(Utils, a, c)
};
Utils.isArray = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a)
};
Utils.isPlainObject = function (a) {
    return a && a.constructor ? a.constructor === Object : !1
};
Utils.getFunctionArguments = function (a, c) {
    "undefined" == typeof c && (c = 0);
    return [].slice.call(a, c)
};
Utils.proxy = function (a, c) {
    var d = Utils.getFunctionArguments(arguments, 2);
    return function () {
        return a.apply(c || this, Utils.getFunctionArguments(arguments, 0).concat(d))
    }
};
Utils.extend = function (a, c) {
    var d = function () {
    };
    d.prototype = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.superclass = c.prototype
};
Utils.callSuperConstructor = function (a, c) {
    a.superclass.constructor.apply(c, Utils.getFunctionArguments(arguments, 2))
};
Utils.callSuperMethod = function (a, c, d) {
    return a.superclass[d].apply(c, Utils.getFunctionArguments(arguments, 3))
};
Utils.copyObjectProps = function (a, c) {
    for (var d in a) if (a.hasOwnProperty(d)) if (Utils.isArray(a[d])) {
        c[d] = [];
        for (var e = 0; e < a[d].length; e++) "object" == typeof a[d][e] && (c[d][e] = Utils.cloneEmptyObject(a[d][e])), Utils.copyObjectProps(a[d][e], c[d][e])
    } else Utils.isPlainObject(a[d]) ? (c[d] = {}, Utils.copyObjectProps(a[d], c[d])) : c[d] = a[d]
};
Utils.cloneEmptyObject = function (a) {
    return a.constructor ? new a.constructor : {}
};
Utils.clone = function (a) {
    if (!a || "object" != typeof a) return a;
    var c = Utils.cloneEmptyObject(a);
    Utils.copyObjectProps(a, c);
    return c
};
Utils.switchToTimeMode = function (a) {
    Tween.STEP_TYPE = Tween.STEP_BY_TIME;
    StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_TIME;
    Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_TIME;
    Sprite.CHANGE_FRAME_DELAY = a
};
Utils.getGameID = function () {
    if (window.GAME_ID && "my_game" != window.GAME_ID) return window.GAME_ID;
    for (var a = window.location.toString().split("/"), c = ""; !c;) c = a.pop(), 1 < c.split(".").length && (c = ""), 0 == a.length && (c = "my_game");
    return c
};
Utils.ajax = function (a, c, d, e, f, g) {
    var h;
    h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    h.onreadystatechange = function () {
        if (4 == h.readyState) if (200 == h.status) {
            var a = h.responseText;
            "json" == e && (a = JSON.parse(a));
            "xml" == e && (a = Utils.parseXMLString(a));
            f && f(a, h)
        } else g && g(h.status, h)
    };
    if (d) {
        var k = [], l;
        for (l in d) k.push(encodeURIComponent(l) + "=" + encodeURIComponent(d[l]));
        d = k.join("&")
    } else d = "";
    c || (c = "GET");
    h.open(c, a + ("GET" == c ? "?" + d : ""), !0);
    "POST" == c && h.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    h.send("GET" != c ? d : null)
};
Utils.get = function (a, c, d, e, f) {
    Utils.ajax(a, "GET", c, d, e, f)
};
Utils.post = function (a, c, d, e, f) {
    Utils.ajax(a, "POST", c, d, e, f)
};
Utils.getBezierBasis = function (a, c, d) {
    function e(a) {
        return 1 >= a ? 1 : a * e(a - 1)
    }

    return e(c) / (e(a) * e(c - a)) * Math.pow(d, a) * Math.pow(1 - d, c - a)
};
Utils.getBezierCurve = function (a, c) {
    "undefined" == typeof c && (c = .1);
    var d = [];
    c /= a.length;
    for (var e = 0; e < 1 + c; e += c) {
        1 < e && (e = 1);
        var f = d.length;
        d[f] = {x: 0, y: 0};
        for (var g = 0; g < a.length; g++) {
            var h = Utils.getBezierBasis(g, a.length - 1, e);
            d[f].x += a[g].x * h;
            d[f].y += a[g].y * h
        }
    }
    return d
};
Utils.parseXMLString = function (a) {
    var c = null;
    if ("undefined" != typeof window.DOMParser) c = (new window.DOMParser).parseFromString(a, "text/xml"); else if ("undefined" != typeof window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM")) c = new window.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a); else throw Error("No XML parser found");
    return c
};

function ImagesPreloader() {
    this.curItem = -1;
    this.loadedImages = {};
    this.processCallback = this.endCallback = this.data = null;
    this.minProgressVal = 0;
    this.maxProgressVal = 100;
    this.wait = Utils.proxy(this.wait, this)
}

ImagesPreloader.prototype.load = function (a, c, d) {
    this.data = a;
    this.endCallback = c;
    this.processCallback = d;
    for (a = 0; a < this.data.length; a++) c = this.data[a], d = new Image, d.src = c.src, this.loadedImages[c.name] = d;
    this.wait()
};
ImagesPreloader.prototype.wait = function () {
    var a = 0, c = 0, d;
    for (d in this.loadedImages) this.loadedImages[d].complete && a++, c++;
    a >= c ? this.endCallback && this.endCallback(this.loadedImages) : (this.processCallback && this.processCallback(Math.floor(a / c * this.maxProgressVal + this.minProgressVal)), setTimeout(this.wait, 50))
};

function SoundsPreloader(a, c, d) {
    this.sounds = a;
    this.endCallback = c;
    this.progressCallback = d;
    this.minProgressVal = this.loadedCount = 0;
    this.maxProgressVal = 100
}

SoundsPreloader.prototype.isMp3Support = function () {
    return "" != document.createElement("audio").canPlayType("audio/mpeg")
};
SoundsPreloader.prototype.isWebAudio = function () {
    return Boolean(window.AudioMixer) && AudioMixer.isWebAudioSupport()
};
SoundsPreloader.prototype.load = function (a, c, d) {
    a && (this.sounds = a);
    c && (this.endCallback = c);
    d && (this.progressCallback = d);
    if (!this.sounds || 1 > this.sounds.length || !this.isWebAudio()) this.endCallback && this.endCallback(); else {
        a = this.isMp3Support() ? "mp3" : "ogg";
        var e;
        this.loadedCount = 0;
        var f = this;
        for (d = 0; d < this.sounds.length; d++) c = this.sounds[d] + "." + a, this.isWebAudio() ? (e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), e.open("GET", c, !0), e.responseType = "arraybuffer", e.onreadystatechange =
            function () {
                if (4 == this.readyState && 200 == this.status) {
                    var a = this.soundSrc;
                    AudioMixer.waContext || (AudioMixer.waContext = new AudioContext);
                    AudioMixer.waContext.decodeAudioData(this.response, function (c) {
                        AudioMixer.buffer[a] = c;
                        f.soundIsLoaded(null, f)
                    }, function (a) {
                        f.soundIsLoaded(null, f)
                    })
                }
            }, e.soundSrc = c, e.send()) : (e = document.createElement("audio"), e.src = c, e.type = "mp3" == a ? "audio/mpeg" : "audio/ogg", e.preload = "auto", e.load(), e.addEventListener("canplay", Utils.proxy(this.soundIsLoaded, e, this)), e.addEventListener("canplaythrough",
            Utils.proxy(this.soundIsLoaded, e, this)))
    }
};
SoundsPreloader.prototype.soundIsLoaded = function (a, c) {
    if (this.nodeName && "audio" == this.nodeName.toLowerCase()) {
        if (this.alreadyLoaded) return;
        this.alreadyLoaded = !0
    }
    c.loadedCount++;
    c.progressCallback && c.progressCallback(Math.floor(c.loadedCount / c.sounds.length * c.maxProgressVal + c.minProgressVal));
    c.loadedCount >= c.sounds.length && c.endCallback && c.endCallback()
};

function Asset(a, c, d, e, f, g) {
    this.name = a + "";
    this.src = c + "";
    this.width = d;
    this.height = e;
    this.frames = f;
    this.layers = g;
    this.object = this.bitmap = null;
    this.ready = !(!this.width || !this.height);
    this.spriteClass = null
}

Asset.prototype.detectSize = function () {
    if (!this.bitmap) return !1;
    try {
        isNaN(this.width) && (this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0), isNaN(this.height) && (this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0)
    } catch (a) {
        CRENDER_DEBUG && console.log(a)
    }
    return !isNaN(this.width) && !isNaN(this.height)
};
Asset.prototype.normalize = function (a) {
    if (!this.ready && this.detectSize()) {
        if (isNaN(this.frames) || 1 > this.frames) this.frames = 1;
        if (isNaN(this.layers) || 1 > this.layers) this.layers = 1;
        this.width = Math.ceil(this.width / this.layers / a);
        this.height = Math.ceil(this.height / this.frames / a);
        this.ready = !0
    }
};

function AssetsLibrary(a, c, d) {
    this.path = "images";
    this.scale = 1;
    this.items = {};
    this.bitmaps = {};
    this.loaded = !1;
    this.onloadprogress = this.onload = null;
    this.spriteClass = Sprite;
    this.onLoadHandler = Utils.proxy(this.onLoadHandler, this);
    this.onLoadProgressHandler = Utils.proxy(this.onLoadProgressHandler, this);
    this.init(a, c);
    this.addAssets(d)
}

AssetsLibrary.prototype.init = function (a, c) {
    "undefined" != typeof a && (this.path = a + "");
    "undefined" != typeof c && (this.scale = parseFloat(c), isNaN(this.scale) && (this.scale = 1))
};
AssetsLibrary.prototype.load = function (a, c, d, e) {
    this.onload = a;
    this.onloadprogress = c;
    a = new ImagesPreloader;
    c = [];
    for (var f in this.items) c.push(this.items[f]);
    "undefined" != typeof d && (a.minProgressVal = d);
    "undefined" != typeof e && (a.maxProgressVal = e);
    a.load(c, this.onLoadHandler, this.onLoadProgressHandler)
};
AssetsLibrary.prototype.onLoadProgressHandler = function (a) {
    if ("function" == typeof this.onloadprogress) this.onloadprogress(a)
};
AssetsLibrary.prototype.onLoadHandler = function (a) {
    this.loaded = !0;
    for (var c in a) {
        var d = this.items[c];
        d.bitmap = a[c];
        d.normalize(this.scale)
    }
    if ("function" == typeof this.onload) this.onload(this.items)
};
AssetsLibrary.prototype.addAssets = function (a) {
    if ("undefined" != typeof a && "object" == typeof a) for (var c = 0; c < a.length; c++) {
        var d = a[c];
        d.noscale = "undefined" == typeof d.noscale ? !1 : d.noscale;
        d.noscale || (d.src = "%SCALE%/" + d.src);
        this.addAsset(d)
    }
};
AssetsLibrary.prototype.addAsset = function (a, c, d, e, f, g) {
    var h = null;
    "object" == typeof a && 1 == arguments.length && (c = a.name, d = a.width || NaN, e = a.height || NaN, f = a.frames || 1, g = a.layers || 1, h = a.spriteClass || null, properties = a.properties || null, a = a.src);
    a = a.replace("%SCALE%", "%PATH%/" + this.scale);
    a = a.replace("%PATH%", this.path);
    if ("undefined" == typeof c) {
        var k = a.split("/"), k = k.pop(), k = k.split(".");
        c = k = k.shift() + ""
    }
    k = new Asset(c, a, d, e, f, g);
    k.spriteClass = h;
    if (properties) for (var l in properties) "undefined" == typeof k[l] &&
    (k[l] = properties[l]);
    return this.items[c] = k
};
AssetsLibrary.prototype.addObject = function (a) {
    var c = this.addAsset("%SCALE%/" + a.image, a.name, a.width * this.scale, a.height * this.scale, a.frames, a.layers);
    c && (c.object = a);
    return c
};
AssetsLibrary.prototype.getAsset = function (a, c) {
    var d = null;
    "undefined" != typeof this.items[a] && this.items[a].bitmap && (d = "undefined" != typeof c && !c || this.items[a].ready ? this.items[a] : null);
    if (!d) throw Error('Trying to get undefined asset "' + a + '"');
    return d
};
AssetsLibrary.prototype.getSprite = function (a, c, d) {
    var e = null, e = null;
    try {
        e = this.getAsset(a, !0)
    } catch (f) {
        e = new Asset
    }
    if ((d = d || e.spriteClass || this.spriteClass || window.Sprite) && "function" == typeof d || "function" == typeof window[d]) d = "function" == typeof d ? d : window[d];
    e = d.create && "function" == typeof d.create ? d.create(e, this) : new d(e.bitmap, e.width, e.height, e.frames, e.layers);
    if (c && "object" == typeof c) for (var g in c) e[g] = c[g];
    return e
};
AssetsLibrary.prototype.getBitmap = function (a) {
    try {
        return this.getAsset(a, !0).bitmap
    } catch (c) {
        return null
    }
};

function Vector(a, c) {
    "undefined" == typeof a && (a = 0);
    this.x = a;
    "undefined" == typeof c && (c = 0);
    this.y = c
}

Vector.prototype.isZero = function () {
    return 0 == this.x && 0 == this.y
};
Vector.prototype.clone = function () {
    return new Vector(this.x, this.y)
};
Vector.prototype.add = function (a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
Vector.prototype.subtract = function (a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};
Vector.prototype.mult = function (a) {
    this.x *= a;
    this.y *= a;
    return this
};
Vector.prototype.invert = function () {
    this.mult(-1);
    return this
};
Vector.prototype.rotate = function (a, c) {
    "undefined" == typeof c && (c = new Vector(0, 0));
    var d = this.clone();
    d.subtract(c);
    d.x = this.x * Math.cos(a) + this.y * Math.sin(a);
    d.y = this.x * -Math.sin(a) + this.y * Math.cos(a);
    d.add(c);
    this.x = d.x;
    this.y = d.y;
    return this
};
Vector.prototype.normalize = function (a, c) {
    "undefined" == typeof c && (c = new Vector(0, 0));
    this.subtract(c);
    this.rotate(-a);
    return this
};
Vector.prototype.getLength = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};
Vector.prototype.distanceTo = function (a) {
    p2 = this.clone();
    p2.subtract(a);
    return p2.getLength()
};

function Rectangle(a, c, d, e, f) {
    this.center = new Vector(a, c);
    this.width = d;
    this.height = e;
    this.angle = f;
    this.vertices = [];
    this.AABB = [];
    this.refreshVertices()
}

Rectangle.prototype.clone = function () {
    return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
};
Rectangle.prototype.refreshVertices = function () {
    var a = this.width / 2, c = this.height / 2;
    this.vertices = [];
    this.vertices.push(new Vector(-a, c));
    this.vertices.push(new Vector(a, c));
    this.vertices.push(new Vector(a, -c));
    this.vertices.push(new Vector(-a, -c));
    this.AABB = [this.center.clone(), this.center.clone()];
    for (a = 0; 4 > a; a++) this.vertices[a].rotate(-this.angle, this.center), this.vertices[a].x < this.AABB[0].x && (this.AABB[0].x = this.vertices[a].x), this.vertices[a].x > this.AABB[1].x && (this.AABB[1].x = this.vertices[a].x),
    this.vertices[a].y < this.AABB[0].y && (this.AABB[0].y = this.vertices[a].y), this.vertices[a].y > this.AABB[1].y && (this.AABB[1].y = this.vertices[a].y)
};
Rectangle.prototype.move = function (a, c) {
    this.center.add(new Vector(a, c));
    this.refreshVertices()
};
Rectangle.prototype.rotate = function (a) {
    this.angle += a;
    this.refreshVertices()
};
Rectangle.prototype.hitTestPoint = function (a) {
    a = a.clone();
    a.normalize(-this.angle, this.center);
    return Math.abs(a.x) <= this.width / 2 && Math.abs(a.y) <= this.height / 2
};
Rectangle.prototype.hitTestRectangle = function (a) {
    var c = this.clone();
    a = a.clone();
    var d, e, f;
    c.move(-this.center.x, -this.center.y);
    a.move(-this.center.x, -this.center.y);
    a.center.rotate(this.angle);
    c.rotate(-this.angle);
    a.rotate(-this.angle);
    d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
    e = c.AABB[1].x - c.AABB[0].x;
    f = a.AABB[1].x - a.AABB[0].x;
    if (d > e + f) return !1;
    d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) - Math.min(c.AABB[0].y,
        c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
    e = c.AABB[1].y - c.AABB[0].y;
    f = a.AABB[1].y - a.AABB[0].y;
    if (d > e + f) return !1;
    c.move(-a.center.x, -a.center.y);
    a.move(-a.center.x, -a.center.y);
    c.center.rotate(a.angle);
    c.refreshVertices();
    c.rotate(-a.angle);
    a.rotate(-a.angle);
    d = Math.max(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x) - Math.min(c.AABB[0].x, c.AABB[1].x, a.AABB[0].x, a.AABB[1].x);
    e = c.AABB[1].x - c.AABB[0].x;
    f = a.AABB[1].x - a.AABB[0].x;
    if (d > e + f) return !1;
    d = Math.max(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y) -
        Math.min(c.AABB[0].y, c.AABB[1].y, a.AABB[0].y, a.AABB[1].y);
    e = c.AABB[1].y - c.AABB[0].y;
    f = a.AABB[1].y - a.AABB[0].y;
    return d > e + f ? !1 : !0
};
var EventsManager = {
    addEvent: function (a, c, d) {
        if (a.eventsListeners) {
            for (var e = 0; e < a.eventsListeners.length; e++) if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) return;
            a.eventsListeners.push({type: c, callback: d})
        }
    }, removeEvent: function (a, c, d) {
        if (a.eventsListeners) for (var e = 0; e < a.eventsListeners.length; e++) if (a.eventsListeners[e].type === c && a.eventsListeners[e].callback === d) {
            a.eventsListeners = Utils.removeFromArray(a.eventsListeners, a.eventsListeners[e]);
            break
        }
    }, dispatchEvent: function (a,
                                c, d) {
        if (a.eventsListeners) {
            var e;
            if ("function" == typeof a["on" + c] && (e = a["on" + c](d), !1 === e)) return !1;
            for (var f = 0; f < a.eventsListeners.length; f++) if (a.eventsListeners[f].type === c && (e = a.eventsListeners[f].callback(d), !1 === e)) return !1
        }
    }, hasEventListener: function (a, c) {
        if (a.eventsListeners) {
            for (var d = 0; d < a.eventsListeners.length; d++) if (a.eventsListeners[d].type === c) return !0;
            return !1
        }
    }, removeAllEventListeners: function (a, c) {
        if (a.eventsListeners) {
            "undefined" == typeof c && (a.eventsListeners = []);
            for (var d = [], e =
                0; e < a.eventsListeners.length; e++) a.eventsListeners[e].type !== c && d.push(a.eventsListeners[e]);
            a.eventsListeners = d
        }
    }
};

function EventsProxy() {
    this.eventsListeners = []
}

EventsProxy.prototype.addEventListener = function (a, c) {
    EventsManager.addEvent(this, a, c)
};
EventsProxy.prototype.removeEventListener = function (a, c) {
    EventsManager.removeEvent(this, a, c)
};
EventsProxy.prototype.dispatchEvent = function (a, c) {
    return EventsManager.dispatchEvent(this, a, c)
};
EventsProxy.prototype.hasEventListener = function (a) {
    return EventsManager.hasEventListener(this, a)
};
EventsProxy.prototype.removeAllEventListeners = function (a) {
    EventsManager.removeAllEventListeners(this, a)
};
var Easing = {
    back: {
        easeIn: function (a, c, d, e) {
            return d * (a /= e) * a * (2.70158 * a - 1.70158) + c
        }, easeOut: function (a, c, d, e) {
            return d * ((a = a / e - 1) * a * (2.70158 * a + 1.70158) + 1) + c
        }, easeInOut: function (a, c, d, e) {
            var f = 1.70158;
            return 1 > (a /= e / 2) ? d / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : d / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
        }
    }, bounce: {
        easeIn: function (a, c, d, e) {
            return d - Easing.bounce.easeOut(e - a, 0, d, e) + c
        }, easeOut: function (a, c, d, e) {
            return (a /= e) < 1 / 2.75 ? 7.5625 * d * a * a + c : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 /
                2.75) * a + .9375) + c : d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
        }, easeInOut: function (a, c, d, e) {
            return a < e / 2 ? .5 * Easing.bounce.easeIn(2 * a, 0, d, e) + c : .5 * Easing.bounce.easeOut(2 * a - e, 0, d, e) + .5 * d + c
        }
    }, circular: {
        easeIn: function (a, c, d, e) {
            return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + c
        }, easeOut: function (a, c, d, e) {
            return d * Math.sqrt(1 - (a = a / e - 1) * a) + c
        }, easeInOut: function (a, c, d, e) {
            return 1 > (a /= e / 2) ? -d / 2 * (Math.sqrt(1 - a * a) - 1) + c : d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
        }
    }, cubic: {
        easeIn: function (a, c, d, e) {
            return d * (a /= e) * a * a + c
        }, easeOut: function (a, c,
                              d, e) {
            return d * ((a = a / e - 1) * a * a + 1) + c
        }, easeInOut: function (a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a + c : d / 2 * ((a -= 2) * a * a + 2) + c
        }
    }, exponential: {
        easeIn: function (a, c, d, e) {
            return 0 == a ? c : d * Math.pow(2, 10 * (a / e - 1)) + c
        }, easeOut: function (a, c, d, e) {
            return a == e ? c + d : d * (-Math.pow(2, -10 * a / e) + 1) + c
        }, easeInOut: function (a, c, d, e) {
            return 0 == a ? c : a == e ? c + d : 1 > (a /= e / 2) ? d / 2 * Math.pow(2, 10 * (a - 1)) + c : d / 2 * (-Math.pow(2, -10 * --a) + 2) + c
        }
    }, linear: {
        easeIn: function (a, c, d, e) {
            return d * a / e + c
        }, easeOut: function (a, c, d, e) {
            return d * a / e + c
        }, easeInOut: function (a,
                                c, d, e) {
            return d * a / e + c
        }
    }, quadratic: {
        easeIn: function (a, c, d, e) {
            return d * (a /= e) * a + c
        }, easeOut: function (a, c, d, e) {
            return -d * (a /= e) * (a - 2) + c
        }, easeInOut: function (a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a + c : -d / 2 * (--a * (a - 2) - 1) + c
        }
    }, quartic: {
        easeIn: function (a, c, d, e) {
            return d * (a /= e) * a * a * a + c
        }, easeOut: function (a, c, d, e) {
            return -d * ((a = a / e - 1) * a * a * a - 1) + c
        }, easeInOut: function (a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a * a + c : -d / 2 * ((a -= 2) * a * a * a - 2) + c
        }
    }, quintic: {
        easeIn: function (a, c, d, e) {
            return d * (a /= e) * a * a * a * a + c
        }, easeOut: function (a, c, d, e) {
            return d *
                ((a = a / e - 1) * a * a * a * a + 1) + c
        }, easeInOut: function (a, c, d, e) {
            return 1 > (a /= e / 2) ? d / 2 * a * a * a * a * a + c : d / 2 * ((a -= 2) * a * a * a * a + 2) + c
        }
    }, sine: {
        easeIn: function (a, c, d, e) {
            return -d * Math.cos(a / e * (Math.PI / 2)) + d + c
        }, easeOut: function (a, c, d, e) {
            return d * Math.sin(a / e * (Math.PI / 2)) + c
        }, easeInOut: function (a, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + c
        }
    }, smoothstep: {
        easeIn: function (a, c, d, e) {
            a = a / e / 2;
            return 2 * a * a * (3 - 2 * a) * d + c
        }, easeOut: function (a, c, d, e) {
            a = (a / e + 1) / 2;
            return (2 * a * a * (3 - 2 * a) - 1) * d + c
        }, easeInOut: function (a, c, d, e) {
            a /= e;
            return a * a * (3 -
                2 * a) * d + c
        }
    }
};

function Tween(a, c, d, e, f, g) {
    Utils.callSuperConstructor(Tween, this);
    "object" != typeof a && (a = null);
    if (a) {
        if ("undefined" == typeof a[c]) throw Error('Trying to tween undefined property "' + c + '"');
        if (isNaN(a[c])) throw Error("Tweened value can not be " + typeof a[c]);
    } else if (isNaN(c)) throw Error("Tweened value can not be " + typeof c);
    "function" != typeof g && (g = Easing.linear.easeIn);
    this.obj = a;
    this.prop = c;
    this.onfinish = this.onchange = null;
    this.start = d;
    this.end = e;
    this.duration = ~~f;
    this.callback = g;
    this.playing = !1;
    this._pos = -1;
    this.newly = !0;
    this.eventsListeners = []
}

Utils.extend(Tween, EventsProxy);
Tween.prototype.play = function () {
    this.playing = !0;
    this.tick(0)
};
Tween.prototype.pause = function () {
    this.playing = !1
};
Tween.prototype.rewind = function () {
    this._pos = -1
};
Tween.prototype.forward = function () {
    this._pos = this.duration
};
Tween.prototype.stop = function () {
    this.pause();
    this.rewind()
};
Tween.prototype.updateValue = function (a) {
    this.obj ? this.obj[this.prop] = a : this.prop = a
};
Tween.prototype.tick = function (a) {
    if (!this.playing) return !1;
    a || (a = 0);
    Tween.STEP_TYPE == Tween.STEP_BY_FRAME ? this._pos++ : this._pos += a;
    if (0 > this._pos) return !1;
    if (this._pos > this.duration) return this.finish();
    a = this.callback;
    a = a(this._pos, this.start, this.end - this.start, this.duration);
    this.updateValue(a);
    this.dispatchEvent("change", {target: this, value: a});
    return !1
};
Tween.prototype.finish = function () {
    this.stop();
    this.updateValue(this.end);
    return !1 === this.dispatchEvent("finish", {target: this, value: this.end}) ? !1 : !0
};
Tween.STEP_BY_FRAME = 0;
Tween.STEP_BY_TIME = 1;
Tween.STEP_TYPE = Tween.STEP_BY_FRAME;

function DisplayObjectContainer() {
    Utils.callSuperConstructor(DisplayObjectContainer, this);
    this.parent = null;
    this.objectsCounter = 0;
    this.objects = [];
    this.height = this.width = this.y = this.x = 0;
    this.anchor = {x: 0, y: 0};
    this.hitArea = null;
    this.scaleY = this.scaleX = 1;
    this.rotation = this.skewY = this.skewX = 0;
    this.opacity = 1;
    this.fillPattern = this.fillRadialGradient = this.fillLinearGradient = this.fillColor = null
}

Utils.extend(DisplayObjectContainer, EventsProxy);
DisplayObjectContainer.prototype.getAbsoluteRotation = function () {
    return this.rotation + (this.parent ? this.parent.getAbsoluteRotation() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteOpacity = function () {
    return this.opacity * (this.parent ? this.parent.getAbsoluteOpacity() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleX = function () {
    return this.scaleX * (this.parent ? this.parent.getAbsoluteScaleX() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleY = function () {
    return this.scaleY * (this.parent ? this.parent.getAbsoluteScaleY() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteSkewX = function () {
    return this.skewX + (this.parent ? this.parent.getAbsoluteSkewX() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteSkewY = function () {
    return this.skewY + (this.parent ? this.parent.getAbsoluteSkewY() : 0)
};
DisplayObjectContainer.prototype.render = function (a, c, d) {
    for (var e = 0; e < this.objects.length; e++) obj = this.objects[e], obj.destroy ? (this.removeChild(obj), e--) : obj.visible && obj.render(a, c, d)
};
DisplayObjectContainer.prototype.getX = function () {
    return Math.round(this.x * Utils.globalScale)
};
DisplayObjectContainer.prototype.getY = function () {
    return Math.round(this.y * Utils.globalScale)
};
DisplayObjectContainer.prototype.getWidth = function () {
    return this.width * Math.abs(this.getAbsoluteScaleX()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getHeight = function () {
    return this.height * Math.abs(this.getAbsoluteScaleY()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getPosition = function () {
    return {x: this.x, y: this.y}
};
DisplayObjectContainer.prototype.setPosition = function (a, c) {
    if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setPosition(a.x, a.y);
    this.x = parseFloat(a);
    this.y = parseFloat(c)
};
DisplayObjectContainer.prototype.setPropScale = function (a) {
    this.scaleX = this.scaleY = 1 * a
};
DisplayObjectContainer.prototype.getAnchor = function () {
    return this.anchor
};
DisplayObjectContainer.prototype.setAnchor = function (a, c) {
    if ("undefined" == typeof c && "undefined" != typeof a.x && "undefined" != typeof a.y) return this.setAnchor(a.x, a.y);
    this.anchor.x = parseFloat(a);
    this.anchor.y = parseFloat(c)
};
DisplayObjectContainer.prototype.alignAnchor = function (a, c) {
    a = parseInt(a);
    isNaN(a) && (a = DisplayObjectContainer.ANCHOR_ALIGN_CENTER);
    0 > a && (a = DisplayObjectContainer.ANCHOR_ALIGN_LEFT);
    0 < a && (a = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT);
    c = parseInt(c);
    isNaN(c) && (c = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE);
    0 > c && (c = DisplayObjectContainer.ANCHOR_VALIGN_TOP);
    0 < c && (c = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM);
    this.anchor.x = this.width * a / 2;
    this.anchor.y = this.height * c / 2;
    return this.getAnchor()
};
DisplayObjectContainer.prototype.getAbsoluteAnchor = function () {
    return this.getPosition()
};
DisplayObjectContainer.prototype.getRelativeCenter = function () {
    var a = this.getAnchor(), c = this.getAbsoluteRotation(), a = {x: a.x, y: a.y};
    0 != c ? (a = new Vector(-a.x * this.getAbsoluteScaleX(), -a.y * this.getAbsoluteScaleY()), a.rotate(-c)) : (a.x = -(a.x * this.getAbsoluteScaleX()), a.y = -(a.y * this.getAbsoluteScaleY()));
    return a
};
DisplayObjectContainer.prototype.getAbsolutePosition = function () {
    var a = {x: this.x, y: this.y};
    if (this.parent) {
        var c = this.parent.getAbsolutePosition(), d = this.parent.getAbsoluteRotation();
        if (0 != d) {
            var e = new Vector(a.x * this.parent.getAbsoluteScaleX(), a.y * this.parent.getAbsoluteScaleY());
            e.rotate(-d);
            a.x = c.x + e.x;
            a.y = c.y + e.y
        } else a.x = c.x + a.x * this.parent.getAbsoluteScaleX(), a.y = c.y + a.y * this.parent.getAbsoluteScaleY()
    }
    return a
};
DisplayObjectContainer.prototype.getAbsoluteCenter = function () {
    var a = this.getAbsolutePosition(), c = this.getRelativeCenter();
    a.x += c.x;
    a.y += c.y;
    return a
};
DisplayObjectContainer.prototype.getCenter = function () {
    return this.getAbsoluteCenter()
};
DisplayObjectContainer.prototype.getHitAreaRectangle = function () {
    if (!this.hitArea) return this.getDrawRectangle();
    var a = this.getAbsoluteRotation(), c = this.getAbsoluteScaleX(), d = this.getAbsoluteScaleY(),
        e = this.getCenter(),
        f = new Rectangle(0, 0, this.hitArea.width * Math.abs(c), this.hitArea.height * Math.abs(d), a);
    0 != a ? (c = new Vector(this.hitArea.x * c, this.hitArea.y * d), c.rotate(-a), f.move(e.x + c.x, e.y + c.y)) : f.move(e.x + this.hitArea.x * c, e.y + this.hitArea.x * d);
    return f
};
DisplayObjectContainer.prototype.getDrawRectangle = function () {
    var a = this.getCenter(),
        c = new Rectangle(0, 0, this.width * Math.abs(this.getAbsoluteScaleX()), this.height * Math.abs(this.getAbsoluteScaleY()), this.getAbsoluteRotation());
    c.move(a.x, a.y);
    return c
};
DisplayObjectContainer.prototype.getAABBRectangle = function () {
    var a = this.getDrawRectangle(), c = a.AABB[1].x - a.AABB[0].x, d = a.AABB[1].y - a.AABB[0].y;
    return new Rectangle(a.AABB[0].x + c / 2, a.AABB[0].y + d / 2, c, d, 0)
};
DisplayObjectContainer.prototype.localToGlobal = function (a, c) {
    var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
    d.rotate(this.getAbsoluteRotation()).add(this.getAbsolutePosition());
    return d
};
DisplayObjectContainer.prototype.globalToLocal = function (a, c) {
    var d = "object" == typeof a && "undefined" != typeof a.x && "undefined" != typeof a.y ? new Vector(a.x + 0, a.y + 0) : new Vector(a, c);
    d.subtract(this.getAbsolutePosition()).rotate(this.getAbsoluteRotation());
    return d
};
DisplayObjectContainer.prototype.findMaxZIndex = function () {
    for (var a = -1, c = !1, d = 0; d < this.objects.length; d++) this.objects[d].zIndex > a && (a = this.objects[d].zIndex, c = d);
    return {index: c, zIndex: a}
};
DisplayObjectContainer.prototype.findMinZIndex = function () {
    for (var a = -1, c = !1, d = 0; d < this.objects.length; d++) 0 == d && (a = this.objects[d].zIndex, c = 0), this.objects[d].zIndex < a && (a = this.objects[d].zIndex, c = d);
    return {index: c, zIndex: a}
};
DisplayObjectContainer.prototype.addChild = function (a) {
    var c = this.findMaxZIndex(), d = a.zIndex;
    a.zIndex = !1 !== c.index ? c.zIndex + 1 : 0;
    this.objectsCounter++;
    a.uid = this.objectsCounter;
    a.parent = this;
    a.setStage(this.stage);
    this.objects.push(a);
    0 != d && this.setChildZIndex(a, ~~d);
    a.dispatchEvent("add", {target: a});
    return a
};
DisplayObjectContainer.prototype.setStage = function (a) {
    this.stage = a;
    for (var c = 0; c < this.objects.length; c++) this.objects[c].setStage(a)
};
DisplayObjectContainer.prototype.removeChild = function (a) {
    a && 0 <= this.objects.indexOf(a) && (a.clear(), a.removeAllEventListeners(), a.dispatchEvent("remove", {target: a}), a.parent = null, this.objects = Utils.removeFromArray(this.objects, a))
};
DisplayObjectContainer.prototype.setChildZIndex = function (a, c) {
    a.zIndex = c;
    this.objects = this.objects.sort(function (a, c) {
        return a.zIndex == c.zIndex ? a.uid > c.uid ? 1 : -1 : a.zIndex > c.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.getHitArea = function () {
    return this.hitArea ? this.hitArea : {x: 0, y: 0, width: this.width, height: this.height}
};
DisplayObjectContainer.prototype.hitTestPointObject = function (a, c, d, e, f) {
    var g, h, k, l, n, m, p;
    "boolean" == typeof a.pixelCheck && (e = a.pixelCheck);
    p = a.getHitArea();
    k = p.width * Math.abs(a.getAbsoluteScaleX());
    l = p.height * Math.abs(a.getAbsoluteScaleY());
    n = a.getAbsoluteCenter();
    g = n.x + p.x - k / 2;
    h = n.y + p.y - l / 2;
    n = c;
    m = d;
    a.ignoreViewport || (n += this.stage.viewport.x, m += this.stage.viewport.y);
    p = !1;
    0 == a.getAbsoluteRotation() ? g <= n && h <= m && g + k >= n && h + l >= m && (p = !0) : (g = a.getHitAreaRectangle(), g.hitTestPoint(new Vector(n, m)) && (p =
        !0));
    p && e && (this.stage.buffer.width = this.stage.canvas.width, this.stage.buffer.height = this.stage.canvas.height, this.stage.clearScreen(this.stage.buffer), a.render(this.stage.buffer, a.static, 0), c = this.stage.buffer.ctx.getImageData(Math.floor(c * Utils.globalScale), Math.floor(d * Utils.globalScale), 1, 1), 0 == c.data[3] && (p = !1));
    !p && f && a.dragged && (p = !0);
    return p
};
DisplayObjectContainer.prototype.getObjectsStackByCoord = function (a, c, d, e) {
    for (var f, g = [], h = this.objects.length - 1; 0 <= h; h--) this.objects[h].visible && (f = this.objects[h], f.objects && f.objects.length && (g = g.concat(f.getObjectsStackByCoord(a, c, d, e))), this.hitTestPointObject(f, a, c, d, e) && g.push(f));
    return g
};
DisplayObjectContainer.prototype.doDrag = function (a, c) {
    for (var d = 0; d < this.objects.length; d++) this.objects[d].doDrag(a, c);
    if (this.dragged) {
        var d = a, e = c;
        this.ignoreViewport || (d += this.stage.viewport.x, e += this.stage.viewport.y);
        this.x = d - this.dragX;
        this.y = e - this.dragY
    }
};
DisplayObjectContainer.prototype.checkMouseOut = function (a, c) {
    for (var d = this.objects.length - 1; 0 <= d; d--) if (!1 === this.objects[d].checkMouseOut(a, c)) return;
    if (this.mouseOn && 0 > a.indexOf(this)) return this.mouseOn = !1, d = this.stage.finalizeMouseCoords(this, c), this.dispatchEvent("mouseout", {
        target: this,
        x: d.x,
        y: d.y
    })
};
DisplayObjectContainer.prototype.getMaxZIndexInStack = function (a) {
    for (var c = -1, d = 0, e = 0; e < a.length; e++) a[e].zIndex > c && (c = a[e].zIndex, d = e);
    return d
};
DisplayObjectContainer.prototype.sortStack = function (a, c) {
    return a.sort(function (a, e) {
        a.zIndex == e.zIndex ? c ? a.uid < e.uid ? 1 : -1 : a.uid > e.uid ? 1 : -1 : c ? a.zIndex < e.zIndex ? 1 : -1 : a.zIndex > e.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.clear = function () {
    for (; this.objects.length;) this.removeChild(this.objects[0])
};
DisplayObjectContainer.prototype.getFillStyle = function (a) {
    var c = null;
    if (this.fillLinearGradient) {
        a = a.ctx.createLinearGradient(this.fillLinearGradient.x0 * Utils.globalScale, this.fillLinearGradient.y0 * Utils.globalScale, this.fillLinearGradient.x1 * Utils.globalScale, this.fillLinearGradient.y1 * Utils.globalScale);
        for (c = 0; c < this.fillLinearGradient.points.length; c++) a.addColorStop(this.fillLinearGradient.points[c].point, this.fillLinearGradient.points[c].color);
        c = a
    } else if (this.fillRadialGradient) {
        a = a.ctx.createRadialGradient(this.fillRadialGradient.x0 *
            Utils.globalScale, this.fillRadialGradient.y0 * Utils.globalScale, this.fillRadialGradient.r0 * Utils.globalScale, this.fillRadialGradient.x1 * Utils.globalScale, this.fillRadialGradient.y1 * Utils.globalScale, this.fillRadialGradient.r1 * Utils.globalScale);
        for (c = 0; c < this.fillRadialGradient.points.length; c++) a.addColorStop(this.fillRadialGradient.points[c].point, this.fillRadialGradient.points[c].color);
        c = a
    } else c = this.fillPattern ? a.ctx.createPattern(this.fillPattern.img, this.fillPattern.repeat) : this.fillColor;
    return c
};
DisplayObjectContainer.ANCHOR_ALIGN_LEFT = -1;
DisplayObjectContainer.ANCHOR_ALIGN_CENTER = 0;
DisplayObjectContainer.ANCHOR_ALIGN_RIGHT = 1;
DisplayObjectContainer.ANCHOR_VALIGN_TOP = -1;
DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE = 0;
DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM = 1;
var ANCHOR_ALIGN_LEFT = DisplayObjectContainer.ANCHOR_ALIGN_LEFT,
    ANCHOR_ALIGN_CENTER = DisplayObjectContainer.ANCHOR_ALIGN_CENTER,
    ANCHOR_ALIGN_RIGHT = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT,
    ANCHOR_VALIGN_TOP = DisplayObjectContainer.ANCHOR_VALIGN_TOP,
    ANCHOR_VALIGN_MIDDLE = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE,
    ANCHOR_VALIGN_BOTTOM = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;

function DisplayObject() {
    Utils.callSuperConstructor(DisplayObject, this);
    this.uid = 0;
    this.shadowColor = this.stage = null;
    this.zIndex = this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
    this.visible = !0;
    this.dragged = this.destroy = this.ignoreViewport = this.static = !1;
    this.dragY = this.dragX = 0;
    this.mouseOn = !1;
    this.allowDebugDrawing = !0;
    this.onbox2dsync = this.onremove = this.onadd = this.onrender = this.onenterframe = this.onprerender = this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onmouseout =
        this.onmouseover = this.pixelCheck = null
}

Utils.extend(DisplayObject, DisplayObjectContainer);
DisplayObject.prototype.setStatic = function (a, c) {
    a = Boolean(a);
    if (!c) for (var d = 0; d < this.objects.length; d++) this.objects[d].setStatic(a);
    return this.static != a ? (this.static = a, this.stage && this.stage.refreshBackground(), !0) : !1
};
DisplayObject.prototype.startDrag = function (a, c) {
    this.dragged = !0;
    this.dragX = a;
    this.dragY = c
};
DisplayObject.prototype.stopDrag = function () {
    this.dragged = !1;
    this.dragY = this.dragX = 0
};
DisplayObject.prototype.removeTweens = function () {
    this.stage && this.stage.clearObjectTweens(this)
};
DisplayObject.prototype.addTween = function (a, c, d, e, f, g) {
    if (this.stage) {
        var h = this[a];
        if (!isNaN(h)) return a = this.stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
    }
};
DisplayObject.prototype.moveTo = function (a, c, d, e, f, g) {
    d = ~~d;
    0 >= d ? this.setPosition(a, c) : ((a = this.addTween("x", a, d, e)) && a.play(), (c = this.addTween("y", c, d, e, f, g)) && c.play());
    return this
};
DisplayObject.prototype.moveBy = function (a, c, d, e, f, g) {
    return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
DisplayObject.prototype.fadeTo = function (a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.opacity = a : (a = this.addTween("opacity", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.fadeBy = function (a, c, d, e, f) {
    a = Math.max(0, Math.min(1, this.opacity + a));
    return this.fadeTo(a, c, d, e, f)
};
DisplayObject.prototype.rotateTo = function (a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.rotation = a : (a = this.addTween("rotation", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.rotateBy = function (a, c, d, e, f) {
    return this.rotateTo(this.rotation + a, c, d, e, f)
};
DisplayObject.prototype.skewXTo = function (a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.skewX = a : (a = this.addTween("skewX", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.skewXBy = function (a, c, d, e, f) {
    return this.skewXTo(this.skewX + a, c, d, e, f)
};
DisplayObject.prototype.skewYTo = function (a, c, d, e, f) {
    c = ~~c;
    0 >= c ? this.skewY = a : (a = this.addTween("skewY", a, c, d, e, f)) && a.play();
    return this
};
DisplayObject.prototype.skewYBy = function (a, c, d, e, f) {
    return this.skewYTo(this.skewY + a, c, d, e, f)
};
DisplayObject.prototype.scaleTo = function (a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.scaleX = this.scaleY = a; else {
        var g = this.addTween("scaleX", a, c, d, e, f);
        g && g.play();
        (a = this.addTween("scaleY", a, c, d, g ? null : e, g ? null : f)) && a.play()
    }
    return this
};
DisplayObject.prototype.setZIndex = function (a) {
    this.zIndex = ~~a;
    this.parent && this.parent.setChildZIndex(this, this.zIndex)
};
DisplayObject.prototype.hitTestPoint = function (a, c, d, e, f) {
    return this.stage ? this.stage.hitTestPointObject(this, a, c, d, e, f) : !1
};
DisplayObject.prototype.setRelativePosition = function (a, c, d, e) {
    switch (d) {
        case "right":
            a = this.stage.screenWidth - a;
            break;
        case "left":
            break;
        default:
            a = this.stage.screenWidth / 2 + a
    }
    switch (e) {
        case "bottom":
            c = this.stage.screenHeight - c;
            break;
        case "top":
            break;
        default:
            c = this.stage.screenHeight / 2 + c
    }
    this.setPosition(a, c)
};
DisplayObject.prototype.debugDraw = function () {
    if (this.visible && this.allowDebugDrawing) {
        var a = this.getAbsolutePosition(), c = this.getCenter(), d = this.getDrawRectangle(),
            e = this.getAABBRectangle();
        stage.drawCircle(a.x, a.y, 1, 1, "rgba(255,0,0,0.9)");
        stage.drawCircle(c.x, c.y, 1, 1, "rgba(0,255,0,0.9)");
        stage.drawLine(a.x, a.y, c.x, c.y, 1, "rgba(255,255,255,0.5)");
        stage.drawPolygon(d.vertices, .5, "rgba(255,0,255,0.5)", 1);
        stage.drawLine(e.vertices[0].x, e.vertices[0].y, e.vertices[2].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
        stage.drawLine(e.vertices[2].x, e.vertices[0].y, e.vertices[0].x, e.vertices[2].y, 1, "rgba(255,255,255,0.5)");
        stage.drawPolygon(e.vertices, .5, "rgba(255,255,255,0.5)")
    }
};
DisplayObject.prototype.fixChildrenParent = function (a) {
    for (a = 0; a < this.objects.length; a++) this.objects[a].parent = this, this.objects[a].fixChildrenParent()
};
DisplayObject.prototype.clone = function () {
    var a = Utils.clone(this);
    a.fixChildrenParent();
    return a
};

function Graphics() {
    Utils.callSuperConstructor(Graphics, this);
    this.y = this.x = 0;
    this.color = "#000";
    this.lineWidth = 1
}

Utils.extend(Graphics, DisplayObject);
Graphics.prototype.render = function (a, c, d) {
    !!this.static == !!c && this.dispatchEvent("render", {target: this, canvas: a, delta: d});
    Utils.callSuperMethod(Graphics, this, "render", a, c, d)
};
Graphics.prototype.prepareCanvas = function (a, c) {
    c.ctx.save();
    this.ignoreViewport || (a.x -= this.stage.viewport.x, a.y -= this.stage.viewport.y);
    a.x *= Utils.globalScale;
    a.y *= Utils.globalScale;
    c.ctx.translate(a.x, a.y);
    var d = this.getAbsoluteRotation();
    c.ctx.rotate(d);
    c.ctx.scale(this.getAbsoluteScaleX(), this.getAbsoluteScaleY());
    var e = this.getAbsoluteSkewX(), f = this.getAbsoluteSkewY();
    0 == e && 0 == f || c.ctx.transform(1, e, f, 1, 0, 0);
    this.shadowColor && (c.ctx.shadowColor = this.shadowColor, 0 != d ? (e = new Vector(this.shadowOffsetX *
        Utils.globalScale, this.shadowOffsetY * Utils.globalScale), e.rotate(-d), c.ctx.shadowOffsetX = e.x, c.ctx.shadowOffsetY = e.y) : (c.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, c.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), c.ctx.shadowBlur = this.shadowBlur * Utils.globalScale)
};
Graphics.prototype.preparePath = function (a) {
    a.ctx.beginPath();
    a.ctx.strokeStyle = 0 < this.lineWidth ? this.color : "transparent";
    a.ctx.lineWidth = this.lineWidth * Utils.globalScale;
    a.ctx.globalAlpha = this.getAbsoluteOpacity();
    a.ctx.fillStyle = this.getFillStyle(a)
};
Graphics.prototype.finalizeCanvas = function (a) {
    (this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) && a.ctx.fill();
    a.ctx.stroke()
};
Graphics.prototype.restoreCanvas = function (a) {
    a.ctx.restore()
};
Graphics.circle = function (a, c, d) {
    Utils.callSuperConstructor(Graphics.circle, this);
    this.x = a;
    this.y = c;
    this.radius = d;
    this.width = 2 * d;
    this.height = 2 * d
};
Utils.extend(Graphics.circle, Graphics);
Graphics.circle.prototype.render = function (a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, 0, 2 * Math.PI), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.circle, this, "render", a, c, d)
};
Graphics.line = function (a, c, d, e) {
    Utils.callSuperConstructor(Graphics.line, this);
    this.x1 = a;
    this.x2 = d;
    this.y1 = c;
    this.y2 = e
};
Utils.extend(Graphics.line, Graphics);
Graphics.line.prototype.render = function (a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.moveTo(this.x1 * Utils.globalScale, this.y1 * Utils.globalScale), a.ctx.lineTo(this.x2 * Utils.globalScale, this.y2 * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.line, this, "render", a, c, d)
};
Graphics.rectangle = function (a, c, d, e) {
    Utils.callSuperConstructor(Graphics.rectangle, this);
    this.x = a;
    this.y = c;
    this.width = d;
    this.height = e
};
Utils.extend(Graphics.rectangle, Graphics);
Graphics.rectangle.prototype.render = function (a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.rect(-this.width / 2 * Utils.globalScale, -this.height / 2 * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.rectangle, this, "render", a, c, d)
};
Graphics.arc = function (a, c, d, e, f, g) {
    Utils.callSuperConstructor(Graphics.arc, this);
    this.x = a;
    this.y = c;
    this.radius = d;
    this.startAngle = e;
    this.endAngle = f;
    this.antiClockWise = g;
    this.width = 2 * d;
    this.height = 2 * d
};
Utils.extend(Graphics.arc, Graphics);
Graphics.arc.prototype.render = function (a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.arc(0, 0, this.radius * Utils.globalScale, this.startAngle, this.endAngle, this.antiClockWise), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.arc, this, "render", a, c, d)
};
Graphics.polygon = function (a) {
    if (!a || 2 > a.length) throw Error("Invalid parameters");
    Utils.callSuperConstructor(Graphics.polygon, this);
    this.points = a;
    for (var c = Number.MAX_VALUE, d = Number.MAX_VALUE, e = Number.MIN_VALUE, f = Number.MIN_VALUE, g = 0; g < a.length; g++) a[g].x < c && (c = a[g].x), a[g].y < d && (d = a[g].y), a[g].x > e && (e = a[g].x), a[g].y > f && (f = a[g].y);
    this.width = e - c;
    this.height = f - d
};
Utils.extend(Graphics.polygon, Graphics);
Graphics.polygon.prototype.render = function (a, c, d) {
    if (!!this.static == !!c) {
        this.prepareCanvas(this.getAbsoluteCenter(), a);
        this.preparePath(a);
        a.ctx.moveTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        for (var e = 1; e < this.points.length; e++) a.ctx.lineTo(this.points[e].x * Utils.globalScale, this.points[e].y * Utils.globalScale);
        a.ctx.lineTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        this.finalizeCanvas(a);
        this.restoreCanvas(a)
    }
    Utils.callSuperMethod(Graphics.polygon,
        this, "render", a, c, d)
};
Graphics.text = function (a, c, d) {
    Utils.callSuperConstructor(Graphics.text, this);
    this.x = a;
    this.y = c;
    this.text = d;
    this.align = Graphics.text.ALIGN_LEFT;
    this.valign = Graphics.text.VALIGN_MIDDLE;
    this.style = "normal";
    this.size = 10;
    this.font = "sans-serif"
};
Utils.extend(Graphics.text, Graphics);
Graphics.text.ALIGN_LEFT = "left";
Graphics.text.ALIGN_CENTER = "center";
Graphics.text.ALIGN_RIGHT = "right";
Graphics.text.VALIGN_TOP = "top";
Graphics.text.VALIGN_MIDDLE = "middle";
Graphics.text.VALIGN_BOTTOM = "bottom";
Graphics.text.prototype.getRect = function (a) {
    return a.ctx.measureText(this.text)
};
Graphics.text.prototype.render = function (a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), a.ctx.font = this.style + " " + Math.floor(this.size * Utils.globalScale) + "px " + this.font, a.ctx.textAlign = this.align, a.ctx.textBaseline = this.valign, this.fillColor && a.ctx.fillText(this.text, 0, 0), a.ctx.strokeText(this.text, 0, 0), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.text, this, "render", a, c, d)
};
Graphics.free = function () {
    this.commands = [];
    Utils.callSuperConstructor(Graphics.free, this)
};
Utils.extend(Graphics.free, Graphics);
Graphics.free.prototype.clear = function () {
    this.commands = []
};
Graphics.free.prototype.beginPath = function () {
    this.commands.push({command: "beginPath"});
    return this
};
Graphics.free.prototype.stroke = function () {
    this.commands.push({command: "stroke"});
    return this
};
Graphics.free.prototype.setStrokeStyle = function (a) {
    this.commands.push({command: "setStrokeStyle", style: a});
    return this
};
Graphics.free.prototype.setFillStyle = function (a) {
    this.commands.push({command: "setFillStyle", style: a});
    return this
};
Graphics.free.prototype.fill = function () {
    this.commands.push({command: "fill"});
    return this
};
Graphics.free.prototype.moveTo = function (a, c) {
    this.commands.push({command: "moveTo", x: a, y: c});
    return this
};
Graphics.free.prototype.lineTo = function (a, c) {
    this.commands.push({command: "lineTo", x: a, y: c});
    return this
};
Graphics.free.prototype.arc = function (a, c, d, e, f, g) {
    this.commands.push({command: "arc", x: a, y: c, radius: d, startAngle: e, endAngle: f, antiClockWise: g});
    return this
};
Graphics.free.prototype.circle = function (a, c, d) {
    this.commands.push({command: "circle", x: a, y: c, radius: d});
    return this
};
Graphics.free.prototype.rect = function (a, c, d, e) {
    this.commands.push({command: "circle", x: a, y: c, width: d, height: e});
    return this
};
Graphics.free.prototype.polygon = function (a) {
    this.commands.push({command: "polygon", points: a});
    return this
};
Graphics.free.prototype.executeCommand = function (a, c) {
    switch (c.command) {
        case "beginPath":
            a.ctx.beginPath();
            break;
        case "stroke":
            a.ctx.stroke();
            break;
        case "fill":
            a.ctx.fill();
            break;
        case "setStrokeStyle":
            a.ctx.strokeStyle = 0 < this.lineWidth ? c.style : "transparent";
            break;
        case "setFillStyle":
            a.ctx.fillStyle = c.style;
            break;
        case "moveTo":
            a.ctx.moveTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
            break;
        case "lineTo":
            a.ctx.lineTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
            break;
        case "arc":
            a.ctx.arc(c.x * Utils.globalScale,
                c.y * Utils.globalScale, c.radius * Utils.globalScale, c.startAngle, c.endAngle, c.antiClockWise);
            break;
        case "circle":
            a.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, 0, 2 * Math.PI);
            break;
        case "rect":
            a.ctx.rect((c.x - c.width / 2) * Utils.globalScale, (c.y - c.height / 2) * Utils.globalScale, c.width * Utils.globalScale, (\u0441.height) * Utils.globalScale);
            break;
        case "polygon":
            a.ctx.moveTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale);
            for (var d = 1; d < c.points.length; d++) a.ctx.lineTo(c.points[d].x *
                Utils.globalScale, c.points[d].y * Utils.globalScale);
            a.ctx.lineTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale)
    }
};
Graphics.free.prototype.executeCommands = function (a) {
    for (var c = 0; c < this.commands.length; c++) this.executeCommand(a, this.commands[c])
};
Graphics.free.prototype.render = function (a, c, d) {
    !!this.static == !!c && (this.prepareCanvas(this.getAbsoluteCenter(), a), this.preparePath(a), this.executeCommands(a), this.finalizeCanvas(a), this.restoreCanvas(a));
    Utils.callSuperMethod(Graphics.free, this, "render", a, c, d)
};
var BitmapsCache = {
    bitmaps: {}, cache: function (a) {
        if (!(a && a instanceof Image)) return a;
        if (BitmapsCache.bitmaps[a.src]) return BitmapsCache.bitmaps[a.src];
        cns = document.createElement("canvas");
        cns.width = a.width;
        cns.height = a.height;
        ctx = cns.getContext("2d");
        ctx.drawImage(a, 0, 0, a.width, a.height, 0, 0, a.width, a.height);
        return BitmapsCache.bitmaps[a.src] = cns
    }
};

function Sprite(a, c, d, e, f) {
    Utils.callSuperConstructor(Sprite, this);
    this.width = c;
    this.height = d;
    this.offset = {left: 0, top: 0};
    this.animated = !0;
    this.animDirection = 1;
    this.currentFrame = 0;
    this.totalFrames = Math.max(1, ~~e);
    1 >= this.totalFrames && (this.animated = !1);
    this.currentLayer = 0;
    this.totalLayers = Math.max(1, ~~f);
    this.bitmap = a;
    this.mask = null;
    this.isMask = !1;
    this.maskParent = null;
    this.maskInvert = !1;
    this.animStep = 0;
    this.animDelay = 1;
    this.changeFrameDelay = Sprite.CHANGE_FRAME_DELAY;
    this.changeFrameTime = 0;
    this.onchangeframe =
        null;
    this.cacheBitmap = Sprite.CACHE_BITMAPS
}

Utils.extend(Sprite, DisplayObject);
Sprite.create = function (a, c) {
    if ("string" == typeof a) {
        c = c || window.library;
        if (!c) throw Error("Could not create sprite from asset '%s'. Library not found.", a);
        a = c.getAsset(a)
    }
    return new Sprite(a.bitmap, a.width || 1, a.height || 1, a.frames || 1, a.layers || 1)
};
Sprite.prototype.play = function () {
    this.animated = !0
};
Sprite.prototype.stop = function () {
    this.animated = !1
};
Sprite.prototype.gotoAndStop = function (a) {
    this.currentFrame = a;
    this.stop()
};
Sprite.prototype.gotoAndPlay = function (a) {
    this.currentFrame = a;
    this.play()
};
Sprite.prototype.nextFrame = function (a) {
    this.dispatchEvent("enterframe", {target: this, delta: a});
    var c = 1;
    if (Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) if (this.changeFrameTime += a, this.changeFrameTime >= this.changeFrameDelay * this.animDelay) c = Math.floor(this.changeFrameTime / (this.changeFrameDelay * this.animDelay)), this.changeFrameTime -= Math.abs(c) * this.changeFrameDelay * this.animDelay; else return; else this.animStep++;
    if (this.animStep >= this.animDelay || Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
        for (var d =
            0; d < c; d++) this.animated && (this.currentFrame += this.animDirection), 0 < this.animDirection && this.currentFrame >= this.totalFrames && (this.currentFrame = 0), 0 > this.animDirection && 0 > this.currentFrame && (this.currentFrame = this.totalFrames - 1), this.dispatchEvent("changeframe", {
            target: this,
            delta: a
        });
        this.animStep = 0
    }
};
Sprite.prototype.setMask = function (a) {
    this.mask = a;
    this.mask.isMask = !0;
    this.mask.stage = this.stage;
    this.mask.maskParent = this
};
Sprite.prototype.renderBack = function (a, c, d, e, f, g) {
    c && (a.ctx.fillStyle = c, a.ctx.strokeStyle = c, a.ctx.fillRect(d, e, f, g))
};
Sprite.prototype.renderBitmap = function (a, c, d, e, f) {
    var g = {x: 0, y: 0, width: e, height: f};
    if (this.bitmap) {
        var h = this.bitmap.width, k = this.bitmap.height,
            l = this.currentLayer * e + this.offset.left * Utils.globalScale,
            n = this.currentFrame * f + this.offset.top * Utils.globalScale;
        if (l < h && n < k) {
            var m = e, p = f;
            l + m > h && (m = h - l);
            n + p > k && (p = k - n);
            Sprite.FLOOR_VALUES_ON_RENDER && (l = ~~l, n = ~~n, m = ~~m, p = ~~p, c = ~~c, d = ~~d, e = ~~e, f = ~~f);
            0 < m && 0 < p && 0 < e && 0 < f && a.ctx.drawImage(this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, l, n, m, p, c, d,
                e, f);
            g.x = l;
            g.y = n;
            g.width = m;
            g.height = p
        }
    }
    return g
};
Sprite.prototype.render = function (a, c, d, e) {
    if (!this.isMask || e) {
        if (!!this.static == !!c) {
            d || (d = 0);
            this.nextFrame(d);
            if (!1 === this.dispatchEvent("prerender", {target: this, canvas: a, delta: d}) || !this.stage) return;
            var f = this.getAbsoluteCenter();
            if (e) {
                var f = {x: this.x - this.getAnchor().x, y: this.y - this.getAnchor().y},
                    g = this.parent ? this.parent : this.maskParent;
                g && (f.x += g.getAnchor().x + g.width / 2, f.y += g.getAnchor().y + g.height / 2)
            }
            e = this.width * Utils.globalScale;
            var h = this.height * Utils.globalScale, k = f.x * Utils.globalScale -
                e / 2, f = f.y * Utils.globalScale - h / 2, l = this.getAbsoluteRotation(),
                g = this.getAbsoluteScaleX(), n = this.getAbsoluteScaleY(), m = this.getAbsoluteSkewX(),
                p = this.getAbsoluteSkewY(), q = this.getFillStyle(a),
                r = Boolean(0 != l || 1 != g || 1 != n || this.shadowColor || q || 0 != m || 0 != p);
            this.ignoreViewport || (k -= this.stage.viewport.x * Utils.globalScale, f -= this.stage.viewport.y * Utils.globalScale);
            r && (a.ctx.save(), a.ctx.translate(k + e / 2, f + h / 2), a.ctx.rotate(l), a.ctx.scale(g, n), 0 == m && 0 == p || a.ctx.transform(1, m, p, 1, 0, 0), k = -(e / 2), f = -(h / 2), this.shadowColor &&
            (0 != l ? (g = new Vector(this.shadowOffsetX * Utils.globalScale, this.shadowOffsetY * Utils.globalScale), g.rotate(-l), a.ctx.shadowOffsetX = g.x, a.ctx.shadowOffsetY = g.y) : (a.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale, a.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale), a.ctx.shadowColor = this.shadowColor, a.ctx.shadowBlur = this.shadowBlur * Utils.globalScale));
            a.ctx.globalAlpha = this.getAbsoluteOpacity();
            this.ceilSizes && (e = Math.ceil(e), h = Math.ceil(h));
            this.mask ? (this.stage.buffer.ctx.save(), this.stage.buffer.ctx.clearRect(0,
                0, e, h), this.renderBack(this.stage.buffer, q, 0, 0, e, h), l = this.renderBitmap(this.stage.buffer, 0, 0, e, h), this.stage.buffer.ctx.globalCompositeOperation = this.maskInvert ? "destination-out" : "destination-in", this.mask.render ? this.mask.render(this.stage.buffer, c, d, !0) : this.stage.buffer.ctx.drawImage(this.mask, this.mask.x ? this.mask.x : 0, this.mask.y ? this.mask.y : 0), Sprite.FLOOR_VALUES_ON_RENDER ? a.ctx.drawImage(this.stage.buffer, 0, 0, l.width, l.height, ~~k, ~~f, ~~e, ~~h) : a.ctx.drawImage(this.stage.buffer, 0, 0, l.width, l.height,
                k, f, e, h), this.stage.buffer.ctx.restore()) : (this.renderBack(a, q, k, f, e, h), this.renderBitmap(a, k, f, e, h));
            r && a.ctx.restore();
            this.stage.allowDebugDrawing && this.allowDebugDrawing && (!this.stage.allowStaticDebugDrawing && this.static || this.debugDraw());
            this.dispatchEvent("render", {target: this, canvas: a, delta: d})
        }
        Utils.callSuperMethod(Sprite, this, "render", a, c, d)
    }
};
Sprite.CHANGE_FRAME_BY_FRAME = 0;
Sprite.CHANGE_FRAME_BY_TIME = 1;
Sprite.CHANGE_FRAME_DELAY = 1E3 / 24;
Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_FRAME;
Sprite.FLOOR_VALUES_ON_RENDER = !0;
Sprite.CACHE_BITMAPS = Utils.isIOS();

function StageTimer(a, c, d) {
    Utils.callSuperConstructor(StageTimer, this);
    this.repeat = d;
    this.timeout = this.initialTimeout = c;
    this.onend = a;
    this.ontick = null;
    this.newly = !0;
    this.paused = !1
}

Utils.extend(StageTimer, EventsProxy);
StageTimer.prototype.update = function (a) {
    if (!this.paused) {
        StageTimer.TIMEOUT_TYPE == StageTimer.TIMEOUT_BY_FRAME ? this.timeout-- : this.timeout -= a;
        if (0 >= this.timeout) if ("string" == typeof this.onend ? eval(this.onend) : this.dispatchEvent("end", {target: this}), this.repeat) this.timeout = this.initialTimeout; else return !0;
        this.dispatchEvent("tick", {target: this, delta: a});
        return !1
    }
};
StageTimer.prototype.resume = function () {
    this.paused = !1
};
StageTimer.prototype.pause = function () {
    this.paused = !0
};
StageTimer.TIMEOUT_BY_FRAME = 0;
StageTimer.TIMEOUT_BY_TIME = 1;
StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_FRAME;

function Stage(a, c, d) {
    Utils.callSuperConstructor(Stage, this);
    this.canvas = null;
    a && (this.canvas = document.getElementById(a), this.canvas.ctx = this.canvas.getContext("2d"));
    this.backgroundCanvas = null;
    this.needToRebuildBack = !1;
    this.screenWidth = c;
    this.screenHeight = d;
    this.viewport = {x: 0, y: 0};
    this.buffer = null;
    try {
        this.buffer = document.createElement("canvas"), this.buffer.width = c * Utils.globalScale, this.buffer.height = d * Utils.globalScale, this.buffer.ctx = this.buffer.getContext("2d")
    } catch (e) {
        this.buffer = this.canvas
    }
    this.delay =
        40;
    this.started = !1;
    this.lastFPS = this.fps = 0;
    this.ceilSizes = this.pixelMouseMoveEvent = this.pixelMouseDownEvent = this.pixelMouseUpEvent = this.pixelClickEvent = this.showFPS = !1;
    this.tmFPS = this.tmMain = null;
    this.allowStaticDebugDrawing = this.allowDebugDrawing = this.clearLock = !1;
    this.drawBackAlways = Utils.mobileCheckBrokenAndroid();
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.lastTick = 0;
    this.onmousemove = this.oncontextmenu = this.onclick = this.onmouseup = this.onmousedown = this.onposttick = this.prerender =
        this.onpretick = this.inputController = null;
    this.canvas && this.addInputListeners(this.canvas);
    this.tick = Utils.proxy(this.tick, this);
    this.clearFPS = Utils.proxy(this.clearFPS, this);
    this.stage = this;
    this.drawScene = this.render
}

Utils.extend(Stage, DisplayObjectContainer);
Stage.prototype.refreshBackground = function () {
    this.needToRebuildBack = !0
};
Stage.prototype.setBackgroundCanvas = function (a) {
    a && (this.backgroundCanvas = document.getElementById(a), this.backgroundCanvas.ctx = this.backgroundCanvas.getContext("2d"))
};
Stage.prototype.destroy = function () {
    clearTimeout(this.tmMain);
    clearTimeout(this.tmFPS);
    this.stop();
    this.clear();
    this.clearScreen(this.canvas);
    this.backgroundCanvas && this.clearScreen(this.backgroundCanvas);
    this.removeInputListeners(this.stage)
};
Stage.prototype.clearScreen = function (a) {
    this.clearLock || a.ctx.clearRect(0, 0, Math.floor(a.width), Math.floor(a.height))
};
Stage.prototype.addChild = function (a) {
    a.stage = this;
    return Utils.callSuperMethod(Stage, this, "addChild", a)
};
Stage.prototype.setZIndex = function (a, c) {
    this.setChildZIndex(a, c)
};
Stage.prototype.removeChild = function (a) {
    a && 0 <= this.objects.indexOf(a) && (this.clearObjectTweens(a), a.stage = null, Utils.callSuperMethod(Stage, this, "removeChild", a))
};
Stage.prototype.finalizeMouseCoords = function (a, c) {
    if (!a) return c;
    var d = this.prepareMouseCoord(c.x), e = this.prepareMouseCoord(c.y);
    a.ignoreViewport || (d += this.viewport.x, e += this.viewport.y);
    d -= a.x;
    e -= a.y;
    return {x: d, y: e}
};
Stage.prototype.prepareMouseCoord = function (a) {
    return a / Utils.globalScale / Utils.globalPixelScale
};
Stage.prototype.processMouseEvent = function (a, c, d) {
    a = Utils.getMouseCoord(a, this.inputController);
    d = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), d, !1);
    for (var e, f = 0; f < d.length; f++) if (e = this.finalizeMouseCoords(d[f], a), e = d[f].dispatchEvent(c, {
            target: d[f],
            x: e.x,
            y: e.y
        }), !1 === e) return;
    this.dispatchEvent(c, {
        target: this,
        x: Math.floor(this.prepareMouseCoord(a.x)),
        y: Math.floor(this.prepareMouseCoord(a.y))
    })
};
Stage.prototype.checkClick = function (a) {
    this.processMouseEvent(a, "click", this.pixelClickEvent)
};
Stage.prototype.checkContextMenu = function (a) {
    this.processMouseEvent(a, "contextmenu", this.pixelClickEvent)
};
Stage.prototype.checkMouseMove = function (a) {
    a = Utils.getMouseCoord(a, this.inputController);
    this.doDrag(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y));
    var c = this.getObjectsStackByCoord(this.prepareMouseCoord(a.x), this.prepareMouseCoord(a.y), this.pixelMouseMoveEvent),
        d, e, f, g = [];
    if (0 < c.length) {
        for (d = 0; d < c.length && (g.push(c[d]), f = this.finalizeMouseCoords(c[d], a), c[d].mouseOn || (e = c[d].dispatchEvent("mouseover", {
            target: c[d],
            x: f.x,
            y: f.y
        })), c[d].mouseOn = !0, !1 !== e); d++) ;
        e = !0;
        for (d = 0; d < c.length && (f =
            this.finalizeMouseCoords(c[d], a), e = c[d].dispatchEvent("mousemove", {
            target: c[d],
            x: f.x,
            y: f.y
        }), !1 !== e); d++) ;
        !1 !== e && this.dispatchEvent("mousemove", {
            target: this,
            x: Math.floor(this.prepareMouseCoord(a.x)),
            y: Math.floor(this.prepareMouseCoord(a.y))
        })
    }
    this.checkMouseOut(g, a)
};
Stage.prototype.checkMouseDown = function (a) {
    this.processMouseEvent(a, "mousedown", this.pixelMouseDownEvent)
};
Stage.prototype.checkMouseUp = function (a) {
    this.processMouseEvent(a, "mouseup", this.pixelMouseUpEvent)
};
Stage.prototype.clear = function () {
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.objectsCounter = 0;
    Utils.callSuperMethod(Stage, this, "clear")
};
Stage.prototype.hitTest = function (a, c) {
    if (0 == a.getAbsoluteRotation() && 0 == c.getAbsoluteRotation()) {
        var d = a.getX() - a.getWidth() / 2, e = a.getY() - a.getHeight() / 2, f = c.getX() - c.getWidth() / 2,
            g = c.getY() - c.getHeight() / 2, h = Math.max(e, g), k = Math.max(d, f),
            d = Math.min(d + a.getWidth(), f + c.getWidth()), e = Math.min(e + a.getHeight(), g + c.getHeight()) - h;
        return 0 < d - k && 0 < e ? !0 : !1
    }
    k = a.getDrawRectangle();
    e = c.getDrawRectangle();
    return k.hitTestRectangle(e)
};
Stage.prototype.getCenter = function () {
    return {x: this.screenWidth / 2, y: this.screenHeight / 2}
};
Stage.prototype.drawRectangle = function (a, c, d, e, f, g, h, k) {
    var l = this.canvas;
    l.ctx.globalAlpha = "undefined" != typeof h ? h : 1;
    l.ctx.fillStyle = f;
    l.ctx.strokeStyle = f;
    k || (a -= this.viewport.x, c -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    e *= Utils.globalScale;
    g ? l.ctx.fillRect(a - d / 2, c - e / 2, d, e) : l.ctx.strokeRect(a - d / 2, c - e / 2, d, e)
};
Stage.prototype.drawCircle = function (a, c, d, e, f, g, h) {
    this.drawArc(a, c, d, 0, 2 * Math.PI, !1, e, f, g, h)
};
Stage.prototype.drawArc = function (a, c, d, e, f, g, h, k, l, n) {
    var m = this.canvas, p = m.ctx.lineWidth;
    "undefined" == typeof k && (k = "#000");
    m.ctx.strokeStyle = k;
    "undefined" == typeof h && (h = 1);
    m.ctx.lineWidth = h * Utils.globalScale;
    "undefined" == typeof l && (l = 1);
    m.ctx.globalAlpha = l;
    n || (a -= this.viewport.x, c -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    m.ctx.beginPath();
    m.ctx.arc(a, c, d, e, f, g);
    m.ctx.stroke();
    m.ctx.lineWidth = p
};
Stage.prototype.drawPolygon = function (a, c, d, e, f) {
    if ("object" == typeof a && a instanceof Array && !(2 > a.length)) {
        for (var g = 0; g < a.length - 1; g++) this.drawLine(a[g].x, a[g].y, a[g + 1].x, a[g + 1].y, c, d, e, f);
        this.drawLine(a[g].x, a[g].y, a[0].x, a[0].y, c, d, e, f)
    }
};
Stage.prototype.drawLine = function (a, c, d, e, f, g, h, k) {
    var l = this.canvas, n = l.ctx.lineWidth;
    l.ctx.strokeStyle = g ? g : "#000";
    l.ctx.lineWidth = f ? f * Utils.globalScale : 1 * Utils.globalScale;
    l.ctx.globalAlpha = h ? h : 1;
    k || (a -= this.viewport.x, c -= this.viewport.y, d -= this.viewport.x, e -= this.viewport.y);
    a *= Utils.globalScale;
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    e *= Utils.globalScale;
    l.ctx.beginPath();
    l.ctx.moveTo(a, c);
    l.ctx.lineTo(d, e);
    l.ctx.stroke();
    l.ctx.lineWidth = n
};
Stage.prototype.start = function () {
    this.started || (this.started = !0, this.clearFPS(), this.tick())
};
Stage.prototype.forceRender = function () {
    this.started && this.tick()
};
Stage.prototype.stop = function () {
    this.started = !1
};
Stage.prototype.clearFPS = function () {
    this.lastFPS = this.fps;
    this.fps = 0;
    this.started && (this.tmFPS = setTimeout(this.clearFPS, 1E3))
};
Stage.prototype.setTextStyle = function (a, c, d, e, f, g) {
    g = g ? g : this.canvas;
    g.ctx.fillStyle = e;
    g.ctx.strokeStyle = f;
    e = "";
    d && (e += d + " ");
    c && (e += Math.floor(c * Utils.globalScale) + "px ");
    a && (e += a);
    g.ctx.font = e
};
Stage.prototype.drawText = function (a, c, d, e, f, g, h) {
    h = h ? h : this.canvas;
    h.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
    f || (c -= this.viewport.x, d -= this.viewport.y);
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    g && (c -= this.getTextWidth(a) / 2);
    h.ctx.fillText(a, c, d)
};
Stage.prototype.strokeText = function (a, c, d, e, f, g, h) {
    h = h ? h : this.canvas;
    h.ctx.globalAlpha = "undefined" == typeof e ? 1 : e;
    f || (c -= this.viewport.x, d -= this.viewport.y);
    c *= Utils.globalScale;
    d *= Utils.globalScale;
    g && (c -= this.getTextWidth(a) / 2);
    h.ctx.strokeText(a, c, d)
};
Stage.prototype.getTextWidth = function (a, c) {
    return (c ? c : this.canvas).ctx.measureText(a).width
};
Stage.prototype.render = function (a, c, d, e) {
    a && (e || (e = 0), a && !a.ctx && (a.ctx = a.getContext("2d")), d || ((d = this.getFillStyle(a)) ? (a.ctx.fillStyle = d, a.ctx.fillRect(0, 0, a.width, a.height)) : this.clearLock || this.clearScreen(a)), Utils.callSuperMethod(Stage, this, "render", a, c, e))
};
Stage.prototype.createTween = function (a, c, d, e, f, g) {
    a = new Tween(a, c, d, e, f, g);
    this.tweens.push(a);
    return a
};
Stage.prototype.removeTween = function (a) {
    var c = null;
    if (isNaN(a)) for (var d = 0; d < this.tweens.length; d++) {
        if (this.tweens[d] === a) {
            c = d;
            break
        }
    } else c = a;
    isNaN(c) || (this.tweens[c] && this.tweens[c].pause(), this.tweens.splice(c, 1));
    return c
};
Stage.prototype.clearObjectTweens = function (a) {
    for (var c = 0; c < this.tweens.length; c++) this.tweens[c].obj === a && (this.tweens[c].destroy = !0)
};
Stage.prototype.updateTweens = function (a) {
    for (var c, d = 0; d < this.tweens.length; d++) c = this.tweens[d], c.destroy && (d = this.removeTween(d), d--);
    for (d = 0; d < this.tweens.length; d++) c = this.tweens[d], !c.newly && c.tick(a) && (c.destroy = !0), c.newly = !1
};
Stage.prototype.setTimeout = function (a, c) {
    var d = new StageTimer(a, c);
    this.timers.push(d);
    return d
};
Stage.prototype.clearTimeout = function (a) {
    a && (a.destroy = !0)
};
Stage.prototype.setInterval = function (a, c) {
    var d = new StageTimer(a, c, !0);
    this.timers.push(d);
    return d
};
Stage.prototype.clearInterval = function (a) {
    this.clearTimeout(a)
};
Stage.prototype.removeTimer = function (a) {
    this.timers = Utils.removeFromArray(this.timers, a)
};
Stage.prototype.updateTimers = function (a) {
    for (var c, d = 0; d < this.timers.length; d++) c = this.timers[d], c.destroy && (this.removeTimer(c), d--);
    for (d = 0; d < this.timers.length; d++) c = this.timers[d], !c.newly && c.update(a) && (c.destroy = !0), c.newly = !1
};
Stage.prototype.tick = function () {
    clearTimeout(this.tmMain);
    var a;
    if (Utils.isWindowHidden) this.lastTick = 0, a = this.delay; else {
        a = (new Date).getTime();
        var c = Math.min(Stage.MIN_DELTA, a - this.lastTick);
        this.lastTick = a;
        this.dispatchEvent("pretick", {target: this, delta: c});
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTweens(c);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTimers(c);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.dispatchEvent("prerender", {target: this, delta: c});
        var d = !1;
        this.drawBackAlways ?
            (this.render(this.canvas, !0, !1, c), d = !0) : this.needToRebuildBack && (this.needToRebuildBack = !1, this.backgroundCanvas && this.render(this.backgroundCanvas, !0));
        this.render(this.canvas, !1, d, c);
        this.showFPS && (this.setTextStyle("sans-serif", 10, "bold", "#fff", "#000"), this.drawText("FPS: " + this.lastFPS, 2, 10, 1, !0));
        this.dispatchEvent("posttick", {target: this, delta: c});
        a = (new Date).getTime() - a;
        a = this.delay - a;
        1 > a && (a = 1);
        this.fps++
    }
    this.started ? this.tmMain = setTimeout(this.tick, a) : this.lastTick = 0
};
Stage.prototype.box2dSync = function (a) {
    for (b = a.m_bodyList; b; b = b.m_next) b.sprite && (b.sprite.rotation = b.GetRotation(), a = b.GetPosition(), b.sprite.x = a.x, b.sprite.y = a.y, b.sprite.dispatchEvent("box2dsync", {target: b.sprite}))
};
Stage.prototype.processTouchEvent = function (a, c) {
    for (var d = 0; d < a.length; d++) this[c]({clientX: a[d].clientX, clientY: a[d].clientY})
};
Stage.prototype.prepareEventTouches = function (a, c) {
    a[c] || (a[c] = [{clientX: a.clientX, clientY: a.clientY}]);
    return a[c]
};
Stage.prototype.addInputListeners = function (a) {
    this.inputController = a;
    Utils.touchScreen ? (a["on" + Utils.getTouchStartEvent()] = Utils.proxy(function (a) {
        this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkMouseDown");
        this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkClick");
        a.preventDefault()
    }, this), a["on" + Utils.getTouchMoveEvent()] = Utils.proxy(function (a) {
        this.processTouchEvent(this.prepareEventTouches(a, "touches"), "checkMouseMove");
        a.preventDefault()
    }, this), a["on" + Utils.getTouchEndEvent()] =
        Utils.proxy(function (a) {
            this.processTouchEvent(this.prepareEventTouches(a, "changedTouches"), "checkMouseUp");
            a.preventDefault()
        }, this)) : (a.onclick = Utils.proxy(function (a) {
        this.checkClick(a)
    }, this), a.onmousemove = Utils.proxy(function (a) {
        this.checkMouseMove(a)
    }, this), a.onmousedown = Utils.proxy(function (a) {
        0 == a.button && this.checkMouseDown(a)
    }, this), a.onmouseup = Utils.proxy(function (a) {
        0 == a.button && this.checkMouseUp(a)
    }, this), a.oncontextmenu = Utils.proxy(function (a) {
        this.checkContextMenu(a)
    }, this))
};
Stage.prototype.removeInputListeners = function (a) {
    a.ontouchstart = null;
    a.ontouchmove = null;
    a.ontouchend = null;
    a.onmspointerdown = null;
    a.onmspointermove = null;
    a.onmspointerup = null;
    a.onclick = null;
    a.onmousemove = null;
    a.onmousedown = null;
    a.onmouseup = null;
    a.oncontextmenu = null
};
Stage.MIN_DELTA = 500;
var TTLoader = {
    endCallback: null,
    loadedData: null,
    landscapeMode: !1,
    skipPlayButton: !1,
    create: function (a, c, d, e) {
        TTLoader.endCallback = a;
        TTLoader.landscapeMode = c;
        TTLoader.skipPlayButton = d;
        document.getElementById("progress_container").style.background = "#fff";
        document.getElementById("progress_container").style.zIndex = "1000";
        a = document.getElementById("progress");
        a.setAttribute("valign", "top");
        a.style.verticalAlign = "top";
        a.style.background = "#fff";
        c = document.createElement("div");
        d = document.createElement("a");
        d.setAttribute("id", "tt_load_logo_c");
        var f = window.ExternalAPI ? ExternalAPI.exec("getPreloaderURL") : "http://www.gotvg.com/", g = "_blank";
        if (e || !f) f = "javascript:void(0)", g = "";
        d.setAttribute("href", f);
        d.setAttribute("target", g);
        e = new Image;
        e.setAttribute("id", "tt_load_logo");
        e.setAttribute("border", "");
        e.src = TTLoader.logoSrc;
        e.style.cursor = "pointer";
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        c = document.createElement("div");
        c.setAttribute("id", "tt_load_progress_cont");
        c.setAttribute("align", "left");
        c.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
        e = document.createElement("div");
        e.setAttribute("id", "tt_load_progress");
        e.setAttribute("style", "width: 0px; background: #e44d26;");
        e.innerHTML = "&nbsp;";
        c.appendChild(e);
        a.appendChild(c);
        c = document.createElement("div");
        c.setAttribute("id", "tt_load_play");
        e = new Image;
        e.setAttribute("id", "tt_load_button");
        e.src = TTLoader.buttonDisabledSrc;
        e.style.visibility = TTLoader.skipPlayButton ? "hidden" : "visible";
        c.appendChild(e);
        a.appendChild(c);
        Utils.addEventListener("fitlayout", TTLoader.setSizes);
        TTLoader.setSizes()
    },
    setSizes: function () {
        var a = Utils.getWindowRect();
        document.getElementById("progress_container").style.width = a.width + "px";
        document.getElementById("progress_container").style.height = a.height + "px";
        a = Utils.globalScale * Utils.globalPixelScale;
        TTLoader.landscapeMode || (document.getElementById("progress").style.paddingTop = Math.floor(80 * a) + "px");
        document.getElementById("tt_load_progress_cont").style.width = Math.floor(200 * a) + "px";
        document.getElementById("tt_load_progress").style.height =
            Math.floor(12 * a) + "px";
        document.getElementById("tt_load_progress").style.width = a * TTLoader.progressVal * 2 + "px";
        document.getElementById("tt_load_logo").style.marginTop = Math.floor(80 * a) + "px";
        document.getElementById("tt_load_logo").setAttribute("width", Math.floor(300 * a) + "px");
        document.getElementById("tt_load_logo").setAttribute("height", Math.floor(65 * a) + "px");
        document.getElementById("tt_load_button").setAttribute("width", Math.floor(65 * a) + "px");
        document.getElementById("tt_load_button").setAttribute("height",
            Math.floor(29 * a) + "px");
        document.getElementById("tt_load_button").style.marginTop = Math.floor(30 * a) + "px"
    },
    progressVal: 0,
    showLoadProgress: function (a) {
        0 > a && (a = 0);
        100 < a && (a = 100);
        TTLoader.progressVal = a;
        TTLoader.setSizes()
    },
    loadComplete: function (a) {
        TTLoader.showLoadProgress(100);
        TTLoader.loadedData = a;
        a = document.getElementById("tt_load_button");
        Utils.touchScreen ? a.addEventListener(Utils.isWindowsPhone() ? "MSPointerDown" : "touchstart", TTLoader.close, !1) : a.onclick = TTLoader.close;
        a.style.cursor = "pointer";
        a.src =
            TTLoader.buttonSrc;
        a = document.getElementById("tt_load_progress");
        a.style.background = "transparent";
        a = document.getElementById("tt_load_progress_cont");
        a.style.border = "2px solid transparent";
        a.style.background = "transparent";
        document.getElementById("tt_load_button").style.display = "block";
        TTLoader.skipPlayButton && TTLoader.close()
    },
    close: function (a) {
        clearTimeout(TTLoader.animateTimeout);
        TTLoader.endCallback(TTLoader.loadedData)
    },
    logoSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAB90RVh0U29mdHdhcmUAT1BUUGlYIGlNYWdlU3R1ZGlvIDMuMLF8+2MAAAAXSURBVHicY/z//z8DMYCJKFWjCqmmEADVEgMRlHtqhAAAAABJRU5ErkJggg==",
    buttonDisabledSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRGOTNDRkRBRDlFQjExRTNCODI2OTVDQ0I1QjQ3QTUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRGOTNDRkRCRDlFQjExRTNCODI2OTVDQ0I1QjQ3QTUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEY5M0NGRDhEOUVCMTFFM0I4MjY5NUNDQjVCNDdBNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEY5M0NGRDlEOUVCMTFFM0I4MjY5NUNDQjVCNDdBNTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",
    buttonSrc: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0MkY2NjRBRDlFQjExRTNBNzU1REY3NjZERUJEODBBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0MkY2NjRCRDlFQjExRTNBNzU1REY3NjZERUJEODBBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDQyRjY2NDhEOUVCMTFFM0E3NTVERjc2NkRFQkQ4MEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyRjY2NDlEOUVCMTFFM0E3NTVERjc2NkRFQkQ4MEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"
};

function SimpleText(a, c, d, e) {
    this.font = a;
    this.y = this.x = 0;
    this.width = c;
    this.height = d;
    this.align = SimpleText.ALIGN_LEFT;
    this.charSpacing = this.rotation = 0;
    this.opacity = this.scale = 1;
    this.static = !1;
    this.charMap = "0123456789".split("");
    this.charWidth = [];
    this.sprites = [];
    this.text = "";
    this.parent = this.stage = window.stage;
    this.ALIGN_LEFT = SimpleText.ALIGN_LEFT;
    this.ALIGN_RIGHT = SimpleText.ALIGN_RIGHT;
    this.ALIGN_CENTER = SimpleText.ALIGN_CENTER;
    this.ignoreViewport = e
}

SimpleText.prototype.manageSprites = function (a) {
    var c, d = a.length, e = this.sprites.length;
    if (e < d) for (a = 0; a < d - e; a++) c = new window[SimpleText.spriteClass](this.font, this.width, this.height, this.charMap.length), this.sprites.push(c), this.parent.addChild(c);
    if (e > d) {
        for (a = 0; a < e - d; a++) this.parent.removeChild(this.sprites[a]);
        this.sprites.splice(0, e - d)
    }
};
SimpleText.prototype.getCharIx = function (a) {
    for (var c = 0; c < this.charMap.length; c++) if (this.charMap[c] == a) return c;
    return -1
};
SimpleText.prototype.getCharWidth = function (a) {
    a = this.getCharIx(a);
    return 0 <= a ? this.charWidth[a] ? this.charWidth[a] : this.width : this.width
};
SimpleText.prototype.getWidth = function () {
    for (var a = 0, c = 0; c < this.text.length; c++) a += this.getCharWidth(this.text.substr(c, 1)) + this.charSpacing;
    return a
};
SimpleText.prototype.write = function (a) {
    var c, d, e, f;
    this.text = a += "";
    this.manageSprites(a);
    c = this.x;
    this.align == SimpleText.ALIGN_CENTER && (c = this.x - this.getWidth() / 2 * this.scale + this.getCharWidth(this.text.substr(0, 1)) / 2 * this.scale);
    this.align == SimpleText.ALIGN_RIGHT && (c = this.x - this.getWidth() * this.scale);
    e = new Vector(c - this.x, 0);
    e.rotate(-this.rotation);
    c = e.x + this.x;
    d = e.y + this.y;
    e = new Vector(0, 0);
    for (var g = 0; g < a.length; g++) if (this.sprites[g].visible = !0, f = this.charMap.indexOf(a.substr(g, 1)), 0 > f) this.sprites[g].visible =
        !1; else {
        var h = this.getCharWidth(this.text.substr(g, 1));
        this.sprites[g].scaleX = this.sprites[g].scaleY = this.scale;
        this.sprites[g].gotoAndStop(f);
        f = e.clone();
        f.x *= this.scale;
        f.rotate(-this.rotation);
        this.sprites[g].x = f.x + ("," == this.text.substr(g, 1) ? c - h / 2 : c);
        this.sprites[g].y = f.y + d;
        this.sprites[g].rotation = this.rotation;
        this.sprites[g].static = this.static;
        this.sprites[g].opacity = this.opacity;
        this.sprites[g].ignoreViewport = this.ignoreViewport;
        this.sprites[g].gx = this.sprites[g].x;
        this.sprites[g].gy = this.sprites[g].y;
        this.sprites[g].gscaleX = this.sprites[g].scaleX;
        this.sprites[g].gscaleY = this.sprites[g].scaleY;
        this.sprites[g].grotation = this.sprites[g].rotation;
        this.sprites[g].gopacity = this.sprites[g].opacity;
        e.x += h + this.charSpacing
    }
};
SimpleText.prototype.refresh = function () {
    this.write(this.text)
};
SimpleText.prototype.addToGroup = function (a) {
    for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x / 2, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.putToGroup = function (a) {
    for (var c = 0; c < this.sprites.length; c++) this.sprites[c].gx = this.sprites[c].x, this.sprites[c].gy = this.sprites[c].y, a.addChild(this.sprites[c], !1)
};
SimpleText.prototype.refreshOnTween = function (a) {
    a.target.obj.refresh()
};
SimpleText.prototype.setPosition = function (a, c) {
    this.x = a;
    this.y = c;
    this.refresh()
};
SimpleText.prototype.removeTweens = function () {
    this.stage && this.stage.clearObjectTweens(this)
};
SimpleText.prototype.addTween = function (a, c, d, e, f, g) {
    if (this.stage) {
        var h = this[a];
        if (!isNaN(h)) return a = this.stage.createTween(this, a, h, c, d, e), a.onchange = g, a.onfinish = f, a
    }
};
SimpleText.prototype.moveTo = function (a, c, d, e, f, g) {
    d = ~~d;
    if (0 >= d) this.setPosition(a, c); else {
        if (a = this.addTween("x", a, d, e, f, g)) a.play(), a.addEventListener("change", this.refreshOnTween);
        (c = this.addTween("y", c, d, e, a ? null : f, a ? null : g)) && c.play();
        c && !a && c.addEventListener("change", this.refreshOnTween)
    }
    return this
};
SimpleText.prototype.moveBy = function (a, c, d, e, f, g) {
    return this.moveTo(this.x + a, this.y + c, d, e, f, g)
};
SimpleText.prototype.fadeTo = function (a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.opacity = a; else if (a = this.addTween("opacity", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.prototype.fadeBy = function (a, c, d, e, f) {
    a = Math.max(0, Math.min(1, this.opacity + a));
    return this.fadeTo(a, c, d, e, f)
};
SimpleText.prototype.rotateTo = function (a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.rotation = a; else if (a = this.addTween("rotation", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.prototype.rotateBy = function (a, c, d, e, f) {
    return this.rotateTo(this.rotation + a, c, d, e, f)
};
SimpleText.prototype.scaleTo = function (a, c, d, e, f) {
    c = ~~c;
    if (0 >= c) this.scale = a; else if (a = this.addTween("scale", a, c, d, e, f)) a.play(), a.addEventListener("change", this.refreshOnTween);
    return this
};
SimpleText.spriteClass = "Sprite";
SimpleText.ALIGN_LEFT = 0;
SimpleText.ALIGN_RIGHT = 1;
SimpleText.ALIGN_CENTER = 2;

function AudioPlayer() {
    this.disabled = !1;
    this.basePath = "";
    this.mp3Support = !0;
    this.delayPlay = !1;
    this.audioWrapper = null;
    this.busy = this.locked = !1;
    this.startPlayTime = 0;
    this.onend = null;
    this.controlPlay = Utils.proxy(this.controlPlay, this)
}

AudioPlayer.prototype.createNewAudio = function () {
    if (AudioMixer.isWebAudioSupport()) {
        var a = AudioMixer.waContext.createBufferSource();
        a.connect(AudioMixer.waContext.destination);
        return a
    }
    return document.createElement("audio")
};
AudioPlayer.prototype.init = function (a) {
    this.basePath = a ? a : "";
    this.delayPlay = "ontouchstart" in window;
    this.audioWrapper = this.createNewAudio();
    a = document.createElement("audio");
    a.canPlayType ? this.mp3Support = "" != a.canPlayType("audio/mpeg") : this.disabled = !0;
    return !this.disabled
};
AudioPlayer.prototype.play = function (a, c) {
    if (this.disabled) return !1;
    var d = this.basePath + "/" + a + (this.mp3Support ? ".mp3" : ".ogg");
    this.stop();
    this.audioWrapper = this.createNewAudio();
    this.audioWrapper.doLoop = c ? !0 : !1;
    this.audioWrapper.fileName = a;
    if (AudioMixer.isWebAudioSupport()) {
        var e = this;
        this.loadSound(d, function (a) {
            e.audioWrapper.buffer = a;
            e.audioWrapper.noteOn ? e.audioWrapper.noteOn(0) : e.audioWrapper.start(0);
            e.startPlayTime = (new Date).getTime();
            e.audioWrapper.loop = c;
            "undefined" != typeof e.audioWrapper.playbackState ?
                e.waCheckInterval = setInterval(function () {
                    e.audioWrapper ? e.audioWrapper.playbackState == e.audioWrapper.FINISHED_STATE && e.controlPlay() : clearInterval(e.waCheckInterval)
                }, 100) : e.audioWrapper.onended = e.controlPlay
        })
    } else this.audioWrapper.src = d, this.audioWrapper.type = this.mp3Support ? "audio/mpeg" : "audio/ogg", this.audioWrapper.loop = !1, this.audioWrapper.preload = "auto", this.audioWrapper.load(), this.delayPlay ? (this.audioWrapper.addEventListener("canplay", this.readyToPlay), this.audioWrapper.addEventListener("canplaythrough",
        this.readyToPlay)) : this.audioWrapper.play(), this.audioWrapper.addEventListener("ended", this.controlPlay, !1);
    this.busy = !0;
    this.startPlayTime = (new Date).getTime()
};
AudioPlayer.prototype.loadSound = function (a, c) {
    if (AudioMixer.buffer[a]) c && c(AudioMixer.buffer[a]); else {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function () {
            AudioMixer.waContext.decodeAudioData(this.response, function (d) {
                AudioMixer.buffer[a] = d;
                c && c(d)
            })
        };
        d.send()
    }
};
AudioPlayer.prototype.readyToPlay = function (a) {
    a.currentTarget.alreadyLoaded || (a.currentTarget.alreadyLoaded = !0, a.currentTarget.play())
};
AudioPlayer.prototype.stop = function () {
    this.busy = !1;
    try {
        AudioMixer.isWebAudioSupport() ? this.audioWrapper.noteOff ? this.audioWrapper.noteOff(0) : this.audioWrapper.stop(0) : (this.audioWrapper.removeEventListener("canplay", this.readyToPlay), this.audioWrapper.removeEventListener("canplaythrough", this.readyToPlay), this.audioWrapper.pause(), this.audioWrapper.currentTime = 0), this.audioWrapper = null
    } catch (a) {
    }
};
AudioPlayer.prototype.pause = function () {
    AudioMixer.isWebAudioSupport() ? this.audioWrapper && this.audioWrapper.disconnect() : this.audioWrapper.pause()
};
AudioPlayer.prototype.resume = function () {
    if (AudioMixer.isWebAudioSupport()) {
        if (this.audioWrapper) try {
            this.audioWrapper.connect(AudioMixer.waContext.destination)
        } catch (a) {
        }
    } else this.audioWrapper.play()
};
AudioPlayer.prototype.controlPlay = function () {
    if (this.audioWrapper) if (this.audioWrapper.doLoop) AudioMixer.isWebAudioSupport() || (Utils.isFirefox() ? this.play(this.audioWrapper.fileName, !0) : (this.audioWrapper.currentTime = 0, this.audioWrapper.play())); else {
        this.busy = !1;
        if ("function" == typeof this.onend) this.onend();
        this.waCheckInterval && clearInterval(this.waCheckInterval)
    }
};
AudioPlayer.prototype.getPosition = function () {
    if (AudioMixer.isWebAudioSupport()) {
        if (!this.startPlayTime) return 0;
        var a = this.getDuration();
        if (!a) return 0;
        var c = ((new Date).getTime() - this.startPlayTime) / 1E3;
        return c <= a ? c : this.audioWrapper.doLoop ? c - Math.floor(c / a) * a : a
    }
    return this.audioWrapper.currentTime ? this.audioWrapper.currentTime : 0
};
AudioPlayer.prototype.getDuration = function () {
    return AudioMixer.isWebAudioSupport() ? this.audioWrapper.buffer ? this.audioWrapper.buffer.duration : 0 : this.audioWrapper.duration ? this.audioWrapper.duration : 0
};

function AudioMixer(a, c) {
    this.singleChannelMode = !1;
    this.channels = [];
    this.init(a, c)
}

AudioMixer.prototype.init = function (a, c) {
    if (AudioMixer.isWebAudioSupport()) {
        AudioMixer.waContext = new window.AudioContext;
        var d = AudioMixer.waContext.createBuffer(1, 1, 22050), e = AudioMixer.waContext.createBufferSource();
        e.buffer = d;
        e.connect(AudioMixer.waContext.destination);
        e.noteOn ? e.noteOn(0) : e.start(0)
    }
    AudioMixer.isWebAudioSupport() || -1 == navigator.userAgent.toLowerCase().indexOf("mac") || (this.singleChannelMode = !0, c = 1);
    this.path = a;
    this.channels = [];
    for (d = 0; d < c; d++) this.channels[d] = new AudioPlayer, this.channels[d].init(a);
    Utils.addEventListener("hidewindow", Utils.proxy(this.pauseOnHide, this));
    Utils.addEventListener("showwindow", Utils.proxy(this.resumeOnShow, this))
};
AudioMixer.prototype.pauseOnHide = function () {
    for (var a = 0; a < this.channels.length; a++) this.channels[a].pause()
};
AudioMixer.prototype.resumeOnShow = function () {
    for (var a = 0; a < this.channels.length; a++) this.channels[a].resume()
};
AudioMixer.prototype.play = function (a, c, d, e) {
    var f = -1, f = "number" == typeof e ? e : this.getFreeChannel(d);
    0 <= f && f < this.channels.length && (this.channels[f].stop(), this.channels[f].play(a, c));
    return this.channels[f]
};
AudioMixer.prototype.stop = function (a) {
    0 <= a && a < this.channels.length && this.channels[a].stop()
};
AudioMixer.prototype.getFreeChannel = function (a) {
    for (var c = -1, d = [], e = -1, f = -1, g = 0, h = 0; h < this.channels.length; h++) this.channels[h].locked || (this.channels[h].busy ? (g = (new Date).getTime(), g -= this.channels[h].startPlayTime, g > f && (f = g, e = h)) : d.push(h));
    0 == d.length ? !a && 0 <= e && (c = e) : c = d[0];
    return c
};
AudioMixer.isWebAudioSupport = function () {
    return Boolean(window.AudioContext)
};
window.AudioContext = window.AudioContext || window.webkitAudioContext;
AudioMixer.buffer = {};
AudioMixer.waContext = null;
var ExternalAPI = {
    type: "default", init: function () {
    }, exec: function () {
        var a = arguments[0];
        if ("exec" != a && "function" == typeof ExternalAPI[a]) return ExternalAPI[a].apply(ExternalAPI, Utils.getFunctionArguments(arguments, 1))
    }, check: function () {
        return !1
    }, openWidget: function () {
    }, closeWidget: function () {
    }, getMoreGamesURL: function (a, c) {
        return "http://www.gotvg.com/"
    }, getPreloaderURL: function () {
        return "http://www.gotvg.com/"
    }, showCopyright: function () {
    }, showAds: function () {
        var a = window.location.href;
        if (0 == a.indexOf("http://www.gotvg.com") ||
            0 == a.indexOf("https://www.gotvg.com")) window.GoogleIMA ? GoogleIMA.show() : window.Leadbolt && Leadbolt.show()
    }
};

function GameStage(a, c, d, e) {
    GameStage.superclass.constructor.call(this, d || "screen", a.width, a.height);
    this.setBackgroundCanvas(e || "screen_background");
    this.delay = 1E3 / c;
    this.ceilSizes = !0;
    this.showFPS = !1;
    var f = this;
    Utils.addEventListener("fitlayout", function () {
        f.drawScene(f.canvas);
        f.drawScene(f.backgroundCanvas, !0);
        window.CSSBack && CSSBack.resize()
    });
    Utils.addEventListener("lockscreen", function () {
        f.started && f.stop()
    });
    Utils.addEventListener("unlockscreen", function () {
        f.started || f.start()
    })
}

Utils.extend(GameStage, Stage);

function SkillButton(a, c, d) {
    this.type = a;
    a = "castle/skill/" + this.type;
    var e = library.getAsset(a);
    SkillButton.superclass.constructor.call(this, library.getBitmap(a), e.width, e.height, e.frames || 1, e.layers || 1);
    this.gotoAndStop(0);
    this.anchor = {x: 0, y: this.height / 2};
    this.max = 1 * c || 1;
    this.value = 1 * d || 0;
    this.showEffect = !0;
    this.tick(0)
}

Utils.extend(SkillButton, Sprite);
SkillButton.prototype.setScaleValue = function (a) {
    this.stage && (this.scale || (this.scale = library.getSprite("castle/skill/" + this.type, {
        x: this.x,
        y: this.y,
        animated: !1,
        currentFrame: 1
    }), this.stage.addChild(this.scale)), this.scale.visible = 1 > a, this.scale.height = Math.floor(this.height * a), this.scale.height % 2 && this.scale.height++, this.scale.offset.top = 2 * (this.height - this.scale.height), this.scale.anchor = {
        x: 0,
        y: this.scale.height / 2
    })
};
SkillButton.prototype.tick = function (a) {
    a = Math.max(0, Math.min(1, this.value / this.max));
    this.setScaleValue(a);
    1 > a ? (this.showEffect = !0, this.gotoAndStop(1 > a ? 0 : 2)) : (this.gotoAndStop(1 > a ? 0 : 2), this.showEffect && this.showReadyEffect(), this.showEffect = !1)
};
SkillButton.prototype.showReadyEffect = function () {
    var a = 3 * this.width, c = new Graphics.circle(this.x - this.anchor.x, this.y - this.anchor.y, a);
    c.scaleX = c.scaleY = 0;
    c.lineWidth = 0;
    c.fillRadialGradient = {
        x0: 0,
        y0: 0,
        r0: a / 4,
        x1: 0,
        y1: 0,
        r1: 2 * a,
        points: [{point: 0, color: "rgba(" + GAME_CONFIG.colors[this.type] + ", 0.5)"}, {
            point: .5,
            color: "rgba(" + GAME_CONFIG.colors[this.type] + ", 0.0)"
        }]
    };
    this.stage.addChild(c);
    c.scaleTo(1, Battle.timeToTicks(.3), Easing.quadratic.easeOut, function (a) {
        a.target.obj.fadeTo(0, Battle.timeToTicks(.3),
            Easing.quadratic.easeIn, function (a) {
                a.target.obj.destroy = !0
            })
    }, function (a) {
        a.target.obj.opacity = a.target.obj.scaleX
    })
};

function CastleCell(a, c, d, e) {
    this.config = a;
    CastleCell.superclass.constructor.call(this, 0, 0, this.config.width, this.config.height);
    this.anchor = {x: -this.config.width / 2, y: -this.config.height / 2};
    this.setFieldPosition(c, d);
    this.setUnitType(e)
}

Utils.extend(CastleCell, Graphics.rectangle);
CastleCell.prototype.setUnitType = function (a) {
    this.fillColor = (a = a && GAME_CONFIG.colors[a]) ? "rgba(" + a + ", 0.3)" : "transparent"
};
CastleCell.prototype.setFieldPosition = function (a, c) {
    this.col = Math.max(0, ~~c);
    this.row = Math.max(0, ~~a);
    this.x = this.config.width * this.col;
    this.y = this.config.height * this.row
};

function PowerScale() {
    var a = library.getAsset("castle/power/scale_empty"), c = library.getBitmap("castle/power/scale_empty");
    PowerScale.superclass.constructor.call(this, c, a.width, a.height, 1, 1);
    this.anchor = {x: -this.width / 2, y: 0};
    this.filler = library.getSprite("castle/power/scale_full", {x: 0, y: 0});
    this.addChild(this.filler);
    this.addChild(library.getSprite("castle/power/back", {x: this.width, y: 0, anchor: {x: -15, y: 0}}))
}

Utils.extend(PowerScale, Sprite);
PowerScale.prototype.setValue = function (a) {
    a = Math.max(0, Math.min(1, a || 0));
    this.filler.width = this.width * a;
    this.filler.anchor = {x: -this.width * a / 2, y: 0}
};

function UpgradeSlot() {
    var a = library.getAsset("upgrade/slot");
    UpgradeSlot.superclass.constructor.call(this, library.getBitmap("upgrade/slot"), a.width, a.height, a.frames || 1, a.layers || 1);
    this.picture = library.getSprite("upgrade/image");
    this.addChild(this.picture);
    this.scale = new Graphics.rectangle(32, 21, 10, 40);
    this.scale.anchor = {x: this.scale.width / 2, y: this.scale.height / 2};
    this.scale.fillColor = "rgba(255,0,0,0.5)";
    this.scale.lineWidth = 0;
    this.addChild(this.scale);
    this.onclick = Utils.proxy(this.select, this);
    this.costText = null;
    this.sign = library.getSprite("upgrade/sign", {x: 24, y: -24});
    this.addChild(this.sign);
    this.name = "";
    UpgradeSlot.items.push(this);
    this.onremove = function (a) {
        a.target.cost && a.target.cost.parentNode && a.target.cost.parentNode.removeChild(a.target.cost);
        a = UpgradeSlot.items.indexOf(a.target);
        0 <= a && UpgradeSlot.items.splice(a, 1)
    }
}

Utils.extend(UpgradeSlot, Sprite);
UpgradeSlot.selectedItem = null;
UpgradeSlot.items = [];
UpgradeSlot.prototype.setName = function (a) {
    this.name = a;
    this.picture.gotoAndStop("power attack armor skillReload goldPerViking towersCount towersLevel skill_red skill_yellow skill_green skill_blue cannons".split(" ").indexOf(this.name));
    this.update()
};
UpgradeSlot.prototype.update = function () {
    var a = Upgrade(this.name);
    this.scale.scaleY = a.progress;
    this.scale.fillColor = "rgba(255," + Math.round(128 * a.progress) + ",0,0.5)";
    this.updateCost(1 > a.progress ? a.cost : 0);
    this.picture.opacity = a.cost > GameData.money ? .5 : 1;
    this.sign.visible = !(a.cost > GameData.money) && 1 > a.progress
};
UpgradeSlot.prototype.updateCost = function (a) {
    this.costText || (fontId = "font/yellow", asset = library.getAsset(fontId), this.costText = new SimpleText(library.getBitmap(fontId), asset.width, asset.height), this.costText.stage = this.stage, this.costText.parent = this, this.costText.charMap = "0123456789".split(""), this.costText.charSpacing = -12, this.costText.align = SimpleText.ALIGN_CENTER, this.costText.setPosition(-2, -27), this.costText.scale = .7, this.costText["static"] = !1);
    this.costText.write(0 < a ? a : "")
};
UpgradeSlot.prototype.select = function () {
    UpgradeSlot.selectedItem = this;
    UpgradeSlot.selectedItem.upgrade()
};
UpgradeSlot.moneyCallback = null;
UpgradeSlot.prototype.upgrade = function () {
    if (Upgrade(this.name).buy()) for (var a = 0, c = UpgradeSlot.items.length; a < c; a++) UpgradeSlot.items[a].update();
    return !1
};

function TowerBullet(a, c) {
    this.damage = c || 1;
    this.target = a;
    var d = library.getAsset("castle/tower/bullet");
    TowerBullet.superclass.constructor.call(this, library.getBitmap("castle/tower/bullet"), d.width, d.height, d.frames || 1, d.layers || 1)
}

Utils.extend(TowerBullet, Sprite);
TowerBullet.prototype.tick = function (a) {
    if (this.stage && this.target) {
        var c = this.target.localToGlobal(0, 0), d = new Vector(c.x - this.x, c.y - this.y), e = d.getLength();
        a = a / 1E3 * 200;
        e <= a ? (this.x = c.x, this.y = c.y, this.target.hit(this.damage), this.target = null) : (d.mult(a / e), this.x += d.x, this.y += d.y)
    }
};
TowerBullet.prototype.rescanTarget = function (a, c) {
    if (this.target && !(0 < this.target.hp)) {
        var d = this.target, e = new Vector(this.x, this.y), f = a.filter(function (a) {
            return 0 >= d.hp || e.distanceTo(a.localToGlobal(0, 0)) > c ? !1 : !0
        }), e = this.target.localToGlobal(0, 0);
        this.target = f.shift() || null
    }
};

function Tower(a) {
    this.config = a;
    a = library.getAsset("castle/tower");
    Tower.superclass.constructor.call(this, library.getBitmap("castle/tower"), a.width, a.height, a.frames || 1, a.layers || 1);
    this.anchor = {x: 0, y: this.height / 4};
    this.maxhp = this.config.hp + Upgrade("towersLevel").level;
    this.hp = 1 * this.maxhp;
    this.damage = this.config.damage + Math.floor(Upgrade("towersLevel").level / 2);
    this.reload = this.config.reload * (1 - .5 * Upgrade("towersLevel").progress);
    this.ticksToReload = 0;
    this.range = 1 * this.config.range;
    this.radius = this.config.radius *
        (1 + Upgrade("towersLevel").progress);
    this.fieldPosition = {row: 0, col: 0};
    this.onShoot = this.target = this.onDie = null;
    this.scaleContainer = new Graphics.rectangle(10, 6, 1, 16);
    this.scaleContainer.lineWidth = 0;
    this.scaleContainer.fillColor = "rgba(255,0,0,1)";
    this.scaleContainer.anchor = {x: 0, y: this.scaleContainer.height / 2};
    this.addChild(this.scaleContainer);
    this.scale = new Graphics.rectangle(0, -this.scaleContainer.height / 2, this.scaleContainer.width, this.scaleContainer.height);
    this.scale.lineWidth = 0;
    this.scale.fillColor =
        "rgba(0,255,0,1)";
    this.scaleContainer.addChild(this.scale)
}

Utils.extend(Tower, Sprite);
Tower.prototype.tick = function (a) {
    if (this.stage && (0 < this.ticksToReload && (this.ticksToReload -= a), this.target && 0 >= this.ticksToReload)) {
        a = new TowerBullet(this.target, 1 * this.damage);
        a.setPosition(this.x - 7, this.y - 16);
        if ("function" == typeof this.onShoot) this.onShoot(a);
        this.ticksToReload = Battle.timeToTicks(this.reload);
        playSound("attack_shot", MIXER_CHANNEL_TOWER)
    }
};
Tower.prototype.scanTarget = function (a) {
    var c = 1 * this.range, d = new Vector(this.x, this.y);
    a = a.filter(function (a) {
        return d.distanceTo(a.localToGlobal(0, 0)) <= c
    });
    a.sort(function (a, c) {
        var g = d.distanceTo(a.localToGlobal(0, 0)), h = d.distanceTo(c.localToGlobal(0, 0));
        return g == h ? 0 : g > h ? -1 : 1
    });
    this.target = a.shift() || null
};
Tower.prototype.hit = function (a) {
    this.hp = Math.max(0, this.hp - a);
    this.scale.height = Math.round(this.hp / this.maxhp * this.scaleContainer.height);
    this.scale.height += this.scale.height % 2;
    this.scale.y = Math.round(-this.scale.height / 2);
    if (0 >= this.hp && (this.die(), "function" == typeof this.onDie)) this.onDie(this)
};
Tower.prototype.die = function () {
    this.fadeTo(0, Battle.timeToTicks(.5), Easing.linear.easeIn, function (a) {
        a.target.obj.destroy = !0
    });
    playSound("crash", MIXER_CHANNEL_TOWER)
};

function Cannon(a, c, d, e, f) {
    Cannon.superclass.constructor.call(this, a, c, d, e, f);
    this.onclick = Utils.proxy(this.shoot, this);
    this.readyToShot = !1;
    this.shotTimeout = Battle.timeToTicks(.5 + 1 * Upgrade("cannons").progress);
    this.damage = 10;
    this.light = null;
    this.ticksLeft = 0;
    this.scale = library.getSprite("castle/cannon/scale", {x: 11.5, y: -1});
    this.scale.maxWidth = 1 * this.scale.width;
    this.addChild(this.scale);
    this.setPowerScale(0);
    this.scaleY = .8 + .2 * Upgrade("cannons").progress
}

Utils.extend(Cannon, Sprite);
Cannon.shooting = !1;
Cannon.prototype.shoot = function () {
    if (!this.readyToShot || Cannon.shooting) return !1;
    this.ticksLeft = 1 * this.shotTimeout;
    this.readyToShot = !1;
    var a = Battle.timeToTicks(.3);
    this.moveTo(this.x + 3, this.y, a / 2, Easing.cubic.easeIn, function (c) {
        c.target.obj.moveTo(c.target.obj.x - 3, c.target.obj.y, 2 * a, Easing.cubic.easeOut)
    });
    playSound("attack_magic", MIXER_CHANNEL_CASTLE);
    return !1
};
Cannon.prototype.setPowerScale = function (a) {
    var c = Math.max(0, Math.min(1, a || 0));
    this.readyToShot = 1 == c;
    a = this.scale.maxWidth;
    c = Math.round(a * c);
    c += c % 2;
    this.scale.width = c;
    this.scale.anchor = {x: Math.round(c / 2), y: 0};
    this.scale.offset.left = a - c;
    this.scale.bitmap = this.readyToShot ? library.getBitmap("castle/cannon/scale_ready") : library.getBitmap("castle/cannon/scale")
};
Cannon.prototype.tick = function (a) {
    this.ticksLeft -= a;
    0 >= this.ticksLeft ? this.light && (this.light.destroy = !0, this.light = null, Cannon.shooting = !1) : (Cannon.shooting = !0, this.light || (a = new Graphics.rectangle(this.x, this.y - 1, this.stage.screenWidth, 4 + 8 * Upgrade("cannons").progress), a.anchor = {
        x: (a.width + this.width) / 2 - 4,
        y: 1
    }, a.fillColor = "rgba(" + Math.ceil(255 * Upgrade("cannons").progress) + ",0,255,0.8)", a.lineWidth = 0, this.stage.addChild(a), this.light = a), a = this.ticksLeft / this.shotTimeout, this.light.scaleY = .1 + .9 * a *
        a, this.light.opacity = .3 + .7 * a)
};
var Bullet = function (a, c, d, e, f) {
    Bullet.superclass.constructor.call(this, a, c, d, e, f);
    this.power = 1;
    this.type = null;
    this.anchor = {x: 10 - c / 2, y: 0};
    this.scaleY = this.scaleX = a = .5 + .2 * Upgrade.get("attack").progress
};
Utils.extend(Bullet, Sprite);
Bullet.prototype.tick = function (a) {
};
var CastleUnit = function (a, c, d, e, f) {
    CastleUnit.superclass.constructor.call(this, a, c, d, e, f);
    this.state = this.type = null
};
Utils.extend(CastleUnit, Sprite);
CastleUnit.STATE_QUEUE = 0;
CastleUnit.STATE_MOVING = 1;
CastleUnit.STATE_READY = 2;
CastleUnit.STATE_ATTACK = 3;
CastleUnit.createInstance = function (a) {
    return library.getSprite("castle/unit/" + a.type, {
        config: a,
        type: a.type,
        state: CastleUnit.STATE_QUEUE,
        anchor: {x: -a.x, y: -a.y}
    }, CastleUnit)
};
CastleUnit.prototype.canMove = function () {
    return this.state == CastleUnit.STATE_ATTACK ? !1 : !0
};
CastleUnit.prototype.canAttack = function () {
    return this.state == CastleUnit.STATE_READY
};
CastleUnit.prototype.tick = function (a) {
};
var CastleField = function (a, c) {
    this.config = a;
    this.stage = c;
    this.cols = ~~this.config.cols;
    this.rows = ~~this.config.rows;
    this.units = [];
    this.queue = [];
    this.bullets = [];
    this.cells = [];
    for (var d = 0; d < this.rows; d++) {
        this.units.push([]);
        for (var e = 0; e < this.cols; e++) this.units[d].push(null)
    }
    d = this.config.cell.width * this.cols;
    e = this.config.cell.height * this.rows;
    this.field = new Sprite(null, d, e);
    this.field.anchor = {x: -d / 2, y: -e / 2};
    this.field.setPosition(this.config.left, this.config.top);
    this.field.fillColor = "rgba(0,0,0,0.2)";
    this.stage.addChild(this.field);
    this.onCombo = this.onBullet = null;
    this.powerTimeout = Battle.timeToTicks(this.config.powerTimeout);
    this.ticksTillPowerLoss = 0;
    this.respawnTimeout = Battle.timeToTicks(this.config.respawnTimeout);
    this.ticksTillEnqueue = 1 * this.respawnTimeout;
    this.power = 1;
    this.maxPower = this.config.maxPower + Upgrade("power").level;
    this.powerScale = new PowerScale;
    this.powerScale.setPosition(this.config.left, 10);
    this.stage.addChild(this.powerScale)
};
CastleField.prototype.cols = 0;
CastleField.prototype.rows = 0;
CastleField.prototype.cells = null;
CastleField.prototype.queue = null;
CastleField.prototype.bullets = null;
CastleField.prototype.onBullet = null;
CastleField.prototype.onCombo = null;
CastleField.prototype.init = function () {
    for (var a = 0; a < this.rows; a++) for (var c = 0; c < this.cols; c++) {
        var d = new CastleCell(this.config.cell, a, c, null);
        this.field.addChild(d);
        this.cells.push(d);
        d.onclick = Utils.proxy(this.onCellClick, this)
    }
    for (c = 0; c < this.config.initialColumns; c++) this.enqueue();
    for (c = 0; c < this.queue.length; c++) for (a = 0; a < this.rows; a++) this.queue[c][a].setPosition(this.config.cell.width * (this.cols + c + .5), this.config.cell.height * (a + .5)), this.field.addChild(this.queue[c][a]);
    this.moveUnits(0)
};
CastleField.prototype.enqueue = function (a) {
    this.ticksTillEnqueue = 1 * this.respawnTimeout;
    if (!a) {
        a = [];
        for (var c = 0; c < this.rows; c++) {
            var d = this.config.unit.types;
            window.UXMODE && (d = [this.config.unit.types[1], this.config.unit.types[3]]);
            d = random(d);
            d = CastleUnit.createInstance(d);
            a.push(d)
        }
    }
    this.queue.push(a || this.createRandomColumn())
};
CastleField.prototype.findFreeCell = function (a, c) {
    for (var d = Math.max(0, Math.min(isNaN(c) ? this.cols : c, this.cols)); 0 < d && !this.units[a][d - 1];) d--;
    return d
};
CastleField.prototype.moveUnits = function (a) {
    for (var c = 0, d = 1; d < this.cols; d++) for (var e = 0; e < this.rows; e++) {
        var f = this.units[e][d];
        if (f) {
            var g = this.findFreeCell(e, d);
            f.canMove() && (c++, g < d && (this.units[e][d].state = CastleUnit.STATE_MOVING, this.units[e][g] = this.units[e][d], this.units[e][d] = null))
        }
    }
    for (; this.queue.length;) for (d = this.queue.shift(), e = 0; e < this.rows; e++) g = this.findFreeCell(e), g >= this.cols || (f = d[e], f.stage || (f.setPosition(this.config.cell.width * (this.config.cols + 1), (e + .5) * this.config.cell.height),
        this.field.addChild(f)), this.units[e][g] = f, f.state = CastleUnit.STATE_MOVING, c++);
    var h = !1;
    if (0 < c) for (d = 0; d < this.cols; d++) for (e = 0; e < this.rows; e++) (f = this.units[e][d]) && f.state == CastleUnit.STATE_MOVING && (g = this.findFreeCell(e, d), g < d && (this.units[e][g] = this.units[e][d], this.units[e][d] = null), c = this.config.cell.width * (g + .5), f.x = Math.max(f.x - a / 1E3 * this.config.unitSpeed, c), f.x == c && (this.units[e][g].state = CastleUnit.STATE_READY, h = !0));
    h && this.renderCells()
};
CastleField.prototype.onCellClick = function (a) {
    var c = a.target.row;
    a = a.target.col;
    this.units[c] && this.units[c][a] && (this.activateUnit(c, a), this.attack())
};
CastleField.prototype.activateUnit = function (a, c, d) {
    if (!(0 > a || a >= this.rows || 0 > c || c >= this.cols)) {
        var e = this.units[a][c];
        !e || !e.canAttack() || d && e.type != d || (e.state = CastleUnit.STATE_ATTACK, this.activateUnit(a - 1, c, e.type), this.activateUnit(a + 1, c, e.type), this.activateUnit(a, c - 1, e.type), this.activateUnit(a, c + 1, e.type))
    }
};
CastleField.prototype.onUnitsActivated = function (a) {
    if (a && a.length) {
        var c = a.length - 1;
        if (!isNaN(this.ticksTillPowerLoss) && 0 >= this.ticksTillPowerLoss || 2 > a.length) this.power = 1;
        this.ticksTillPowerLoss = 1 * this.powerTimeout;
        if (1 < a.length) {
            for (var d = a[0].config.type, e = 0, f = a.length; e < f; e++) {
                var g = a[e].localToGlobal(0, 0),
                    h = Math.ceil(a[e].config.bullet.damage * (1 + Upgrade("attack").level / 100)),
                    g = library.getSprite("castle/unit/" + d + "/bullet", {
                        x: g.x,
                        y: g.y,
                        config: a[e].config.bullet,
                        power: h + this.power,
                        speed: a[e].config.bullet.speed,
                        type: d
                    }, Bullet);
                if ("function" == typeof this.onBullet) this.onBullet(g)
            }
            playSound("attack_" + d, MIXER_CHANNEL_CASTLE)
        }
        this.power = Math.min(this.maxPower, this.power + c);
        if ("function" == typeof this.onCombo) this.onCombo(a)
    }
};
CastleField.prototype.attack = function (a) {
    var c = [];
    for (a = 0; a < this.rows; a++) for (var d = 0; d < this.cols; d++) this.units[a][d] && this.units[a][d].state == CastleUnit.STATE_ATTACK && (c.push(this.units[a][d]), this.units[a][d] = null);
    if (c.length) {
        this.renderCells();
        this.onUnitsActivated(c);
        var e = c.length, f = 0;
        a = c[0].stage.createTween(null, 0, 0, 1, Battle.timeToTicks(.3), Easing.quadratic.easeOut);
        a.onchange = function (a) {
            var d = a.value - f;
            f = 1 * a.value;
            if (d) for (a = 0; a < e; a++) c[a].opacity -= d, c[a].opacity = Math.max(0, c[a].opacity),
                c[a].scaleX += d, c[a].scaleY += d
        };
        a.onfinish = function (a) {
            for (a = 0; a < e; a++) c[a].destroy = !0, c[a] = null
        };
        a.play()
    }
};
CastleField.prototype.renderCells = function () {
    for (var a = 0; a < this.rows; a++) for (var c = 0; c < this.cols; c++) {
        var d = this.cells[a * this.cols + c];
        this.units[a][c] && this.units[a][c].state == CastleUnit.STATE_READY ? d.setUnitType(this.units[a][c].type) : d.setUnitType(null)
    }
};
CastleField.prototype.tick = function (a) {
    this.ticksTillPowerLoss -= a;
    this.ticksTillEnqueue -= a;
    var c = Math.max(0, Math.min(1, (this.powerTimeout - this.ticksTillPowerLoss) / this.powerTimeout));
    this.powerScale.setValue(c);
    1 <= c && (this.power = 1);
    0 >= this.ticksTillEnqueue && this.enqueue();
    for (c = 0; c < this.rows; c++) for (var d = 0; d < this.cols; d++) this.units[c][d] && this.units[c][d].tick(a);
    this.moveUnits(a)
};
var Castle = function (a, c) {
    this.config = a;
    this.stage = c;
    this.field = new CastleField(this.config.field, this.stage);
    this.cannons = [];
    this.maxSkill = Math.ceil(this.config.maxSkill / (1 + 3 * Upgrade("skillReload").level / 100));
    this.hp = this.config.hp + 2 * Upgrade("armor").level;
    this.money = 1 * GameData.money || 0;
    this.onDie = null;
    this.maxCannonPower = 100 - Math.round(50 * Upgrade("cannons").progress);
    this.cannonPower = 0;
    this.towers = [];
    this.bullets = []
};
Castle.prototype.init = function () {
    this.field && this.field.init();
    var a = library.getSprite("background/shield", {x: this.stage.screenWidth / 2, y: 20});
    this.stage.addChild(a);
    a = library.getSprite("castle/money/back", {x: 0, y: 18});
    a.anchor = {x: -a.width / 2, y: 0};
    this.stage.addChild(a);
    for (var a = this.config.field.cell.height, c = this.config.field.left - 18, d = this.config.field.top + a / 2, e = 0; e < this.config.field.rows; e++) {
        var f = library.getSprite("castle/cannon", {x: c, y: d + a * e, zIndex: 1E3}, Cannon);
        this.stage.addChild(f);
        this.cannons.push(f)
    }
    d =
        Math.max(this.config.towerColumns, Math.ceil(this.config.upgrade.towersCount.maxLevel / this.config.field.rows));
    for (a = 0; a < d; a++) this.towers.push(Array(this.config.field.rows));
    c = [];
    e = Upgrade("towersCount").level;
    for (a = 0; a < e; a++) f = new Tower(this.config.tower), f.gotoAndStop(Math.round(Upgrade("towersLevel").progress * f.totalFrames)), this.stage.addChild(f), f.onDie = Utils.proxy(function (a) {
        this.towers[a.fieldPosition.col][a.fieldPosition.row] = void 0
    }, this), f.onShoot = Utils.proxy(function (a) {
        this.bullets.push(a);
        this.stage.addChild(a)
    }, this), c.push(f);
    for (a = c.length; a < d * this.config.field.rows; a++) c.push(null);
    c = c.sort(function (a) {
        return random(-1, 1)
    });
    for (a = 0; a < c.length; a++) c[a] && (d = {
        col: Math.floor(a / this.config.field.rows),
        row: a % this.config.field.rows
    }, e = this.config.field.left - 50 - 30 * d.col + random(-3, 3), c[a].setPosition(e, this.config.field.top + this.config.field.cell.height / 2 + this.config.field.cell.height * d.row), c[a].fieldPosition = d, c[a].setZIndex(100 + 3 * d.row + d.col), this.towers[d.col][d.row] = c[a])
};
Castle.prototype.countAttackLine = function (a) {
    a -= this.config.field.top;
    a = Math.max(0, Math.min(this.config.field.rows, Math.floor(a / this.config.field.cell.height)));
    for (var c = this.towers.length - 1; 0 <= c; c--) if (this.towers[c][a]) return 30 * (c + 1);
    return 0
};
Castle.prototype.findHitTarget = function (a) {
    a -= this.config.field.top;
    a = Math.max(0, Math.min(this.config.field.rows, Math.floor(a / this.config.field.cell.height)));
    for (var c = this.towers.length - 1; 0 <= c; c--) if (this.towers[c][a]) return this.towers[c][a];
    return this
};
Castle.prototype.addCannonPower = function (a) {
    a = Math.max(0, a || 0);
    this.setCannonPower(this.cannonPower + a)
};
Castle.prototype.setCannonPower = function (a) {
    this.cannonPower = Math.max(0, Math.min(this.maxCannonPower, a || 0));
    a = this.cannonPower / this.maxCannonPower;
    for (var c = 0, d = this.cannons.length; c < d; c++) this.cannons[c].setPowerScale(a)
};
Castle.prototype.towersScan = function (a) {
    for (var c = 0; c < this.towers.length; c++) for (var d = 0; d < this.towers[c].length; d++) this.towers[c][d] && this.towers[c][d].scanTarget(a);
    for (c = 0; c < this.bullets.length; c++) this.bullets[c].rescanTarget(a, this.radius)
};
Castle.prototype.tick = function (a) {
    this.field.tick(a);
    Cannon.shooting && this.setCannonPower(0);
    for (var c = 0; c < this.cannons.length; c++) if (this.cannons[c].tick(a), Cannon.shooting && this.cannons[c].light) for (var d = this.cannons[c].light.y, e = this.cannons[c].light.height / 2, d = battle.enemy.unitsRaycast(d - e, d + e), e = 0; e < d.length; e++) d[e].hit(this.cannons[c].damage);
    for (c = 0; c < this.towers.length; c++) for (d = 0; d < this.towers[c].length; d++) this.towers[c][d] && this.towers[c][d].tick(a);
    for (c = 0; c < this.bullets.length; c++) this.bullets[c].tick(a),
    this.bullets[c].target || (this.bullets[c].destroy = !0, this.bullets.splice(c, 1), c--)
};
Castle.prototype.hit = function (a) {
    this.hp -= a;
    this.hp = Math.ceil(Math.max(0, this.hp));
    if (0 >= this.hp && "function" == typeof this.onDie) this.onDie()
};
Castle.prototype.destroyAllTowers = function () {
    for (var a = 0; a < this.towers.length; a++) for (var c = 0; c < this.towers[a].length; c++) {
        var d = this.towers[a][c];
        d && (d.hit(2 * d.hp), this.towers[a][c] = null)
    }
};
var EnemyUnit = function (a, c, d, e, f) {
    this.anchor = {x: 0, y: d / 2 - 2};
    EnemyUnit.superclass.constructor.call(this, a, c, d, e, f);
    this.type = null;
    this.state = EnemyUnit.STATE_ONBOARD;
    this.onDie = this.onDamage = this.targetLine = null;
    this.attackTimeout = 0;
    this.ticksTillAttack = 1E3 * this.attackTimeout;
    this.onAttack = null
};
Utils.extend(EnemyUnit, Sprite);
EnemyUnit.STATE_ONBOARD = 0;
EnemyUnit.STATE_INCOMING = 1;
EnemyUnit.STATE_MOVE = 2;
EnemyUnit.STATE_ATTACK = 3;
EnemyUnit.STATE_FROZEN = 4;
EnemyUnit.STATE_DEAD = 255;
EnemyUnit.createInstance = function (a, c) {
    c = c || {};
    c.config = a;
    c.type = a.type;
    c.state = EnemyUnit.STATE_ONBOARD;
    c.anchor = {x: a.x, y: a.y};
    c.hp = 1 * a.hp;
    c.gold = 1 * a.gold;
    c.damage = 1 * a.damage;
    c.speed = 1 * a.speed;
    c.attackTimeout = Battle.timeToTicks(a.attackTimeout);
    c.ticksTillAttack = 1 * c.attackTimeout;
    return library.getSprite("enemy/unit/" + a.type + "/walk", c, EnemyUnit)
};
EnemyUnit.prototype.lookBeforeStep = function (a) {
    return !0
};
EnemyUnit.prototype.move = function (a) {
    if (this.state >= EnemyUnit.STATE_ATTACK) return !1;
    this.state == EnemyUnit.STATE_ONBOARD && (this.x += a / 1E3 * 20);
    if (this.state == EnemyUnit.STATE_MOVE) {
        a = new Vector(a / 1E3 * (this.speed || 20), 0);
        if (null !== this.targetLine && this.targetLine != this.y) {
            var c = random(Math.PI / 4, Math.PI / 3, !0);
            a.rotate(c * (this.targetLine < this.y ? 1 : -1));
            Math.abs(this.targetLine - this.y) <= Math.abs(a.y) && (a.y = this.y - this.targetLine, this.targetLine = null)
        }
        c = this.getAABBRectangle();
        c.move(a.x, a.y);
        this.lookBeforeStep(this,
            c) || a.mult(.1);
        this.setPosition(this.x + a.x, this.y + a.y)
    }
};
EnemyUnit.prototype.isDead = function () {
    return this.state = EnemyUnit.STATE_DEAD
};
EnemyUnit.prototype.getProfit = function () {
    return Math.round(this.gold * (1 + 1 * Upgrade("goldPerViking").level / 100))
};
EnemyUnit.prototype.getDamage = function () {
    return this.damage
};
EnemyUnit.prototype.hit = function (a) {
    a = Math.min(a, this.hp);
    this.hp -= a;
    if ("function" == typeof this.onDamage) this.onDamage(this, a);
    0 >= this.hp && (this.state = EnemyUnit.STATE_DEAD, this.die());
    return this.hp
};
EnemyUnit.prototype.tick = function (a) {
    this.stage && (this.state == EnemyUnit.STATE_MOVE && (this.move(a), this.setZIndex(100 + 1 * Math.round(this.y))), this.state == EnemyUnit.STATE_ATTACK && (this.ticksTillAttack -= a, 0 >= this.ticksTillAttack && (this.ticksTillAttack = 1 * this.attackTimeout, "function" == typeof this.onAttack && (this.onAttack(this), this.gotoAndPlay(0), playSound("hammer", MIXER_CHANNEL_ENEMY)))), this.state == EnemyUnit.STATE_DEAD && this.setZIndex(1))
};
EnemyUnit.corpses = [];
EnemyUnit.prototype.die = function () {
    for (; 30 < EnemyUnit.corpses.length;) {
        var a = EnemyUnit.corpses.shift();
        a.onrender = function (a) {
            a.target.currentFrame == a.target.totalFrames - 1 && (a.target.destroy = !0)
        };
        a.play()
    }
    if ("function" == typeof this.onDie) this.onDie(this);
    this.stop();
    EnemyUnit.corpses.push(this);
    a = "enemy/unit/bones" + random(1, 7);
    this.bitmap = library.getBitmap(a);
    a = library.getAsset(a);
    this.width = a.width;
    this.height = a.height;
    this.totalFrames = a.frames;
    this.gotoAndPlay(0);
    this.onrender = function (a) {
        10 == a.target.currentFrame &&
        (a.target.stop(), a.target.onrender = void 0, a.target.setZIndex(1))
    };
    this.showCoinEffect(16, 16);
    playSound(random(0, 4) ? "dead" : "kick", MIXER_CHANNEL_ENEMY)
};
EnemyUnit.prototype.showCoinEffect = function (a, c) {
    var d = this.localToGlobal(0, 0), e = library.getSprite("enemy/coin", {x: d.x, y: d.y});
    this.stage.addChild(e);
    d = Math.sqrt((d.x - a) * (d.x - a) + (d.y - c) * (d.y - c)) / 150;
    d = Math.ceil(Battle.timeToTicks(.5) * d);
    e.moveTo(a, c, d, Easing.quadratic.easeOut, function (a) {
        a.target.obj.fadeTo(0, Battle.timeToTicks(.5), Easing.cubic.easeOut, function (a) {
            a.target.obj.destroy = !0;
            playSound("gold", MIXER_CHANNEL_EFFECT)
        })
    })
};
EnemyUnit.prototype.walk = function () {
    if (this.state > EnemyUnit.STATE_ATTACK) return !1;
    this.state = EnemyUnit.STATE_MOVE;
    this.stop();
    this.onrender = void 0;
    var a = "enemy/unit/" + this.type + "/walk";
    this.bitmap = library.getBitmap(a);
    a = library.getAsset(a);
    this.width = a.width;
    this.height = a.height;
    this.totalFrames = a.frames || 1;
    this.totalLayers = a.layers || 1;
    this.gotoAndPlay(0)
};
EnemyUnit.prototype.startAttack = function () {
    if (this.state >= EnemyUnit.STATE_ATTACK) return !1;
    this.state = EnemyUnit.STATE_ATTACK;
    this.targetLine = null;
    this.stop();
    var a = "enemy/unit/" + this.type + "/attack";
    this.bitmap = library.getBitmap(a);
    a = library.getAsset(a);
    this.width = a.width;
    this.height = a.height;
    this.totalFrames = a.frames;
    this.onrender = function (a) {
        a.target.currentFrame == a.target.totalFrames - 1 && a.target.gotoAndStop(0)
    }
};
EnemyUnit.prototype.goldFreeze = function () {
    if (this.state >= EnemyUnit.STATE_FROZEN) return !1;
    this.state = EnemyUnit.STATE_FROZEN;
    this.stop();
    var a = "enemy/unit/" + this.type + "/gold";
    this.bitmap = library.getBitmap(a);
    a = library.getAsset(a);
    this.width = a.width;
    this.height = a.height;
    this.totalFrames = a.frames || 1;
    this.totalLayers = a.layers || 1
};
var Boat = function (a, c, d, e, f) {
    Boat.superclass.constructor.call(this, a, c, d, e, f);
    this.type = null;
    this.state = Boat.STATE_INCOMING;
    this.units = [];
    this.onLeave = this.onUnitLand = this.unitsLandingTime = null;
    this.ticksTillCome = Battle.timeToTicks(random(0, 5))
};
Utils.extend(Boat, Sprite);
Boat.STATE_INCOMING = 0;
Boat.STATE_WAIT = 1;
Boat.STATE_LEAVE = 2;
Boat.STATE_DEAD = 255;
Boat.createInstance = function (a, c) {
    c = c || {};
    c.config = a;
    c.type = a.type;
    c.timeout = 1E3 * a.timeout;
    c.hp = 1 * a.hp;
    c.gold = 1 * a.gold;
    c.state = Boat.STATE_INCOMING;
    return library.getSprite("enemy/boat/" + a.type, c, Boat)
};
Boat.prototype.addUnit = function (a) {
    a = EnemyUnit.createInstance(a, {x: -40 - 20 * this.units.length, y: this.y});
    this.parent.addChild(a);
    this.units.push(a);
    return a
};
Boat.prototype.leave = function () {
    if (this.state != Boat.STATE_DEAD) {
        for (; this.units.length;) this.units[0].destroy = !0, this.units.shift();
        this.state = Boat.STATE_LEAVE
    }
};
Boat.prototype.getProfit = function () {
    for (var a = this.gold, c = 0; c < this.units.length; c++) a += this.units[c].getProfit();
    return a
};
Boat.prototype.hit = function (a) {
    this.hp -= a;
    if (0 >= this.hp) {
        if ("function" == typeof this.onDie) this.onDie(this);
        this.die()
    }
};
Boat.prototype.tick = function (a) {
    if (this.stage) {
        if (this.state == Boat.STATE_INCOMING) if (0 < this.ticksTillCome) this.ticksTillCome -= a; else {
            var c;
            this.x = Math.min(this.x + a / 1E3 * 20, -this.width / 2);
            this.x >= -this.width / 2 && (this.state = Boat.STATE_WAIT)
        }
        if (this.state == Boat.STATE_LEAVE && (c = a / 1E3 * 20, this.x -= c, this.x -= c, this.x < -this.width && (this.destroy = !0, this.state = Boat.STATE_DEAD, "function" == typeof this.onLeave))) this.onLeave(this);
        if (this.state == Boat.STATE_WAIT) {
            c = this.x + this.width / 2;
            for (var d = 0; d < this.units.length; d++) {
                var e =
                    this.units[d];
                e.move(a);
                e.x >= c && (e.x = c, e.state = EnemyUnit.STATE_MOVE);
                if (e.state != EnemyUnit.STATE_ONBOARD && (this.units.splice(d, 1), d--, "function" == typeof this.onUnitLanded)) this.onUnitLanded(e)
            }
            0 == this.units.length && (null === this.unitsLandingTime ? this.unitsLandingTime = 1 * this.timeout : (this.unitsLandingTime -= a, 0 >= this.unitsLandingTime && this.leave()))
        }
    }
};
Boat.prototype.die = function () {
    for (; this.units.length;) this.units.shift().destroy = !0;
    this.rotateTo(-Math.PI / 2, Battle.timeToTicks(.5), Easing.linear.easeIn);
    this.moveBy(-20, 0, Battle.timeToTicks(.5), Easing.linear.easeIn);
    this.fadeTo(0, Battle.timeToTicks(.6), Easing.linear.easeIn, function (a) {
        a.target.obj.destroy = !0
    });
    playSound("boat_dead", MIXER_CHANNEL_ENEMY)
};
var Enemy = function (a, c) {
    this.handleBoatLeave = Utils.proxy(this.handleBoatLeave, this);
    this.handleUnitLanding = Utils.proxy(this.handleUnitLanding, this);
    this.handleUnitDeath = Utils.proxy(this.handleUnitDeath, this);
    this.config = a;
    this.stage = c;
    this.boats = [];
    this.units = [];
    this.attackLine = 0;
    this.castleSkill = this.walkArea = null;
    this.nextWave = this.totalUnitsKilled = this.totalMoneyProfit = this.unitsTotal = 0;
    this.boss = null;
    this.bossIsDead = !1
};
Enemy.prototype.init = function () {
    var a = this.config.field;
    this.walkArea = new Graphics.rectangle(a.x, a.y, a.width, a.height);
    this.walkArea.anchor = {x: -a.width / 2, y: -a.height / 2};
    this.walkArea.color = "#FFF";
    this.walkArea.lineWidth = 0;
    this.walkArea.fillColor = "transparent";
    this.walkArea.onclick = Utils.proxy(this.useSkill, this);
    this.walkArea.setZIndex(1);
    this.stage.addChild(this.walkArea);
    this.attackLine = a.width
};
Enemy.prototype.initWave = function (a) {
    for (var c = GAME_CONFIG.castle.field.cell.height, d = GAME_CONFIG.castle.field.rows, e = Utils.proxy(function (a, c) {
        c.width = Math.round(.7 * c.width);
        c.height = Math.round(.7 * c.height);
        c.refreshVertices();
        for (var d = 0, e = this.units.length; d < e; d++) if (this.units[d] !== a && !(this.units[d].x < a.x || this.units[d].skipStepFilter || this.units[d].state != EnemyUnit.STATE_MOVE && this.units[d].state != EnemyUnit.STATE_ATTACK)) {
            var f = this.units[d].getAABBRectangle();
            f.width = Math.round(.7 * f.width);
            f.height = Math.round(.7 * f.height);
            f.refreshVertices();
            if (c.hitTestRectangle(f)) return this.units[d].skipStepFilter = !0, !1
        }
        return !0
    }, this), f = 0; f < a.length; f++) {
        var g = this.config.boat.types[a[f] - 1],
            h = random(this.config.field.height * f / a.length + 5, this.config.field.height * (f + 1) / a.length - 5),
            h = this.addBoat(g, h);
        h.onDie = Utils.proxy(function (a) {
            this.totalMoneyProfit += a.getProfit();
            this.unitsTotal -= a.units.length;
            a = this.boats.indexOf(a);
            0 <= a && this.boats.splice(a, 1);
            var c = Number.MAX_VALUE;
            this.boats.map(function (a) {
                0 <
                a.ticksTillCome && (c = Math.min(a.ticksTillCome, c))
            });
            this.boats.map(function (a) {
                0 < a.ticksTillCome && (a.ticksTillCome = Math.max(0, a.ticksTillCome - c))
            })
        }, this);
        for (var k = 0, l = g.units.length; k < l; k++) {
            var n = h.addUnit(this.config.types[g.units[k] - 1]);
            this.unitsTotal++;
            var m = random(0, d - 1), m = c / 2 + c * m + random(-2, 2);
            n.targetLine = m;
            n.lookBeforeStep = e
        }
    }
    a = [];
    c = Math.min(6, 2 * Math.ceil(this.boats.length / 2));
    for (f = 0; f < this.boats.length; f++) a.push(Battle.timeToTicks(random(f, Math.ceil(f * c))));
    a.sort(function (a) {
        return Math.round(random(-1,
            1))
    });
    for (f = 0; f < this.boats.length; f++) this.boats[f].ticksTillCome = a[f]
};
Enemy.prototype.addBoat = function (a, c) {
    var d = Boat.createInstance(a);
    d.setPosition(this.walkArea.globalToLocal(-d.width / 2).x, c);
    d.setZIndex(1);
    this.walkArea.addChild(d);
    this.boats.push(d);
    d.onUnitLanded = this.handleUnitLanding;
    d.onLeave = this.handleBoatLeave;
    return d
};
Enemy.prototype.handleBoatLeave = function (a) {
    a = this.boats.indexOf(a);
    0 <= a && this.boats.splice(a, 1)
};
Enemy.prototype.handleUnitLanding = function (a) {
    a.onAttack = this.handleUnitAttack;
    a.onDie = this.handleUnitDeath;
    this.units.push(a)
};
Enemy.prototype.handleUnitAttack = function (a) {
};
Enemy.prototype.handleUnitDeath = function (a) {
    this.totalMoneyProfit += a.getProfit();
    this.totalUnitsKilled++;
    a = this.units.indexOf(a);
    0 <= a && this.units.splice(a, 1);
    this.unitsTotal--
};
Enemy.prototype.tick = function (a) {
    if (0 >= this.unitsTotal) if (this.unitsTotal = 0, 0 == this.boats.length) this.boss || (this.initWave(this.config.wave[this.nextWave % this.config.wave.length]), this.nextWave++, this.nextWave == this.config.wave.length && this.createBoss()); else for (var c = 0, d = this.boats.length; c < d; c++) this.boats[c].leave();
    if (this.boss && 0 >= this.boss.hp) {
        var e = this;
        this.bossIsDead || this.boss.die(function () {
            e.bossIsDead = !0
        })
    }
    for (c = 0; c < this.boats.length; c++) this.boats[c].state == Boat.STATE_DEAD ? (this.boats.splice(c,
        1), c--) : this.boats[c].tick(a);
    for (c = 0; c < this.units.length; c++) this.units[c].state == EnemyUnit.STATE_DEAD ? (this.units.splice(c, 1), c--) : (this.units[c].skipStepFilter = !1, this.units[c].tick(a), d = this.attackLine - battle.castle.countAttackLine(this.units[c].localToGlobal(0, 0).y), this.units[c].x >= d ? (this.units[c].x = d, this.units[c].startAttack()) : this.units[c].state == EnemyUnit.STATE_ATTACK && this.units[c].walk());
    this.boss && this.boss.tick(a)
};
Enemy.prototype.unitsRaycast = function (a, c) {
    "undefined" == typeof c && (c = 1 * a);
    var d = [Math.min(a, c), Math.max(a, c)];
    return this.units.filter(function (a) {
        var c = a.height / 2;
        a = a.localToGlobal(0, 0);
        c = [a.y - c, a.y + c];
        return c[0] >= d[0] && c[0] <= d[1] || c[1] >= d[0] && c[1] <= d[1] || c[0] <= d[0] && c[1] >= d[1] ? !0 : !1
    })
};
Enemy.prototype.unitsInSkillArea = function (a, c, d) {
    return this.units.filter(function (d) {
        var f = d.localToGlobal(0, 0);
        d = f.x - a.x;
        f = f.y - a.y;
        return Math.sqrt(d * d + f * f) <= c
    })
};
Enemy.prototype.useSkill = function (a) {
    if (this.castleSkill) {
        var c = this;
        a = a.target.localToGlobal(a.x, a.y);
        var d = Upgrade("skill_" + this.castleSkill), e = 60 - 30 * (1 - d.progress),
            f = new Graphics.circle(a.x, a.y, e);
        f.fillColor = "rgba(" + GAME_CONFIG.colors[this.castleSkill] + ",0.3)";
        f.lineWidth = 0;
        this.stage.addChild(f);
        f.fadeTo(0, Battle.timeToTicks(1), Easing.cubic.easeOut, function (a) {
            a.target.destroy = !0
        });
        if ("yellow" == this.castleSkill) {
            for (var g = this.unitsInSkillArea({x: a.x, y: a.y}, e, 0), g = g.filter(function (a) {
                return a.state >=
                EnemyUnit.STATE_FROZEN || 0 >= a.x ? !1 : !0
            }), f = d.level + 2; g.length && g.length > f;) g.splice(random(0, g.length - 1), 1);
            for (f = 0; f < g.length; f++) g[f].goldFreeze(), g[f].gold += 100;
            g.length && playSound("skill_yellow", MIXER_CHANNEL_SKILL)
        }
        if ("red" == this.castleSkill) for (var g = 3 + Math.max(1, Math.min(10, Math.ceil(d.level / 2))), h = 30 + d.level, k = 15 + d.level, l = 50 + 2 * d.level, n = [], f = 0; f < g; f++) {
            var m = this.walkArea.localToGlobal(this.walkArea.width, 0).x,
                m = {x: Math.min(m, a.x + random(-h, h)), y: a.y + random(-h, h)},
                p = library.getSprite("castle/skill/comet",
                    {
                        x: m.x - 400,
                        y: m.y - 400,
                        anchor: {x: 5, y: 15},
                        scaleX: .5 + .5 * d.progress,
                        scaleY: .5 + .5 * d.progress
                    });
            p.p = m;
            n.push(p);
            this.stage.setTimeout(function () {
                var a = n.shift();
                a.moveTo(a.p.x, a.p.y, Battle.timeToTicks(.5), Easing.linear.easeIn, function (a) {
                    a = a.target.obj;
                    playSound("skill_red", MIXER_CHANNEL_SKILL);
                    a.stage.addChild(library.getSprite("castle/skill/comet_bang", {
                        x: a.x,
                        y: a.y,
                        scaleX: .5 + .5 * d.progress,
                        scaleY: .5 + .5 * d.progress,
                        onrender: function (a) {
                            a.target.currentFrame >= a.target.totalFrames - 1 && a.target.currentLayer++;
                            a.target.currentLayer >= a.target.totalLayers - 1 && (a.target.destroy = !0)
                        }
                    }));
                    for (var e = c.unitsInSkillArea({x: a.x, y: a.y}, k, 0), f = 0; f < e.length; f++) e[f].hit(l);
                    a.destroy = !0
                })
            }, Battle.timeToTicks(.3 * f));
            this.stage.addChild(p)
        }
        if ("green" == this.castleSkill) {
            g = this.unitsInSkillArea({x: a.x, y: a.y}, e, 0);
            g = g.filter(function (a) {
                return a.state >= EnemyUnit.STATE_FROZEN || 0 >= a.x ? !1 : !0
            });
            for (f = d.level + 2; g.length && g.length > f;) g.splice(random(0, g.length - 1), 1);
            for (f = 0; f < g.length; f++) h = g[f].localToGlobal(0, 0), h = library.getSprite("castle/skill/bugs",
                {
                    x: h.x, y: h.y, onrender: function (a) {
                        a.target.currentFrame >= a.target.totalFrames - 1 && (a.target.destroy = !0)
                    }
                }), this.stage.addChild(h), g[f].hit(g[f].hp);
            g.length && playSound("skill_green", MIXER_CHANNEL_SKILL)
        }
        if ("blue" == this.castleSkill) {
            g = this.unitsInSkillArea({x: a.x, y: a.y}, e, 0);
            this.stage.addChild(library.getSprite("castle/skill/fist", {
                x: a.x,
                y: a.y,
                scaleX: .5 + .5 * d.progress,
                scaleY: .5 + .5 * d.progress,
                onrender: function (a) {
                    a.target.currentFrame >= a.target.totalFrames - 1 && (a.target.destroy = !0)
                }
            }));
            for (f = 0; f < g.length; f++) g[f].hit(50 +
                12 * d.level);
            playSound("skill_blue", MIXER_CHANNEL_SKILL)
        }
        this.castleSkill = null
    }
};
Enemy.prototype.createBoss = function () {
    console.log("LOKI COMES!");
    this.boss = new Boss(GAME_CONFIG.enemy.boss);
    this.walkArea.addChild(this.boss);
    this.handleBoss && this.handleBoss()
};

function Boss(a) {
    this.config = a;
    a = library.getAsset("enemy/loki");
    Boss.superclass.constructor.call(this, library.getBitmap("enemy/loki"), a.width, a.height, a.frames || 1, a.layers || 1);
    this.maxhp = 1 * this.config.hp;
    this.hp = 1 * this.maxhp;
    this.ticksToReload = 1 * this.config.timeout;
    this.damage = 1 * this.config.damage;
    this.onShoot = this.onDie = null;
    this.x = this.config.position.x;
    this.y = this.config.position.y;
    this.stop();
    this.onenterframe = function (a) {
        a.target.currentFrame == a.target.totalFrames - 1 && a.target.gotoAndStop(0)
    };
    this.opacity = 0
}

Utils.extend(Boss, Sprite);
Boss.prototype.tick = function (a) {
    this.stage && (1 > this.opacity ? this.opacity += .01 : (0 < this.ticksToReload && (this.ticksToReload -= a), 0 >= this.ticksToReload && (this.ticksToReload = 1 * this.config.timeout, this.attack())))
};
Boss.prototype.attack = function () {
    0 >= this.hp || (playSound("attack_shot", MIXER_CHANNEL_ENEMY), this.play(), battle.castle.hit(this.config.damage))
};
Boss.prototype.hit = function (a) {
    this.hp -= ~~a
};
Boss.prototype.die = function (a) {
    var c = this;
    this.fadeTo(0, 1E3, Easing.quadratic.easeOut, function () {
        a && a()
    }, function () {
        c.scaleX = c.scaleY = 1 + 2 * (1 - c.opacity);
        c.rotation -= .05;
        c.x--
    })
};
var Battle = function (a, c) {
    this.config = a;
    this.stage = c;
    this.lastTick = 0;
    this.bullets = [];
    this.castle = new Castle(this.config.castle, this.stage);
    this.castle.onDie = Utils.proxy(this.onDefeat, this);
    this.enemy = new Enemy(this.config.enemy, this.stage);
    this.enemy.handleUnitAttack = Utils.proxy(this.handleUnitAttack, this);
    this.enemy.handleBoss = Utils.proxy(this.handleBoss, this);
    var d = library.getSprite("background/game", {"static": !0, x: c.screenWidth / 2, y: c.screenHeight / 2});
    c.addChild(d);
    d = library.getSprite("button/pause",
        {x: 16, y: this.stage.screenHeight - 16, onclick: Utils.proxy(this.pause, this)});
    this.stage.addChild(d);
    d = library.getSprite("button/sound", {
        x: 56,
        y: this.stage.screenHeight - 16,
        opacity: GameData.sound ? 1 : .5,
        onclick: function (a) {
            a.target.opacity = toggleSound() ? 1 : .5
        }
    });
    this.stage.addChild(d);
    d = (this.config.castle.field.cols - 2) * this.config.castle.field.cell.width;
    this.powerScale = new Sprite(null, d, 10);
    this.powerScale.scaleX = 0;
    this.powerScale.anchor = {x: -d / 2, y: 0};
    this.powerScale.setPosition(this.config.castle.field.left +
        this.config.castle.field.cell.width, 20);
    this.powerScale.fillColor = "rgba(255,255,255,0)";
    c.addChild(this.powerScale);
    this.skillStatus = {};
    this.skillButton = {};
    for (d = 0; d < this.config.castle.field.unit.types.length; d++) {
        var e = this.config.castle.field.unit.types[d];
        this.skillStatus[e.type] = this.castle.maxSkill / 2;
        var f = new SkillButton(e.type, this.castle.maxSkill, this.skillStatus[e.type]);
        f.setPosition(this.config.castle.field.left + 30 * d + 24, this.stage.screenHeight - 4);
        this.stage.addChild(f);
        this.skillButton[e.type] =
            f
    }
    this.moreButton = library.getSprite("button/call_more", {
        x: this.stage.screenWidth - 26,
        y: this.stage.screenHeight - 18
    });
    this.stage.addChild(this.moreButton);
    this.moreButton.onclick = Utils.proxy(function () {
        if(this.castle.money < 5)
            return;

        this.castle.money -= 5;
        this.castle.field.enqueue();
        playSound("call", MIXER_CHANNEL_CASTLE)
    }, this);
    this.activeSkillMarker = new Graphics.rectangle(0, 0, 50, 50);
    this.activeSkillMarker.fillColor = "transparent";
    this.activeSkillMarker.color = "transparent";
    this.activeSkillMarker.lineWidth = 0;
    this.stage.addChild(this.activeSkillMarker);
    this.stage.onmousemove =
        Utils.proxy(function (a) {
            this.enemy.castleSkill ? (this.activeSkillMarker.fillColor = this.config.colors[this.enemy.castleSkill] ? "rgba(" + this.config.colors[this.enemy.castleSkill] + ", 0.5)" : "transparent", this.activeSkillMarker.setPosition(a.x, a.y)) : (this.activeSkillMarker.fillColor = "transparent", this.activeSkillMarker.setPosition(-this.activeSkillMarker.width, -this.activeSkillMarker.height))
        }, this);
    this.startTime = Date.now();
    this.goldCollected = this.enemiesKilled = 0
};
Battle.timeToTicks = function (a) {
    return Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME ? 1E3 * a : Math.ceil(a * GAME_MANIFEST.fps)
};
Battle.ticksToTime = function (a) {
    return Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME ? a : 1E3 * a / GAME_MANIFEST.fps
};
Battle.prototype.init = function () {
    var a = this;
    this.castle.field.onBullet = function (c) {
        a.stage.addChild(c);
        a.bullets.push(c)
    };
    this.castle.field.onCombo = function (c) {
        c && c.length && (a.addSkill(c[0].config.type, c.length), a.castle.addCannonPower(c.length))
    };
    this.castle.init();
    var c;
    c = "font/yellow";
    asset = library.getAsset(c);
    this.moneyText = new SimpleText(library.getBitmap(c), asset.width, asset.height);
    this.moneyText.stage = this.stage;
    this.moneyText.charMap = "0123456789".split("");
    this.moneyText.charSpacing = -12;
    this.moneyText.align = SimpleText.ALIGN_LEFT;
    this.moneyText.setPosition(32, 14);
    c = "font/black";
    asset = library.getAsset(c);
    this.armorText = new SimpleText(library.getBitmap(c), asset.width, asset.height);
    this.armorText.stage = this.stage;
    this.armorText.charMap = "0123456789".split("");
    this.armorText.charSpacing = -8;
    this.armorText.align = SimpleText.ALIGN_CENTER;
    this.armorText.setPosition(this.stage.screenWidth / 2 - 7, 14);
    c = "font/power";
    asset = library.getAsset(c);
    this.powerText = new SimpleText(library.getBitmap(c), asset.width,
        asset.height);
    this.powerText.stage = this.stage;
    this.powerText.charMap = "0123456789x".split("");
    this.powerText.charSpacing = -24;
    this.powerText.align = SimpleText.ALIGN_CENTER;
    var d = this.powerText.write;
    this.powerText.write = function (a) {
        d.call(this, a);
        a = 1;
        for (var c = this.sprites.length; a < c; a++) this.sprites[a].y -= 3 * a
    };
    this.powerText.setPosition(stage.screenWidth - 34, 18);
    for (c = 0; c < this.config.castle.field.unit.types.length; c++) this.skillButton[this.config.castle.field.unit.types[c].type].onclick = Utils.proxy(this.useSkill,
        this);
    this.enemy.init()
};
Battle.prototype.run = function () {
    this.stage.start()
};
Battle.prototype.pause = function () {
    var a = new Graphics.rectangle(this.stage.screenWidth / 2, this.stage.screenHeight / 2, this.stage.screenWidth, this.stage.screenHeight);
    a.lineWidth = 0;
    a.fillColor = "rgba(0,0,0,0.5)";
    this.stage.addChild(a);
    var c = [];
    c.push(new Graphics.rectangle(-24, 0, 32, 96));
    c[0].lineWidth = 0;
    c[0].fillColor = "rgba(0,0,0,0.5)";
    a.addChild(c[0]);
    c.push(new Graphics.rectangle(24, 0, 32, 96));
    c[1].lineWidth = 0;
    c[1].fillColor = "rgba(0,0,0,0.5)";
    a.addChild(c[1]);
    a.onclick = Utils.proxy(function () {
        a.destroy =
            !0;
        this.run();
        return !1
    }, this);
    this.stage.render(this.stage.canvas);
    this.stage.stop()
};
Battle.prototype.addSkill = function (a, c) {
    c = Math.max(0, ~~c || 0) + this.skillStatus[a];
    this.setSkill(a, c)
};
Battle.prototype.setSkill = function (a, c) {
    c = Math.max(0, ~~c || 0);
    this.skillStatus[a] = Math.max(0, Math.min(this.castle.maxSkill, c));
    this.skillButton[a].value = c
};
Battle.prototype.useSkill = function (a) {
    a = a.target.type;
    if (this.skillStatus[a] < this.castle.maxSkill || this.enemy.castleSkill) return !1;
    this.enemy.castleSkill = a;
    this.setSkill(a, 0)
};
Battle.prototype.handleUnitAttack = function (a) {
    var c = a.getDamage();
    (a = this.castle.findHitTarget(a.localToGlobal(0, 0).y)) && a.hit(c)
};
Battle.prototype.handleBoss = function () {
    this.castle.destroyAllTowers()
};
Battle.prototype.tick = function (a) {
    if (this.popupScreen) return !1;
    for (var c = 0; c < this.bullets.length; c++) {
        var d = this.bullets[c], e = d.config.speed * a / 1E3;
        d.x -= e;
        if (d.x < -d.width) d.destroy = !0; else {
            var f = this.config.castle.field.cell.height / 2, g = d.localToGlobal(0, 0);
            if (this.enemy.boss && 0 < this.enemy.boss.hp) {
                var h = this.enemy.boss.localToGlobal(0, 0);
                Math.abs(h.x - g.x) < this.enemy.boss.width / 2 && Math.abs(h.y - g.y) < this.enemy.boss.height / 2 && (this.enemy.boss.hit(d.power + this.castle.field.power), d.destroy = !0)
            }
            if (!d.destroy) for (h =
                                     this.enemy.unitsRaycast(g.y - f, g.y + f), f = 0; f < h.length; f++) {
                var k = h[f], l = g.x - k.localToGlobal(0, 0).x;
                if (Math.abs(l) <= e) {
                    k.hit(d.power + this.castle.field.power);
                    d.destroy = !0;
                    break
                }
            }
            if (!d.destroy) for (f = 0; f < this.enemy.boats.length; f++) if (e = this.enemy.boats[f], h = e.localToGlobal(0, 0), h.x + e.width / 2 >= g.x && h.y - e.height / 2 <= g.y && h.y + e.height / 2 >= g.y) {
                e.hit(d.power + this.castle.field.power);
                d.destroy = !0;
                break
            }
        }
        d.destroy && (this.bullets[c] = null, this.bullets.splice(c--, 1))
    }
    this.enemy.tick(a);
    0 < this.enemy.totalMoneyProfit &&
    (this.castle.money += this.enemy.totalMoneyProfit, this.goldCollected += this.enemy.totalMoneyProfit);
    this.enemy.totalMoneyProfit = 0;
    0 < this.enemy.totalUnitsKilled && (this.enemiesKilled += this.enemy.totalUnitsKilled);
    this.enemy.totalUnitsKilled = 0;
    this.castle.towersScan(this.enemy.units);
    this.castle.tick(a);
    for (var n in this.skillButton) this.skillButton[n].tick(a);
    this.castle.money != this.moneyText.text && this.moneyText.write(this.castle.money);
    this.castle.hp != this.armorText.text && this.armorText.write(this.castle.hp);
    a = "x" + this.castle.field.power;
    a != this.powerText.text && this.powerText.write(a);
    if (this.enemy.bossIsDead && 0 >= this.enemy.unitsTotal) this.onWin()
};
Battle.prototype.popupScreen = !1;
Battle.prototype.onDefeat = function () {
    if (this.popupScreen) return !1;
    this.popupScreen = !0;
    mixer.stop(MIXER_CHANNEL_MUSIC);
    playSound("battle_lose", MIXER_CHANNEL_EFFECT);
    for (var a = this; this.bullets.length;) this.bullets.shift().destroy = !0;
    var c = function (a) {
        return 10 > a ? "0" + a : a
    }, d = "", e = Math.ceil((Date.now() - this.startTime) / 1E3);
    3600 <= e && (d = d + Math.floor(e / 3600) + ":", e %= 3600);
    d = d + c(Math.floor(e / 60)) + ":";
    d += c(e % 60);
    c = new Graphics.rectangle(this.stage.screenWidth / 2, this.stage.screenHeight / 2, this.stage.screenWidth,
        this.stage.screenHeight);
    c.fillColor = "rgba(64,0,0,0.5)";
    c.opacity = 0;
    c.onclick = function () {
        return !1
    };
    this.stage.addChild(c);
    c.fadeTo(1, Battle.timeToTicks(.3), Easing.cubic.easeIn, function (c) {
        var e = c.target.obj.stage,
            h = library.getSprite("castle/defeat", {x: e.screenWidth / 2, y: e.screenHeight / 2});
        e.addChild(h);
        var k = library.getAsset("font/black");
        c = function (a, c, d) {
            var f = new SimpleText(library.getBitmap("font/black"), k.width, k.height);
            f.stage = e;
            f.parent = h;
            f.charMap = "0123456789".split("");
            f.charSpacing = -8;
            f.align =
                SimpleText.ALIGN_LEFT;
            f.setPosition(a, c);
            f.write(d)
        };
        c(10, -21, d);
        c(10, 2, a.enemiesKilled);
        c(10, 25, [a.enemy.nextWave, a.config.enemy.wave.length].join("/"));
        c(10, 48, a.goldCollected)
    });
    GameData.money = this.castle.money;
    GameData.defeat += 1;
    this.stage.addChild(library.getSprite("button/play", {
        x: this.stage.screenWidth - 20,
        y: 20,
        onclick: function() {showSave(false);},
    }))
};
Battle.prototype.onWin = function () {
    if (this.popupScreen) return !1;
    this.popupScreen = !0;
    mixer.stop(MIXER_CHANNEL_MUSIC);
    for (playSound("battle_win", MIXER_CHANNEL_EFFECT); this.bullets.length;) this.bullets.shift().destroy = !0;
    GameData.win += 1;
    GameData.money = this.castle.money;
    var a = new Graphics.rectangle(this.stage.screenWidth / 2, this.stage.screenHeight / 2, this.stage.screenWidth, this.stage.screenHeight);
    a.fillColor = "rgba(0,64,0,0.5)";
    a.opacity = 0;
    a.onclick = function () {
        return !1
    };
    this.stage.addChild(a);
    a.fadeTo(1, Battle.timeToTicks(.3),
        Easing.cubic.easeIn, function (a) {
            a = a.target.obj.stage;
            var d = library.getSprite("castle/win", {
                x: a.screenWidth / 2,
                y: a.screenHeight / 2,
                onclick: function() {showSave(false);},
            });
            a.addChild(d)
        })
};
var GAME_ID = GAME_MANIFEST.id, stage, library, mixer, battle, MIXER_CHANNEL_MUSIC = 0, MIXER_CHANNEL_CASTLE = 1,
    MIXER_CHANNEL_ENEMY = 2, MIXER_CHANNEL_SKILL = 3, MIXER_CHANNEL_TOWER = 4, MIXER_CHANNEL_EFFECT = 5;
window.onload = function () {
    document.querySelector("head > title").innerHTML = GAME_MANIFEST.name;
    Utils.addMobileListeners(GAME_MANIFEST.landscape, !0);
    Utils.mobileCorrectPixelRatio();
    Utils.addFitLayoutListeners();
    setTimeout(function () {
        var a = Utils.getMobileScreenResolution(GAME_MANIFEST.landscape);
        Utils.globalScale = a.scale;
        Utils.createLayout(document.getElementById("main_container"), a);
        Utils.mobileHideAddressBar();
        Utils.checkOrientation(GAME_MANIFEST.landscape);
        a = new SoundsPreloader(ASSETS.sounds, TTLoader.loadComplete,
            TTLoader.showLoadProgress);
        a.maxProgressVal = 50;
        a.minProgressVal = 50;
        TTLoader.create(function () {
            document.querySelector("#progress_container").style.display = "none";
            document.querySelector("#screen_container").style.display = "block";
            document.querySelector("#screen_background_container").style.display = "block";
            for (var a = ["webkit", "moz", "khtml", "ms"], d = 0; d < a.length; d++) document.body.style[a[d] + "UserSelect"] = "none";
            window.UXMODE = !1;
            mixer = new AudioMixer("sounds", AudioMixer.isWebAudioSupport() ? 10 : 1);
            setTimeout(init,
                0)
        }, GAME_MANIFEST.landscape);
        library = new AssetsLibrary(Utils.imagesRoot, Utils.globalScale, ASSETS.bitmaps);
        library.load(function () {
            var a = new SoundsPreloader(ASSETS.sounds, TTLoader.loadComplete, TTLoader.showLoadProgress);
            a.maxProgressVal = 50;
            a.minProgressVal = 50;
            a.load()
        }, TTLoader.showLoadProgress, 0, 50);
        Utils.switchToTimeMode(1E3 / 24)
    }, 600)
};

function createStage() {
    stage && stage.destroy();
    var a = Utils.getScaleScreenResolution(1, GAME_MANIFEST.landscape);
    return stage = new GameStage(a, GAME_MANIFEST.fps)
}

function init() {
    //showMenu()
    showUpgrades();
}

function showMenu() {
    playSound("music", MIXER_CHANNEL_MUSIC);
    var a = createStage(), c = library.getSprite("background/intro", {x: a.screenWidth / 2, y: a.screenHeight / 2});
    c.setStatic(!0);
    a.addChild(c);
    a.addChild(library.getSprite("button/menu/play", {
        x: a.screenWidth - 49,
        y: a.screenHeight - 118,
        onclick: function () {
            playSound("shield", MIXER_CHANNEL_EFFECT);
            showUpgrades()
        }
    }));
    a.addChild(library.getSprite("button/menu/clear_data", {
        x: a.screenWidth - 76, y: a.screenHeight - 72, onclick: function (a) {
            playSound("crash", MIXER_CHANNEL_EFFECT);
            clearGameData();
            a.target.onclick = null;
            a.target.opacity = .5
        }
    }));
    a.addChild(library.getSprite("button/menu/more_games", {
        x: a.screenWidth - 86,
        y: a.screenHeight - 26,
        onclick: function (a) {
            playSound("skill_yellow", MIXER_CHANNEL_EFFECT);
            window.open(ExternalAPI.getMoreGamesURL(), "_blank")
        }
    }));
    a.addChild(library.getSprite("button/sound", {
        x: 16,
        y: 16,
        opacity: GameData.sound ? 1 : .5,
        onclick: function (a) {
            a.target.opacity = toggleSound() ? 1 : .5
        }
    }));
    a.start();
    a.refreshBackground()
}

function createBattle() {
    playSound("game", MIXER_CHANNEL_MUSIC);
    var a = createStage();
    battle = new Battle(GAME_CONFIG, a);
    battle.init();
    battle.run();
    a.onpretick = function () {
    };
    a.onposttick = function (a) {
        battle && battle.tick(a.delta)
    };
    a.start();
    a.refreshBackground()
}

function showSave(isWin) {
    battle && (battle.stage.destroy(), battle = null);
    var a = createStage(), c = library.getSprite("background/upload", {x: a.screenWidth / 2, y: a.screenHeight / 2});
    c.setStatic(!0);
    a.addChild(c);
    window.UXMODE = !1;
    var d = new Graphics.circle(414, 180, 20);
    d.fillColor = "transparent";
    d.lineWidth = 0;
    d.N = 0;
    d.T = !1;

    a.start();
    a.refreshBackground()

    saveGameData(isWin);
    //showUpgrades();

    // this.stage.addChild(library.getSprite("button/play", {
    //     x: this.stage.screenWidth - 20,
    //     y: 20,
    //     onclick: function() { showUpgrades();},
    // }))
}

function showRank() {
    battle && (battle.stage.destroy(), battle = null);
    var a = createStage(), c = library.getSprite("background/upgrade", {x: a.screenWidth / 2, y: a.screenHeight / 2});
    c.setStatic(!0);
    a.addChild(c);
    window.UXMODE = !1;
    var d = new Graphics.circle(414, 180, 20);
    d.fillColor = "transparent";
    d.lineWidth = 0;
    d.N = 0;
    d.T = !1;

    a.start();
    a.refreshBackground()
    saveGameData();
    //showUpgrades();

    this.stage.addChild(library.getSprite("button/play", {
        x: this.stage.screenWidth - 20,
        y: 20,
        onclick: function() { showUpgrades();},
    }))
}

function showWin() {

}


var firstTimeMoneyCheat = 2E4;

function showUpgrades() {
    playSound("music", MIXER_CHANNEL_MUSIC);
    playSound("upgrades", MIXER_CHANNEL_EFFECT);
    GameData.money += GameData.firstTimeMoneyCheat || 0;
    GameData.firstTimeMoneyCheat = 0;
    //saveGameData();
    battle && (battle.stage.destroy(), battle = null);
    var a = createStage(), c = library.getSprite("background/upgrade", {x: a.screenWidth / 2, y: a.screenHeight / 2});
    c.setStatic(!0);
    a.addChild(c);
    window.UXMODE = !1;
    var d = new Graphics.circle(414, 180, 20);
    d.fillColor = "transparent";
    d.lineWidth = 0;
    d.N = 0;
    d.T = !1;
    d.onclick = function (c) {
        if (5 <=
            ++d.N) {
            playSound("roar", MIXER_CHANNEL_CASTLE);
            window.UXMODE = !0;
            var e;
            e = new Graphics.rectangle(444, 215, 8, 3);
            e.fillColor = "rgba(0,0,255,0.5)";
            e.lineWidth = 0;
            a.addChild(e);
            e = new Graphics.rectangle(444, 218, 8, 3);
            e.fillColor = "rgba(255,255,0,0.5)";
            e.lineWidth = 0;
            a.addChild(e);
            c.target.destroy = !0
        }
        d.T || (a.setTimeout(function () {
            d.N = 0;
            d.T = !1
        }, 1E3), d.T = !0)
    };
    a.addChild(d);
    for (var c = "power attack armor skillReload goldPerViking towersCount towersLevel cannons skill_red skill_yellow skill_green skill_blue".split(" "),
             e = 0, f = c.length; e < f; e++) {
        var g = new UpgradeSlot;
        g.setPosition(50 + e % 4 * 80, 80 + 80 * Math.floor(e / 4));
        g.setName(c[e]);
        a.addChild(g)
    }
    var h = library.getSprite("castle/money/back", {x: UpgradeSlot.items[3].x + 120, y: UpgradeSlot.items[3].y});
    a.addChild(h);
    fontId = "font/yellow";
    asset = library.getAsset(fontId);
    h.moneyText = new SimpleText(library.getBitmap(fontId), asset.width, asset.height);
    h.moneyText.stage = this.stage;
    h.moneyText.parent = h;
    h.moneyText.charMap = "0123456789".split("");
    h.moneyText.charSpacing = -12;
    h.moneyText.align =
        SimpleText.ALIGN_CENTER;
    h.moneyText.setPosition(4, -4);
    h.moneyText.write(GameData.money);
    c = library.getSprite("button/play", {x: a.screenWidth - 20, y: 20});
    a.addChild(c);
    c.onclick = function () {
        playSound("shield", MIXER_CHANNEL_EFFECT);
        for (a.removeChild(h); UpgradeSlot.items.length;) a.removeChild(UpgradeSlot.items.shift());
        createBattle()
    };
    a.addChild(library.getSprite("button/sound", {
        x: 16,
        y: 16,
        opacity: GameData.sound ? 1 : .5,
        onclick: function (a) {
            a.target.opacity = toggleSound() ? 1 : .5
        }
    }));
    a.addChild(library.getSprite("button/menu/more_games",
        {
            x: a.screenWidth - 86, y: a.screenHeight - 26, onclick: function (a) {
                playSound("skill_yellow", MIXER_CHANNEL_EFFECT);
                window.open(ExternalAPI.getMoreGamesURL(), "_blank")
            }
        }));
    a.onpretick = function () {
    };
    a.onposttick = function () {
        h.moneyText.write(GameData.money)
    };
    a.start();
    a.refreshBackground()
}

var currentMusic = null;

function playSound(a, c) {
    if (mixer) {
        c = "undefined" == typeof c ? MIXER_CHANNEL_EFFECT : c;
        var d = c == MIXER_CHANNEL_MUSIC;
        !d && AudioMixer.isWebAudioSupport() ? GameData.sound && mixer.play(a, !1, !0, c || MIXER_CHANNEL_EFFECT) : GameData.music && d && currentMusic != a && (currentMusic = a, GameData.sound && mixer.play(a, !0, !1, 0))
    }
}

function toggleSound(a) {
    GameData.sound = "undefined" == typeof a ? !GameData.sound : !!a;
    toggleMusic(GameData.music);
    //saveGameData();
    !GameData.sound && AudioMixer.isWebAudioSupport() && (mixer.stop(MIXER_CHANNEL_CASTLE), mixer.stop(MIXER_CHANNEL_ENEMY), mixer.stop(MIXER_CHANNEL_SKILL), mixer.stop(MIXER_CHANNEL_TOWER), mixer.stop(MIXER_CHANNEL_EFFECT));
    return GameData.sound
}

function toggleMusic(a) {
    GameData.music = "undefined" == typeof a ? !GameData.music : !!a;
    //saveGameData();
    GameData.music && GameData.sound ? currentMusic && (a = currentMusic, currentMusic = null, playSound(a, MIXER_CHANNEL_MUSIC)) : mixer.stop(MIXER_CHANNEL_MUSIC);
    return GameData.music
}

function getGameDataId() {
    return "playtomax_" + GAME_ID + "_data"
}

var initData = function () {
    GameData = {
        sound: 1,
        music: 1,
        money: 0,
        win: 0,
        defeat :0 ,
        upgrade: {
            power: 0,
            goldPerViking: 0,
            skillReload: 0,
            towersCount: 0,
            towersLevel: 0,
            skillComet: 0,
            skillBugs: 0,
            skillPalm: 0,
            skillGold: 0,
            cannons: 0,
            attack: 0,
            armor: 0
        }
    };
}

var loadData = function () {
    nebApiCall("load", [myNebAdress], function (ret) {
        console.log("loadData", ret);
        if (ret) {
            GameData = ret;
        }
        console.log("GameData", GameData);
    })
}

var saveData = function (data) {
    nebPayCall("save", [data], 0, function (ret) {
        console.log("saveData begin", ret);
    }, function (ret) {
        console.log("saveData2", ret);
        GameData.money += 10000;
        showUpgrades();
    })
}

var saveDataWin = function (data) {
    nebPayCall("saveWin", [data], 0, function (ret) {
        console.log("saveWin begin", ret);
    }, function (ret) {
        console.log("saveWin2", ret);
        showUpgrades();
    })
}

function loadGameData() {
    (!myNebAdress)
    loadData();
    // var a = Utils.getCookie(getGameDataId());
    // return a ? JSON.parse(a) : {
    //     sound: 1,
    //     music: 1,
    //     money: 0,
    //     upgrade: {
    //         power: 0,
    //         goldPerViking: 0,
    //         skillReload: 0,
    //         towersCount: 0,
    //         towersLevel: 0,
    //         skillComet: 0,
    //         skillBugs: 0,
    //         skillPalm: 0,
    //         skillGold: 0,
    //         cannons: 0,
    //         attack: 0,
    //         armor: 0
    //     }
    // }
}

function saveGameData(isWin) {
    //Utils.setCookie(getGameDataId(), JSON.stringify(GameData))
    var strJson = JSON.stringify(GameData);
    console.log("saveGameData", strJson);
    if(isWin)
        saveDataWin(strJson);
    else
        saveData(strJson);
}

function clearGameData() {
    GameData = {
        sound: 1,
        music: 1,
        money: 0,
        win : 0,
        defeat: 0,
        upgrade: {
            power: 0,
            goldPerViking: 0,
            skillReload: 0,
            towersCount: 0,
            towersLevel: 0,
            skillComet: 0,
            skillBugs: 0,
            skillPalm: 0,
            skillGold: 0,
            cannons: 0,
            attack: 0,
            armor: 0
        }
    };
    //saveGameData()
}

var GameData = {}

//loadGameData();

function showMoreGames() {
    window.open(GAME_MANIFEST.moreGames, "_blank")
}

function Upgrade(a) {
    var c = {
        update: function () {
            var a = GAME_CONFIG.castle.upgrade[this.name];
            this.level = GameData.upgrade[this.name] || 0;
            this.progress = this.level / a.maxLevel;
            this.cost = Math.ceil(a.cost * (1 > this.progress ? 1 + a.costRatio * (this.level + 1) : 0))
        }, buy: function () {
            if (1 == this.progress || this.cost > GameData.money) return !1;
            if(!GameData.upgrade[this.name])
                GameData.upgrade[this.name] = 0;
            GameData.upgrade[this.name]++;
            GameData.money -= this.cost;
            //saveGameData();
            this.update();
            playSound("money", MIXER_CHANNEL_EFFECT);
            return !0
        }
    };
    c.name = a;
    c.update();
    return c
}

Upgrade.get = function (a) {
    return GAME_CONFIG.castle.upgrade[a] ? new Upgrade(a) : null
};
Upgrade.state = {
    power: 0,
    goldPerViking: 0,
    skillReload: 0,
    towersCount: 0,
    towersLevel: 0,
    cannons: 0,
    attack: 0,
    armor: 0,
    skillComet: 0,
    skillBugs: 0,
    skillPalm: 0,
    skillGold: 0
};
Upgrade.prototype.getLevel = function () {
    return this.level || 0
};
Upgrade.prototype.setLevel = function (a) {
    a = Math.max(0, Math.min(this.config.maxLevel || 0, a || 0));
    this.level = Upgrade.state[this.name] = a
};
Upgrade.prototype.getCost = function (a) {
    "undefined" == typeof a && (a = 1 * this.level + 1);
    a = Math.max(0, Math.min(this.config.maxLevel, a || 1));
    return a >= this.config.maxLevel ? 0 : Math.floor(this.config.cost * (1 + a * this.config.costRatio))
};
Upgrade.prototype.getValue = function (a) {
    return this.config.getValue(this.level || 0, a || 0)
};

//loadGameData();

function random(a, c, d) {
    if (a && a instanceof Array) return c = Math.round(random(0, a.length - 1)), a.length ? a[c] : void 0;
    var e = Math.random();
    if (void 0 === a) return e;
    void 0 === c && (c = 0);
    e *= Math.abs(a - c);
    e = Math.min(a, c) + e;
    return d ? e : Math.round(e)
};