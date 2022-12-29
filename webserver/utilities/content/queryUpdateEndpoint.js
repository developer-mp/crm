import pkg from "lodash";
const { find } = pkg;
import updateMapping from "../../data/ref/queryupdatemapping.json" assert { type: "json" };
import sectionDeleteMapping from "../../data/ref/querysectiondeletemapping.json" assert { type: "json" };
import ddlMapping from "../../data/ref/queryddlmapping.json" assert { type: "json" };

const baseEndpoint = "update";
const baseSectionDeleteEndpoint = "update";

class QueryUpdateEndpoint {
  static getUpdateEndpoint(name) {
    const item = find(updateMapping.data, { name });
    if (item === undefined) {
      return baseEndpoint;
    }
    return item.endpoint;
  }

  static getSectionDeleteEndpoint(name) {
    const item = find(sectionDeleteMapping.data, { name });
    if (item === undefined) {
      return baseSectionDeleteEndpoint;
    }
    return item.endpoint;
  }

  static getDDLEndpoint(name) {
    const item = find(ddlMapping.data, { name });
    if (item === undefined) {
      return undefined;
    }
    return item.endpoint;
  }
}

export default QueryUpdateEndpoint;
