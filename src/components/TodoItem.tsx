// TodoItem.js
import { Todo } from "../App";
import "../styles/TodoItem.css";

// 1. TodoItemProps 타입을 정의하세요.
//- 인터페이스 정의(보통 클래스나 props의 타입을 정의함
//- todo 객체와 toggleComplete 함수를 props를 받음
//- 여기서 props 정의를 해주면 된다.
interface TodoItemProps {
  todo: Todo;
  toggleComplete(id: number): void;
}

//2. 전달받은 todo,toggleComplete가 올바른 타입으로 인식되도록 타입을 적용하세요.
const TodoItem = ({ todo, toggleComplete }: TodoItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
