// import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const initialItems = [
	{ textStr: "Get MERN black belt.", isComplete: false },
	{ textStr: "Get Python black belt.", isComplete: true },
];
initialItems[0].id = `${new Date()}-${initialItems[0].textStr}`;
initialItems[1].id = `${new Date()}-${initialItems[1].textStr}`;

function App() {
	return (
		<div className='App'>
			<TodoList initialItems={initialItems} />
		</div>
	);
}

export default App;

// <header className='App-header'>
// 	<img src={logo} className='App-logo' alt='logo' />
// 	<p>
// 		Edit <code>src/App.js</code> and save to reload.
// 	</p>
// 	<a
// 		className='App-link'
// 		href='https://reactjs.org'
// 		target='_blank'
// 		rel='noopener noreferrer'
// 	>
// 		Learn React
// 	</a>
// </header>;
