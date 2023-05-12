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
    initialCategoryId
  ) => {
    if (entitiesList) {
      const { entities } = entitiesList;
      const entity = getElement(entities, initialEntityId);
      const subentity = getElement(entity.subentities, initialSubentityId);
      const category = getElement(subentity.categories, initialCategoryId);
      const index = entitiesList[initialEntityId - 1]?.subentities?.findIndex(
        (subentity) => subentity.categories.length > 0
      );
      return {
        entityId: entity.id,
        subentityId:
          subentity.id || entitiesList[initialEntityId - 1]?.subentities[0]?.id,
        categoryId:
          category.id ||
          (subentity.id % 10 > 1
            ? entitiesList[initialEntityId - 1]?.subentities[index]
                ?.categories[0]?.id
            : category.id),
      };
    }
  };

  const getElement = (array, id) => {
    if (array) {
      return find(array, (item) => item.id === id);
    }
    return { id };
  };

  const [selectedId, setSelectedId] = useState(
    determineSelected(parseInt(entityId))
  );

  const handleSelectEntity = (value) => {
    setSelectedId(determineSelected(value));
  };

  const handleSelectSubentity = (value) => {
    setSelectedId(determineSelected(selectedId.entityId, value));
  };

  const handleSelectCategory = (value) => {
    setSelectedId(
      determineSelected(selectedId.entityId, selectedId.subentityId, value)
    );
  };

  const getKeyId = () => {
    let arr = [];
    let id = "";
    arr = Object.values(selectedId);
    arr = arr.filter((item) => item !== undefined);
    id = Math.max(...arr);
    return id;
  };

  const handleResult = () => {
    dispatch(getResult(getKeyId()));
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
    const categories = subentity ? subentity.categories : [];
    return { entities, subentities, categories };
  };

  const { entities, subentities, categories } = buildOptions();

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
      {categories && showElement(categories) && (
        <SelectDropdown
          label="Subtopic"
          name="category"
          selectedId={selectedId.categoryId}
          updateSelection={handleSelectCategory}
          items={categories}
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
