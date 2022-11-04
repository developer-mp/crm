import { InputGroup } from "react-bootstrap";
import AlphaNumStringField from "./alphaNumStringField";
import CheckboxField from "./checkboxField";
import DateField from "./dateField";
import DecimalField from "./decimalField";
import DropdownField from "./dropdownField";
import IntegerField from "./integerField";
import MonetaryField from "./monetaryField";
import MultiStringField from "./multiStringField";
import StringField from "./stringField";
import TextAreaField from "./textAreaField";
import { lodash as _ } from "lodash";
import React from "react";

const InputField = () => {
  const handleValueChange = (position) => (value) => {
    let currentValue;
    if (position !== undefined) {
      currentValue = [...this.props.value];
      currentValue[position] = value;
    } else {
      currentValue = value;
    }
    this.props.onChange(currentValue);
  };

  const getFieldType = () => {
    const { operator, fieldType } = this.props;
    switch (fieldType) {
      case 1:
        return StringField;
      case 2:
      case 15:
        if (operator === "Contains") return StringField;
        return DropdownField;
      case 3:
      case 8:
        return DateField;
      case 4:
      case 5:
        return IntegerField;
      case 6:
        return MonetaryField;
      case 7:
        return DecimalField;
      case 12:
        return CheckboxField;
      case 13:
        return TextAreaField;
      case 14:
        return MultiStringField;
      default:
        return StringField;
    }
  };

  const isMultipleSelect = () => this.props.operator === "In";

  const {
    value,
    dropdownList,
    readOnly,
    placeholder,
    maxLength,
    stripLeadingSpaces,
  } = this.props;
  const FieldType = getFieldType();
  const multipleSelect = isMultipleSelect();
  if (_.isArray(value) && !multipleSelect) {
    return (
      <React.Fragment>
        <FieldType
          multiple={false}
          value={value[0]}
          dropdownList={dropdownList}
          onChange={handleValueChange(0)}
          readOnly={readOnly}
          placeholder={placeholder}
          maxLength={maxLength}
          stripLeadingSpaces={stripLeadingSpaces}
        />
        <InputGroup.Addon>and</InputGroup.Addon>
        <FieldType
          multiple={false}
          value={value[1]}
          dropdownList={dropdownList}
          onChange={handleValueChange(1)}
          readOnly={readOnly}
          placeholder={placeholder}
          maxLength={maxLength}
          stripLeadingSpaces={stripLeadingSpaces}
        />
      </React.Fragment>
    );
  } else {
    return (
      <FieldType
        multiple={multipleSelect}
        value={value}
        dropdownList={dropdownList}
        onChange={handleValueChange()}
        readOnly={readOnly}
        placeholder={placeholder}
        maxLength={maxLength}
        stripLeadingSpaces={stripLeadingSpaces}
      />
    );
  }
};

export default InputField;
