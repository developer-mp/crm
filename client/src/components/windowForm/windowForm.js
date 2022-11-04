import {
  Button,
  FormGroup,
  ControlLabel,
  Grid,
  Row,
  Col,
  Alert,
  SplitButton,
  MenuItem,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import InputField from "../inputField/inputField.js";
import { dependableComponent } from "./WindowHelper.js";
import { lodash as _ } from "lodash";
import React, { useState } from "react";
import "./WindowForm.css";

const WindowForm = (props) => {
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState([]);

  const { components } = props;
  //const values = {};
  _.forEach(props.components, (component) => {
    values[components.name] = component.defaultValue || "";
    dependableComponent(
      components,
      component.name,
      component.defaultValue || ""
    );
  });

  const handleChange = (componentName) => (value) => {
    this.setState((state) => ({
      values: {
        ...state.values,
        [componentName]: value,
      },
    }));

    // setValues([componentName].value);
    const { components } = this.props;
    const cmp = _.find(components, { name: componentName });
    if (cmp.postAction) {
      const cmpResult = dependableComponent(components, componentName, value);
      if (cmpResult.name) {
        this.setState((state) => ({
          values: {
            ...state.values,
            [cmpResult.name]: cmpResult.value,
          },
        }));
      }
    }
  };

  const handleSave = (addAnother) => {
    const errors = this.gatherErrors(this.props.components);
    if (errors && errors.length > 0) {
      this.setState({ errors });
    } else {
      this.props.save(this.state.values, addAnother);
    }
  };

  const canSave = () => {
    const { components } = this.props;
    const emptyComponent = _.find(
      components,
      (component) => component.required && !this.state.values[component.name]
    );
    return !emptyComponent;
  };

  const constructFormComponent = (component) => {
    <Col md={component.cols} key={component.name}>
      <FormGroup
        controlId={component.name}
        className={component.slim && "slim"}
      >
        {component.label && (
          <ControlLabel>
            {!component.ztip && <span>{component.label}</span>}
            {component.ztip && (
              <OverlayTrigger
                overlay={
                  <Tooltip id={`tooltip-${component.label}`}>
                    {component.ztip}
                  </Tooltip>
                }
              >
                <span>{component.label}</span>
              </OverlayTrigger>
            )}
            {component.required && <span className="required">*</span>}
          </ControlLabel>
        )}
        <InputField
          fieldType={component.fieldType}
          value={this.state.values[component.name]}
          onChange={this.handleChange(component.name)}
          placeholder={component.placeholder}
          readOnly={component.readOnly}
          dropdownList={component.dropdownList}
          maxLength={component.maxLength}
          stripLeadingSpaces={component.stripLeadingSpaces}
          operator="Equals"
        />
      </FormGroup>
    </Col>;

    const determineMinValueError = (component) => {
      if (component.depends) {
        const { components } = this.props;
        const { values } = this.state;
        const minValue = values[component.depends];
        const currentValue = values[component.name];
        if (
          minValue &&
          currentValue &&
          new Date(minValue) > new Date(currentValue)
        ) {
          const dependsOnComponent = _.find(
            components,
            (c) => c.name === component.depends
          );
          return (
            <React.Fragment>
              <b>{component.label}</b> cannot be before
              <b>{dependsOnComponent.label}</b>({minValue})
            </React.Fragment>
          );
        }
      }
      return null;
    };

    const gatherErrors = (components) =>
      _(components)
        .map((component) => this.determineMinValueError(component))
        .filter((error) => error)
        .value();

    const constructErrorsAlers = () => {
      const { errors } = this.state;
      return _.map(errors, (error, index) => (
        <Alert key={index} bsStyle="danger">
          {error}
        </Alert>
      ));
    };
  };

  const {
    //components,
    title,
    cancel,
    deleteData,
    canDelete,
    canAddAnother,
    saveLabel,
  } = this.props;
  return (
    <form className="window-form" onSubmit={(e) => e.preventDefault()}>
      <Grid fluid={true} className="window-form-grid">
        {title && (
          <div className="window-form-title">
            {title}
            <span>(hover over the label for tooltip)</span>
          </div>
        )}
        {this.constructErrorsAlers()}
        <Row>
          {_(components)
            .filter((component) => !component.hidden)
            .map((component) => this.constructFormComponent(component))
            .value()}
        </Row>
        <div className="window-form-buttons">
          {canDelete && (
            <Button onClick={deleteData} bsStyle="danger">
              Delete
            </Button>
          )}
          <Button onClick={cancel}>Cancel</Button>
          {!canAddAnother && (
            <Button
              onClick={() => this.handleSave(false)}
              disabled={!this.canSave()}
            >
              {saveLabel}
            </Button>
          )}
          {canAddAnother && (
            <SplitButton
              onClick={() => this.handleSave(false)}
              disabled={!this.canSave()}
              title={saveLabel}
              pullRight={true}
            >
              <MenuItem onClick={() => this.handleSave(true)}>
                Save and Add Another
              </MenuItem>
            </SplitButton>
          )}
        </div>
      </Grid>
    </form>
  );
};

export default WindowForm;
