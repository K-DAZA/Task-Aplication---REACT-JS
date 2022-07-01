import React, { useState } from 'react'

export default function TaskForm(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event =>{
    event.preventDefault(); 
    setDescription("");
  }  

  return (
    <div>
      <h1 className="font-bold text-center p-8 md:text-5xl">Add new Task📋</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-10 mt-5">
          <h2 className=" md:text-4xl mb-5">Title Task 🥇: </h2>
          <input
            className="p-2 text-black w-full rounded"
            type="text"
            name=""
            id=""
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <h2 className=" md:text-4xl mb-5 mt-10">Task Content 📌: </h2>
          <textarea
            className="text-black p-2 rounded w-full"
            name=""
            id=""
            cols="30"
            rows="5"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>

          <div className="text-center mt-8">
            <button className="p-4 bg-green-600 font-bold w-3/6 rounded mt-5 hover:bg-green-700">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
