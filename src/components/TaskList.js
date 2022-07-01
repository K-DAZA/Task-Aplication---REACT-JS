import React from 'react'
import Checkboxes from './Checkboxes';

export default function TaskList(props) {
  return (
    <div>
      <div className="border border-2">
        <h1 className="text-4xl font-bold text-center p-5">Task</h1>
      </div>

      <div>
        <Checkboxes idTask={props.idTask}/>
      </div>
    </div>
  );
}
