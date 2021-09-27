const Cars = ({ basicClassName, cars }) => {
	const carsClassName = `${basicClassName}__cars`;
	const carsFiltered = cars.map((car) => (
		<div key={car.carId} className={`${basicClassName}__cars__car`}>
			<p className={`${basicClassName}__cars__car__licenseNumber`}>
				Numer rejestracyjny:
				<span
					className={`${basicClassName}__cars__car__licenseNumber__license`}
				>
					{car.licenseNumber}
				</span>
			</p>
			<h1 className={`${basicClassName}__cars__car__img`}>IMG</h1>
			<h2 className={`${basicClassName}__cars__car__favorite`}>
				FAVORITE
			</h2>
			<button
				className={`${basicClassName}__cars__car__more`}
				onClick={() => {
					console.log("klik");
				}}
			>
				Więcej...
			</button>
			<div className={`${basicClassName}__cars__car__moreInfo`}>
				<p className={`${basicClassName}__cars__car__moreInfo__driver`}>
					Kierowca:
					<span
						className={`${basicClassName}__cars__car__moreInfo__driver_name`}
					>
						{car.name.first} {car.name.last}
					</span>
				</p>
				<p className={`${basicClassName}__cars__car__moreInfo__phone`}>
					Nr.kontaktowy:
					<span
						className={`${basicClassName}__cars__car__moreInfo__phone__number`}
					>
						{car.phone}
					</span>
				</p>
				<p
					className={`${basicClassName}__cars__car__moreInfo__geoLocation`}
				>
					Współrzędne geograficzne:
					<span
						className={`${basicClassName}__cars__car__moreInfo__geoLocation__width`}
					>
						{car.geoPosition.geoWidthPosition}
						<span
							className={`${basicClassName}__cars__car__moreInfo__geoLocation__width__icon`}
						>
							N
						</span>
					</span>
					<span
						className={`${basicClassName}__cars__car__moreInfo__geoLocation__length`}
					>
						{car.geoPosition.geoLengthPosition}
						<span
							className={`${basicClassName}__cars__car__moreInfo__geoLocation__length__icon`}
						>
							E
						</span>
					</span>
				</p>
				<p className={`${basicClassName}__cars__car__moreInfo__speed`}>
					Średnia prędkość:
					<span
						className={`${basicClassName}__cars__car__moreInfo__speed__number`}
					>
						{car.speed}
						<span
							className={`${basicClassName}__cars__car__moreInfo__speed__number__icon`}
						>
							km/h
						</span>
					</span>
				</p>
			</div>
		</div>
	));
	return <div className={carsClassName}>{carsFiltered}</div>;
};

export default Cars;
