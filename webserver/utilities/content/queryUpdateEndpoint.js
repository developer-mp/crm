const _ = require("lodash");
const updateMapping = require("../../data/ref/queryupdatemapping.json");
const sectionDeleteMapping = require("../../data/ref/querysectiondeletemapping.json");
const ddlMapping = require("../../data/ref/queryddlmapping.json");

const baseEndpoint = "update";
const baseSectionDeleteEndpoint = "update";

class QueryUpdateEndpoint {
  static getUpdateEndpoint(name) {
    const item = _.find(updateMapping.data, { name });
    if (item === undefined) {
      return baseEndpoint;
    }
    return item.endpoint;
  }

  static getSectionDeleteEndpoint(name) {
    const item = _.find(sectionDeleteMapping.data, { name });
    if (item === undefined) {
      return baseSectionDeleteEndpoint;
    }
    return item.endpoint;
  }

  static getDDLEndpoint(name) {
    const item = _.find(ddlMapping.data, { name });
    if (item === undefined) {
      return undefined;
    }
    return item.endpoint;
  }
}

export default QueryUpdateEndpoint;
