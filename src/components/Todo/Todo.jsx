/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Single_todo from "../Single_todo/Single_todo";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskValue = e.target.formText.value;
    if (!taskValue.trim()) return alert("You must write something!");

    const taskNode = {
      taskName: taskValue,
      id: uuidv4(),
      isComplete: false,
      edit: false,
    };

    setTasks([...tasks, taskNode]);
    e.target.formText.value = "";
  };
  return (
    <div className="todo-wrap">
      <div className="todo">
        <form action="" onSubmit={handleSubmit}>
          <div className="tasks-list">
            <FaEdit />
          </div>
          <input type="text" placeholder="Write a new task" name="formText" />
          <button>Add Task</button>
        </form>
        <div className="wrap">
          {tasks.map((task) => (
            <Single_todo
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
