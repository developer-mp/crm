import EntityContent from "./entityContent.js";
import CustomersContent from "./customersContent.js";
import ProductsContent from "./productsContent.js";
import ServicesContent from "./servicesContent.js";
import dataList from "../../data/content/entities/customers/filter.json" assert { type: "json" };
//import logger from "../../logger/winston.js";
import pkg from "lodash";
const { forEach, filter, startsWith, map, orderBy, cloneDeep } = pkg;

class IndexContent {
  // static getQueryFilterList(params) {
  //   const { search } = params;
  //   const { entity } = search;
  //   const result = EntityContent.getData(this.getFilterContent(entity), search);
  //   this.assignFilterOption(result, search);
  //   return result;
  // }

  static getQueryFilterList(params) {
    const { entityName } = params;
    // const { entity } = search;
    const filterContent = this.getFilterContent(entityName);
    // this.assignFilterOption(result, search);
    return filterContent;
  }

  static getQueryFilterPKList(search) {
    const { entity } = search;
    const result = EntityContent.getData(search, this.getFilterContent(entity));
    const pkLst = filter(
      result,
      (item) => request && startsWith(item.request, "PK")
    );
    return map(orderBy(pkLst, ["request"]), "request");
  }

  static assignFilterOption(result, search) {
    const { entity } = search;
    try {
      const ddList = EntityContent.getDropDownTypeList(result);
      forEach(ddList, (item) => {
        const arr = this.getDropDownData(entity, item.column);
        let options = [];
        if (arr.length > 0) {
          if (item.column !== "State") {
            options = EntityContent.getData(search, arr);
          } else {
            options = arr;
          }
        }
        EntityContent.assignAvailableList(result, item.column, options);
      });
    } catch (e) {
      //logger.error(`Error in assignFilterOption: ${e}`);
    }
  }

  // static assignOption(search, ddList) {
  //   const { entity } = search;
  //   try {
  //     _.forEach(ddList, (item) => {
  //       const arr = this.getDropDownData(entity, item.dataField);
  //       let options = [];
  //       if (arr.length > 0) {
  //         options = entityContent.getData(search, arr);
  //       }
  //       item.assignAvailableList = options;
  //     });
  //   } catch (e) {
  //     logger.error(`Error in assignOption: ${e}`);
  //   }
  // }

  static getQueryDetailContent(search) {
    try {
      const entity = search;
      // const { entity } = search;
      const result =
        // EntityContent.getData(
        // search,
        this.getDetailContent(entity);
      // );
      // const ddLst = EntityContent.getDetailDropDownTypeList(result);
      // this.assignOption(search, ddLst);
      return result;
    } catch (e) {
      // logger.error(`Error in getQueryDetailContent: ${e}`);
      return [];
    }
  }

  static getDetailContent(entity) {
    try {
      let lst = {};
      switch (entity) {
        case "Customers Management":
          lst = CustomersContent.getDetailContent();
          break;
        case "Product Catalog":
          lst = ProductsContent.getDetailContent();
          break;
        case "Service Catalog":
          lst = ServicesContent.getDetailContent();
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
        case "Customers Management":
          lst = CustomersContent.getFilterContent();
          break;
        case "Product Catalog":
          lst = ProductsContent.getFilterContent();
          break;
        case "Service Catalog":
          lst = ServicesContent.getFilterContent();
          break;
        default:
          break;
      }
      return lst;
    } catch (e) {
      //logger.error(`Error: ${e}`);
      return [];
    }
  }

  static getDropDownData(entity, name) {
    try {
      let lst = {};
      switch (entity) {
        case "Customers":
          lst = CustomersContent.getDropDownData(name);
          break;
        case "Products":
          lst = ProductsContent.getDropDownData(name);
          break;
        case "Services":
          lst = ServicesContent.getDropDownData(name);
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
      const ddLst = EntityContent.getDetailDropDownTypeList(content, 15);
      forEach(ddLst, (item) => {
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

  // static lowerArrProperties(arr) {
  //   const arrNew = [];
  //   _.forEach(arr, (item) => {
  //     const obj = _.mapKeys(item, (v, k) => k.toLowerCase());
  //     obj.value = obj.text;
  //     arrNew.push(obj);
  //   });
  //   return arrNew;
  // }

  static getDataList() {
    const { list } = dataList;
    return cloneDeep(list);
  }

  static findDataContent(id) {
    const arr = this.getDataList();
    let dataContent = arr.find((x) => x.id === id).detail;
    return dataContent;
  }
}

export default IndexContent;
