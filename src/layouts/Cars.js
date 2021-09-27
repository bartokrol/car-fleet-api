import Car from "./Car";

const Cars = ({ carsClass, cars, favoriteChange }) => {
	const carsClassName = `${carsClass}__cars`;
	const mapCars = (filterArr) => {
		return filterArr.map((car) => (
			<Car
				key={car.carId}
				carClass={carsClassName}
				car={car}
				favoriteChange={favoriteChange}
			/>
		));
	};

	const favoriteCarsMap = mapCars(cars.filter((car) => car.favorite));
	const normalCarsMap = mapCars(cars.filter((car) => !car.favorite));
	return (
		<div className={carsClassName}>
			{favoriteCarsMap}
			{normalCarsMap}
		</div>
	);
};

export default Cars;
