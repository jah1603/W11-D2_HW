const assert = require("assert");
const Game = require("../game.js");
const Card = require("../card.js");
const Player = require("../player.js");

describe("Game", function(){

  let game;

  beforeEach(function(){
    game = new Game("Top Trumps");
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Scarlet Witch", 7, 10, 5);
    card3 = new Card("Black Widow", 8, 6, 9);
    card4 = new Card("The Flash", 7, 4, 10);
    card5 = new Card("Wonder Woman", 8, 7, 5);
    card6 = new Card("Batman", 10, 5, 6);
    game.addCardToDeck(card1);
    game.addCardToDeck(card2);
    game.addCardToDeck(card3);
    game.addCardToDeck(card4);
    game.addCardToDeck(card5);
    game.addCardToDeck(card6);
    player1 = new Player("Zsolt");
    player2 = new Player("John");
    game.addPlayer(player1);
    game.addPlayer(player2);
  });

  it("game has name", function(){
    const result = game.name;
    assert.strictEqual(result, "Top Trumps");
  })

  it("cards countable", function(){
    const result = game.countCards();
    assert.strictEqual(result, 6);
  })

  it("should be able to deal", function(){
    game.deal(player1, player2);
    const result = player1.countCards();
    assert.strictEqual(result, 3);
  })

  it("player can choose card", function(){
    game.deal(player1, player2);
    const valueResult = player1.findAgilityValue();
    assert.strictEqual(valueResult, 7);
  })

  it("should return a card", function(){
    game.deal(player1, player2);
    const p1card = player1.chooseCard();
    const result = p1card.name;
    assert.strictEqual(result, "Superman");
  })

  it("can compare values", function(){
    game.deal(player1, player2);
    const p1card = player1.chooseCard();
    const p2card = player2.chooseCard();
    const result = game.compareCardValues(p1card, p2card, "intelligence");
    assert.strictEqual(result, "Player 2 wins the turn.")
  })

  it("should return a number", function(){
    game.deal(player1, player2);
    const p1card = player1.chooseCard();
    const p2card = player2.chooseCard();
    const result = p2card.intelligence;
    assert.strictEqual(typeof result, "number");
  })

  it("winner declared", function(){
      game.deal(player1, player2);
      const p1card = player1.chooseCard();
      const p2card = player2.chooseCard();
      game.transferCards(player1, player2, p1card, p2card, "strength");
      const p1card2 = player1.chooseCard();
      const p2card2 = player2.chooseCard();
      game.transferCards(player1, player2, p1card2, p2card2, "strength");
      const p1card3 = player1.chooseCard();
      const p2card3 = player2.chooseCard();
      game.transferCards(player1, player2, p1card3, p2card3, "agility");
      const result = game.declareWinner();
      assert.strictEqual("Zsolt is the winner", result);

  })
});
