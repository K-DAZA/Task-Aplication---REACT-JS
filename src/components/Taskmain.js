import React from "react";
import TaskForm from "./TaskForm";

export default function Taskmain() {

  const tituloApp = (
    <h1 className="font-bold text-2xl text-center md:text-5xl">
      Task Aplication - React JS
    </h1>
  );

  return (
    <div className="p-10 h-screen">
      <div className="rounded bg-white p-5">{tituloApp}</div>
      <TaskForm />
    </div>
  );
}
