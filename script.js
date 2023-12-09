"use strict";

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let playedCards = [];

let number = 0;
let isGame = true;
const cardsField = document.getElementById("cards");
const realCards = document.getElementById("real_cards");
const playedCardsField = document.getElementById("played_cards");
const info = document.getElementById("info");
const rel = document.getElementById("reload");

info.innerHTML = "Take the card!";

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

shuffle(cards);

cardsField.innerHTML = cards;
