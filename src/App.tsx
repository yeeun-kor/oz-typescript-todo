// App.js
import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

//1. 아래 todos 상태의 초기값 구조를 보고 Todo 타입을 정의하세요.
export interface Todo {
  readonly id: number;
  text: string;
  completed: boolean;
}
//2. showCompleted의 상태를 열거형으로 저장하세요.
enum Filter {
  SHOW_ALL = "모든 할 일 보기",
  HIDE_COMPLETED = "완료된 할 일 숨기기",
}
const App = () => {
  //3. todo 상태가 올바른 타입을 받아올 수 있도록 타입을 지정해주세요.
  //힌트 : 리액트에서 props의 타입을 정의하는 방법 -> useState<타입>(초기값)
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "할 일 1", completed: false },
    { id: 2, text: "할 일 2", completed: false },
    { id: 3, text: "할 일 3", completed: true },
  ]);
  //4. filter 상태가 올바른 타입을 받아올 수 있도록 타입을 지정해주세요.
  //이때 초기값은 Filter.SHOW_ALL로 설정합니다.
  const [filter, setFilter] = useState<Filter>(Filter.SHOW_ALL);

  //5. switch문을 사용해서 filter상태를 업데이트하세요.
  //filter상태가 SHOW_ALL일 경우, HIDE_COMPLETED 로 업데이트합니다.
  //filter상태가 HIDE_COMPLETED일 경우, SHOW_ALL 로 업데이트합니다.
  //다른 방법으로 구현할 수도 있지만 강의에 나왔던 'enum타입을 switch문으로 활용하는 코드'를 직접 작성해봅시다!
  const toggleFilter = () => {
    switch (filter) {
      case Filter.SHOW_ALL:
        setFilter(Filter.HIDE_COMPLETED);
        break;
      case Filter.HIDE_COMPLETED:
        setFilter(Filter.SHOW_ALL);
        break;
      default:
        setFilter(Filter.SHOW_ALL);
    }
  };
  //6. addTodo의 매개변수 text의 타입을 지정해주세요. Todo 타입을 참고하세요.
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //7. toggleComplete의 매개변수 id의 타입을 지정해주세요. Todo 타입을 참고하세요
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <button className="btn_completed" onClick={toggleFilter}>
        {filter}
      </button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        showCompleted={filter === Filter.SHOW_ALL}
      />
    </div>
  );
};

export default App;
