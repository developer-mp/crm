import Select from "react-select";
import { lodash as _ } from "lodash";

const DropdownField = () => {
  const handleChange = (option) => {
    if (_.isArray(option)) {
      this.props.onChange(_.map(option, (item) => item.value));
    } else {
      this.props.onChange(option.value);
    }
  };

  const { value, dropdownList, multiple, readOnly, placeholder } = this.props;
  const ddl = _.filter(dropdownList, (item) => !item.hidden);
  const options = _.map(ddl, (item) => {
    if (_.isObject(item)) {
      return { value: item.value, label: item.text };
    }
    return { value: item, label: item };
  });

  let selectedOption;
  if (_.isArray(value)) {
    selectedOption = _.filter(options, (item) => _.includes(value, item.value));
  } else {
    selectedOption = _.filter(options, (item) => item.value === value) || null;
  }

  const customStyle = {
    control: (provided) => ({
      ...provided,
      minHeight: "34px",
      borderRadius: 0,
      boxShadow: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "6px",
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
      "z-index": 3,
    }),
  };
  return (
    <Select
      className="filter-dropdown"
      options={options}
      isMulti={multiple}
      value={selectedOption}
      onChange={handleChange}
      isClearable={false}
      styles={customStyle}
      isDisabled={readOnly}
      placeholder={placeholder}
    ></Select>
  );
};

export default DropdownField;
