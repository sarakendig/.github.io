// Game Mechanics
const Game = {
    start(playerName) {
        this.reset(playerName);
        this.setupArena(playerName);
    },

    reset(playerName) {
        switch (playerName) {
            case "pikachu":
                player = new Player(playerName, 70, "pika ball", 30);
                // console.log("Pikachu is made")
                break;
            case "bulbasaur":
                player = new Player(playerName, 70, "vine whip", 50);
                // console.log("Bulbasaur is made")
                break;
            case "eevee":
                player = new Player(playerName, 70, "bite", 20);
                // console.log("Eevee is made")
                break;
            case "charmander":
                player = new Player(playerName, 70, "fire fang", 20);
                // console.log("Charmander is made")
                break;
        }
        let getChoose = $(".pokemonimg");
        getChoose.html(
            `<img src="imgs/player/${playerName}.png" alt="img-player">`
        );
        $(".choose").append(getChoose);
        $("#start-game").on("click", () => {
            changePage("arena", "main", "choose");
            this.setupArena(playerName);
            this.generateEnemy();
        });

        changePage("choose", "main", "arena");
    },

    setupArena(playerName, hp, move, damage) {
        switch (playerName) {
            case "pikachu":
                player = new Player(playerName, 70, "pika ball", 30);
                // console.log("Pikachu is made")
                break;
            case "bulbasaur":
                player = new Player(playerName, 70, "vine whip", 50);
                // console.log("Bulbasaur is made")
                break;
            case "eevee":
                player = new Player(playerName, 70, "bite", 20);
                // console.log("Eevee is made")
                break;
            case "charmander":
                player = new Player(playerName, 70, "fire fang", 20);
                // console.log("Charmander is made")
                break;
        }

        grabActionsBox = $("#actionsBox");
        grabTextBox = $("#textbox");
        grabPlayerStats = $("#playerstats");
        grabPlayer = $(".playerimg");

        //populate  actions box

        //populate text box, pokemon attacked and did X damage.

        grabTextBox.html(`<div><h1>Press the ATTACK button to start battle.</h1></div>`);

        $('#textbox').append(grabTextBox)

        //populate  player pokemon image
        grabPlayer.html(
            `<img src="imgs/player/${playerName}back.png" alt="img-player">`
        );

        $(".playerimg").append(grabPlayer);
        $("#player").append(".playerimg");

        //populate  player stats
        grabPlayerStats.html(`<div><h3>${playerName}</h3><h3>${player.hp}</h3></div>`);

        $("#playerStats").append(grabPlayerStats);

        //attack button
        $("#attack").on("click", () => {
            fight();
        });
    },

    generateEnemy() {
        let enemy1 = new Enemy('mew', 80, "psy bolt", 15);
        let enemy2 = new Enemy('tentacool', 60, "wrap", 10);
        let enemy3 = new Enemy('vulpix', 70, "flare", 20);
        let enemy4 = new Enemy('combusken', 70, "smash kick", 20);
        let randomEnemy = Math.floor(Math.random() * Math.floor(4));
        console.log(randomEnemy)
        switch (randomEnemy) {
            case 0:
                enemy = enemy1;
                break;
            case 1:
                enemy = enemy2;
                break;
            case 2:
                enemy = enemy3;
                break;
            case 3:
                enemy = enemy4;
                break;
        }
        
        let grabEnemyStats = $("#enemystats");
        let grabEnemy = $(".enemyimg");

        //populate  enemy pokemon image
        grabEnemy.html(`<img src="imgs/enemy/${enemy.enemyName}.png" alt="img-enemy">`);

        $(".enemyimg").append(grabEnemy);
        $("#enemy").append(".enemyimg");

        //populate  enemy stats
        grabEnemyStats.html(`<div><h3>${enemy.enemyName}</h3><h3>${enemy.hp}</h3></div>`);

        $("#playerStats").append(grabPlayerStats);
    },


};

let changePage = (show, hide, hide2) => {
    div1 = document.getElementById(show);
    div2 = document.getElementById(hide);
    div3 = document.getElementById(hide2);

    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
};

// Pokemon class

// class Pokemon {
//     constructor(hp, move, damage) {
//         this.hp = hp;
//         this.move = move;
//         this.damage = damage;
//     }

//     attack(enemy) {
//         enemy.hp -= this.move;
//         enemy.announceHealth();
//     }
// }

// player

let player;

class Player {
    constructor(playerName, hp, move, damage) {
        this.playerName = playerName;
        this.hp = hp;
        this.move = move;
        this.damage = damage;
    }
};


//enemy

let enemy;

class Enemy {
    constructor(enemyName, hp, move, damage) {
        this.enemyName = enemyName;
        this.hp = hp;
        this.move = move;
        this.damage = damage;
    }
};


//attack

let fight = () => {
    let playerDamage = player.damage;
    let enemyDamage = enemy.damage;
    let playerHp = player.hp;
    let enemyHp = enemy.hp;

    while(playerHp > 0 && enemyHp > 0) {
        let playerTurn = true;
        if (playerTurn) {
            enemyHp -= playerDamage;
            enemyHp = enemyHp - playerDamage;
            console.log(player.move + ' does ' + player.damage);
        } else {
            playerHp -= enemyDamage;
            playerHp = playerHp - enemyDamage;
            console.log(enemy.move + ' does ' + enemy.damage);
    }
    playerTurn ==! playerTurn
}

};


// console.log(Game.reset())

// jQuery

$(() => {});

//citing

///css-tricks.com for how to make a div clickable and flexbox use
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

// https://code.sololearn.com/W3087wxM8ov3/#js

//switch case I learned on youtube awhile ago. i dont recall from who. 

