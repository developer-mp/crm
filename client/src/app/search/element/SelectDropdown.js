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
      <Form.Select onChange={handleChange} value={selectedId}>
        <option selected disabled>
          --Choose an option--
        </option>
        {items &&
          items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectDropdown;
