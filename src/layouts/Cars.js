import Car from "./Car";

const Cars = ({ carsClass, cars, favoriteChange, moreChange }) => {
	const carsClassName = `${carsClass}__cars`;
	const mapCars = (filterArr) => {
		return filterArr.map((car) => (
			<Car
				key={car.carId}
				carClass={carsClassName}
				car={car}
				favoriteChange={favoriteChange}
				moreChange={moreChange}
			/>
		));
	};

	const favoriteCarsFilter = mapCars(cars.filter((car) => car.favorite));
	const normalCarsFilter = mapCars(cars.filter((car) => !car.favorite));
	return (
		<div className={carsClassName}>
			{favoriteCarsFilter}
			{normalCarsFilter}
		</div>
	);
};

export default Cars;
