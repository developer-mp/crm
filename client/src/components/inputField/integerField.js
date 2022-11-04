import { FormControl, HelpBlock } from "react-bootstrap";

const IntegerField = () => {
  const handleChange = (e) => {
    let strippedInput = e.target.value.replace(/(?!^)-|[^0-9-.]/g, "");
    this.props.onChange(parseInt(strippedInput, 10) || null);
  };

  const { value, readOnly, placeholder, maxLength } = this.props;

  return (
    <FormControl
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      autoComplete="off"
      readOnly={readOnly}
      maxLength={maxLength}
    >
      {maxLength && (
        <HelpBlock>
          {value.length}/{maxLength} characters
        </HelpBlock>
      )}
    </FormControl>
  );
};

export default IntegerField;
