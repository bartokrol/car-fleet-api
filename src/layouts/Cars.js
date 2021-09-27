import Car from "./Car";

const Cars = ({ carsClass, cars }) => {
	const carsClassName = `${carsClass}__cars`;
	const carsFiltered = cars.map((car) => (
		<Car key={car.id} carClass={carsClassName} car={car} />
	));
	return <div className={carsClassName}>{carsFiltered}</div>;
};

export default Cars;
