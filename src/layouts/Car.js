const Car = ({ carClass, car }) => {
	const carClassName = `${carClass}__car`;
	const { licenseNumber, name, phone, geoPosition, speed } = car;

	return (
		<div className={`${carClassName}`}>
			<div className={`${carClassName}__licenseNumber`}>
				Numer rejestracyjny:
				<span className={`${carClassName}__licenseNumber__license`}>
					{licenseNumber}
				</span>
			</div>
			<h1 className={`${carClassName}__img`}>IMG</h1>
			<h2 className={`${carClassName}__favorite`}>FAVORITE</h2>
			<button
				className={`${carClassName}__moreBtn`}
				onClick={() => {
					console.log("klik");
				}}
			>
				Więcej...
			</button>
			<div className={`${carClassName}__moreInfo`}>
				<div className={`${carClassName}__moreInfo__driver`}>
					Kierowca:
					<span className={`${carClassName}__moreInfo__driver_name`}>
						{name.first} {name.last}
					</span>
				</div>
				<div className={`${carClassName}__moreInfo__phone`}>
					Nr.kontaktowy:
					<span
						className={`${carClassName}__moreInfo__phone__number`}
					>
						{phone}
					</span>
				</div>
				<div className={`${carClassName}__moreInfo__geoLocation`}>
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
				</div>
				<div className={`${carClassName}__moreInfo__speed`}>
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
				</div>
			</div>
		</div>
	);
};

export default Car;
