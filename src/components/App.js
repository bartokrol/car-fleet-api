import { useEffect, useState } from "react";

function App() {
	const [cars, setCars] = useState([]);
	
	useEffect(() => {
		console.log("loaded");
	}, []);
	return <div className="App"></div>;
}

export default App;
