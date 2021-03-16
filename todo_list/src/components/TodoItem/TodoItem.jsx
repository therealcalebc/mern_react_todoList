// import React, { useState } from "react";
import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
	const { self, updateStatus, deleteSelf } = props;
	const { id, textStr, isComplete } = self;
	// const [completed, setCompleted] = useState(isComplete);
	const handleChangeStatus = (e) => {
		const newStatus = e.target.checked;
		// setCompleted(newStatus);
		updateStatus(id, newStatus);
	};
	// console.log(id, textStr, isComplete);
	return (
		<div className={styles.TodoItem}>
			<p className={isComplete ? styles.isComplete : ""}>{textStr}</p>
			<div>
				<div>
					<label htmlFor={id}>Complete?</label>
					<input
						type='checkbox'
						id={id}
						checked={isComplete}
						onChange={handleChangeStatus}
					/>
				</div>
				<div>
					<button onClick={() => deleteSelf(id)}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default TodoItem;
