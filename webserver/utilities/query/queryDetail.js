import pkg from "lodash";
const { forEach, forOwn, remove, filter, find, cloneDeep } = pkg;
//const logger = require("../../logger/winston");

class QueryDetail {
  static setDetailResult(items, data) {
    // items.info[0].record.forEach((el) => (el.value = data[0].customer));
    // forEach(data, (item) => {
    //   if (item.type === "record") {
    //     this.setDetailRecordResult(item, items);
    //   } else if (item.type === "list") {
    //     this.setDetailListResult(item, items);
    //   }
    //logger.error(`Error ${item.name} - ${e}`);
    // });
    // items.info[0].record.forEach((el) => (el.value = data[0].customer));
  }

  static setDetailRecordResult(item, items) {
    const { name } = item;
    let result = _(items)
      .map("section")
      .flatten()
      .find((el) => el.name === name);
    if (result !== undefined) {
      forEach(item.data, (el) => {
        forOwn(el, (value, key) => {
          this.assignRecordItem(result.record, key, value);
        });
      });
    } else {
      result = _(items)
        .map("section")
        .flatten()
        .map("list")
        .flatten()
        .find((el) => el.name === name);
      if (result !== undefined && result.record) {
        forEach(item.data, (el) => {
          forOwn(el, (value, key) => {
            this.assignRecordItem(result.record, key, value);
          });
        });
      }
    }
    // return result;
  }

  static assignRecordItem(lst, key, value) {
    try {
      const cat = find(lst, { dataField: key });
      if (cat !== undefined) {
        cat.value = value;
      }
      // return cat;
    } catch (e) {
      return e;
      //logger.error(`Error ${e}`);
    }
  }

  static setDetailListResult(item, items) {
    const { name } = item;
    const result = _(items)
      .map("section")
      .flatten()
      .map("list")
      .flatten()
      .find((el) => el.name === name);
    if (result !== undefined) {
      result.data = item.data;
    }
  }

  static applyRoleFilter(items, role) {
    const content = filter(items, (obj) => obj.role.includes(role));
    forEach(content, (item) => {
      remove(item.section, (obj) => !obj.role.includes(role));
    });
    forEach(content, (item) => {
      forEach(item.section, (elem) => {
        forEach(elem.list, (el) => {
          remove(el.record, (obj) => !obj.role.includes(role));
          remove(el.column, (obj) => !obj.role.includes(role));
        });
      });
    });
    return content;
  }

  // static setDetailBlockResult(item, items, search) {
  //   const { name, results } = item;
  //   try {
  //     if (search.block === undefined || search.block.length === 0) return;
  //     const { section } = find(items, { Panel: name });
  //     const block = find(search.block, { panel: name });
  //     if (block === undefined || block.name === undefined) return;
  //     const element = find(section, { name: block.name });
  //     if (element === undefined) return;
  //     const showAll = block.showAll !== undefined && block.showAll;
  //     const line = cloneDeep(element);
  //     remove(section, (obj) => obj.name === block.name);
  //     let newLine = {};
  //     forEach(results, (row, ind) => {
  //       const record = find(row, { name: block.name });
  //       const { value } = find(record.data, { key: block.key });
  //       const collapsed = ind !== 0 && !showAll;
  //       newLine = {
  //         ...cloneDeep(line),
  //         title: value,
  //         index: ind,
  //         defaultCollapsed: ind !== 0 && !showAll,
  //       };
  //       forEach(row, (obj) => {
  //         if (obj.type === "record") {
  //           this.setDetailBlockResult(obj, newLine, ind);
  //         } else if (obj.type === "list") {
  //           this.setDetailBlockListResult(obj, newLine, ind);
  //         }
  //       });
  //       section.push(newLine);
  //     });
  //   } catch (e) {
  //     return e;
  //     //logger.error(`Error ${e}`);
  //   }
  // }

  // static findLineRecord(line, name) {
  //   if (line.name === name) return line;
  //   const result = _.find(line.list, { name });
  //   if (result !== undefined && result.record) return result;
  //   return undefined;
  // }

  // static setDetailBlockRecordResult(item, line, ind) {
  //   const { data, name } = item;
  //   const result = this.findLineRecord(line, name);
  //   if (result !== undefined) {
  //     result.name = `${name}###${ind}`;
  //     _.forEach(data, (el) => {
  //       this.assignRecordItem(result.record, el);
  //     });
  //   }
  // }

  // static setDetailBlockListResult(item, line, ind) {
  //   const { data, name } = item;
  //   const result = _.find(line.list, { name });
  //   if (result !== undefined) {
  //     result.name = `${name}###${ind}`;
  //     result.data = data;
  //   }
  // }

  // static listUI(arr, name) {
  //   return _.map(arr, (item) => item[name]);
  // }

  static applyFilterForAdd(items, load) {
    const name = load.name ? load.name : "BaseDetail";
    const content = filter(items, (obj) => obj.isBaseAdd);
    forEach(content, (item) => {
      remove(item.section, (obj) => obj.name !== name);
    });
    return content;
  }

  static applyCRMFilter(items, search, result, crm) {
    const { entity, subentity, topic } = search;
    if (entity !== "Products" || subentity !== "" || topic !== "") {
      return items;
    }
    const customer = find(result, (item) => item.name === "CustomerHeading");
    if (customer === undefined) {
      return items;
    }
    if (
      customer.data !== undefined &&
      customer.data[0].customerdomain === crm
    ) {
      return items;
    }
    const content = filter(items, (obj) => obj.Panel !== crm);
    return content;
  }
}

export default QueryDetail;
