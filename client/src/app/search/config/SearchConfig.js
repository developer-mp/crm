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
  };

  const getElement = (array, id) => {
    if (array && array.length > 0) {
      return find(array, (item) => item.id === id) || array[0];
    }
    return { id, name: "" };
  };

  // const { ElementEntityId, ElementSubentityId, ElementFilterId } =
  //   determineSelected();

  // const [searchEntityId, setSearchEntityId] = useState(
  //   determineSelected(parseInt(entityId) || undefined)
  // );

  // const [searchSubentityId, setSearchSubentityId] = useState([]);
  // const [searchFilterId, setSearchFilterId] = useState([]);

  // useEffect = (prevProps) => {
  //   if (prevProps.entities !== props.entities) {
  //     setEntityId(determineSelected(searchEntityId));
  //   }
  // };

  // const handleSelectEntity = (value) => {
  //   setSearchEntityId(determineSelected(value));
  //   props.clearQueryFilters();
  // };

  // const handleSelectSubentity = (value) => {
  //   setSearchSubentityId(determineSelected(entityId, value));
  //   props.clearQueryFilters();
  // };

  // const handleSelectFilter = (value) => {
  //   setSearchFilterId(determineSelected(entityId, ElementSubentityId, value));
  //   props.clearQueryFilters();
  // };

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

  const handleClearList = () => {
    props.clearQueryFilters();
  };

  const handleSearch = () => {};

  const buildOptions = () => {
    const entities = entitiesList;
    const entity = find(entities, (entity) => entity.id === entityId);
    const subentities = entity ? entity.subentities : [];
    const subentity = find(subentities, (subentity) => subentity.id === 102);
    const filters = subentity ? subentity.filters : [];
    return { entities, subentities, filters };
  };

  const { entities, subentities, filters } = buildOptions();
  const show = entitiesList?.length !== 0;

  return (
    <div>
      <SelectDropdown
        label="Section"
        name="entity"
        // selectedId={searchEntityId}
        // updateSelection={handleSelectEntity}
        items={entities}
      />
      <SelectDropdown
        label="Topic"
        name="subentity"
        // selectedId={searchSubentityId}
        // updateSelection={handleSelectSubentity}
        items={subentities}
      />
      <SelectDropdown
        label="Subtopic"
        name="filter"
        // selectedId={searchFilterId}
        // updateSelection={handleSelectFilter}
        items={filters}
      />
      {show && (
        <Button className="search-button" onClick={handleSearch}>
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchConfigContainer;
