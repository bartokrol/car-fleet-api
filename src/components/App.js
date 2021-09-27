import { useEffect, useState } from "react";

const carsCount = 20;
const letters = "ABCDEFZGHIJKLMNOPQRSTWXYZ";
const licenseNumberCount = 3;

function App() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		const fetchLicense = (number) => {
			let carLicenseLetters = "";
			let carLicenseNumbers = "";
			for (let i = 0; i < number; i++) {
				carLicenseLetters +=
					letters[Math.floor(Math.random() * letters.length)];
				carLicenseNumbers += Math.floor(Math.random() * 10);
			}
			const licenseNumber = `${carLicenseLetters} ${carLicenseNumbers}`;
			return licenseNumber;
		};

		const fetchDrivers = () => {
			const fetchedCars = [];
			let carId = 0;
			do {
				const licenseNumber = fetchLicense(licenseNumberCount);
				fetchedCars.push({
					carId,
					licenseNumber,
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
