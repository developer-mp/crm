import { Checkbox } from "react-bootstrap";

const CheckboxField = () => {
  const handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  const { value, readOnly, placeholder } = this.props;
  return (
    <Checkbox checked={value} onChange={handleChange} disabled={readOnly}>
      {placeholder}
    </Checkbox>
  );
};

export default CheckboxField;
