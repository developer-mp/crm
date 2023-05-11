import { Form } from "react-bootstrap";
import "./SelectDropdown.css";

const SelectDropdown = (props) => {
  const handleChange = (e) => {
    props.updateSelection(parseInt(e.target.value));
  };
  const { name, label, selectedId, items } = props;

  return (
    <Form.Group controlId={name}>
      <Form.Label className="select-dropdown-label">{label}</Form.Label>
      <Form.Select onChange={handleChange} defaultValue={selectedId}>
        {items &&
          items.map((item, index) => (
            <option
              key={item.id}
              value={item.id}
              // selected={index === 0}
            >
              {item.name}
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectDropdown;
