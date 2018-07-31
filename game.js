const Game = function(name){
  this.name = name;
  this.players = [];
  this.deck = []
}

Game.prototype.addPlayer = function(playerName){
  this.players.push(playerName);
};

Game.prototype.deal = function(player1, player2){
  const firstHalf = this.deck.slice(0, (this.deck.length/2));
  const secondHalf = this.deck.slice(this.deck.length/2, this.deck.length);
  // adding first half to player 1
  for (card of firstHalf) {
    player1.cards.push(card);
  }
  for (card of secondHalf) {
    player2.cards.push(card);
  }
}

Game.prototype.addCardToDeck = function(card){
  this.deck.push(card);
}

Game.prototype.countCards = function(){
  return this.deck.length;
}

Game.prototype.declareWinner = function(){
  for (player of this.players){
  if (player.countCards() == 6){
    result = `${player["name"]} is the winner`
    return result;
  }
  else {result = "No winner yet"}
  }
  return result;
}

Game.prototype.compareCardValues = function(card1, card2, attribute){
  if (card1[attribute] > card2[attribute]) {
    result = "Player 1 wins the turn."
  } else if (card2[attribute] > card1[attribute]) {
    result = "Player 2 wins the turn."
  } else {
  result = "It's a draw"
  }
  return result;
}

Game.prototype.transferCards = function(player1, player2, card1, card2, attribute){
  if (card1[attribute] > card2[attribute]) {
    player1.cards.splice(0, 1);
    player2.cards.splice(0, 1);
    player1.cards.push(card1);
    player1.cards.push(card2);
  } else if (card2[attribute] > card1[attribute]) {
    player2.cards.splice(0, 1);
    player1.cards.splice(0, 1);
    player2.cards.push(card1);
    player2.cards.push(card2);
  }
  else {return null};
  }


module.exports = Game;
