// import { InputGroup } from "react-bootstrap";

// const QueryFilters = () => {
//   const addFilter = () => {};

//   return (
//     <div>
//       <InputGroup>
//         <Form.Select onChange={handleSelection} value={selectedField}>
//           {items &&
//             items.map((item) => (
//               <option key={item.id} value={item.id}>
//                 {item.name}
//               </option>
//             ))}
//         </Form.Select>
//       </InputGroup>
//     </div>
//   );
// };

import { Form, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchQueryFilters } from "./../../../actions/searchAction.js";

const QueryFilters = () => {
  const handleSelection = () => {};
  const { queryFiltersItems } = useSelector((state) => state.queryFilters);
  // console.log(queryFiltersItems);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchQueryFilters(1));
  //   console.log(queryFiltersItems);
  // }, []);

  // const getAvailableFilters=()=>{
  //   return filter()
  // }

  // const availableFilters = () => {
  //   queryFiltersItems.map((filter) => (
  //     <option key={filter.name} value={filter.name}>
  //       {filter.name}
  //     </option>
  //   ));
  // };

  return (
    <div>
      <InputGroup>
        <Form.Select onChange={handleSelection} value={"selectedField"}>
          <option>{"availableFilters"}</option>
          {/* {noAvailableFilters && <option>{getNoFilterMessage()}</option>} */}
        </Form.Select>
        <InputGroup.Text>Add Filter</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default QueryFilters;
