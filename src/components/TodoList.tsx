// TodoList.js
import { Todo } from "../App";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

// 1. TodoListProps 타입을 정의하세요.
// - AddTodo 컴포넌트는 todos라는 배열, toggleComplete라는 함수, showCompleted라는 boolean타입의 변수를  props로 받습니다.
// - todos 배열의 각 요소들은 어떤타입인지 App.tsx에서 확인한 후, 배열의 타입을 정확하게 적어보세요.
// - toggleComplete 함수는 number타입의 변수 id를 받으며, 반환값은 없습니다.
// - showCompleted 변수는 boolean 타입입니다.
interface TodoListProps {
  todos: Todo[];
  toggleComplete(id: number): void;
  showCompleted: boolean;
}

//2. 전달받은 props가 올바른 타입으로 인식되도록 타입을 적용하세요.
//힌트 : 리액트에서 props의 타입을 정의하는 방법 -> ({props 이름} : props타입)
const TodoList = ({ todos, toggleComplete, showCompleted }: TodoListProps) => {
  return (
    <ul>
      {todos
        .filter((todo) => (showCompleted ? true : !todo.completed))
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
    </ul>
  );
};

export default TodoList;
