import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Taskmain() {

  const [Tasks, setTasks] = useState(
    {id: 1, titleTask: "Tarea 1", taskContent: "Lavar platos"}
  );
  
  const tituloApp = (
    <h1 className="font-bold text-2xl text-center md:text-5xl">
      Task Aplication - React JS
    </h1>
  );

  return (
    <div className="p-10 h-screen">
      <div className="rounded bg-white p-5">{tituloApp}</div>

      {/*TASK FORM*/}
      <div className="rounded bg-white h-5/6 mt-10 md:flex overflow-y-auto">
        <div className="w-full md:w-3/6 md:h-full bg-zinc-900 border border-2 rounded text-white">
          <TaskForm />
        </div>

        {/*TASK LIST*/}
        <div className="w-full h-full md:w-3/6">
          <TaskList idTask={Tasks.id}/>
        </div>
      </div>
    </div>
  );
}
