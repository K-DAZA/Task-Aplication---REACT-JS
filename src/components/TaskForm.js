import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskForm() {
  const [titleTask, setTitleTask] = useState("");

  const [Tasks, setTasks] = useState([
    { id: 1, title: "Lavar el patio" }, 
  ]);

  const changeTitleTask = (event) => {
    setTitleTask(event.target.value);
  };
  
  const handleForm = (event) => {
    
    event.preventDefault();
    const objectTask = {
      id: Tasks.length + 1,
      title: titleTask
    }
    setTasks(Tasks => [...Tasks, objectTask]);
    console.log(Tasks);
  }

  return (
    <div className="border border-2 mt-10 md:mt-20">
      {/*TASK FORM*/}
      <div className="rounded bg-white md:flex">
        <div className="w-full md:w-3/6 h-full bg-zinc-900 border border-2 rounded text-white">
          <h1 className="font-bold text-center p-8 md:text-5xl">
            Add new Task📋
          </h1>
          <form onSubmit={handleForm}>
            <div className="p-10 mt-5">
              <h2 className=" md:text-4xl mb-5">Title Task 🥇: </h2>
              <input
                className="p-2 text-black w-full rounded"
                type="text"
                name=""
                id=""
                value={titleTask}
                onChange={changeTitleTask}
              />

              <div className="text-center mt-8">
                <button className="p-4 bg-green-600 font-bold w-3/6 rounded mt-5 hover:bg-green-700">
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>

        {/*TASK LIST*/}
        <div className="w-full md:w-3/6 h-96 overflow-y-scroll">
          <div className="border border-2">
            <h1 className="text-4xl font-bold text-center p-5">🥇 Tasks</h1>
          </div>
          <ul className="p-5 mt-5">
            {Tasks.map((item) => (
              <li className="border border-2 box-border p-5 mt-2 mb-2">
                <TaskList title={item.title} description={item.description} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
