import { useEffect, useState } from "react";

const carsCount = 20;
const letters = "ABCDEFZGHIJKLMNOPQRSTWXYZ";
const licenseNumberCount = 3;
const DRIVER_API = `https://randomuser.me/api/?results=${carsCount}&inc=name`;
const lengthGeo = {
	min: 14.07,
	max: 24.09,
};
const widthGeo = {
	min: 49.0,
	max: 54.5,
};

function App() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		const fetchGeoPosition = () => {
			const geoWidthPosition = fetchGeo(widthGeo.min, widthGeo.max);
			const geoLenghtPosition = fetchGeo(lengthGeo.min, lengthGeo.max);
			return { geoWidthPosition, geoLenghtPosition };
		};
		const fetchGeo = (min, max) => {
			const geo = Math.random() * (max - min) + min;
			return geo.toFixed(4);
		};

		const fetchPhoneNumber = () => {
			const phoneNumber = Math.random().toString().slice(4, 13);
			return phoneNumber;
		};

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
				const phone = fetchPhoneNumber();
				const { geoWidthPosition, geoLenghtPosition } =
					fetchGeoPosition();
				fetchedCars.push({
					carId,
					licenseNumber,
					name: {
						first,
						last,
					},
					phone,
					geoPosition: {
						geoWidthPosition,
						geoLenghtPosition,
					},
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
