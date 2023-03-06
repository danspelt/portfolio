import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/todo.module.css";
import connect from "@/utils/connect";
import ToDo from "@/models/todoModel";
import Header from "@/componts/Header";

interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = ({ todos }) => {
  return (
    <>
      <Header page="ToDo" />
      <div className={styles.main}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  try {
    await connect();

    const todo = await ToDo.find();
    return {
      props: {
        todos: JSON.parse(JSON.stringify(todo)),
      },
    };
  } catch (err) {}
};
export default Todo;
