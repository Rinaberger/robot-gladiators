// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    else {
      window.alert("You don't have enough money!");
    }
  }, // comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
}

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10,14)
    },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trunble",
    attack: randomNumber(10,14)  
  }
];

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


  var fight = function(enemy) {
   
    //repeat and execute as long as the enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerInfo.money = playerInfo.money - 10;
            console.log("playerMoney", playerInfo.money);
            break;
        }
      }
          // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemy.health = enemy.health - playerInfo.attack;
        console.log(
          playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
              );
        
              // check enemy's health
              if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
              break;
              } else {
              window.alert(enemy.name + " still has " + enemy.health + " health left.");
              }
        
              // remove player's health by subtracting the amount set in the enemyAttack variable
              playerInfo.health = playerInfo.health - enemy.attack;
              console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
              );
        
              // check player's health
              if (playerInfo.health <= 0) {
              window.alert(playerInfo.name + " has died!");
              break;
              } else {
              window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
              }
               // if player choses to skip
            }
          };  
                

var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
      //call fight function with enemy-robot
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumnber (40, 60);
      fight(pickedEnemyObj);
      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");
        //if yes, take them to the store() function
        if (storeConfirm) {
        shop ();
      }
    }
    }
    else {
      window.alert("You have lost your robot in battle! Game over!");
      break;
    }
  }
  //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();

};

// function to end the entire game

var endGame = function() {
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }

  //ask the player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();  
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  // ask the player what they'd like to do

  var shopOptionPrompt = window.prompt (
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": //new case 
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": //new case
    case "leave":
      window.alert("Leaving the store.");
      // do nothing so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      //call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// start the game when the page loads
startGame ();