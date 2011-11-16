var Score = Score || {};

Score.initialize = function () {
    this.myScore = 0;
	this.myCash = 150;
	this.sunHealth = 200000;
}
  
Score.setScore = function (score, cash) {
	this.myCash += cash;
    this.myScore += score;
	Score.updateDiv();
	Score.towerCheck();
}
  
Score.getScore = function () {
    return this.myScore;
}

Score.getCash = function () {
	return this.myCash;
}

Score.getHealth = function () {
	return this.sunHealth;
}

Score.setHealth = function () {
	this.sunHealth -= 10000;
	Score.updateDiv();
	if (this.sunHealth == 0)
	{
		gameOn = false;
		$("#GameOver").css("display", "block");
	}
}
  
Score.towerCheck = function () {
	/*Tower.activate("Ultimate");
	Tower.activate("Rapid");
	Tower.activate("Fire");
	Tower.activate("Splash");
	Tower.activate("Sniper");
	Tower.activate("Poison");
	Tower.activate("Laser");
	Tower.activate("Slow");*/
	
	if (this.myScore >= 1800) {
		Tower.activate("Ultimate");
	}
	else if (this.myScore >= 1600) {
		Tower.activate("Rapid");
	}
	else if (this.myScore >= 1400) {
		Tower.activate("Fire");
	}
	else if (this.myScore >= 1200) {
		Tower.activate("Splash");
		}
	else if (this.myScore >= 900) {
		Tower.activate("Sniper");
		}
	else if (this.myScore >= 600) {
		Tower.activate("Poison");
		}
	else if (this.myScore >= 400) {
		Tower.activate("Laser");
		}
	else if (this.myScore >= 200) {
		Tower.activate("Slow");
		}
}

Score.buyTower = function(towerPrice) {
	this.myCash -= towerPrice;
	Score.updateDiv();
}

Score.restartGame = function () {
	Score.initialize();
	Score.updateDiv();
}

Score.updateDiv = function () {
	$("#scoreDisplay").html("<div>Wave: " + Creep.getWave() + " Score: " + Score.getScore() + " Cash: $" + Score.getCash() + "<br>Time to deep freeze: " + Score.getHealth() + "</div>");
}