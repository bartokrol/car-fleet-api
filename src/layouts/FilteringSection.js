const FilteringSection = ({ cars }) => {
	const firstFilter = cars.map((car) => car.name.first);
	const firstOptions = firstFilter.map((first) => (
		<option value={first}>{first}</option>
	));

	const lastFilter = cars.map((car) => car.name.last);
	const lastOptions = lastFilter.map((last) => (
		<option value={last}>{last}</option>
	));

	const phoneFilter = cars.map((car) => car.phone);
	const phoneOptions = phoneFilter.map((phone) => (
		<option value={phone}>{phone}</option>
	));

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
