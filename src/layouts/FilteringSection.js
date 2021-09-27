const FilteringSection = ({ cars }) => {
	const mapOptions = (filterArr) => {
		return filterArr.map((type) => (
			<option key={type} value={type}>
				{type}
			</option>
		));
	};

	const firstFilter = cars.map((car) => car.name.first);
	const firstOptions = mapOptions(firstFilter);

	const lastFilter = cars.map((car) => car.name.last);
	const lastOptions = mapOptions(lastFilter);

	const phoneFilter = cars.map((car) => car.phone);
	const phoneOptions = mapOptions(phoneFilter);

	return (
		<div>
			<select name="first" id="first">
				<option value=""></option>
				{firstOptions}
			</select>
			<select name="last" id="last">
				<option value=""></option>
				{lastOptions}
			</select>
			<select name="phone" id="phone">
				<option value=""></option>
				{phoneOptions}
			</select>
		</div>
	);
};

export default FilteringSection;
