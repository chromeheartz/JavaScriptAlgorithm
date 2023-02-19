
function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    // .forEach((zip,index) => {
    //   const genre = zip[0];
    //   const play = zip[1]
    // })
    .forEach(([ genre, play ],index) => {
      const data = genreMap.get(genre) || { total: 0, songs: []};
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a,b) => b.play - a.play)
          .slice(0, 2)
      })
    })

  console.log([...genreMap.entries()])
}


solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])