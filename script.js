const players = [
  {
    name: "Lamine Yamal",
    team: "Barcelona",
    position: "Extremo",
    minutes: 2450,
    goals: 9,
    assists: 13,
    shots: 52,
    rating: 8.1
  },
  {
    name: "Kylian Mbappé",
    team: "Real Madrid",
    position: "Delantero",
    minutes: 2780,
    goals: 24,
    assists: 5,
    shots: 105,
    rating: 8.3
  },
  {
    name: "Jude Bellingham",
    team: "Real Madrid",
    position: "Centrocampista",
    minutes: 2650,
    goals: 11,
    assists: 8,
    shots: 61,
    rating: 7.9
  },
  {
    name: "Pedri",
    team: "Barcelona",
    position: "Centrocampista",
    minutes: 2300,
    goals: 4,
    assists: 7,
    shots: 32,
    rating: 7.7
  },
  {
    name: "Vinícius Jr.",
    team: "Real Madrid",
    position: "Extremo",
    minutes: 2500,
    goals: 16,
    assists: 9,
    shots: 84,
    rating: 8.0
  }
];

function searchPlayer(query) {
  return players.filter(player =>
    player.name.toLowerCase().includes(query.toLowerCase())
  );
}

console.log("Football Insights iniciado");
console.log(players);
