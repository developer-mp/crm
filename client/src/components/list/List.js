import { ListGroup } from "react-bootstrap";
import "./List.css";

const List = (props) => {
  const { title, children } = props;
  return (
    <ListGroup>
      <ListGroup.Item active>{title}</ListGroup.Item>
      <ListGroup.Item>{children}</ListGroup.Item>
    </ListGroup>
  );
};

export default List;
