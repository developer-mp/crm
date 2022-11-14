import { FormLabel, FormControl, FormGroup } from "react-bootstrap";

const SelectDropdown = () => {
  const handleChange = (e) => {
    this.props.updateSelection(parseInt(e.target.value));
  };
  const { name, label, selectedId, items } = this.props;
  if (items.length === 0) return null;
  return (
    <FormGroup controlId={name}>
      <FormLabel>{label}</FormLabel>
      <FormControl
        componentClass="select"
        onChange={handleChange}
        value={selectedId}
      >
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );
};

export default SelectDropdown;
