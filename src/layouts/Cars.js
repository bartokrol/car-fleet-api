const Cars = ({ basicClassName, cars }) => {
	const carsClassName = `${basicClassName}__cars`;
	const carsFiltered = cars.map((car) => car.licenseNumber);
	return <div className={carsClassName}>{carsFiltered}</div>;
};

export default Cars;
