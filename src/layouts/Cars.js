import Car from "./Car";

const Cars = ({ carsClass, cars, favoriteChange }) => {
	const carsClassName = `${carsClass}__cars`;
	const carsFiltered = cars.map((car) => (
		<Car
			key={car.carId}
			carClass={carsClassName}
			car={car}
			favoriteChange={favoriteChange}
		/>
	));
	return <div className={carsClassName}>{carsFiltered}</div>;
};

export default Cars;
