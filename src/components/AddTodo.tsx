// AddTodo.js
import React, { useState } from "react";
import "../styles/AddTodo.css";

// 1. AddTodoProps 타입을 정의하세요.
// - AddTodo 컴포넌트는 addTodo라는 이름의 함수를  props로 받습니다.
// - 이 함수는 매개변수로 string 타입의 변수 text를 받으며, 반환값은 없습니다.
interface AddTodoProps {
  addTodo(text: string): void;
}

//2. 전달받은 addTodo가 올바른 타입으로 인식되도록 타입을 적용하세요.
// - 전달받은 propsd의 타입 정의 : {props이름}:props의 타입
const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState("");

  //이벤트 객체는 React.FormEvent<HTMLFormElement> 타입입니다.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="새 할 일을 입력하세요."
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default AddTodo;
