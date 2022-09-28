// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		ID: "",
		Content: 0,
		Option1: "",
		Option2: "",
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		//config.questions
		fetch("/questions").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					ID: data.ID,
					Content: data.Content,
					Option1: data.Option1,
					Option2: data.Option2,
				});
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>React and flask</h1>
				<h1>First Question</h1>
				{/* Calling a data from setdata for showing */}
				<p>ID {data.ID}</p>
				<p>Question {data.Content} ?</p>
				<p>Option 1: {data.Option1}</p>
				<p>Option 2: {data.Option2}</p>

			</header>
		</div>
	);
}

export default App;

