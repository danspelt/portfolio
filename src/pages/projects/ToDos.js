import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = ({ item, onDelete }) => {
  return (
    <div className="item">
      <div className="item-name">{item.name}</div>
      <button className="delete-button" onClick={() => onDelete(item._id)}>Delete</button>
    </div>
  );
};

const ItemList = ({ items, onDelete }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item._id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

const AddItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Item name" />
      <button type="submit">Add Item</button>
    </form>
  );
};

const ToDos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/items');
      setItems(result.data);
    };

    fetchData();
  }, []);

  const handleAdd = async (item) => {
    const result = await axios.post('http://localhost:3000/items', item);
    setItems([...items, result.data]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CRUD App</h1>
      </header>
      <main className="main">
        <AddItemForm onAdd={handleAdd} />
        <ItemList items={items} onDelete={handleDelete} />
      </main>
    </div>
  );
};

export default ToDos;
