import React from "react";
import { Form, Dropdown, Label } from "semantic-ui-react";

const Gender = ({ onChange, error, opts, value }) => {
	return (
		<Form.Field width={9} error={Boolean(error)}>
			<label>Gender</label>
			<Dropdown
				placeholder="gender"
				selection
				options={opts}
				onChange={onChange}
				value={value}
			/>
			{ Boolean(error) ? <Label basic color='red' pointing>{error}</Label> : null }
		</Form.Field>
	);
};

export default Gender;
