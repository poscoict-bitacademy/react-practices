1.  immutability: 컴포넌트 상태의 불변성
1).  절대로 컴포넌트의 상태를 직접 조작하지 마!
2).  컴포넌트 상태를 불변으로 다루어라
3).  setState이나 useState에서 반환해주는 함수를 사용해서 상태를 조작할 것


2.  Violation Example: Class Component
this.state.emails = [{}, {}, {}];
let emails = this.state.emails;
emils.push({});

3. 상태를 불변성으로 유지 해야 이유
1)  this.state를 직접 조작하는 것은 React 상태를 관리를 우회하는 것!(리액트 프로래밍 모델에 반하는 것이다.)
2)  성능개선의 여지가 없어진다.
    - 객체의 변경 유무 검사시 객체의 동질성 비교는 고비용
    - 객체의 변경 유무 검사시 객체의 동일성 비교는 저비용(object1 === object2)
3) 결론은 변경하지 말고 대체하라!
