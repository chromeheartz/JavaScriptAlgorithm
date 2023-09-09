/* _____________ LVB 문자열출력하기 _____________ */

/*
  ** 문제 설명 **

  문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

  ** 제한 사항 **

  - 1 ≤ str의 길이 ≤ 1,000,000
  - str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

  ** 입출력 예 **

  - 입력 #1
    HelloWorld!
    
  - 출력 #1
    HelloWorld!

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});