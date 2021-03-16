import React, { useState } from "react";
import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

// const TodosDispatch = React.createContext(null);

// const TodoList = (props) => {
const TodoList = ({ initialItems }) => {
	const [itemCounter, setItemCounter] = useState(0);
	const [newItemText, setNewItemText] = useState(`Task ${itemCounter + 1}`);
	const [items, setItems] = useState(initialItems);
	// const [items, setItems] = useState([]);
	const addItem = () => {
		const newItem = {};
		newItem.textStr = newItemText;
		newItem.isComplete = false;
		newItem.id = `${new Date()}-${newItem.textStr}`;
		localStorage.setItem(newItem.id, JSON.stringify(newItem));
		// localStorage.setItem(newItem.id, newItem);
		setItems([...items, newItem]);
		setItemCounter(itemCounter + 1);
		setNewItemText(`Task ${itemCounter + 2}`);
	};
	const removeItem = (id) => {
		localStorage.removeItem(id);
		setItems(items.filter((item) => item.id !== id));
	};
	// const completeItem = (id, newState) => {
	// 	setItems(
	// 		items.map((item) => {
	// 			if (item.id === id) item.isComplete = newState;
	// 			return item;
	// 		})
	// 	);
	// };
	return (
		<div className={styles.TodoList}>
			<div className={styles.ListTitle}>
				<h1>TodoList</h1>
			</div>
			<div className={styles.ListItems}>
				{items.map((item, index) => {
					return (
						<TodoItem
							key={item.id}
							index={index}
							self={item}
							// updateStatus={completeItem}
							deleteSelf={removeItem}
						/>
					);
				})}
			</div>
			<div className={styles.ListItemAdd}>
				<label>New:</label>
				<input
					type='text'
					value={newItemText}
					onChange={(e) => setNewItemText(e.target.value)}
				/>
				<button onClick={addItem}>Add</button>
			</div>
		</div>
	);
};

export default TodoList;
