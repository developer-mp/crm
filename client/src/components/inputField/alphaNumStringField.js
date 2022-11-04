import { FormControl, HelpBlock } from "react-bootstrap";

const AlphaNumStringField = () => {
  const handleChange = (e) => {
    let strippedInput = e.target.value.replace(/[^\w\s]/g, "");
    if (this.props.stripLeadingSpaces) {
      strippedInput = strippedInput.replace(/^\s+/, "");
    }
    if (this.props.noSpaces) {
      strippedInput = strippedInput.replace(/\s+/, "");
    }
    this.props.onChange(strippedInput);
  };

  const lengthDisplay = () => {
    const { value, minLength, maxLength, hideLength } = this.props;
    if (hideLength) return;
    if (maxLength && !minLength) {
      return (
        <HelpBlock>
          {value.length}/{maxLength} characters
        </HelpBlock>
      );
    }
    if (maxLength && minLength && minLength !== maxLength) {
      return (
        <HelpBlock>
          {value.length}/{maxLength} characters (minimum {minLength})
        </HelpBlock>
      );
    }
    if (maxLength && minLength && minLength === maxLength) {
      return (
        <HelpBlock>
          {maxLength} characters required ({value.length}/{maxLength})
        </HelpBlock>
      );
    }
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
      {lengthDisplay()}
    </FormControl>
  );
};

export default AlphaNumStringField;
