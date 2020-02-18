const team = {
  _players : [
   {firstName: 'Phil', lastName: 'Heath', age: 37},
   {firstName: 'Kai', lastName:'Greene', age: 38},
   {firstName: 'Flex', lastName: 'Lewis', age: 34}   
  ],
  _games : [
  { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
  { opponent: 'Eagles', teamPoints: 38, opponentPoints: 30 },
  { opponent: 'Bulls', teamPoints: 47, opponentPoints: 27 },
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = {
     firstName : firstName,
      lastName : lastName,
      age : age,
    };
      return this.players.push(player);
  },
  addGame (opponentName, teamPoints, opponentPoints) {
    let game = {
      opponentName : opponentName,
      teamPoints : teamPoints,
      opponentPoints : opponentPoints
    };
    return this.games.push(game);
  }
};

team.addPlayer ('Steph', 'Curry', 28);
team.addPlayer ('Lisa', 'Leslie', 44);
team.addPlayer ('Bugs', 'Bunny', 76);

team.addGame ('Lizards', 40, 32);
team.addGame ('Shields', 34, 26);
team.addGame ('Killers', 36, 34);


console.log(team);









