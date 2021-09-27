import { useEffect, useState } from "react";
import Cars from "../layouts/Cars";
import "../styles/main.css";

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

const polishWidthInDegrees = widthGeo.max - widthGeo.min;
const polishLengthInDegrees = lengthGeo.max - lengthGeo.min;

const polishLenghtInKilometers = 649;
const polishWidthInKilometers = 689;

// kilometerLength (1000m) = polishLengthInDegrees / polishLengthInKilometers => value shows in Degrees
// kilomterWidth (1000m) = polishWidthInDegrees / polishWidthInKilometers => value shows in Degrees
const kilometerLength = polishLengthInDegrees / polishLenghtInKilometers;
const kilometerWidth = polishWidthInDegrees / polishWidthInKilometers;

const minSpeed = 60;
const maxSpeed = 200;

const basicClassName = "carFleet";

function App() {
	const [cars, setCars] = useState([]);
	const [filteredCars, setFilteredCars] = useState([]);

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
				const geoLengthPosition = fetchGeo(
					lengthGeo.min,
					lengthGeo.max
				);
				return { geoWidthPosition, geoLengthPosition };
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
					const { geoWidthPosition, geoLengthPosition } =
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
							geoLengthPosition,
						},
						speed,
						favorite: false,
						more: false,
					});
					carId++;

					const intervalCarDistance = (speed) => {
						const distanceInThreeSeconds = (
							(speed / 3.6) *
							3
						).toFixed(0);
						const lengthDistance = Math.random();
						const widthDistance = 1 - lengthDistance;
						const degreesLengthInThreeSeconds =
							(distanceInThreeSeconds / 1000) *
							lengthDistance *
							kilometerLength;

						const degreesWidthInThreeSeconds =
							(distanceInThreeSeconds / 1000) *
							widthDistance *
							kilometerWidth;

						setCars((cars) => {
							cars = [...cars];
							cars = cars.map((car) => {
								car = {
									...car,
									geoPosition: {
										geoWidthPosition:
											Number(geoWidthPosition) +
											degreesWidthInThreeSeconds,
										geoLengthPosition:
											Number(geoLengthPosition) +
											degreesLengthInThreeSeconds,
									},
								};
								return car;
							});
							// localStorage.setItem("cars", JSON.stringify(cars));
							return cars;
						});
					};
					// setInterval(() => intervalCarDistance(speed), 3000);
				} while (fetchedCars.length < carsCount);
				if (fetchedCars.length === carsCount) {
					setCars(fetchedCars);
					// localStorage.setItem("cars", JSON.stringify(fetchedCars));
				}
			}
			fetchDrivers();
		}
	}, []);

	const handleFavoriteChange = (e) => {
		const id = e.target.dataset.id;
		setCars((cars) => {
			cars = [...cars];
			cars[id] = {
				...cars[id],
				favorite: !cars[id].favorite,
			};
			// localStorage.setItem("cars", JSON.stringify(cars));
			return cars;
		});
	};

	const handleMoreChange = (e) => {
		const more = e.target.dataset.more;
		const id = Number(e.target.dataset.id);

		if (more === "true") {
			setCars((cars) => {
				cars = [...cars];
				cars[id] = {
					...cars[id],
					more: false,
				};
				return cars;
			});
		}

		if (more === "false") {
			setCars((cars) => {
				cars = [...cars];
				cars[id] = {
					...cars[id],
					more: true,
				};
				cars[id - 1] = {
					...cars[id - 1],
					more: true,
				};
				cars[id + 1] = {
					...cars[id + 1],
					more: true,
				};
				return cars;
			});
		}
	};

	return (
		<div className={basicClassName}>
			<Cars
				carsClass={basicClassName}
				cars={cars}
				favoriteChange={handleFavoriteChange}
				moreChange={handleMoreChange}
			/>
		</div>
	);
}

export default App;
