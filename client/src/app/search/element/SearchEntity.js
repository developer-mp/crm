import SelectDropdown from "./SelectDropdown.js";
import { getResult } from "../../../actions/result.js";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchEntity.css";
import pkg from "lodash";
const { find } = pkg;

const SearchEntity = (props) => {
  const { entityId } = props;
  const navigate = useNavigate();

  const { searchEntities } = useSelector((store) => store.searchEntities);
  const dispatch = useDispatch();

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

  const handleSelectEntity = (value) => {
    setSelectedId(determineSelected(value));
  };

  const handleSelectSubentity = (value) => {
    setSelectedId(determineSelected(selectedId.entityId, value));
  };

  const handleSelectFilter = (value) => {
    setSelectedId(
      determineSelected(selectedId.entityId, selectedId.subentityId, value)
    );
  };

  // const getSelectedSearchId = () => {
  //   const { entities } = props;
  //   const entity = getElement(entities, entityId);
  //   const subentity = getElement(entity.subentities, entityId);
  //   const filter = getElement(subentity.filters, this.state.filterId);
  //   return filter.id || subentity.id || entity.id;
  // };

  const handleResult = () => {
    dispatch(getResult(101));
    navigate("/result");
  };

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
        <Button className="search-button" onClick={handleResult}>
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchEntity;
