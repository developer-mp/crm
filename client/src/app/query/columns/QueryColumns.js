import { ButtonGroup, Button, Container, Col, Row } from "react-bootstrap";

const QueryColumns = (props) => {
  const {
    columnsList,
    selectedColumnsMap,
    toggleColumn,
    deselectAllColumns,
    selectAllColumns,
  } = props;

  const columnButtons = columnsList.map((column) => {
    const checked = !!selectedColumnsMap[column.column];
    const disabled = column.required;
    return (
      <Col md={4} key={column.column}>
        <label>
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={() => toggleColumn(column.column)}
          />
          &nbsp;{column.name}
        </label>
      </Col>
    );
  });

  return (
    <div>
      <ButtonGroup className="column-toggle-group">
        <Button onClick={selectAllColumns}>Select All</Button>
        <Button onClick={deselectAllColumns}>Deselect All</Button>
      </ButtonGroup>
      <Container fluid>
        <Row>{columnButtons}</Row>
      </Container>
    </div>
  );
};

export default QueryColumns;
