/*

Copyright � 2011 by Ryan Mottley, Johnathon Wilkes, Kristin Krist, Garrick Aub�, & Chris Truitt

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

/**
*	@class Score
*	@author Ryan Mottley, Chris Truitt
**/
var Score = Score || {};

/**
*	@constructor
**/

Score.initialize = function () {
    this.myScore = 0;
	this.myCash = 150;
	this.sunHealth = 200000;
}

/**
*	@method setScore - sets Score and Cash
*	@static
*	@param score {Integer} score given from enemy
*	@param cash {Integer} cash given from enemy
**/
  
Score.setScore = function (score, cash) {
	this.myCash += cash;
    this.myScore += score;
	Score.updateDiv();
	Score.towerCheck();
}

/**
*	@method getScore - returns Score
*	@static
**/
  
Score.getScore = function () {
    return this.myScore;
}

/**
*	@method getCash - returns Cash
*	@static
**/

Score.getCash = function () {
	return this.myCash;
}

/**
*	@method getHealth - returns level Health
*	@static
**/

Score.getHealth = function () {
	return this.sunHealth;
}

/**
*	@method setHealth - set's level health at the beginning of the game
*	@static
**/

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
		Tower.activate("Mercury");
	}
	else if (this.myScore >= 1600) {
		Tower.activate("Venus");
	}
	else if (this.myScore >= 1400) {
		Tower.activate("Mars");
	}
	else if (this.myScore >= 1200) {
		Tower.activate("Jupiter");
		}
	else if (this.myScore >= 900) {
		Tower.activate("Saturn");
		}
	else if (this.myScore >= 600) {
		Tower.activate("Uranus");
		}
	else if (this.myScore >= 400) {
		Tower.activate("Neptune");
		}
	else if (this.myScore >= 200) {
		Tower.activate("Pluto");
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