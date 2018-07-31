const Player = function(name){
  this.name = name;
  this.cards = [];
}

Player.prototype.countCards = function(){
  return this.cards.length;
}

Player.prototype.chooseCard = function(){
  return this.cards[0];
}

Player.prototype.findAgilityValue = function(){
  const chosenCard = this.chooseCard();
  return chosenCard.agility;
}

Player.prototype.findIntelligenceValue = function(){
  const chosenCard = this.chooseCard();
  return chosenCard.intelligence;
}

Player.prototype.findStrengthValue = function(){
  const chosenCard = this.chooseCard();
  return chosenCard.strength;
}


module.exports = Player;
