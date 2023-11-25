/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Single_todo.css";
import { useState } from "react";

export default function Single_todo(props) {
  const tasks = props.tasks;
  const task = props.task;
  const setTasks = props.setTasks;
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleInputChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  const handleEditToggle = () => {
    task.edit = !task.edit;
    if (!task.edit) {
      setEditedTaskName(task.taskName);
    }
    setTasks([...tasks]);
  };

  return (
    <>
      <div className="singleTodo-wrap" key={task.id}>
        <div className="singleTodo">
          <div className="task">
            {task.edit ? (
              <input
                type="text"
                value={editedTaskName}
                onChange={handleInputChange}
              />
            ) : null}{" "}
            {!task.edit ? (
              <span
                className="complete"
                onClick={() => {
                  task.isComplete = !task.isComplete;
                  setTasks([...tasks]);
                }}
              >
                <TiTick />
              </span>
            ) : null}
            <span className={`${task.isComplete && "completed"}`}>
              {task.taskName}
            </span>
          </div>
          <div className="edit" onClick={handleEditToggle}>
            <FaEdit />
          </div>
          <div
            className="delete"
            onClick={() => {
              setTasks(tasks.filter((item) => item.id !== task.id));
            }}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </>
  );
}
