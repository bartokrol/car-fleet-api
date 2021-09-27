import { useEffect, useState } from "react";

const carsCount = 1;
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

const polishWidthInDegrees = widthGeo.max - widthGeo.min;
const polishLengthInDegrees = lengthGeo.max - lengthGeo.min;

const polishLenghtInKilometers = 649;
const polishWidthInKilometers = 689;

// kilometerLength (1000m) = polishLengthInDegrees / polishLengthInKilometers => value shows in Degrees
// kilomterWidth (1000m) = polishWidthInDegrees / polishWidthInKilometers => value shows in Degrees
const kilometerLength = polishLengthInDegrees / polishLenghtInKilometers;
const kilometerWidth = polishWidthInDegrees / polishWidthInKilometers;

// setInterval(() => {
// 	setCars((cars) => {
// 		cars = [...cars];
// 		cars[carId] = {
// 			...cars[carId],
// 			speed: cars[carId].speed++,
// 		};
// 		return cars;
// 	});
// 	console.log(speed + 1);
// }, 3000);

const minSpeed = 60;
const maxSpeed = 200;

function App() {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		if (localStorage.length) {
			const localCars = localStorage.getItem("cars");
			setCars(JSON.parse(localCars));
		}
		if (!localStorage.length) {
			const fetchSpeed = (min, max) => {
				const speed = Math.floor(Math.random() * (max - min) + min);
				return speed;
			};

			const fetchGeoPosition = () => {
				const geoWidthPosition = fetchGeo(widthGeo.min, widthGeo.max);
				const geoLenghtPosition = fetchGeo(
					lengthGeo.min,
					lengthGeo.max
				);
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
					const speed = fetchSpeed(minSpeed, maxSpeed);
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
						speed,
					});
					carId++;
				} while (fetchedCars.length < carsCount);
				if (fetchedCars.length === carsCount) {
					setCars(fetchedCars);
					localStorage.setItem("cars", JSON.stringify(fetchedCars));
				}
			}
			fetchDrivers();
		}
	}, []);
	return <div className="App"></div>;
}

export default App;
