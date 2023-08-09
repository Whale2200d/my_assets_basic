# JAVASCRIPT

#### 변수

- 변수명으로 사용할 수 없는 단어가 있다. 이를 예약어(Reserved Word)라고 한다.
- 변수명을 만들 때는 단편적으로 만들면 팀 프로젝트 시 위험하다. 같은 변수명을 '선언'할 때, 의도치 않게 덮어지기 때문이다. let, const를 사용하면 덮어지지 않고, Error를 발생시켜 미연에 위험을 방지할 수 있다.
  - 단, let의 경우, 두 번째부터 let을 제외하고 사용할 경우, 의도적으로 변경할 순 있다.(주로 값을 Update할 때 사용한다.)
  - const의 경우, 절대로 바뀌지 않는 상수가 필요할 때, '대문자'로 주로 사용한다. 주로, 파이(π), 최대/최소값, 생일 등을 선언할 때, 자주 사용된다.
  - (TIP) 최초 모든 변수를 const로 선언하고, 변경이 필요한 값이 된다면, let으로 바꾸는 방법이 좋다.
- 변수 선언 시, 참고 사항
  1. 변수는 문자와 숫자, $와 \_만 사용할 수 있다.
  2. 첫 글자는 숫자가 될 수 없다.
  3. 예약어는 사용할 수 없다.
  4. 가급적 상수는 대문자로 작성한다.
  5. 변수명은 읽기 쉽고 이해하기 쉽게 선언한다.

#### 자료형

- 문자형은 쌍따옴표, 홑따옴표, 백틱으로 3가지 방법으로 작성할 수 있다.

  - 문자로 따옴표를 사용하고 싶다면, 따옴표 앞에 \(역슬레시)를 사용하는 것이 좋다.
  - 백틱은 문자열 내 변수(`${}`)를 표현할 때, 사용하면 편리하다.

- 숫자형은 사칙연산이 가능하다. (+, -, \*, /, %)

  - `1/0`의 값은 `infinity`로 출력된다.
  - 문자열을 숫자로 나누면 `NaN`이 출력된다.
  - 문자열끼리 더하면 하나의 문자열로 합쳐준다.
    - `console.log('나는 ' + 30 + '살 입니다.')`의 값은 `나는 30살 입니다.`를 출력한다. 이 때, 숫자를 포함해 문자형으로 반환한다.

- Boolean형은 참, 거짓을 나타내는 값으로, 등호(==, ===)와 부등호(>, >=)를 사용하여 알 수 있다.

- null은 '존재하지 않는 값'을 의미하고, undefined는 '값이 할당되지 않음'을 의미한다.

  - `let age`는 `undefined`를 출력한다.
  - `let user = null`은 '유저가 존재하지 않는다.'는 정도로 이해하면 된다.

- 그 외 객체형과 심볼형이 있다.

- typeof 연산자로 변수의 자료형이 무엇인지 알아낼 수 있다.
  - typeof는 **다른 사람이 작성한 코드** 또는 **API로 받아온 데이터**의 type을 확인하고, type에 따라 다른 방식으로 처리해야 할 때, 자주 사용된다.
  - `typeof null`은 object로 반환되어 '객채형'을 의미한다.
    - 사실 null은 객체가 아니다.
    - 이는 javscript 초기 버전의 오류이다. 하위 호환성을 위해 수정하진 않는다.

#### 대화상자

- alert, prompt, comfirm 등이 대표적이다.

  - alert : 알려주는 역할이다.
  - prompt : 입력 받는 역할이다.
  - confirm : 확인 받는 역할이다.

  ```
    const name = prompt("이름을 입력하세요.")
    alert(`환영합니다! ${name}님!!`)
  ```

  - 이 때, prompt 창에서 취소버튼을 누르면, null값을 반환한다.
  - 따라서 prompt의 두 번째 argument 값(Option)으로 초기값을 설정할 수 있다. (사용자에게 Hint를 줄 때 편리하다.)

  ```
    const isAdult = confirm('당신은 성인입니까?')
    console.log(isAdult)
  ```

  - 이 때, confirm은 alert과 다르게 취소버튼이 추가된다.
  - confirm으로 확인 및 취소 버튼을 클릭하면, true/false 값이 뜬다.
  - 주로 사용자의 액션을 한 번 더 확인할 때, 주로 사용된다.

  - 이렇게 기본적으로 제공되는 대화상자는 간단하게 사용할 수 있는 장점이 존재한다.
  - 대신 단점도 존재하는데, 단점은 아래와 같다.
    1. (스크립트 일시 정지) 창이 떠있는 동안 스크립트가 일시 정지된다. 창을 닫기 전에는 이후 동작에 제한을 받는다.
       만약, 알림버튼을 눌렀는데, text창이 아닌 alert창으로 알려준다면, 일일히 클릭해야되는 번거로움이 생긴다.
    2. (스타일링 단일화) 스타일링이 불가능하다. 브라우저별로 모양도 다르다. 디자이너가 싫어한다.

#### 형 변환

- 자료형은 아래 방법으로 형 변환할 수 있다.
  - `String()` : 문자형으로 변환
  - `Number()` : 숫자형으로 변환
  - `Boolean()` : Boolean형으로 변환
- 자료형이 다르면 의도치 않는 Error가 발생할 수 있으므로, 이 경우, 형 변환을 통해 Error를 미연에 방지할 수 있다.
  ```
    const mathScore = prompt('수학 점수를 입력')
    const engScore = prompt('영어 점수를 입력')
    const result = (mathScore + engScore) / 2
  ```
  - 수학이 `'90'`, 영어가 `'80'`이라면, `4540`이라는 다른 값이 나온다.
  - 그 이유는 prompt를 입력하면 String값을 출력하기 때문이다.
  - 의문점은 `'9080'`도 문자형인데 나누기 2는 제대로 동작했다는 점이다.
  - 이러한 이유는 **자동 형 변환** 때문이다.
- 자동 형 변환은 **원인을 찾기 어려운 에러**를 발생시킬 수 있다.
- 따라서 의도적으로 **명시적** 형 변환을 시켜야 한다.

- 숫자형 형 변환 시, argument에 숫자 외 문자가 들어가 있으면, `NaN`을 반환한다.

  - true와 false의 경우, 숫자형 형 변환하면 1, 0을 반환한다.
  - `Number(null)` : 0
  - `Number(undefined)` : NaN

- Boolean형 형 변환은 false 경우만 기억하면 된다. 나머지는 모두 true이다.

  - 숫자 `0`
  - 빈 문자열 `''`
  - `null`
  - `undefined`
  - `NaN`

- **주의사항**

  - `Number(0)` : false
  - `Number('0')` : true

  - `Number('')` : false
  - `Number(' ')` : true

- 상기 내용은 Error 없는 코드를 만들기 위해 필수적인 요소이다.

#### 연산자(Operator)

- 나머지(%) 연산자는 아래의 경우, 자주 사용된다.
  - 홀짝 구분할 때,
  - 5보다 작은 값을 얻고 싶을 때, `X % 5 = 0 ~ 4 사이의 값만 반환`
- 거듭제곱(\*\*) 연산자도 존재한다.
- 연산자는 우선순위를 갖는다. 곱셈, 나눗셈이 덧셈, 뺄셈보다 우선이다.

- 연산자 줄여서 사용하기

  - `num = num + 5` : `num += 5`

- 증가(++), 감소(--) 연산자

  - 증감 연산자는 위치에 따라 차이가 있다.

    ```
      let num = 10;
      let result = num++;

      consol.log(result)
    ```

    - 이 경우, 11이 아닌 10을 반환한다.
    - 증가시키기 '**전**'의 값을 출력한다.

    ```
      let num = 10;
      let result = ++num;

      console.log(result)
    ```

    - 이 경우, 10이 아닌 11을 반환한다.
    - 증가시키기 '**후**'의 값을 출력한다.

#### 비교연산자, 조건문

- `>` , `>=`, `==`, `!=`
- 동등연산자(==)와 일치연산자(===)의 차이

  - 동등연산자는 값만 비교하고, 자료형의 동일성은 비교하지 못한다.
  - 일치연산자는 값, 자료형(type)의 동일성 모두 비교한다.

- 조건문에는 if, else, else if가 있다.

#### 논리연산자

- 논리연산자는 OR(||), AND(&&), NOT(!)으로 3가지 종류가 있다.
- OR는 첫 번째 true를 발견하는 즉시 평가를 멈춘다.
- AND는 첫 번째 false를 발견하는 즉시 평가를 멈춘다.
- 실제 코드에서도 어떤 순서로 평가를 배치하는지 생각하면서 작성하는 것이 중요하다. 간단한 평가로 boolean 값을 파악할 수 있다면, **복잡한 작업 전에 해주는 것이 좋다**.
  - 예를 들어, 운전면허가 있고 시력이 좋은 여군이라 가정하자.
    - 운전면허 : 전체 군인의 80%
    - 시력 : 전체 군인의 60%
    - 여군 : 전체 군인의 7%
    - 이 경우, `여군인데, 시력이 좋고, 운전면허가 있는 사람`으로 소스코드를 작성하는 것이 좋다. 첫 번째 조건에서 93%의 사람을 필터링할 수 있으므로, 시간을 눈에 띄게 줄일 수 있다.
  - 이런 작업은 **성능 최적화에 도움**이 된다.
- (우선순위) &&가 ||보다 우선순위가 높다.

  - (목표) 남자이고, 이름이 Mike이거나 성인이면 통과

  ```
    const gender = 'F'
    const name = 'Jane'
    const isAdult = true

    if (gender ==== 'M' && name === 'Mike' || isAdult) {
      console.log('통과')
    } else {
      console.log('돌아가..')
    }
  ```

  - 이 경우, 통과를 반환한다. 그 이유는 &&가 우선순위가 ||보다 높으므로, &&를 먼저 실행하고, ||를 다음에 실행했기 때문이다.
  - 이는 의도한 바와 다르다. 따라서 아래 코드로 수정한다.

  ```
    const gender = 'F'
    const name = 'Jane'
    const isAdult = true

    if (gender ==== 'M' && (name === 'Mike' || isAdult)) {
      console.log('통과')
    } else {
      console.log('돌아가..')
    }
  ```

  - 소괄호를 이용해 우선순위를 수정한다.

#### 반복문

- 대표적인 반복문으로 for문이 존재하는데, '초기값', '조건', '반복 코드 실행 후 작업' 등 3등분으로 나눌 수 있다.
- 그 외 while, do while 문도 존재한다.

  - do.. while은 '조건'을 아래로 옮길 수 있다. 일단, 코드를 실행하고 조건을 확인하므로 최초값은 무조건 실행되는 특징이 있다.

    ```
      let i = 0;

      do {
        // 실행할 코드
        i++
      } while (i < 10)
    ```

  - (참고) `while(true) {}`는 무한 반복하므로 조심해서 사용해야 한다.

- 반복문을 빠져나오려면, break, continue를 사용하면 된다.

  - break : 멈추고 반복문을 빠져나온다.
    ```
      while(true) {
        let answer = confirm("계속할까요?")
        if(!answer) {
          break;
        }
      }
    ```
    - 무한 반복문은 특정 조건이 되었을 때, break하는 것이 **매우 중요**하다.
  - continue : 멈추고 (반복문을 빠져나오지 않고) 다음 반복으로 진행한다.
    ```
      for(let i=0; i < 10; i++) {
        if (i%2) {
          continue;
        }
        console.log(i)
      }
    ```
    - `i가 짝수일 경우` : if문의 조건이 0이므로, false가 되어 **continue를 거치지 않고, console.log(i)**를 찍는다.
    - `i가 홀수일 경우` : if문의 조건이 1이므로, true가 되어 **continue를 만나고, console.log(i)를 거치지 않고 바로 다음 작업**으로 진행된다.

- 참고사항
  - 명확한 횟수가 정해져 있으면, for문을 사용하고,
  - 명확한 횟수가 정해지지 않으면, while문을 사용한다.

#### switch

- if, if else가 존재하지만, switch문의 경우 case가 다양할 때 좀 더 간결하게 작성할 수 있기 때문에 사용한다.
  ```
    switch(평가) {
      case A:
        // A일 때 코드
      case B:
        // B일 때 코드
      default:
        // A, B 둘다 아닐 때 코드
    }
  ```
- switch 문은 break를 사용하지 않으면, 조건에 맞는 case부터 아래 case까지 모두 실행된다. 그래서 하나의 case만 실행하고 싶다면 break를 사용하는 것이 좋다.

  ```
    let fruit = prompt('어떤 과일을 살 건 가요?')

    switch(fruit) {
      case '사과':
        console.log('100원 입니다.')
        break;
      case '바나나':
        console.log('200원 입니다.')
        break;
      case '키위':
        console.log('300원 입니다.')
        break;
      case '멜론':
        console.log('500원 입니다.')
        break;
      case '수박':
        console.log('500원 입니다.')
        break;
      default:
        console.log('그런 과일은 없습니다.')
    }
  ```

- case가 달라도 같은 값을 출력한다면, case를 하나로 합칠 수 있다.

  ```
    let fruit = prompt('어떤 과일을 살 건 가요?')

    switch(fruit) {
      case '사과':
        console.log('100원 입니다.')
        break;
      case '바나나':
        console.log('200원 입니다.')
        break;
      case '키위':
        console.log('300원 입니다.')
        break;
      case '멜론':
      case '수박':
        console.log('500원 입니다.')
        break;
      default:
        console.log('그런 과일은 없습니다.')
    }
  ```

#### 함수(function)

- 서비스를 만들다보면 같거나 유사한 동작이 생기기 마련이다. 팝업창 또는 결제 등
- 중복된 코드를 줄이고, 원활한 유지보수를 위해 이 때, 함수를 사용한다.

  - 앞서 브라우저 내장 함수인 console.log(), alert(), confirm() 등을 사용해보았다.

- function template은 아래와 같다.

  ```
    function sayHello (name) {
      console.log(`Hello, ${name}`)
    }
  ```

  - 이 때, `sayHello`는 함수명이다.
  - 이 때, `name`은 매개변수(parameter)이다.
    - 이후 실제 해당 함수를 사용할 때, name에 들어갈 값을 인자(argument)라 한다.

- 필요한 경우만 매개변수를 사용하도록 함수를 설계할 수 있다.

  ```
    function sayHello(name) {
      let msg = 'Hello';
      if(name) {
        msg += ', ' + name;
      }
      console.log(msg)
    }

    sayHello() // 'Hello'
    sayHello('Mike') // 'Hello, Mike'
  ```

  - 이 때, 함수 내부에 선언된 변수를 지역 변수(local variable)라 한다.
  - 이 때, 함수 외부에 선언된 변수를 전역 변수(global variable)라 한다.

- 지역 변수와 전역 변수가 설령 같은 이름이라도 서로 간섭을 받지 않는다.

  ```
    let msg = 'welcome';
    console.log(msg) // 'welcome'

    function sayHello(name) {
      let msg = 'Hello';
      console.log(msg + ' ' + name)
    }

    sayHello('Mike') // 'Hello Mike'
    console.log(msg) // 'welcome'
  ```

- 매개변수로 받은 값은 복사된 후, 함수의 지역 변수가 된다.

  - 전체 서비스에서 공통으로 바라봐야 할 변수를 제외하고는 지역 변수를 사용하는 습관을 들이는 것이 좋다. (전역 변수가 많아지면 관리하기 힘들다.)

  ```
    let name = 'Mike';

    function sayHello(name) {
      console.log(name)
    }

    sayHello() // undefined, name을 전역변수로 Mike를 선언했다고 해서 매개변수 상 제외하면, undefined를 출력한다.
    console.log('Jane') // 'Jane'
  ```

- (추가학습) 함수에 or 연산자를 사용해보자.

  - 앞서 학습한 sayHello를 or 연산자를 사용해 변형할 수 있다.

  ```
    function sayHello(name) {
      let newName = name || 'friend';
      let msg = `Hello, ${newName}`
      console.log(msg)
    }

    sayHello() // 'Hello, friend'
    sayHello('Mike') // 'Hello, Jane'
  ```

- (추가학습) 기본값(default value)을 설정할 수 있다.

  ```
    function sayHello(name = 'friend') {
      let msg = `Hello, ${name}`
      console.log(msg)
    }

    sayHello() // 'Hello, friend'
    sayHello('Mike') // 'Hello, Jane'
  ```

- (추가학습) return으로 값 반환하기

  - return 문이 있으면 원하는 값을 반환할 수 있다.

    ```
      function add(num1, num2) {
        return num1 + num2;
      }

      const result = add(2, 3)
      console.log(result) // 5
    ```

  - return 문이 없으면, undefined를 반환한다.

    ```
      function showError() {
        alert('에러가 발생했습니다.')
      }

      showError // (alert창의 '확인'을 누른 후) undefined 반환
    ```

  - return 문이 있으면, **그 즉시 return 문 오른쪽의 값을 반환하고 함수를 종료**한다. (함수를 종료하는 목적으로 값 없이 사용하기도 한다.)

    ```
      function showError() {
        alert('에러가 발생했습니다.')
        return;
        alert('이 코드는 절대 실행되지 않습니다.')
      }

      showError // (alert창의 '확인'을 누른 후) undefined 반환
    ```

- 참고 사항
  - 함수는 한 번에 한 작업만 집중하는 것이 좋다.
  - 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
    - `showError` : 에러를 보여줌
    - `getName` : 이름을 얻어옴
    - `createUserData` : 유저데이터 생성
    - `checkLogin` : 로그인 여부 체크

#### 함수 표현식 화살표 함수

- 앞서 학습한 방식을 '함수 선언문'이라 하며, '함수 표현식'도 존재한다.
- 함수 표현식 template
  ```
    let sayHello = function() {
      console.log('Hello')
    }
  ```
- (차이점) 함수 표현식은 함수 선언문과 **호출하는 타이밍**이 다르다.

  - 함수 선언문 : 어디서든 호출할 수 있다.

    - JS는 소스코드를 위에서 아래로 '순서대로' 읽는 인터프리터 언어(Interpreted Language)임에도 불구하고,
    - JS 내부 알고리즘 때문에, 실행 전 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 미리 생성해두고, 필요할 때 찾아 사용한다. 이 때문에 사용 가능한 범위가 늘어난다. 이를 호이스팅(Hoisting)이라 한다.

    ```
      sayHello()

      function sayHello() {
        console.log('Hello')
      }
    ```

  - 함수 표현식 : 코드에 도달하면 생성된다. 이 때문에 표현식 이후에만 사용할 수 있다.
    ```
      let sayHello = function() {
        console.log('Hello')
      }
      sayHello()
    ```
  - 따라서, 실행할 함수의 위치 때문에 에러가 나는 것을 신경쓰기 싫다면 함수 선언문을 사용하는 것이 좋다.

- 화살표 함수 Template
  ```
    let add = (num1, num2) => {
      return num1 + num2
    }
  ```

#### 객체(object)

- 객체의 생성

  ```
    const superman = {
      name: 'clark',
      age: 33,
    }
  ```

  - 객체는 중괄호를 사용하며, 쉼표를 통해 property를 구분한다.
  - property는 `key: value`로 구분한다.

- 객체의 접근, 추가, 삭제 (.연산자, 대괄호 연산자를 사용한다.)

  - 객체의 접근
    ```
      superman.name // 'clark'
      superman['name'] // 'clark'
    ```
  - 객체의 추가
    ```
      superman.gender = 'male';
      superman['hairColor'] = 'black';
    ```
  - 객체의 삭제
    ```
      delete superman.gender
      delete superman['hairColor']
    ```

- '단축 property'를 활용해 좀 더 간단하게 객체를 작성할 수 있다.

  - 단축 property 사용 전

    ```
      const name = 'clark';
      const age = 33;

      const superman = {
        name: name,
        age: age,
        gender: 'male',
      }
    ```

  - 단축 property 사용 후

    ```
      const name = 'clark';
      const age = 33;

      const superman = {
        name,
        age,
        gender: 'male',
      }
    ```

- 존재하지 않는 Property에 접근하면 **에러가 발생하지 않고 undefined를 반환**한다.

  ```
    const superman = {
      name: 'clark',
      age: 33,
    }

    superman.birthDay // undefined
  ```

- in 연산자를 통해 property가 있는지 유무를 확인할 수 있다.

  ```
    'birthDay' in superman; // false
    'age' in superman; // true
  ```

  - 점 또는 대괄호 연산자가 있음에도 in 연산자가 존재하는 이유는 **어떤 값을 넣을지 확신할 수 없을 때 in 연산자를 사용하기 위함**이다.

    - 함수의 **인자를 받거나**, **API 통신을 통해 데이터를 받아오는 경우**가 그러하다.

      ```
        function isAdult(user) {
          if (user.age < 20) {
            return false;
          }
          return true
        }

        const Mike = {
          name: 'Mike',
          age: 30,
        }

        const Jane = {
          name: 'Jane',
        }

        console.log(isAdult(Mike)) // true
        console.log(isAdult(Jane)) // true
      ```

      - 상기 예시에서 Jane의 경우, 나이를 입력하지 않았는데 `true`가 나오기 때문에 올바른 코드가 아니다.
      - 아래와 같이 수정한다.

      ```
        function isAdult(user) {
          if (!('age' in user) || user.age < 20) {
            return false;
          }
          return true
        }

        const Mike = {
          name: 'Mike',
          age: 30,
        }

        const Jane = {
          name: 'Jane',
        }

        console.log(isAdult(Mike)) // true
        console.log(isAdult(Jane)) // false
      ```

- for ..in 반복문을 사용하면 객체를 순회하면서 값을 얻을 수 있다.

  ```
    const superman = {
      name: 'Mike',
      age: 30,
    }

    for(let key in superman) {
      console.log(key) // 'name', 'age', ...
      console.log(superman[key]) // 'Mike', 30, ...
    }
  ```

  - 이 때, key는 superman이 갖고 있는 property의 key를 의미하므로, 다른 문자(a, b, x, y) 등이 와도 상관없다.

#### 객체 method / this

- 객체로 만들어진 것들은 몇 가지 능력이 존재한다.

  ```
    const superman = {
      name: 'clark',
      age: 30,
      fly: function() {
        console.log('날아갑니다.')
      }
    }

    superman.fly() // '날아갑니다.'
  ```

  - 이 처럼 객체 property에 할당된 함수를 method라고 한다.
    - fly 함수가 superman 객체의 method이다.

- method는 단축 구문으로 작성할 수 있다.

  ```
  const superman = {
      name: 'clark',
      age: 30,
      fly() {
        console.log('날아갑니다.')
      }
    }

    superman.fly() // '날아갑니다.'
  ```

- 객체와 method의 관계
  - `sayHello` method에 객체의 name property를 넣고 싶을 때, 아래와 같은 방법은 오류가 발생한다. (this 사용 전)
    ```
      const user = {
        name: 'Mike',
        sayHello: function() {
          console.log(`Hello, I'm ${user.name}`)
        }
      }
    ```
  - `sayHello` method에 객체의 name property를 넣고 싶을 때, this를 사용한다.
    ```
      const user = {
        name: 'Mike',
        sayHello: function() {
          console.log(`Hello, I'm ${this.name}`)
        }
      }
    ```
  - **this는 실행하는 시점 즉, 런타임에 의해 결정**된다.
- 화살표 함수를 사용할 경우, method의 동작이 달라진다.

  - 화살표 함수를 사용하지 않을 때

  ```
    const boy = {
      name: 'Mike',
      sayHello,
    }
    const girl = {
      name: 'Jane',
      sayHello,
    }

    sayHello: function() {
      console.log(`Hello, I'm ${this.name}`)
    }

    boy.sayHello() // 'Hello, I'm Mike'
    girl.sayHello() // 'Hello, I'm Jane'
  ```

- 화살표 함수를 사용하지 않을 때

  ```
    const boy = {
      name: 'Mike',
      sayHello,
    }
    const girl = {
      name: 'Jane',
      sayHello,
    }

    sayHello: () => {
      console.log(`Hello, I'm ${this.name}`)
    }

    boy.sayHello() // 'Hello, I'm ???'
    girl.sayHello() // 'Hello, I'm ???'
  ```

  - **화살표 함수는** 일반 함수와 달리 **자신만의 this를 갖지 않는다**.
  - 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져온다.
  - 상기 예시에서 this는 boy나 girl을 가리키지 않는다. 화살표 함수는 this를 갖고 있지 않기 때문에 여기서 **this를 사용하면 '전역 객체'**를 가리킨다.

    - 브라우저 환경에서 전역 객체 : window
    - node js 환경에서 전역 객체 : global

    ```
      let boy = {
        name : 'Mike',
        sayThis: () => {
          console.log(this)
        }
      }

      boy.sayThis() // window를 가리킴
    ```

- method 예시

  ```
    let boy = {
      name : 'Mike',
      showName : function() {
        console.log(boy.name)
      }
    }

    let man = boy;
    man.name = 'Tom'

    console.log(boy.name) // 'Tom'
  ```

  - `man.name`을 Tom으로 바꾸어도, `boy.name`도 Tom으로 바뀐다.

  ```
    let boy = {
      name : 'Mike',
      showName : function() {
        console.log(boy.name)
      }
    }

    let man = boy;
    boy = null;

    man.showName() // Error 발생
  ```

- this 예시

  - this를 사용하지 않았을 때

    ```
      let boy = {
        name : 'Mike',
        showName : function() {
          console.log(boy.name)
        }
      }

      let man = boy;
      boy = null;

      man.showName() // Error 발생
    ```

  - this를 사용했을 때

    ```
    let boy = {
      name : 'Mike',
      showName : function() {
        console.log(this.name)
      }
    }

    let man = boy;
    boy = null;

    man.showName() // 'Mike'
    ```

  - 결론적으로 method에선 객체명을 직접 쓰는 것보다 this를 사용하는 것이 좋다.

- method의 화살표 함수 예시
  - 화살표 함수를 쓰기 전

#### 배열(Array)

- 배열은 순서가 있는 리스트이다.

  ```
    let students = ['철수', '영희', '영수']

    students[0] = '민정' // 해당 index의 값(value)을 변경
    console.log(students) // ['민정', '영희', '영수']
  ```

- 배열은 문자, 숫자 뿐만 아니라 객체, 함수 등도 포함할 수 있다.
- length는 배열의 길이를 구할 수 있다. (prototype)
- 배열은 몇 가지 내장 method를 갖고 있다.

  - push(), pop() : 배열 마지막에 추가/제거
  - unshift(), shift() : 배열 앞에 추가/제거
  - 참고로 **push(), unshift()는 여러 요소를 한 번에 추가**할 수 있다.

- 배열을 사용하는 가장 큰 이유는 **효율적으로 반복하기 위함**이다.
- for ... of문

  - 객체를 순회하는 for ... in과 구분할 것
  - for ... of문은 for문보다 간단하지만 index를 얻지 못한다는 단점이 존재한다.

  ```
   let days = ['월', '화', '수', '목', '금', '토', '일']

   for (let day of days) {
    console.log(day)
   }
  ```

  - 이 때, day는 다른 이름(a, b, x, y) 등으로 바꾸어도 상관없다.
