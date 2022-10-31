const _ = require("lodash");
const entityContent = require("./entityContent");
const customersContent = require("./customersContent");
const productsContent = require("./productsContent");
const servicesContent = require("./servicesContent");
const logger = require("../../logger/winston");

class IndexContent {
  static getQueryFilterList(params) {
    const { search } = params;
    const { entity } = search;
    const result = entityContent.getData(search, this.getFilterContent(entity));
    this.assignFilterOption(result, search);
    return result;
  }

  static getQueryFilterPKList(search) {
    const { entity } = search;
    const result = entityContent.getData(search, this.getFilterContent(entity));
    const pkLst = _.filter(
      result,
      (item) => request && _.startsWith(item.request, "PK")
    );
    return _.map(_.orderBy(pkLst, ["request"]), "request");
  }

  static assignFilterOption(result, search) {
    const { entity } = search;
    try {
      const ddList = entityContent.getDropDownTypeList(result);
      _.forEach(ddList, (item) => {
        const arr = this.getDropDownData(entity, item.column);
        let options = [];
        if (arr.length > 0) {
          if (item.column !== "State") {
            options = entityContent.getData(search, arr);
          } else {
            options = arr;
          }
        }
        entityContent.assignAvailableList(result, item.column, options);
      });
    } catch (e) {
      logger.error(`Error in assignFilterOption: ${e}`);
    }
  }

  static assignOption(search, ddList) {
    const { entity } = search;
    try {
      _.forEach(ddList, (item) => {
        const arr = this.getDropDownData(entity, item.dataField);
        let options = [];
        if (arr.length > 0) {
          options = entityContent.getData(search, arr);
        }
        item.assignAvailableList = options;
      });
    } catch (e) {
      logger.error(`Error in assignOption: ${e}`);
    }
  }

  static getQueryDetailContent(search) {
    try {
      const { entity } = search;
      const result = entityContent.getData(
        search,
        this.getQueryDetailContent(entity)
      );
      const ddLst = entityContent.getDetailDropDownTypeList(result);
      this.assignOption(search, ddLst);
      return result;
    } catch (e) {
      logger.error(`Error in getQueryDetailContent: ${e}`);
      return [];
    }
  }

  static getDetailContent(entity) {
    try {
      let lst = {};
      switch (entity) {
        case "Customers":
          lst = customersContent.getDetailContent();
          break;
        case "Products":
          lst = productsContent.getDetailContent();
          break;
        case "Services":
          lst = servicesContent.getDetailContent();
          break;
        default:
          break;
      }
      return lst;
    } catch (e) {
      logger.error(`Error in getDetailContent: ${e}`);
      return [];
    }
  }

  static getFilterContent(entity) {
    try {
      let lst = {};
      switch (entity) {
        case "Customers":
          lst = customersContent.getFilterContent();
          break;
        case "Products":
          lst = productsContent.getFilterContent();
          break;
        case "Services":
          lst = servicesContent.getFilterContent();
          break;
        default:
          break;
      }
      return lst;
    } catch (e) {
      logger.error(`Error: ${e}`);
      return [];
    }
  }

  static getDropDownData(entity, name) {
    try {
      let lst = {};
      switch (entity) {
        case "Customers":
          lst = customersContent.getDropDownData(name);
          break;
        case "Products":
          lst = productsContent.getDropDownData(name);
          break;
        case "Services":
          lst = servicesContent.getDropDownData(name);
          break;
        default:
          break;
      }
      return lst;
    } catch (e) {
      logger.error(`Error: ${e}`);
      return [];
    }
  }

  static setQueryDetailDynamicDDL(content, availableList) {
    try {
      const ddLst = entityContent.getDetailDropDownTypeList(content, 15);
      _.forEach(ddLst, (item) => {
        const arr = availableList[item.dataField];
        let options = [];
        if (arr.length > 0) {
          options = this.lowerArrProperties(arr);
        }
        item.availableList = options;
      });
    } catch (e) {
      logger.error(`Error: ${e}`);
      return [];
    }
  }

  static lowerArrProperties(arr) {
    const arrNew = [];
    _.forEach(arr, (item) => {
      const obj = _.mapKeys(item, (v, k) => k.toLowerCase());
      obj.value = obj.text;
      arrNew.push(obj);
    });
    return arrNew;
  }
}

export default IndexContent;
