import React, { useState, useEffect } from "react";
// import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
	const { index, self, updateStatus, deleteSelf } = props;
	const { id, textStr, isComplete } = self;
	const [completed, setCompleted] = useState(false);
	useEffect(() => {
		let tempStatus = JSON.parse(localStorage.getItem(`state-${id}`));
		// let tempStatus = localStorage.getItem(`${id}-status`);
		if (tempStatus !== null) {
			if (tempStatus !== completed) setCompleted(tempStatus);
			// } else localStorage.setItem(`state-${id}`, completed);
		} else localStorage.setItem(`state-${id}`, JSON.stringify(completed));
	}, [id, completed]);
	const handleChangeStatus = (e) => {
		const newStatus = e.target.checked;
		localStorage.setItem(`state-${id}`, JSON.stringify(newStatus));
		// localStorage.setItem(`state-${id}`, newStatus);
		setCompleted(newStatus);
		// updateStatus(id, newStatus);
	};
	return (
		<div className={styles.TodoItem}>
			<p className={completed ? styles.isComplete : ""}>{textStr}</p>
			<div>
				<div>
					<label htmlFor={id}>Complete?</label>
					<input
						type='checkbox'
						id={id}
						checked={completed}
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
