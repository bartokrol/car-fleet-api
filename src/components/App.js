import { useEffect, useState } from "react";

const carsCount = 20;
const letters = "ABCDEFZGHIJKLMNOPQRSTWXYZ";
const licenseNumberCount = 3;
const DRIVER_API = `https://randomuser.me/api/?results=${carsCount}&inc=name`;

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

		async function fetchDrivers() {
			const drivers = await fetch(DRIVER_API).then((response) =>
				response
					.json()
					.then((data) => data.results)
					.catch((error) => console.log(error))
			);
			const fetchedCars = [];
			let carId = 0;
			do {
				const licenseNumber = fetchLicense(licenseNumberCount);
				const { first, last } = drivers[carId].name;
				fetchedCars.push({
					carId,
					licenseNumber,
					first,
					last,
				});
				carId++;
			} while (fetchedCars.length < carsCount);
			if (fetchedCars.length === carsCount) {
				console.log(fetchedCars);
				setCars(fetchedCars);
			}
		}
		fetchDrivers();
	}, []);
	return <div className="App"></div>;
}

export default App;
