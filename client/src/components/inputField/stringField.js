import { FormControl, HelpBlock } from "react-bootstrap";

const StringField = () => {
  const handleChange = (e) => {
    let value = e.target.value;
    if (this.props.stripLeadingSpaces) {
      value = value.replace(/^\s+/, "");
    }
    this.props.onChange(value);
  };

  const { value, readOnly, placeholder, maxLength, hideLength } = this.props;
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
      {!hideLength && maxLength && (
        <HelpBlock>
          {value.length}/{maxLength} characters
        </HelpBlock>
      )}
    </FormControl>
  );
};

export default StringField;
