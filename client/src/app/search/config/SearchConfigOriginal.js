import React, { Component } from "react";
import SelectDropdown from "./SelectDropdown.js";
import { Button } from "react-bootstrap";
import pkg from "lodash";
const { find } = pkg;

class SearchConfig extends Component {
  constructor(props) {
    super(props);
    const { entityId } = this.props;
    props.fetchSearchEntities();
    this.state = this.determineSelected(parseInt(entityId) || undefined);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.entities !== this.props.entities) {
      this.setState((state) => this.determineSelected(state.entityId));
    }
  }

  determineSelected(initialEntityId, initialSubentityId, initialFilterId) {
    const { entities } = this.props;
    const entity = this.getElement(entities, initialEntityId);
    const subentity = this.getElement(entity.subentities, initialSubentityId);
    const filter = this.getElement(subentity.filters, initialFilterId);
    const add = entity.add || subentity.add || filter.add;
    return {
      entityId: entity.id,
      subentityId: subentity.id,
      filterId: filter.id,
      add,
    };
  }
  getElement(array, id) {
    if (array && array.length > 0) {
      return find(array, (item) => item.id === id) || array[0];
    }
    return { id, name: "" };
  }

  handleSelectEntity = (value) => {
    this.setState(this.determineSelected(value));
    this.props.clearQueryFilters();
  };

  handleSelectSubentity = (value) => {
    this.setState((state) => this.determineSelected(state.entityId, value));
    this.props.clearQueryFilters();
  };

  handleSelectFilter = (value) => {
    this.setState((state) =>
      this.determineSelected(state.entityId, state.subentityId, value)
    );
    this.props.clearQueryFilters();
  };

  getFilters = (event) => {
    const searchId = this.getSelectedSearchId();
    this.props.getQueryFilters(searchId);
    event.preventDefault();
  };

  getSelectedSearchId() {
    const { entities } = this.props;
    const entity = this.getElement(entities, this.state.entityId);
    const subentity = this.getElement(
      entity.subentities,
      this.state.subentityId
    );
    const filter = this.getElement(subentity.filters, this.state.filterId);
    return filter.id || subentity.id || entity.id;
  }

  buildOptions() {
    const { entities } = this.props;
    const { entityId, subentityId } = this.state;
    const entity = find(entities, (entity) => entity.id === entityId);
    const subentities = entity ? entity.subentities : [];
    const subentity = find(
      subentities,
      (subentity) => subentity.id === subentityId
    );
    const filters = subentity ? subentity.filters : [];
    return { entities, subentities, filters };
  }

  handleClearList = () => {
    this.props.clearQueryFilters();
  };

  handleNewQuery = () => {
    const searchId = this.getSelectedSearchId();
    this.props.newQuery(searchId);
  };

  render() {
    const { entityId, subentityId, filterId } = this.list;
    const { entities, subentities, filters } = this.buildOptions();
    const show = entities.length !== 0;

    return (
      <div>
        <form>
          <SelectDropdown
            label="Area"
            name="entity"
            selectedId={entityId}
            updateSelection={this.handleSelectEntity}
            items={entities}
          />
          <SelectDropdown
            label="Topic"
            name="subentity"
            selectedId={subentityId}
            updateSelection={this.handleSelectEntity}
            items={subentities}
          />
          <SelectDropdown
            label="Subtopic"
            name="filter"
            selectedId={filterId}
            updateSelection={this.handleSelectEntity}
            items={filters}
          />
          {/* <FeatureToggle featureName="queryList"></FeatureToggle> */}
          {show && (
            <Button
              bsStyle="primary"
              className="left10"
              onClick={this.handleNewQuery}
            >
              Query
            </Button>
          )}
        </form>
        {/* <QueryFiltersContainer /> */}
      </div>
    );
  }
}

export default SearchConfig;
