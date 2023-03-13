import React, { useState, useEffect } from "react";

import styles from "@/styles/todo.module.css";

import Header from "@/componts/Header";
import { TodoData, TodoI } from "@/interfaces/Todo";

const Todo: React.FC<TodoI> = () => {
  const createTask = async (newTodo: string) => {
   const res = await fetch("/api/todos/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newTodo,
      }),
    });
    const data = await res.json();
    console.log(data);
  }; // Corrected function to retrieve current value from an input field
  function getCurrentValue(event: React.FormEvent<HTMLInputElement>): string {
    return event.currentTarget.value;
  }

  // Example usage of getCurrentValue in keyDown event handler
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const enteredValue = getCurrentValue(event);
    if (event.key.toLowerCase() === "enter") {
      createTask(enteredValue);
      event.currentTarget.value = "";
      event.preventDefault();
    }
  }

  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        autoFocus
        onKeyDown={handleKeyDown}
      />

      <div className={styles.main}>
        {todos.map((todo: TodoData) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </div>
    </>
  );
};
export default Todo;
