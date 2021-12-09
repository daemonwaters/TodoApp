import React, { useEffect } from "react";

function Input({ inputText, setInputText, todos, setTodos }) {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText === "") {
      alert("please add a task");
      return;
    }

    const exist = todos.some(
      (el) => el.toLowerCase() === inputText.toLowerCase()
    );

    if (exist) {
      alert("The task you are trying to add already exists");
      setInputText("");
      return;
    }

    setTodos([...todos, inputText]);

    setInputText("");
  };

  useEffect(() => {
    let data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
    //runs on initial render and if there's data in local storage , set's our state to that data
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    //this effect runs anytime our todos state changes and adds the todo to the local storage
  }, [todos]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputText}
        onChange={handleChange}
        type="text"
        name="todo"
        placeholder="Plans..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
