import React, { useState } from 'react' 

export default function TaskList(props) {

  const [estilo, setEstilo] = useState("");

  const handleComplete = () => {
    setEstilo("line-through");
  }

  return (
    <div>
      <div className={estilo}>
        📌 {props.title} <span className="float-right cursor-pointer" onClick={ handleComplete }>✔️</span>
      </div>
    </div>
  );
}
