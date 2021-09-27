const Car = ({ carClass, car }) => {
	const carClassName = `${carClass}__car`;
	const { carId, licenseNumber, name, phone, geoPosition, speed } = car;

	return (
		<div key={carId} className={`${carClassName}`}>
			<p className={`${carClassName}__licenseNumber`}>
				Numer rejestracyjny:
				<span className={`${carClassName}__licenseNumber__license`}>
					{licenseNumber}
				</span>
			</p>
			<h1 className={`${carClassName}__img`}>IMG</h1>
			<h2 className={`${carClassName}__favorite`}>FAVORITE</h2>
			<button
				className={`${carClassName}__more`}
				onClick={() => {
					console.log("klik");
				}}
			>
				Więcej...
			</button>
			<div className={`${carClassName}__moreInfo`}>
				<p className={`${carClassName}__moreInfo__driver`}>
					Kierowca:
					<span className={`${carClassName}__moreInfo__driver_name`}>
						{name.first} {name.last}
					</span>
				</p>
				<p className={`${carClassName}__moreInfo__phone`}>
					Nr.kontaktowy:
					<span
						className={`${carClassName}__moreInfo__phone__number`}
					>
						{phone}
					</span>
				</p>
				<p className={`${carClassName}__moreInfo__geoLocation`}>
					Współrzędne geograficzne:
					<span
						className={`${carClassName}__moreInfo__geoLocation__width`}
					>
						{geoPosition.geoWidthPosition}
						<span
							className={`${carClassName}__moreInfo__geoLocation__width__icon`}
						>
							N
						</span>
					</span>
					<span
						className={`${carClassName}__moreInfo__geoLocation__length`}
					>
						{geoPosition.geoLengthPosition}
						<span
							className={`${carClassName}__moreInfo__geoLocation__length__icon`}
						>
							E
						</span>
					</span>
				</p>
				<p className={`${carClassName}__moreInfo__speed`}>
					Średnia prędkość:
					<span
						className={`${carClassName}__moreInfo__speed__number`}
					>
						{speed}
						<span
							className={`${carClassName}__moreInfo__speed__number__icon`}
						>
							km/h
						</span>
					</span>
				</p>
			</div>
		</div>
	);
};

export default Car;
