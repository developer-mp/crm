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

const QueryFilters = () => {
  const handleSelection = () => {};
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
