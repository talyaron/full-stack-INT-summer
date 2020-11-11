DB.collection('games').doc('letterGame').set({
    turnCount:1,
    word: "",
    player1:{score:0,username:""},
    player2:{score:0,username:""},
    counter:30
});
