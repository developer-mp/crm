import { Form, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchQueryFilters } from "./../../../actions/searchAction.js";

const QueryFilters = () => {
  const handleSelection = () => {};
  const { queryFiltersItems } = useSelector((state) => state.queryFilters);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const getFilterItems = async () => {
      try {
        dispatch(fetchQueryFilters({ entityId: 1 })).unwrap();
        if (typeof queryFiltersItems?.filterList?.[0]?.data !== "undefined")
          setFilters(queryFiltersItems?.filterList?.[0]?.data);
      } catch (error) {
        return error;
      }
    };
    getFilterItems();
  }, []);

  // const getFiltersList = () => {
  //   const filterObj = queryFiltersItems?.filterList?.[0]?.data;
  //   let filterArr = [];
  //   // setFilters(filterArr);
  //   for (var i = 0; i < filterObj?.length; i++)
  //     // console.log(filterObj[i].name);
  //     filterArr.push(filterObj[i].name);
  //   // console.log(filterArr);
  //   // console.log(queryFiltersItems?.filterList);
  //   return filterArr;
  // };

  return (
    <div>
      <InputGroup>
        <Form.Select onChange={handleSelection} value={"selectedField"}>
          {filters &&
            filters?.map((filter) => (
              <option key={filter.name} value={filter.name}>
                {filter.name}
              </option>
            ))}
          {/* {noAvailableFilters && <option>{getNoFilterMessage()}</option>} */}
        </Form.Select>
        <InputGroup.Text>Add Filter</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default QueryFilters;
