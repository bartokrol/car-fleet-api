import { useEffect, useState } from "react";

const carsCount = 20;

function App() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		const fetchDrivers = () => {
			const fetchedCars = [];
			let carId = 0;
			do {
				fetchedCars.push({
					carId,
				});
				carId++;
			} while (fetchedCars.length < carsCount);
			if (fetchedCars.length === carsCount) {
				setCars(fetchedCars);
			}
		};
		fetchDrivers();
	}, []);
	return <div className="App"></div>;
}

export default App;
