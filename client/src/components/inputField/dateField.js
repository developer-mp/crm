import DatePicker from "react-datepicker";

const DateField = () => {
  const handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  const { value, readOnly } = this.props;
  const date = value ? new Date(value).toISOString() : null;
  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat={"MM/DD/YYYY"}
      disabled={readOnly}
      autocomplete="off"
    ></DatePicker>
  );
};

export default DateField;
