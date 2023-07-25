# Calendar(DatePicker)

## 만든 순서

- 달력의 제작 원리(달력 규칙)
  - 달력 윤년 규칙
    - 4년마다 윤년 : **4**로 나누어 떨어지는 년도는 윤년(true)
    - 100년마다 평년 : 4로 나누어 떨어지더라도 **100**으로 나누어 떨어지면 평년(false)
    - 400년마다 윤년 : 4로 나누어 떨어지고 100으로 나누어 떨어지더라도 **400**으로 나누어 떨어지면 윤년(true)
- 달력의 구성
  - '년' 선택 창
  - '월' 선택 창
  - '요일 나열'된 창
  - '월별 **일수 나열**'된 창
    - 요일 나열된 창에 의존하게 만들어서 월별 1일이 어떤 요일인지 정의한다.
      - `new Date(year + '-' + month + '-01').getDay()`
    - 해당 1일을 기준으로 for문을 이용해 해당 '월' 배열에 마지막 일수까지 추가한다.
      - 해당 배열에는 '1 ~ 마지막 일수' 뿐만 아니라 '앞 뒤로 공백'도 추가해야 한다.
      ```
      // 생략
      let arr_calendar = [];
      for (let i=0; i < first_day_of_week; i++) {
        arr_calendar.push('')
      }
      for (let i=0; i < first_day_of_week; i++) {
        arr_calendar.push(String(i))
      }
      let remain_day = 7 - (arr_calendar.length % 7)
      if (remain_day < 7) {
        for (let i=0; i < first_day_of_week; i++) {
          arr_calendar.push('')
        }
      }
      ```
- 발생할 이벤트 구상
  - 화살표 버튼 클릭 시, 상기 내용 변경
    - '월' 값이 변경되나, '월'이 0이거나 13일 때는 전년도, 내년도로 변경
  - 처음에는 input창만 있도록 calendar창 숨기기(display: none)
  - input창을 클릭했을 때, 등장(toggle())
  - 특정 일일을 클릭했을 때, input창에 해당 '년, 월, 일' 표시
  - 특정 일일을 클릭했을 때, calendar창 숨기기(hide())
