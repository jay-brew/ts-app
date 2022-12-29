import { useState } from 'react';
import { VoidExpression } from 'typescript';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  const addNumberBtnClick = (num1:number, num2:number) => {
    setNumber(num1+num2);
  }

  type Score = 'A' | 'B' | 'C' | 'D';
  interface User{
    name : string;
    age : number;
    gender? : string;
    readonly birth : number;
    [count:number] : Score;
  }

  let user : User = {
    name : "name",
    age:10,
    birth:2000,
    1:"A",
    2:"B"
  }

  interface Add{
    (num1:number, num2:number) : number;
  }

  // interface 에서 num1, num2로 정의했지만 x, y와 같이 사용할 수 있다.
  const add : Add = function(x,y){
    return x+y;
  };

  interface IsAdult {
    (age:number):boolean;
  }

  const a:IsAdult = (age) => {
    return age>19;
  }

  // implements
  interface Car { 
    color: string;
    wheels:number;
    start():void;
  } 

  // interface 속성값을 모두 입력해야 함
  class Benz implements Car {
    color;
    wheels = 4;

    constructor(c:string){
      this.color = c;
    }

    start(){
      console.log("Benz start!")
    }
  }

  const b = new Benz("black");
  console.log(b);
  b.start();

  interface Genesis extends Car {
    door:number;
    stop():void;  // void : 함수에서 아무것도 반환하지 않을 경우
  }

  // Car 속성 모두 사용해야 함.

  const genesis : Genesis = {
    door : 5,
    stop() {
      console.log("stop~~~~")
    },
    color : 'blue',
    wheels:4,
    start(){
      console.log("Genesis start")
    }
  }

  // 확장 여러 개
  interface Toy {
    name : string;
  }

  interface ToyCar extends Car, Toy {
    price : number;
  }

  return (
    <div>
      <button onClick={()=>addNumberBtnClick(2,3)}>addNumber</button>:{number}
      <hr />
      {user.name}<br />
      {add(10,20)}<br />
      {a(20).toString()}<br />
      {b.color +", "+b.wheels}
    </div>
  );
}

export default App;
