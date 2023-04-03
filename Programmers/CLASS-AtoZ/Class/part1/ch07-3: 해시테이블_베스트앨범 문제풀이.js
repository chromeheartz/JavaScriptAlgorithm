/* Ch07-3. 해시테이블 베스트앨범 문제풀이 */

/*
  * 문제 설명 *

  스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 
  베스트 앨범을 출시하려 합니다. 
  노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

  - 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
  - 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
  - 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
  - 노래의 장르를 나타내는 문자열 배열 genres와 
  노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
  베스트 앨범에 들어갈 노래의 고유 번호를 순서대로
  return 하도록 solution 함수를 완성하세요.

  * 문제 풀이 *

  핵심키워드는 "묶는것" 과 "정렬" 이 될것같다.

  1. 일단 장르가 문자열로 되어있는데 
  매번 순회를 하면 늦기 때문에 하나로 묶기위해
  해시테이블을 이용할것이다
  javascript에서는 Map이나 obj를 쓸 수 있는데
  이번엔 Map을 이용해서 상수를 만들것

  const genreMap = new Map()

  2. 계산하기 편하도록 장르배열, 재생배열을 하나로 묶어줄것이다
  묶어줄 때 고차함수 map을 이용해서 각 장르값과 인덱스값을 불러오고
  이것들을 배열로 묶어줄것이다. 
  장르이름, 재생횟수
  그 이후에 forEach를 이용해서
  묶은아이들로 데이터를 만들어줄것이다. 묶어준요소를 하나씩 빼준다
  비구조화할당으로 편하게 빼준다

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(({ genre, play },index) => {
      
    })

  3. 데이터를 만들기위해 장르의 맵을 설정할것인데, 
  장르의 이름이 키가되고
  데이터에 재생횟수를 더해줄것이다. 
  기존에 있던 해시에 있던 값과 계속 더해줄것이다
  data라는 변수를 빼서 작업해줄것

  그 후에 노래 리스트를 넣어줄것이다. 마지막에 노래리스트를
  리턴해야하기때문. 기존에 있던 곡들을 spread operator로 넣어주고
  추가적으로 입력받은 play값을 넣어줄것이다.
  이때 재생횟수와함께 인덱스도 같이 넣어주어야 순서를 확실히 알 수 있다

  
  const data = genreMap.get(genre)
  genreMap.set(genre, {
    total: data.total + play,
    songs: [...data.songs, { play, index }]
  })

  4. 정렬을 재생순(내림차순)으로 해주어야한다
  정렬을 마쳤다면 두개까지만 잘라주어야한다

  .sort((a,b) => b.play - a.play)
  .slice(0,2)

  5. 제일 처음에는 값이 없기 때문에
  const data = 부분에서 undefined가 나올수있다
  기본값을 넣어줌. total은 0부터 시작하고, 배열은 빈배열로 초기화
   
  const data = genreMap.get(genre) || { total: 0, songs: []};

  6. 데이터를 만들어주었다면 원하는것에 따라 반환값을 만들어주어야한다.
  먼저, genre Map에 있는 값들을 빼오려고
  entries()함수를 이용한다.
  이 함수는 iterable 객체를 반환하기 때문에 배열을 만들어주기 위해서 필요하다

  console.log([...genreMap.entries()])로 한번 확인
  
  7. 제일 첫번째 조건
  같은 장르끼리 묶는데 많이 재생된 장르들 먼저 수록해야하니
  토탈 순으로 정렬해준다
  0번째 인덱스가 장르이름, 1번재가 데이터 오브젝트

  .sort((a,b) => b[1].total - a[1].total)

  8. 정렬 후에 flatMap을 이용
  두번째 object에 있는것들을 하나의 배열로 만들어준다
  하나의 배열에 다 담겨있는것을 확인 할 수 있다
  flat은 평탄하게 한다는 뜻이다 만약 그냥 map으로 하게되면
  리스트안에 리스트로 들어가버리게 된다

  .flatMap(item => item[1].songs)

  9. 다른요소는 다 버리고
  인덱스만 리턴해준다


  *** 문제의 핵심키워드
  묶는다, 정렬

  묶는다는 것이 나오면 어느정도 해시테이블과 연관이 있을수있다
  앞으로 문제를 풀때 핵심키워드를 잘 볼 수 있도록

*/

// 1. 같은 장르끼리 묶어야한다.
// 2. 묶인 노래들을 재생순으로 정렬을 해야한다.
// 3. 노래를 2개까지 자르는 작업을 해야한다.

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

  return [...genreMap.entries()]
    .sort((a,b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index)
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])