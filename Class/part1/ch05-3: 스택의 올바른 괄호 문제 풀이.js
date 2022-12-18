/* Ch05-3. 스택의 올바른 괄호 문제 풀이 */

/*
  스택을 사용한다.
  여는 괄호가 나오면 스택에 여는 괄호를 넣어준다.
  그 후 제거를하고, 또 여는괄호가나오면 스택에 넣고 문자열에서도 제거
  닫는괄호가나오면 스택을 팝한다.

  올바르지 않는 괄호를 살펴보자
  예를들어 (()()
  두번 여는괄호로 스택을 넣어주고 닫는괄호에서 팝을 해주는데
  결국 마지막까지 가보면 스택이 남아있을 수 밖에없다.

  * 올바르지 않는 괄호의 경우
  - 스택에 남아있는경우
  - 스택이 비어있는데 닫는괄호가 남아있는 경우
*/

// stack
// stack에 push로 값을 넣기는 했지만 꺼내서 쓰지는 않기 떄문에 다른 방법으로도 구현이 가능하다.
function solution(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(c);
    } else {
      // 스택이 비어있을 경우 return false
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
  
}


// stack의 방식을 이용하지만 stack을 사용하지 않고 구현
// 스택보다 메모리를 덜 사용한다
function solutionNoStack(s) {
  let count = 0;

  for (const c of s) {
    if (c === '(') {
      count += 1;
    } else {
      if (count === 0) {
        return false
      }
      count -= 1
    }
  }

  return count === 0;
}