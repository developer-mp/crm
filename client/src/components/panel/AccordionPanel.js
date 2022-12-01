import { Accordion } from "react-bootstrap";
import "./AccordionPanel.css";

const AccordionPanel = (props) => {
  const { title, children, name = [] } = props;
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionPanel;
