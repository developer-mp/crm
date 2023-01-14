import { Accordion as AccordionPanel } from "react-bootstrap";
import "./Accordion.css";

const Accordion = (props) => {
  const { title, children } = props;
  return (
    <AccordionPanel defaultActiveKey={["0"]}>
      <AccordionPanel.Item eventKey="0">
        <AccordionPanel.Header>{title}</AccordionPanel.Header>
        <AccordionPanel.Body>{children}</AccordionPanel.Body>
      </AccordionPanel.Item>
    </AccordionPanel>
  );
};

export default Accordion;
