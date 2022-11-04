import { FormControl, HelpBlock } from "react-bootstrap";

const DecimalField = () => {
  const handleChange = (e) => {
    let strippedInput = e.target.value.replace(/(?!^)-|[^0-9-.]/g, "");
    const firstIndex = strippedInput.indexOf(".");
    let lastIndex = strippedInput.lastIndexOf(".");

    while (firstIndex !== lastIndex) {
      strippedInput =
        strippedInput.slice(0, lastIndex) + strippedInput.slice(lastIndex + 1);
      lastIndex = strippedInput.lastIndexOf(".");
    }
    this.props.onChange(strippedInput);
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

export default DecimalField;
