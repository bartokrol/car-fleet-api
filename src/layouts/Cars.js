import Car from "./Car";

const Cars = ({ basicClassName, cars }) => {
	const carsClassName = `${basicClassName}__cars`;
	const carsFiltered = cars.map((car) => (
		<Car carClass={carsClassName} car={car} />
	));
	return <div className={carsClassName}>{carsFiltered}</div>;
};

export default Cars;
