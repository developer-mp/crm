import SelectDropdown from "./SelectDropdown.js";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./SearchConfig.css";
import pkg from "lodash";
const { find } = pkg;

const SearchConfigContainer = (props) => {
  const { entityId } = props;

  const { searchEntities } = useSelector((store) => store.searchEntities);

  const entitiesList = searchEntities.list;

  const determineSelected = (
    initialEntityId,
    initialSubentityId,
    initialFilterId
  ) => {
    if (entitiesList) {
      const { entities } = entitiesList;
      const entity = getElement(entities, initialEntityId);
      const subentity = getElement(entity.subentities, initialSubentityId);
      const filter = getElement(subentity.filters, initialFilterId);
      const add = entity.add || subentity.add || filter.add;
      return {
        entityId: entity.id,
        subentityId: subentity.id,
        filterId: filter.id,
        add,
      };
    }
  };

  const getElement = (array, id) => {
    if (array && array.length > 0) {
      return find(array, (item) => item.id === id) || array[0];
    }
    return { id, name: "" };
  };

  const [selectedId, setSelectedId] = useState(
    determineSelected(parseInt(entityId) || undefined)
  );

  // useEffect = (prevProps) => {
  //   if (prevProps.entitiesList !== props.entitiesList) {
  //     setSelectedId(determineSelected(entityId));
  //   }
  // };

  const handleSelectEntity = (value) => {
    setSelectedId(determineSelected(value));
    //props.clearQueryFilters();
  };

  const handleSelectSubentity = (value) => {
    setSelectedId(determineSelected(selectedId.entityId, value));
    //props.clearQueryFilters();
  };

  const handleSelectFilter = (value) => {
    setSelectedId(
      determineSelected(selectedId.entityId, selectedId.subentityId, value)
    );
    //props.clearQueryFilters();
  };

  // const getFilters = (event) => {
  //   const searchId = getSelectedSearchId();
  //   props.getQueryFilters(searchId);
  //   event.preventDefault();
  // };

  // const getSelectedSearchId = () => {
  //   const { entities } = props;
  //   const entity = getElement(entities, entityId);
  //   const subentity = getElement(entity.subentities, entityId);
  //   const filter = getElement(subentity.filters, this.state.filterId);
  //   return filter.id || subentity.id || entity.id;
  // };

  // const handleClearList = () => {
  //   props.clearQueryFilters();
  // };

  const handleSearch = () => {};

  const buildOptions = () => {
    const entities = entitiesList;
    const entity = find(
      entities,
      (entity) => entity.id === selectedId.entityId
    );
    const subentities = entity ? entity.subentities : [];
    const subentity = find(
      subentities,
      (subentity) => subentity.id === selectedId.subentityId
    );
    const filters = subentity ? subentity.filters : [];
    return { entities, subentities, filters };
  };

  const { entities, subentities, filters } = buildOptions();

  const showElement = (elem) => {
    if (elem.length !== 0) return true;
  };

  return (
    <div>
      {entities && showElement(entities) && (
        <SelectDropdown
          label="Section"
          name="entity"
          selectedId={selectedId.entityId}
          updateSelection={handleSelectEntity}
          items={entities}
        />
      )}
      {subentities && showElement(subentities) && (
        <SelectDropdown
          label="Topic"
          name="subentity"
          selectedId={selectedId.subentityId}
          updateSelection={handleSelectSubentity}
          items={subentities}
        />
      )}
      {filters && showElement(filters) && (
        <SelectDropdown
          label="Subtopic"
          name="filter"
          selectedId={selectedId.filterId}
          updateSelection={handleSelectFilter}
          items={filters}
        />
      )}
      {entitiesList && showElement(entitiesList) && (
        <Button className="search-button" onClick={handleSearch}>
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchConfigContainer;
